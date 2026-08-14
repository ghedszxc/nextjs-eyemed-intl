import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { ITextColumn } from "@/widgets/TextColumn/ITextColumn.interface";

export class TextColumnAdapter extends Adapter<
  ITextColumn,
  Nullable<ITextColumn>
> {
  adapt: (source: any) => Nullable<ITextColumn> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title1: data?.title,
      bodyText: data?.detailText?.text,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
