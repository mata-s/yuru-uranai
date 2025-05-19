'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import quotesGeneral from '@/data/quotes.json';
import quotesLove from '@/data/quotes_love.json';
import quotesWork from '@/data/quotes_work.json';
import charactersInfo from '@/data/charactersInfo.json';

type Quote = {
  characterId: string;
  theme: string;
  result: string;
  comment: string;
  luckyItem?: string;
};

const allQuotes = [...quotesGeneral, ...quotesLove, ...quotesWork];
const groupedQuotes: { [characterId: string]: Quote[] } = {};
allQuotes.forEach((quote) => {
  if (!groupedQuotes[quote.characterId]) {
    groupedQuotes[quote.characterId] = [];
  }
  groupedQuotes[quote.characterId].push(quote);
});

export default function CharactersPage() {
  const charactersPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(charactersInfo.length / charactersPerPage);

  const paginatedCharacters = useMemo(() => {
    const start = (currentPage - 1) * charactersPerPage;
    return charactersInfo.slice(start, start + charactersPerPage);
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-gray-800">
      <h1 className="text-2xl font-bold mb-8 text-center">キャラクター紹介</h1>

      <div className="w-full max-w-3xl space-y-12">
        {paginatedCharacters.map((character) => {
          const characterQuotes = groupedQuotes[character.id] || [];

          return (
            <section key={character.id} className="border-b pb-6">
              <div className="flex flex-col items-center mb-4">
                <Image
                  src={`/images/${character.id}.png`}
                  alt={`${character.name}の画像`}
                  width={180}
                  height={180}
                  className="mb-2 rounded-full"
                />
                <p className="text-lg font-semibold">{character.name}</p>
                <p className="text-sm text-gray-500">{character.personality}</p>
                <p className="text-sm text-gray-500">語尾：{character.speechStyle}</p>
                <p className="text-sm mt-2 text-center">{character.intro}</p>


                <div className="mt-2 flex flex-wrap gap-2 justify-center">
                  {character.themes.map((theme, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-2 justify-center">
                  {character.luckyItems.map((item, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full"
                    >
                      🎁 {item}
                    </span>
                  ))}
                </div>
              </div>

              {characterQuotes.length > 0 && (
                <div className="space-y-4">
                  {characterQuotes.slice(0, 2).map((quote, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded shadow-sm">
                      <p className="mt-1 text-sm text-gray-700">💬 コメント：{quote.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}