"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { characters } from "../data/characters";
import quotes from "../data/quotes.json";

type Quote = {
  characterId: string;
  theme: string;
  result: string;
  comment: string;
  onlyWeekendOrHoliday?: boolean;
};

export default function Home() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [canFortune, setCanFortune] = useState(true);

  useEffect(() => {
    const lastDate = localStorage.getItem("fortune-date");
    const today = new Date().toLocaleDateString();

    if (lastDate === today) {
      const savedQuote = localStorage.getItem("fortune-quote");
      if (savedQuote) {
        setQuote(JSON.parse(savedQuote));
      }
      setCanFortune(false);
    }
  }, []);

  const handleFortune = () => {
    const today = new Date().toLocaleDateString();
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    localStorage.setItem("fortune-date", today);
    localStorage.setItem("fortune-quote", JSON.stringify(randomQuote));
    setCanFortune(false);
  };

  const character = characters.find((c) => c.id === quote?.characterId);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      {!quote && (
        <>
          <Image
            src="/images/今日のゆる占い.png"
            alt="今日のゆる占いタイトル画像"
            width={400}
            height={100}
            className="mb-6 animate-fade-in"
          />
          {canFortune ? (
            <button
              onClick={handleFortune}
              className="bg-blue-500 text-white text-5xl px-10 py-5 md:text-5xl md:px-14 md:py-6 rounded-full hover:bg-blue-600 transition mb-10 cursor-pointer"
            >
              占う
            </button>
          ) : (
            <p className="text-center text-gray-500 mb-10">「今日はもう占ったニャ〜。また明日きてニャ！」</p>
          )}
          <p className="text-center text-sm text-gray-500 max-w-md">
            ゆるいキャラたちが、今日の気分をそっとゆる〜く占ってくれるよ。<br />
          </p>
        </>
      )}

      {quote && character && (
        <div className="animate-fade-in flex flex-col items-center">
          <Image
            src={character.image}
            alt="占いキャラクターのイラスト"
            width={300}
            height={300}
            className="rounded-full mb-6 md:w-[300px] md:h-[300px]"
          />
          <p className="mt-2 text-center text-lg font-medium md:text-2xl">{quote.theme}</p>
          <p className="mt-2 text-center text-lg md:text-xl">{quote.result}</p>
          <p className="mt-4 text-center text-sm text-gray-600 md:text-lg">{quote.comment}</p>
          <button
            onClick={() => setQuote(null)}
            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition cursor-pointer md:text-xl"
          >
            戻る ↩
          </button>
        </div>
      )}
    </main>
  );
}