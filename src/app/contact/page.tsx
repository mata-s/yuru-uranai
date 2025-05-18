export default function ContactPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-2xl font-bold mb-4">お問い合わせ</h1>
      <p className="mb-6">
        ゆる占いに関するご意見・ご感想・お問い合わせは、以下のフォームからご連絡ください。
      </p>
      <div className="w-full h-[1200px] md:h-[1000px]">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeO-P7CU0OsWpuKtWBHwo4O1pP60xq5Ubc1aFklicrYWWFX5Q/viewform?usp=header"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="お問い合わせフォーム"
        >
          読み込んでいます…
        </iframe>
      </div>
    </main>
  );
}