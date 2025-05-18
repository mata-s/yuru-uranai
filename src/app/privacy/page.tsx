export default function PrivacyPolicy() {
    return (
      <main className="p-8 max-w-3xl mx-auto text-gray-800">
        <h1 className="text-2xl font-bold mb-4">プライバシーポリシー</h1>
        <p className="mb-4">
          当サイト「ゆる占い」では、第三者配信事業者（Google など）が Cookie を使用して、ユーザーの過去のアクセス情報に基づいた広告を配信することがあります。
        </p>
        <p className="mb-4">
          Google による Cookie の使用により、ユーザーが当サイトや他のサイトにアクセスした際の情報に基づいて、適切な広告が表示されます。
        </p>
        <p className="mb-4">
          ユーザーは、<a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Googleの広告設定ページ</a> にてパーソナライズ広告を無効にすることができます。
        </p>
        <p className="mb-4">
          その他、<a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Googleの広告に関するポリシー</a> をご覧ください。
        </p>
        <p className="text-sm text-gray-500 mt-8">
          本ポリシーは予告なく変更されることがあります。変更後はこのページにてお知らせいたします。
        </p>
      </main>
    );
  }