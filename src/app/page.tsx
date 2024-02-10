import {Roboto} from 'next/font/google'
import { cn } from "@/lib/utils";

const font = Roboto({
  subsets: ["latin"],
  weight: ['100', '300','500', '900'],
})

export default function Home() {
  return (
    <main className={cn(font.className,"flex min-h-screen flex-col items-center justify-between")}>
      <h1 className=" text-2xl font-extrabold">Home Page Here</h1>
    </main>
  );
}
