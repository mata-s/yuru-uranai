"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { characters } from "../../data/characters";

type Quote = {
  characterId: string;
  theme: string;
  result: string;
  comment: string;
  luckyItem: string;
};

export default function ResultPage() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [category, setCategory] = useState("general");
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedCategory = params.get("category") || "general";
    setCategory(selectedCategory);

    const savedQuote = localStorage.getItem(`fortune-quote-${selectedCategory}`);
    if (savedQuote) {
      setQuote(JSON.parse(savedQuote));
    }
  }, []);

  const character = characters.find((c) => c.id === quote?.characterId);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">
        今日のゆる占い結果
        {category === "love" ? " [恋愛]" : category === "work" ? " [仕事]" : ""}
      </h1>
      {quote && (
        <div className="animate-fade-in flex flex-col items-center">
          {character && (
            <Image
              src={character.image}
              alt="占いキャラクターのイラスト"
              width={300}
              height={300}
              className="rounded-full mb-6"
            />
          )}
          <p className="mt-2 text-center text-lg font-medium md:text-2xl">{quote.theme}</p>
          <p className="mt-2 text-center text-lg md:text-xl">{quote.result}</p>
          <p className="mt-4 text-center text-sm text-gray-600 md:text-lg">{quote.comment}</p>
          {quote.luckyItem && (
            <p className="mt-2 text-center text-sm text-green-700 md:text-lg">
              ラッキーアイテム：{quote.luckyItem}
            </p>
          )}
        </div>
      )}
      {/* Share Buttons Section */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <p className="text-sm text-gray-600">結果をシェアしよう！</p>
        <div className="flex gap-4">
          {/* X (旧Twitter) シェア */}
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `🌟今日のゆる占い結果🌟\n${quote?.theme}\n${quote?.result}\n#ゆる占い https://yuru-uranai.vercel.app/result?category=${category}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm"
          >
            Xでシェア
          </a>

          {/* LINE シェア */}
          <a
            href={`https://social-plugins.line.me/lineit/share?url=https://yuru-uranai.vercel.app/result?category=${category}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition text-sm"
          >
            LINEでシェア
          </a>
        </div>
      </div>
      <button
        onClick={() => router.push("/")}
        className="mt-10 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition cursor-pointer"
      >
        戻る ↩
      </button>
      <a
        href="/characters"
        className="mt-4 text-sm text-blue-500 underline hover:text-blue-700"
      >
        キャラクター紹介はこちら
      </a>
    </main>
  );
}
