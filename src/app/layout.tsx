import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ゆる占い｜かわいいキャラが今日のあなたをゆる〜く占うよ",
  description: "毎日ちょっとだけ癒されたいあなたへ。かわいくて個性豊かなキャラたちが、あなたの今日をゆる〜く占ってくれる癒しの占いサイト。恋愛・仕事・総合運もチェックできるよ。",
  keywords: ["占い", "今日の運勢", "ゆるキャラ", "恋愛運", "仕事運", "かわいい", "癒し"],
  openGraph: {
    title: "ゆる占い",
    description: "かわいいキャラが今日のあなたをゆる〜く占ってくれる！",
    url: "https://yuru-uranai.vercel.app/",
    siteName: "ゆる占い",
    images: [
      {
        url: "https://yuru-uranai.vercel.app/ogp.png",
        width: 1200,
        height: 630,
        alt: "ゆる占いのキャラクターたち",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ゆる占い",
    description: "かわいいキャラが今日のあなたをゆる〜く占ってくれる！",
    images: ["https://yuru-uranai.vercel.app/ogp.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925550821145779"
     crossOrigin="anonymous"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
