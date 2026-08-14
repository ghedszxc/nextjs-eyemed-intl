import { render, screen } from "@testing-library/react";
import ContactUsForm from ".";
import AppConfig from "@/logic/configs/AppConfig";

const locale = "ww";
const inputTypeMapping = {
  textboxName: "text",
  textboxSurname: "text",
  textboxEmail: "text",
}

describe("Contact us Form Test", () => {
  // const label = AppConfig.getTranslatedValue(locale, "Name");
  // const errorMessage = AppConfig.getTranslatedValue(locale,"Required field_textboxName");
  // const placeholder = AppConfig.getTranslatedValue(locale, "textboxplaceholder");
  // it("Contact us form renders header", async () => {
  //   render(
  //     <ContactUsForm
  //       form={[
  //         {
  //           label: label,
  //           name: "name",
  //           type: "textboxName",
  //           errorMessage: errorMessage,
  //           placeholder: placeholder,
  //         },
  //       ]}
  //       header="For any inquiries, please fill in the contact form."
  //     />
  //   );

  //   const header = await screen.getByText("For any inquiries, please fill in the contact form.");
  //   expect(header).toBeInTheDocument();
  // });

  // it("Contact us form input type textboxName is text", async () => {
  //   render(
  //     <ContactUsForm
  //       form={[
  //         {
  //           label: label,
  //           name: "name",
  //           type: "textboxName",
  //           errorMessage: errorMessage,
  //           placeholder: placeholder,
  //         },
  //       ]}
  //     />
  //   );

  //   const textbox = await screen.getByRole("textbox");
  //   const type = textbox.getAttribute("type");
  //   const name = textbox.getAttribute("name");
  //   expect(type).toEqual(inputTypeMapping.textboxName);
  //   expect(name).toEqual("name");
  // });

  // it("Contact us form input type textboxSurname is text", async () => {
  //   const label = AppConfig.getTranslatedValue(locale, "Name");
  //   const errorMessage = AppConfig.getTranslatedValue(locale,"Required field_textboxName");
  //   const placeholder = AppConfig.getTranslatedValue(locale, "textboxplaceholder");
  //   render(
  //     <ContactUsForm
  //       form={[
  //         {
  //           label: label,
  //           name: "surname",
  //           type: "textboxSurname",
  //           errorMessage: errorMessage,
  //           placeholder: placeholder,
  //         },
  //       ]}
  //     />
  //   );

  //   const textbox = await screen.getByRole("textbox");
  //   const type = textbox.getAttribute("type");
  //   const name = textbox.getAttribute("name");
  //   expect(type).toEqual(inputTypeMapping.textboxName);
  //   expect(name).toEqual("surname");
  // });

  it("Contact us form input type textboxEmail is text", async () => {
    const viewtype = "textboxEmail";
    const label = AppConfig.getTranslatedValue(locale, "Email");
    const errorMessage = AppConfig.getTranslatedValue(locale,"Required field_textboxName");
    const placeholder = AppConfig.getTranslatedValue(locale, "textboxplaceholder");

    render(
      <ContactUsForm
        form={[
          {
            label: "Email",
            name: "Email",
            type: "textboxEmail",
            errorMessage: "Required field_textboxEmail",
            placeholder: "Email",
          },
        ]}
      />
    );

    const textbox = await screen.getByRole("textbox");
    const contactLabel = await screen.getByRole("contact-label");
    const type = textbox.getAttribute("type");
    
    expect(type).toEqual(inputTypeMapping[viewtype]);

    console.log(await screen.getByText(label));
  });
});
