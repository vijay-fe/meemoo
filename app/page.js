"use client";

import { useState } from "react";
import LanguageSelector from "./components/LanguageSelector";
import Settings from "./components/Settings";

export default function Home() {
  const [openModel, setOpenModel] = useState(false);

  function modelHander(val) {
    setOpenModel(val)
  }
  return (
    <main className="p-5 flex w-full h-screen flex-col">
      <div
        className="md:hidden absolute bottom-0 left-[50%] translate-x-[-50%] text-center mb-4 text-2xl font-bold md:text-4xl flex flex-col items-center gap-1"
        onClick={() => modelHander(true)}
      >
        Settings
        <span className="md:w-32 w-24 md:h-3 h-2 rounded-md inline-block bg-slate-50"></span>
      </div>
      <div className="hidden md:block w-full">
        <button
          onClick={() => modelHander(true)}
          className="font-bold border-2 rounded-md ml-auto block px-3 py-1 border-zinc-400 hover:shadow-md hover:border-violet-400"
        >
          Settings
        </button>
      </div>
      <div className="grow-1 h-full flex justify-center items-center mx-auto">
        <div className="language_container">
          <h1 className="text-2xl md:2xl lg:text-3xl xl:text-4xl font-semibold text-center mb-3 break-words">Welcome Select Language</h1>
          <LanguageSelector />
        </div>
      </div>
      <Settings dOpen={openModel} dClose={() => modelHander(false)} isClosable={true} />
    </main>
  );
}
