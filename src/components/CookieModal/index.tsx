"use client";

import React, { useState, useEffect } from "react";

const CookieModal = () => {
  const [showCookieModal, setShowCookieModal] = useState(false);

  useEffect(() => {
    const isCookieValid = () => {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith("seen_cookie_message=")) {
          return true;
        }
      }
      return false;
    };

    if (!isCookieValid()) {
      setShowCookieModal(true);
    }
  }, []);

  const handleAcceptAllCookies = () => {
    setShowCookieModal(false);
    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 13);
    document.cookie = `seen_cookie_message=true; expires=${expirationDate.toUTCString()}`;
  };

  const handleRefuseCookies = () => {
    setShowCookieModal(false);
  };

  return (
    showCookieModal && (
      <div className="flex flex-col lg:flex-row shadow-lg fixed items-start left-5 right-5 bottom-5 z-50 p-5 bg-gray-100">
        <div className="mr-10">
          {`We use necessary cookies and similar technologies to ensure our site works efficiently. We'd also like to set optional cookies and similar technologies for analytics and social purposes to help us improve and monitor our activities and the activities carried out by our third parties partners. If you click "refuse", we will activate only the necessary cookies that enable you to browse and use the website. Visit our cookie policy to learn more.`}
        </div>
        <div className="flex mt-5 lg:mt-auto shrink-0">
          <div
            onClick={() => handleAcceptAllCookies()}
            className="bg-secondary text-white text-sm md:text-base font-bold uppercase inline-block p-4 px-7 w-full md:w-auto rounded cursor-pointer text-center"
          >
            {`ACCEPT ALL COOKIES`}
          </div>
          <div
            className="bg-white text-black text-sm md:text-base font-bold uppercase inline-block p-4 px-7 w-full md:w-auto rounded cursor-pointer ml-5 text-center"
            onClick={() => handleRefuseCookies()}
          >
            {`Refuse`}
          </div>
        </div>
      </div>
    )
  );
};

export default CookieModal;
