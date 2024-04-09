import Link from "next/link";
import { ModeToggle } from "./darkModeToggle";
import Login from "./Login";
import {TrashIcon } from "@radix-ui/react-icons";

export default function Nav() {
  return (
    <nav className="bg-muted-foreground/20 w-full py-1 flex justify-around ">
      <Link href='/' className="select-none flex items-center justify-center" draggable={false}>
        <p>JPP</p>
        <TrashIcon className="font-bold text-2xl" />
      </Link>
      <ModeToggle />
      <Login />
    </nav>
  )
}

