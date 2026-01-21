import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import { Josefin_Sans } from "next/font/google";

export const metadata = {
  title: {
    template: "%s / the wild oasis ",
    default: "welcome to the wild oasis ",
  },
  description:
    "Luxuries Cabin Hotel, Located in the Hear of Ialian Dolomites, Surrounding by Beautiful Mountains and Dark Forests",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="mx-w-7xl mx-auto w-full">{children}</main>
        </div>
        <footer>this is copy right by wild oasis</footer>
      </body>
    </html>
  );
}
