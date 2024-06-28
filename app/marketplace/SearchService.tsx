import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
function SearchService() {
  return (
    <div className="h-[350px] flex w-full justify-center items-center bg-gray-800">

    <div className="flex relative rounded-full w-full sm:px-10 md:px-20">
        <input type="text" name="q" id="query" placeholder="Find service"
            className="w-full p-3 rounded-full border-2 border-r-white rounded-r-none border-none placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none " />
        <button
            className="inline-flex items-center gap-2 bg-[#ffede8] text-black text-lg font-medium py-3 px-6 rounded-r-full">
            <span>search</span>
            <span className="hidden md:block">
                <IoSearchOutline />
            </span>
        </button>
    </div>

</div>
  )
}

export default SearchService