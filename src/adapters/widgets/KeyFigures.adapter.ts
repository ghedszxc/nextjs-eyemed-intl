import { IKeyFigures } from "@/widgets/KeyFigures/KeyFigures.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import AppConfig from "@/logic/configs/AppConfig";


export class KeyFiguresAdapter extends Adapter<
  IKeyFigures,
  Nullable<IKeyFigures>
> {
  adapt: (source: any) => Nullable<IKeyFigures> = (source) => {
    if (!source.length) return null;

    return {
      keyFigures: source.map((kf: any) => ({
        value: kf.teaserTitle,
        description: AppConfig.html(kf.teaserText?.text),
      }))
    }
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
