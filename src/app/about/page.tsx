

export default function AboutPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-2xl font-bold mb-4">このサイトについて</h1>
      <p className="mb-4">
        「ゆる占い」は、かわいいキャラクターたちが毎日あなたの気分をゆる〜く占ってくれるWebアプリです。
        恋愛、仕事、総合の3カテゴリからその日の気分を占い、あなたの一日にちょっとした彩りと癒しを届けます。
      </p>
      <p className="mb-4">
        キャラクターのイラストは一部「イラストの里」より引用、その他はAI生成を活用しています。
        表示される広告は、Google AdSenseなどの広告ネットワークを通じて自動で配信されています。
      </p>
      <p className="text-sm text-gray-500">
        サイト運営：ゆる占い運営チーム／お問い合わせはプライバシーポリシーまたはお問い合わせページよりお願いします。
      </p>
    </main>
  );
}