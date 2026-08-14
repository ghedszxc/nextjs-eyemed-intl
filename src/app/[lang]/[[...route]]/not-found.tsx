import Anchor from "@/components/Anchor/Anchor";

const NotFound = async () => {
  return (
    <div className="flex flex-col items-center text-center justify-center py-10 px-5 min-h-[60vh] bg-gray">
      <h1 className="text-4xl font-bold mb-4">{"404 - Page Not Found"}</h1>
      <p className="text-lg mb-2">
        {"Oops! It looks like you've reached a page that doesn't exist."}
      </p>
      <p className="text-lg mb-4">{"Let's get you back on track:"}</p>
      <div
        className="px-0 pt-4 md:px-4 aos-init aos-animate"
        data-aos="fade-up"
      >
        <Anchor
          className="bg-secondary text-white font-bold uppercase inline-block p-4 px-7 w-full md:w-auto rounded"
          href="/"
        >
          {"Go to Home"}
        </Anchor>
      </div>
    </div>
  );
};

export default NotFound;
