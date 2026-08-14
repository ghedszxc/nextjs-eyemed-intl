import { IContactUsForm, IInput, TInputTypes } from "@/widgets/ContactUsForm/ContactUsForm.interface";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import AppConfig from "@/logic/configs/AppConfig";

export class ContactUsFormAdapter extends Adapter<
  IContactUsForm,
  Nullable<IContactUsForm>
> {
  adapt: (source: any) => Nullable<IContactUsForm> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    type TTopics = { [key: string]: string };

    interface ICmsInput {
      settings?: { Topics?: TTopics[] };
      name: TInputTypes;
      callToActionText: string;
      placeholder: string;
      title: string;
      viewtype: TInputTypes
    }

    const getOptions = (Topics?: TTopics) => {
      return Object.values(Topics || {}).map((option: string) => ({
        label: option,
        value: option,
      }));
    };

    const formInputs = data?.items?.map(
      (input: ICmsInput): IInput => ({
        errorMessage: input?.callToActionText,
        label: input?.title,
        options: getOptions(input?.settings?.Topics?.[0]),
        name: input?.viewtype,
        placeholder: input?.title,
        type: input?.name,
      })
    );

    const acknowledge = data?.items?.find((item: any) => !!item.detailText?.text).detailText?.text || "";
    const getTopicList = data?.items?.find((find: any) => find.name == 'topicList')?.items?.filter((find: any) => find.teaserTitle)
    const filterTopicList = getTopicList.length ? getTopicList.map((item: any) => { return { label: item?.teaserTitle, value: item?.teaserTitle } }) : []

    return {
      form: formInputs,
      header: data?.collectionTitle || "",
      acknowledge: AppConfig.html(acknowledge),
      topicList: filterTopicList
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
