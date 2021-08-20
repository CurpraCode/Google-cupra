/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useRef } from "react";
import Image from "next/image";
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";

const Header = () => {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
      <img
        src="https://www.google.com.ng/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt=""
        height={40}
        width={120}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow w-full focus:outline-none"
        />
        <XIcon
          className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
          onClick={() => (searchInputRef.current.value = "")}
        />
        <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
        <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
        <button hidden type="submit" onClick={search}>Search</button>
      </form>
      <Image
        loading="lazy"
        className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ml-auto"
        src="https://lh3.googleusercontent.com/ogw/ADea4I4sYM_TfYV7jnfcGwoCizgsrdrIrodg1KPKqm73QA=s32-c-mo"
        alt="picture"
        height={30}
        width={30}
        />
      </div>
    </div>
  );
};

export default Header;
