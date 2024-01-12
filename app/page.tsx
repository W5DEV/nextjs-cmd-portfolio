"use client";

import { ReactNode, useState } from "react";
import CopyrightHeadng from "./components/CopyrightHeading";
import HelpText from "./components/HelpText";
import Input from "./components/Input";
import MorseClosing from "./components/MorseEnding";
import MorseOpening from "./components/MorseOpening";
import Prefix from "./components/Prefix";
import WelcomeArt from "./components/WelcomeArt";

export default function Home() {
  const [history, setHistory] = useState<ReactNode>([]);
  return (
    <main className="flex min-h-screen min-w-[700px] flex-col items-start justify-start p-4 text-cyan-600 font-mono gap-2 tracking-widest border-4 border-double border-stone-400 outline-dashed outline-stone-400 -outline-offset-8">
      <div className="flex flex-row text-stone-400 text-xs">
        <MorseOpening />
      </div>
      <div className="flex flex-row">
        <CopyrightHeadng />
      </div>
      <div className="flex flex-row text-stone-400">
        <WelcomeArt />
      </div>
      <div className="flex flex-row text-stone-400 text-xs">
        <MorseClosing />
      </div>
      <div className="flex flex-row">
        <HelpText />
      </div>
      <div className="flex flex-col">{history}</div>
      <div className="relative flex flex-row w-full">
        <Prefix />
        <input
          type="text"
          className="w-full bg-transparent border-none focus:border-none focus:outline-none focus:ring-0"
        />
        <div className="absolute l-10 w-full">
          <b className="animate-caret">█</b>
        </div>
      </div>
    </main>
  );
}
