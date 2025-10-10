import React from 'react'
import { useSelector } from 'react-redux';
import lang from './Utils/languageConstations';

const GPTSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);
  return (
  <div className="pt-[10%] flex justify-center">
    <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
      <input
       type="text"
      className="p-4 m-4 col-span-9 rounded-lg  border  focus:border-red-700 focus:outline-none bg-black text-white placeholder-gray-400"
      placeholder={lang[langKey].gptSearchPlaceholder}
    />
      <button
        type="submit"
        className="col-span-3 m-4 bg-red-700 text-white rounded-lg flex justify-center items-center hover:bg-red-800"
      >
        {lang[langKey].search}
      </button>
    </form>
  </div>
);

}

export default GPTSearchBar