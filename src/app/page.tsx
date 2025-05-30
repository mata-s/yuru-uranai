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
    <>
      <header className="w-full px-6 py-4 bg-white shadow-sm flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-700">ゆる占い</h1>
        <nav className="flex gap-4 text-sm text-blue-600">
          <a href="/blog/story" className="hover:underline">ゆるコラム</a>
          <a href="/about" className="hover:underline">サイトについて</a>
        </nav>
      </header>
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
      <p className="text-left md:text-center text-gray-700 text-base max-w-2xl mb-8 leading-relaxed">
        ゆるいキャラたちが今日のあなたにぴったりなメッセージをそっとゆる〜く届けてくれるよ。
      </p>
      <p className="text-left md:text-center text-gray-700 text-base max-w-2xl mb-8 leading-relaxed">
       「総合・恋愛・仕事」の3つのテーマを、1日1回ずつゆる〜く占えるよ♪
      </p>
      <p className="text-left md:text-center text-gray-700 text-base max-w-2xl mb-8 leading-relaxed">
        結果はちょっとクスッとしたり、ほっとしたり、なんか元気出るかも？
      </p>


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
          {category === "love" && "恋の流れや出会いのチャンスを、ゆる〜く占うよ。ドキドキのヒントが見つかるかも！"}
          {category === "work" && "お仕事まわりの流れややる気スイッチを、こっそり占っちゃうよ。"}
        </p>
      </div>
      {canFortune ? (
        <>
          <button
            onClick={handleFortune}
            className="bg-blue-500 text-white text-5xl px-10 py-5 md:text-5xl md:px-14 md:py-6 rounded-full hover:bg-blue-600 transition mb-10 cursor-pointer"
          >
            占う
          </button>
        </>
      ) : (
        <>
          {/* ランダムで広告を切り替え */}
          {!canFortune && (
            <>
              {Math.random() < 0.5 ? (
                <>
                  <a
                    href="https://px.a8.net/svt/ejp?a8mat=455Q7P+4P34KY+4CZE+5ZMCH"
                    rel="nofollow"
                    target="_blank"
                  >
                    <img
                      src="https://www21.a8.net/svt/bgt?aid=250530037284&wid=001&eno=01&mid=s00000020345001006000&mc=1"
                      alt="広告バナー1"
                      width={300}
                      height={250}
                      className="mx-auto mb-4"
                    />
                  </a>
                  <img
                    src="https://www14.a8.net/0.gif?a8mat=455Q7P+4P34KY+4CZE+5ZMCH"
                    alt=""
                    width={1}
                    height={1}
                    style={{ display: "none" }}
                  />
                </>
              ) : (
                <>
                  <a
                    href="https://px.a8.net/svt/ejp?a8mat=455Q7P+57JKC2+4EPM+63OY9"
                    rel="nofollow"
                    target="_blank"
                  >
                    <img
                      src="https://www24.a8.net/svt/bgt?aid=250530037315&wid=001&eno=01&mid=s00000020569001025000&mc=1"
                      alt="広告バナー2"
                      width={300}
                      height={250}
                      className="mx-auto mb-4"
                    />
                  </a>
                  <img
                    src="https://www15.a8.net/0.gif?a8mat=455Q7P+57JKC2+4EPM+63OY9"
                    alt=""
                    width={1}
                    height={1}
                    style={{ display: "none" }}
                  />
                </>
              )}
            </>
          )}
          <button
            onClick={handleViewResult}
            className="bg-gray-500 text-white text-2xl px-8 py-4 md:text-3xl md:px-10 md:py-5 rounded-full hover:bg-gray-600 transition mb-10 cursor-pointer"
          >
            結果を見る
          </button>
        </>
      )}

      <p className="text-center text-sm text-gray-700 mt-8 mb-2">
        本格的な占いや、相談したい悩みがあるならこちらもチェックしてみてね。↓↓
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 my-10">
        {/* 広告1 */}
        <div className="w-[300px]">
          <a href="https://px.a8.net/svt/ejp?a8mat=455KRM+D15LGY+2PEO+1BRTKX" rel="nofollow" target="_blank">
            <img
              src="https://www29.a8.net/svt/bgt?aid=250522978788&wid=001&eno=01&mid=s00000012624008024000&mc=1"
              alt="広告バナー1"
              width={300}
              height={250}
            />
          </a>
          <img
            src="https://www13.a8.net/0.gif?a8mat=455KRM+D15LGY+2PEO+1BRTKX"
            alt=""
            width={1}
            height={1}
            style={{ display: "none" }}
          />
        </div>

        {/* 広告2 */}
        <div className="w-[300px]">
          <a href="https://px.a8.net/svt/ejp?a8mat=455KRM+8ZAE9E+2PEO+C510X" rel="nofollow" target="_blank">
            <img
              src="https://www20.a8.net/svt/bgt?aid=250522978543&wid=001&eno=01&mid=s00000012624002039000&mc=1"
              alt="広告バナー2"
              width={300}
              height={250}
            />
          </a>
          <img
            src="https://www14.a8.net/0.gif?a8mat=455KRM+8ZAE9E+2PEO+C510X"
            alt=""
            width={1}
            height={1}
            style={{ display: "none" }}
          />
        </div>
      </div>

      <footer className="mt-10 text-center text-xs text-gray-400 flex flex-col items-center gap-2 sm:gap-1 md:flex-row md:justify-center md:gap-4">
        <a href="/about" className="underline hover:text-blue-500">このサイトについて</a>
        <a href="/howto" className="underline hover:text-blue-500">使い方ガイド</a>
        <a href="/contact" className="underline hover:text-blue-500">お問い合わせ</a>
        <a href="/terms" className="underline hover:text-blue-500">利用規約</a>
        <a href="/privacy" className="underline hover:text-blue-500">プライバシーポリシー</a>
      </footer>
      
    </main>
    </>
  );
}