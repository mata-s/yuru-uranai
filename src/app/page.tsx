"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import generalQuotes from "../data/quotes.json";
import loveQuotes from "../data/quotes_love.json";
import workQuotes from "../data/quotes_work.json";


export default function Home() {
  const router = useRouter();
  const [canFortune, setCanFortune] = useState(true);
  const [category, setCategory] = useState<"general" | "love" | "work">("general");

  useEffect(() => {
    const today = new Date().toLocaleDateString();

    const currentDateKey = `fortune-date-${category}`;
    const currentLastDate = localStorage.getItem(currentDateKey);

    if (currentLastDate === today) {
      setCanFortune(false);
    } else {
      setCanFortune(true);
    }
  }, [category]);

  const handleFortune = () => {
    let selectedQuotes = generalQuotes;
    if (category === "love") {
      selectedQuotes = loveQuotes;
    } else if (category === "work") {
      selectedQuotes = workQuotes;
    }
    const randomQuote = selectedQuotes[Math.floor(Math.random() * selectedQuotes.length)];
    const today = new Date().toLocaleDateString();
    const dateKey = `fortune-date-${category}`;
    const quoteKey = `fortune-quote-${category}`;
    localStorage.setItem(dateKey, today);
    localStorage.setItem(quoteKey, JSON.stringify(randomQuote));
    localStorage.setItem("last-category", category);
    router.push(`/result?category=${category}`);
  };

  const handleViewResult = () => {
    router.push(`/result?category=${category}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <Image
        src="/images/今日のゆる占い.png"
        alt="今日のゆる占いタイトル画像"
        width={400}
        height={100}
        className="mb-6 animate-fade-in"
      />

      {!canFortune && (
        <p className="text-center text-gray-500 mb-10">
          「今日はもう占ったニャ〜。また明日きてニャ！」
        </p>
      )}

      <div className="flex flex-col items-center mb-6">
        <div className="flex gap-4 mb-2">
          <button
            onClick={() => setCategory("general")}
            className={`px-4 py-2 rounded cursor-pointer ${category === "general" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            総合
          </button>
          <button
            onClick={() => setCategory("love")}
            className={`px-4 py-2 rounded cursor-pointer ${category === "love" ? "bg-pink-500 text-white" : "bg-gray-200"}`}
          >
            恋愛
          </button>
          <button
            onClick={() => setCategory("work")}
            className={`px-4 py-2 rounded cursor-pointer ${category === "work" ? "bg-green-500 text-white" : "bg-gray-200"}`}
          >
            仕事
          </button>
        </div>
        <p className="text-sm text-gray-600 text-center">
          {category === "general" && "全体運をふんわり占うよ。今日のゆるっとした流れをチェックしてね。"}
          {category === "love" && "恋愛にまつわる気分や出会い運を占うよ。ドキドキのヒントがあるかも！"}
          {category === "work" && "お仕事まわりの気分ややる気、いい流れをそっと教えてくれるかも！"}
        </p>
      </div>

      {canFortune ? (
        <button
          onClick={handleFortune}
          className="bg-blue-500 text-white text-5xl px-10 py-5 md:text-5xl md:px-14 md:py-6 rounded-full hover:bg-blue-600 transition mb-10 cursor-pointer"
        >
          占う
        </button>
      ) : (
        <button
          onClick={handleViewResult}
          className="bg-gray-500 text-white text-2xl px-8 py-4 md:text-3xl md:px-10 md:py-5 rounded-full hover:bg-gray-600 transition mb-10 cursor-pointer"
        >
          結果を見る
        </button>
      )}
      
      <p className="text-center text-gray-700 text-base max-w-2xl mb-8 leading-relaxed">
      ゆるいキャラたちが、今日の気分をそっとゆる〜く占ってくれるよ。<br />
  「総合・恋愛・仕事」から気になるテーマを選んで、1日1回だけ運だめし♪<br />
  結果はちょっとクスッとしたり、ほっとしたり、なんか元気出るかも？
</p>

      <footer className="mt-10 text-center text-xs text-gray-400 flex flex-col items-center gap-2 sm:gap-1 md:flex-row md:justify-center md:gap-4">
        <a href="/privacy" className="underline hover:text-blue-500">プライバシーポリシー</a>
        <a href="/about" className="underline hover:text-blue-500">このサイトについて</a>
        <a href="/contact" className="underline hover:text-blue-500">お問い合わせ</a>
      </footer>
      
    </main>
  );
}