import { IArticleText } from "@/widgets/ArticleText/ArticleText.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import { removeCMTextHyphen } from "@/logic/utilities";
import AppConfig from "@/logic/configs/AppConfig";

export class ArticleTextAdapter extends Adapter<
  IArticleText,
  Nullable<IArticleText>
> {
  adapt: (source: any) => Nullable<IArticleText> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title1: removeCMTextHyphen(data.title),
      bodyText: AppConfig.html(data.detailText?.text),
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
