import axios from "axios";
import { randomUUID } from "crypto";

interface IResponsys {
  baseurl: string;
  username: string;
  password: string;
  recipient: string;
}
class Responsys implements IResponsys {
  baseurl: string;
  username: string;
  password: string;
  recipient: string;
  locale: string;

  constructor(recipient?: string, locale?: string) {
    this.baseurl = process.env.RESPONSYS_BASEURL || "";
    this.username = process.env.RESPONSYS_USERNAME || "";
    this.password = process.env.RESPONSYS_PASSWORD || "";
    this.recipient = recipient || "";
    this.locale = locale || "en-US";
  }

  sendEmail = async ({
    ContactName,
    Country,
    Email,
    Topic,
    TitleMessage,
    Message,
    token,
  }: {
    ContactName: string;
    Country: string;
    Email: string;
    Topic: string;
    TitleMessage: string;
    Message: string;
    token: string;
  }) => {
    try {
      var id = randomUUID();

      if (this.baseurl && this.username && this.password) {

        const response = await axios.post(
          this.baseurl,
          {
            CreateRequest: {
              Objects: {
                Customer: {
                  ContactID: `emailReq230807_${id}`,
                  SubscriberKey: this.recipient,
                  Locale: this.locale,
                  Campaign: "EL_OneSight_ContactUS_112023",
                  Brand: "EssilorLuxottica",
                },
                OptionalData: {
                  Attribute: [
                    {
                      Name: "TOPIC",
                      Value: Topic,
                    },
                    {
                      Name: "CONTACTNAME",
                      Value: ContactName,
                    },
                    {
                      Name: "COUNTRY",
                      Value: Country,
                    },
                    {
                      Name: "EMAIL",
                      Value: Email,
                    },
                    {
                      Name: "MESSAGE",
                      Value: Message,
                    },
                    {
                      Name: "TITLEMESSAGE",
                      Value: TitleMessage,
                    },
                    {
                      Name: "TOKEN",
                      Value: token
                    }
                  ],
                },
              },
            },
          },
          { auth: { username: this.username, password: this.password } }
        );

        return response.status;
      }
    } catch (err) {
      console.log("Responsys Helper:", err);
    }
  };
}

export default Responsys;
