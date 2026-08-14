import { NextResponse } from "next/server";
import axios from "axios";

import { PDFDocument } from "pdf-lib";
import { cmsRepo } from "@/logic/graphql/CMSRepo";
import { FileLinkQuery } from '@/logic/graphql/query/Filelink';
import { getAkamayUrl } from "@/logic/utilities";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const { searchParams } = new URL(request.url);
  const preview = searchParams.get("preview") === "true";

  try {
    let dataResp;
    if (preview) {
      dataResp = await cmsRepo.currentContext('?preview=true').query(FileLinkQuery({ id }));
    } else {
      dataResp = await cmsRepo.getFileLink(id);
    }
    const { data } = dataResp;

    const rawData = data?.content?.content;

    const file = {
      url: rawData?.data?.uri as string | undefined,
      filename: (rawData?.filename as string) || 'document.pdf',
      type: rawData?.data?.contentType as string | undefined,
    };
    if (!file.url || file.type !== "application/pdf") {
      throw new Error();
    }

    const fileUrl = getAkamayUrl(file.url);

    let response;
    try {
      response = await axios.get(fileUrl, { responseType: 'arraybuffer' });
    } catch (err: any) {
      return NextResponse.json({ message: 'Failed to download file.', detail: err?.message }, { status: 502 });
    }

    if (response.status !== 200) {
      return NextResponse.json({ message: 'Failed to download file.' }, { status: 502 });
    }

    const downloadedPdfRaw = response.data as ArrayBuffer | Uint8Array;
    const downloadedUint8 = downloadedPdfRaw instanceof Uint8Array ? downloadedPdfRaw : new Uint8Array(downloadedPdfRaw as ArrayBuffer);

    try {
      const uint8 = downloadedUint8;

      if (preview) {
        const contentDisposition = `inline; filename="${encodeURIComponent(file.filename)}"`;
        return new NextResponse(uint8.buffer as unknown as BodyInit, {
          status: 200,
          headers: {
            'Content-Type': file.type || 'application/pdf',
            'Content-Disposition': contentDisposition,
            'X-Robots-Tag': 'noindex, nofollow',
          },
        });
      }
    } catch (e: any) {
      throw new Error(e);
    }

    let pdfBuffer: Uint8Array | ArrayBuffer;
    try {
      const pdfDoc = await PDFDocument.load(downloadedUint8, { ignoreEncryption: true });
      const pdfTitle = file.filename?.replace(/\.pdf$/i, '');
      pdfDoc.setTitle(pdfTitle);
      pdfBuffer = await pdfDoc.save();
    } catch (err: any) {
      return NextResponse.json({ message: 'Failed to process PDF file.', detail: err?.message }, { status: 500 });
    }

    const contentDisposition = `${preview ? 'inline' : 'attachment'}; filename="${encodeURIComponent(file.filename)}"`;

    const bufferByteLength = (pdfBuffer as any).byteLength ?? (Array.isArray(pdfBuffer) ? pdfBuffer.length : undefined);
    const headers = {
      'X-Robots-Tag': 'noindex, nofollow',
      'Content-Disposition': contentDisposition,
      'Content-Type': file.type || 'application/pdf',
      'Content-Length': bufferByteLength ? String(bufferByteLength) : undefined,
    } as Record<string, string | undefined>;

    const filteredHeaders: Record<string, string> = {};
    Object.entries(headers).forEach(([k, v]) => {
      if (v !== undefined) filteredHeaders[k] = v as string;
    });
    const outUint8 = pdfBuffer instanceof Uint8Array ? pdfBuffer : new Uint8Array(pdfBuffer as ArrayBuffer);
    if (preview) filteredHeaders['Content-Disposition'] = `inline; filename="${encodeURIComponent(file.filename)}"`;
    return new NextResponse(outUint8 as unknown as BodyInit, { status: 200, headers: filteredHeaders });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ message: 'Internal server error.', detail: errMsg }, { status: 500 });
  }
}