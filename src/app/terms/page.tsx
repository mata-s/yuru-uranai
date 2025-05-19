

export default function TermsPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-2xl font-bold mb-6">利用規約</h1>

      <section className="mb-6">
        <p className="mb-4">
          この利用規約（以下、「本規約」といいます。）は、当サイト「ゆる占い」（以下、「当サイト」といいます。）が提供するサービスの利用条件を定めるものです。
        </p>
        <p>
          ご利用の皆さま（以下、「ユーザー」といいます。）には、本規約に従ってご利用いただきますようお願い申し上げます。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">第1条（適用）</h2>
        <p>
          本規約は、ユーザーと当サイト運営者との間のサービス利用に関わる一切の関係に適用されるものとします。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">第2条（禁止事項）</h2>
        <p>ユーザーは、以下の行為をしてはなりません：</p>
        <ul className="list-disc pl-6 mt-2">
          <li>法令または公序良俗に違反する行為</li>
          <li>当サイトの運営を妨害する行為</li>
          <li>他のユーザーに対する不正アクセスや嫌がらせ行為</li>
          <li>その他、運営者が不適切と判断する行為</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">第3条（免責事項）</h2>
        <p>
          本サイトの情報や占い結果は、エンターテインメント目的で提供されるものであり、医学的・法律的な助言を行うものではありません。
        </p>
        <p>
          当サイトの利用により生じた損害について、一切の責任を負いかねますのでご了承ください。
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">第4条（サービス内容の変更等）</h2>
        <p>
          当サイトは、ユーザーに通知することなく、サービスの内容を変更、追加、または中止することができます。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">第5条（準拠法・裁判管轄）</h2>
        <p>
          本規約の解釈にあたっては、日本法を準拠法とします。
          本サービスに関して紛争が生じた場合には、運営者の所在地を管轄する裁判所を専属的合意管轄とします。
        </p>
      </section>
    </main>
  );
}