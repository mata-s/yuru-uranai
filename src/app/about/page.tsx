

export default function AboutPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-2xl font-bold mb-6">このサイトについて</h1>

      <section className="mb-6">
        <p className="mb-4">
          「ゆる占い」は、かわいくて個性豊かなキャラクターたちが、あなたの今日の気分をゆる〜く占ってくれるWebアプリです。
          忙しい毎日にちょっとした癒しとクスッと笑えるひとときをお届けすることを目的に運営しています。
        </p>
        <p>
          総合・恋愛・仕事の3つのテーマから、毎日1回占うことができ、結果はキャラクターごとに異なるユーモアや優しさのあるコメントで表示されます。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">コンテンツ制作について</h2>
        <p className="mb-2">
          占い結果のテキストは一部AIによって生成され、運営チームによって内容確認と調整を行っています。
        </p>
        <p>
          使用しているイラストは「イラストの里」からの引用素材およびAIによる生成画像を組み合わせて構成されています。
          著作権には十分配慮し、すべて商用利用可能な形で使用しています。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">広告について</h2>
        <p>
          本サイトではGoogle AdSenseをはじめとする外部広告ネットワークを通じて広告を掲載しています。
          広告表示はユーザーの利便性を損なわないよう配慮し、必要最小限にとどめています。
        </p>
        <p className="text-sm text-gray-500 mt-1">
          ※掲載される広告の内容に関しては広告ネットワークの自動配信によるものであり、運営側が内容を保証するものではありません。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">運営情報</h2>
        <p className="mb-2">
          サイト名：ゆる占い
        </p>
        <p className="mb-2">
          運営者：ゆる占い運営チーム（個人運営）
        </p>
        <p className="mb-2">
          お問い合わせは
          <a href="/contact" className="underline text-blue-600 ml-1">お問い合わせページ</a>または
          <a href="/privacy" className="underline text-blue-600 ml-1">プライバシーポリシー</a>よりお願いいたします。
        </p>
        <p className="mt-2 text-sm text-gray-700">
          キャラクターのアイデアやイラストをご提供いただける方も歓迎しています。ぜひ
          <a href="/contact" className="text-blue-500 underline hover:text-blue-700">お問い合わせ</a>よりご連絡ください。
        </p>
      </section>
    </main>
  );
}