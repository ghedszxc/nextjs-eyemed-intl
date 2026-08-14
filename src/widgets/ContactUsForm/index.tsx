"use client"

import { SyntheticEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import FormEntry from "@/components/FormEntry";
import SelectInput from "@/components/ui/selectInput";

import ReCAPTCHA from "react-google-recaptcha";
import useForm, { IFormData, IOptions } from "@/hooks/useForm";

import {
  COUNTRY_OPTIONS,
} from "@/logic/configs/constants/contact-us/dropdown-options";

import { IContactUsForm, IInput } from "./ContactUsForm.interface";

// Components
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import AppConfig from "@/logic/configs/AppConfig";


const ContactUs: React.FC<IContactUsForm> = ({ form, header, acknowledge, url, topicList }) => {
  // Hooks
  const { register, setValue, formData, validateAll, reset } = useForm();
  const [disableButton, setDisableButton] = useState(false);
  const [token, setToken] = useState<string>("");
  const [recaptchaInvalid, setRecaptchaInvalid] = useState(false);

  const emailOptions: IOptions = {
    required: true,
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    type: "text"
  };
  const lang = url?.locale;
  
  const [displaySuccessMsg, setDisplaySuccessMsg] = useState(false);
  var successMsg = AppConfig.getTranslatedSuccessMsg(lang);

  const generateInput = (input: IInput, key: number) => {
    if (input?.type) {
      if (input?.type === "textboxName" || input?.type === "textboxSurname") {
        const error = formData[input.name]?.error;
        const label = AppConfig.getTranslatedValue(lang, input.name);
        const errorMessage = `${AppConfig.getTranslatedValue(lang, `${error}_${input.type}`)}`;
        const placeholder = AppConfig.getTranslatedValue(lang, "textboxplaceholder");

        return (
          <FormEntry
            key={key}
            required
            name={input.name}
            label={label}
            htmlFor={input.name}
            error={error ? errorMessage : undefined}
            render={
              <Input
                id={input.name}
                placeholder={placeholder}
                {...register(input.name, { required: true, type: "text" })}
              />
            }
          />
        );
      } else if (input?.type === "selectCountry") {
        const error = formData[input.name]?.error;
        const label = AppConfig.getTranslatedValue(lang, input.name);
        const errorMessage = `${AppConfig.getTranslatedValue(lang, `${error}_${input.type}`)}`;
        const placeholder = AppConfig.getTranslatedValue(lang, "dropdownplaceholder");
        return (
          <FormEntry
            key={key}
            required
            name={input.name}
            label={label}
            htmlFor={input.name}
            error={error ? errorMessage : undefined}
            render={
              <SelectInput
                options={COUNTRY_OPTIONS}
                id={input.name}
                placeholder={placeholder}
                onSelect={(value: string) => setValue(input.name, value)}
                {...register(input.name, { required: true })}
              />
            }
          />
        );
      } else if (input?.type === "textboxEmail") {
        const error = formData[input.name]?.error;
        const label = AppConfig.getTranslatedValue(lang, input.name);
        const errorMessage = AppConfig.getTranslatedValue(lang, `${error}_${input.type}`);
        const placeholder = AppConfig.getTranslatedValue(lang, "textboxplaceholder");        
        return (
          <FormEntry
            key={key}
            required
            name={input.name}
            label={label}
            htmlFor={input.name}
            error={error ? errorMessage : undefined}
            render={
              <Input
                type="text"
                id={input.name}
                name={input.name}
                placeholder={placeholder}
                {...register(input.name, emailOptions )}
              />
            }
          />
        );
      } else if (input?.type === "selectTopic") {
        const error = formData[input.name]?.error;
        const label = AppConfig.getTranslatedValue(lang, input.name);
        const errorMessage = AppConfig.getTranslatedValue(lang, `${error}_${input.type}`);
        const placeholder = AppConfig.getTranslatedValue(lang, "dropdownplaceholder");
        return (
          <FormEntry
            key={key}
            required
            name={input.name}
            label={label}
            htmlFor={input.name}
            error={error ? errorMessage : undefined}
            render={
              <SelectInput
                options={topicList || []}
                id={input.name}
                placeholder={placeholder}
                onSelect={(value: string) => setValue(input.name, value)}
                {...register(input.name, { required: true })}
              />
            }
          />
        );
      } else if (input?.type === "textboxTitleMessage") {
        const error = formData[input.name]?.error;
        const label = AppConfig.getTranslatedValue(lang, input.name);
        const errorMessage = AppConfig.getTranslatedValue(lang, `${error}_${input.type}`);
        const placeholder = AppConfig.getTranslatedValue(lang, "textboxplaceholder");
        return (
          <FormEntry
            key={key}
            name={input.name}
            label={label}
            htmlFor={input.name}
            render={
              <Input
                id={input.name}
                name={input.name}
                placeholder={placeholder}
                {...register(input.name, { required: false })}
              />
            }
          />
        );
      } else if (input?.type === "textboxMessage") {
        const error = formData[input.name]?.error;
        const label = AppConfig.getTranslatedValue(lang, input.name);
        const errorMessage = AppConfig.getTranslatedValue(lang, `${error}_${input.type}`);
        const placeholder = AppConfig.getTranslatedValue(lang, "textboxplaceholder");

        return (
          <FormEntry
            key={key}
            required
            name={input.name}
            label={label}
            htmlFor={input.name}
            error={error ? errorMessage : undefined}
            render={
              <Textarea
                id={input.name}
                name={input.name}
                placeholder={placeholder}
                lang={lang}
                {...register(input.name, { required: true })}
              />
            }
          />
        );
      }
    }
  };

  const submitHandler = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formattedFormData = transformFormData(formData);
    
    const ContactName = `${formattedFormData?.["Name"]} ${formattedFormData?.["Surname"]}`;
    const Email = formattedFormData?.["Email"];
    const Country = formattedFormData?.["Countrylist"];
    const Topic = formattedFormData?.["TopicList"];
    const TitleMessage = formattedFormData?.["Titlemessage"];
    const Message = formattedFormData?.["Message"];

    // Validate form data
    validateAll();

    // Validate Recaptcha
    if(!token) {
      setRecaptchaInvalid(true);
      return null;
    }

    const isValid = Object.values(formData).every((data) => data.error === null);
    if (isValid && token) {
      setDisableButton(true);

      try {
        if (!!globalThis?.window?.tealium_data2track) {
          globalThis?.window?.tealium_data2track?.push({
            id: "Event",
            Events_ActionContactUs: "1",
          });
        }

        const domain = globalThis?.window.location.origin;
        const response = await fetch(`${domain}/api/sendResponsys`, {
          method: "POST",
          body: JSON.stringify({
            ContactName,
            Country,
            Email,
            Topic,
            TitleMessage,
            Message,
            token
          }),
        }).then((res) => res.json());

        if (!response.success) {
          setDisplaySuccessMsg(false);
          throw Error("Sending Failed");
        } else {
          setDisplaySuccessMsg(true);
        }
      } catch (err) {
        alert(err);
        setDisableButton(false);
        setDisplaySuccessMsg(false);
        console.log(err);
      }

      // Reset
      globalThis?.window?.grecaptcha?.reset();
      setToken("");
      setDisableButton(false);
      reset(); 
    }
  };

  const transformFormData = (formData: IFormData) => {
    let transformedObject: { [key: string]: any } = {};

    for (const key in formData) {
      if (transformedObject) {
        transformedObject[key] = formData?.[key]?.value || "";
      }
    }

    return transformedObject;
  };

  const handleReCaptchaExpire = () => {
    setToken("");
    globalThis?.window?.grecaptcha?.reset();
  }

  return (
    <div className="py-[60px] md:py-20">
      <h2 className="text-2xl font-bold text-center mb-7">{header}</h2>
      
      <form
        className="max-w-[736px] mx-auto p-6 bg-[#F7F7F7] gap-5 grid"
        onSubmit={submitHandler}
      >
        
        {displaySuccessMsg && <p className="bg-green-100 my-2 py-3 px-4 text-green-800">{successMsg}</p>}

        {form?.map((input, key) => generateInput(input, key))}

        <div>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY || ""}
            onChange={(token) => {
              setToken(token || "");
              setRecaptchaInvalid(false);
            }}
            onExpired={handleReCaptchaExpire}
          />
          {recaptchaInvalid && (
            <p className="error_message mt-3">{AppConfig.getTranslatedValue(lang, "Recaptcha error")}</p>
          )}
        </div>

        {acknowledge}

        {/* disabled={disableButton} */}
        <Button
          type="submit"
          className="w-fit md:w-fit bg-sky-950 disabled:bg-gray-600 disabled:text-white"
          disabled={disableButton}
        >
          {AppConfig.getTranslatedValue(lang, disableButton ? "buttonsending" : "button")}
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
