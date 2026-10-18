import thankYouIcon from "../assets/images/icon-thank-you.svg";

function StepFive() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 py-16 text-center md:px-10">
      <img src={thankYouIcon} alt="" className="mb-6 size-14 md:mb-8 md:size-20" />
      <h1 className="mb-2 text-2xl font-bold text-blue-950 md:text-3xl">Thank you!</h1>
      <p className="text-grey-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default StepFive;