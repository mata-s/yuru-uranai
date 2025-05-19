

export default function HowToPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-2xl font-bold mb-6">ゆる占いの使い方</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. カテゴリを選ぼう</h2>
        <p>
          最初に「総合」「恋愛」「仕事」の3つのカテゴリから、今日占いたいテーマを選びましょう。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. 占うボタンをタップ</h2>
        <p>
          選んだカテゴリのページで「占う」ボタンを押すと、今日のあなたの気分にぴったりな占い結果が表示されます。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. 結果をシェアしてみよう</h2>
        <p>
          気に入った結果が出たら、X（旧Twitter）やLINEで友だちにシェアすることもできます。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. 1日1回まで占えるよ</h2>
        <p>
          各カテゴリの占いは1日1回限定。次に占えるのは明日のお楽しみ♪
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">補足</h2>
        <p>
          占い結果は、かわいいキャラクターごとに毎回ちょっと違うコメントが表示されるので、日替わりで楽しめます！
        </p>
      </section>
    </main>
  );
}