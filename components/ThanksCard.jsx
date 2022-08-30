import { CheckIcon } from "./checkIcon";

export default function ThanksCard({ resetForm }) {
  return (
    <div className="flex flex-col items-center space-y-4 max-w-[30rem] text-very_dark_violet md:ml-auto m-auto">
      <CheckIcon />
      <h1 className="uppercase mb-0 text-[26px] tracking-wider">Thank you!</h1>
      <p className="opacity-80 text-base mt-3 mb-10">
        We've added your card details
      </p>
      <div className="pt-5 w-full md:pt-6 md:w-[20rem] lg:w-[23rem]">
      <button
        className="bg-very_dark_violet rounded-md text-white py-3 text-lg hover:bg-opacity-90 transition duration-300 ease-linear w-full"
        onClick={resetForm}
      >
        Continue
      </button></div>
    </div>
  );
}
