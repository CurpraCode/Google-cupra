/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
// import Image from "next/Image"
import {useRef} from "react"
import {useRouter} from "next/router"



const GoSearch = ({ url }) => {
    const router = useRouter();
    const searchInputRef = useRef(null);
    const search = (e)=>{
        e.preventDefault()
        const term =searchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`)
    }
  return (
      <div>
    <form className="flex flex-col items-center mt-34 flex-grow">
      <img loading="lazy" src={url} height={100} width={300} alt="google" />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input ref={searchInputRef} type="text" className="flex-grow focus:outline-none" />
        <MicrophoneIcon className="h-5" />
      </div>
    </form>
    <div className="flex flex-col space-y-2 justify-center mt-8 sm:space-y-0 sm:space-x-4 sm:flex-row">
            <button  onClick={search} className="btn">Google Search</button>
            <a href="https://perfects.engineering">
            <button className="btn">I'm Feeling Lucky</button>
            </a>
        </div>
    </div>
  );
};

export default GoSearch;
