"use client";

import Head from "next/head";
import LanguageSelector from "./LanguageSelector";

export default function Home() {
  return (
    <main className="p-5 flex w-full h-screen flex-col">

      <div className="w-full flex justify-end">
        <button className="font-bold border-2 rounded-md px-3 py-1 border-zinc-400 hover:shadow-md hover:shadow-zinc-200">Settings</button>
      </div>
      <div className="grow-1 h-full flex justify-center items-center">
        <div className="language_container">
          <h1 className="text-4xl font-semibold text-center mb-3">Welcome Select Language</h1>
          <LanguageSelector />
        </div>
      </div>
    </main>
  );
}
