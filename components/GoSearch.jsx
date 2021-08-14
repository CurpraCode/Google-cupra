/* eslint-disable @next/next/no-img-element */
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
// import Image from "next/Image"

const GoSearch = ({ url }) => {
  return (
    <form className="flex flex-col items-center mt-34 flex-grow">
      <img loading="lazy" src={url} height={100} width={300} alt="google" />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input type="text" className="flex-grow focus:outline-none" />
        <MicrophoneIcon className="h-5" />
      </div>
    </form>
  );
};

export default GoSearch;
