interface IFormLabels {
  [lang: string]: {
    [type: string]: string;
  };
}

export const FORM_TRANSLATIONS: IFormLabels = {
  ww: {
    Name: "Name",
    Surname: "Surname",
    Countrylist: "Country of residence",
    Email: "Please insert email",
    TopicList: "Topic (please choose from the following)",
    Titlemessage: "Title of your message",
    Message: "Message",
    acknowledge:
      "By sending the form above, I acknowledge that I have read the Privacy Notice and that I have been fully informed of the terms and conditions under which EyeMed Vision Care International processes my personal data.",
    button: "SEND MESSAGE",
    buttonsending: "SENDING...",

    textboxplaceholder: "Type here",
    dropdownplaceholder: "Select...",

    successMsg: "Your message has been successfully submitted. We'll get back to you as soon as possible",
    textAreaMsg: "characters",

    "Required field_textboxName": "Name is required",
    "Required field_textboxSurname": "Surname is required",
    "Required field_textboxEmail": "Email is invalid",
    "Invalid value_textboxEmail": "Email is invalid",
    "Required field_selectTopic": "Topic is required",
    "Required field_selectCountry": "Country is required",
    "Required field_textboxTitleMessage": "Title of your message is required",
    "Required field_textboxMessage": "Message must be at least 10 characters.",
    "Recaptcha error": "Please verify the reCAPTCHA.",
  },
  en: {
    Name: "Name",
    Surname: "Surname",
    Countrylist: "Country of residence",
    Email: "Please insert email",
    TopicList: "Topic (please choose from the following)",
    Titlemessage: "Title of your message",
    Message: "Message",
    acknowledge:
      "By sending the form above, I acknowledge that I have read the Privacy Notice and that I have been fully informed of the terms and conditions under which EyeMed Vision Care International processes my personal data.",
    button: "SEND MESSAGE",
    buttonsending: "SENDING...",

    textboxplaceholder: "Type here",
    dropdownplaceholder: "Select...",

    successMsg: "Your message has been successfully submitted. We'll get back to you as soon as possible",
    textAreaMsg: "characters",

    "Required field_textboxName": "Name is required",
    "Required field_textboxSurname": "Surname is required",
    "Required field_textboxEmail": "Email is required",
    "Invalid value_textboxEmail": "Email is invalid",
    "Required field_selectTopic": "Topic is required",
    "Required field_selectCountry": "Country is required",
    "Required field_textboxTitleMessage": "Title of your message is required",
    "Required field_textboxMessage": "Message must be at least 10 characters.",
    "Recaptcha error": "Please verify the reCAPTCHA.",
  },
  de: {
    Name: "Name",
    Surname: "Nachname",
    Countrylist: "Land des Wohnsitzes",
    Email: "Bitte E-Mail einfügen",
    TopicList: "Thema (bitte wählen Sie aus den folgenden)",
    Titlemessage: "Betreff Ihrer Nachricht",
    Message: "Nachricht",
    acknowledge:
      "Durch das Senden des Formulars, erkenne ich an, dass ich die Datenschutzerklärung gelesen habe und dass ich vollständig über die Bedingungen informiert wurde, unter denen EyeMed Vision Care Europe meine persönlichen Daten verarbeitet.",
    button: "Nachricht senden",
    buttonsending: "Nachricht senden",

    textboxplaceholder: "Hier eingeben",
    dropdownplaceholder: "Select...",
    
    successMsg: "Ihre Nachricht wurde erfolgreich übermittelt. Wir werden uns so schnell wie möglich bei Ihnen melden.",
    textAreaMsg: "zeichen",
 
    "Required field_textboxName": "Name ist erforderlich",
    "Required field_textboxSurname": "Nachname ist erforderlich",
    "Required field_textboxEmail": "Bitte E-Mail einfügen ist erforderlich",
    "Invalid value_textboxEmail": "Bitte E-Mail ist ungültig",
    "Required field_selectTopic": "Thema ist erforderlich",
    "Required field_selectCountry": "Land des Wohnsitzes ist erforderlich",
    "Required field_textboxTitleMessage": "Betreff Ihrer Nachricht ist erforderlich",
    "Required field_textboxMessage": "Nachricht ist erforderlich",
    "Recaptcha error": "Bitte überprüfen Sie das reCAPTCHA.",
  },
  it: {
    Name: "Nome",
    Surname: "Cognome",
    Countrylist: "Paese di residenza",
    Email: "Inserisci l'email",
    TopicList: "Argomento (si prega di scegliere tra i seguenti)",
    Titlemessage: "Oggetto del tuo messaggio",
    Message: "Messaggio",
    acknowledge:
      "Inviando il modulo sopra, riconosco di aver letto l'Informativa sulla Privacy e di essere stato pienamente informato delle condizioni con cui EyeMed Vision Care Europe elabora i miei dati personali.",
    button: "Invia Messaggio",
    buttonsending: "Invia Messaggio",

    textboxplaceholder: "Digita qui",
    dropdownplaceholder: "Select...",
    
    successMsg: "Il tuo messaggio è stato inviato con successo. Ci risentiremo con te il prima possibile.",
    textAreaMsg: "caratteri",


    "Required field_textboxName": "Il nome è richiesto",
    "Required field_textboxSurname": "Il cognome è richiesto",
    "Required field_textboxEmail": "Inserisci l'email è richiesto",
    "Invalid value_textboxEmail": "Inserisci l'email non è valido",
    "Required field_selectTopic": "Argomento è richiesto",
    "Required field_selectCountry": "Paese di residenza è richiesto",
    "Required field_textboxTitleMessage": "Oggetto del tuo messaggio è richiesto",
    "Required field_textboxMessage": "Messaggio è richiesto",
    "Recaptcha error": "Si prega di verificare il reCAPTCHA.",
  },
};
