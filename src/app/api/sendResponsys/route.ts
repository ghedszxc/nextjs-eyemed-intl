import Responsys from "@/logic/helpers/Responsys.helper";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { ContactName, Country, Email, Topic, TitleMessage, Message, token } = body;

  const recipients = process.env.NEXT_PUBLIC_EMAIL_RECIPIENTS?.split(",") || [];
  
  const response = await axios.post("https://www.google.com/recaptcha/api/siteverify", {},
    {
      params: {
        secret: process.env.RECAPTCHA_SECRETKEY,
        response: body.token,
      },
    }
  );

  if (!response?.data?.success) return NextResponse.json({ success: false });


  let status = 0;

  for (const recipient of recipients) {
    const responsys = new Responsys(recipient);

    const resp = await responsys.sendEmail({
      ContactName,
      Country,
      Email,
      Topic,
      TitleMessage,
      Message,
      token
    });
    
    if(resp === 200) {
      status += 1;
    }
  }

  if (status >= recipients.length) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false });
  }
}
