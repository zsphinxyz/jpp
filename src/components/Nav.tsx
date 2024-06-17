import Link from "next/link";
import {ModeToggle} from "./darkModeToggle";
import Login from "./Login";
import {TrashIcon} from "@radix-ui/react-icons";

export default function Nav() {
  return (
    <nav className="bg-muted 20 w-full py-2 flex justify-around items-center border-b border-primary/5">

      <Link href='/' className="select-none flex items-center justify-center" draggable={false}>
        <p>JPP</p>
        <TrashIcon className="font-bold text-2xl" />
      </Link>

      <div className="flex gap-3 items-center">
        <Link href='/'>About</Link>
        <Link href='/'>FAQs</Link>
        <Link href='/'>Catagories</Link>
      </div>

      <div className="flex gap-2">
        <ModeToggle />
        <Login />
      </div>
    </nav>
  )
}

