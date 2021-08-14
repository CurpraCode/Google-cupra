import Image from 'next/image'
import{ ViewGridIcon} from "@heroicons/react/solid"

const Avatar = ({url})=>{
    return(
        <div > 
            <div className="flex w-full p-5 justify-end text-sm text-gray-700">
            <div className="flex space-x-4 items-center">
                <p className="link">Gmail</p>
                <p className="link">Images</p>
                <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
                <Image
        loading="lazy"
        className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
        src={url}
        alt="picture"
        height={30}
        width={30}
        />
            </div>
            </div>  
        </div>
    )
}

export default Avatar;