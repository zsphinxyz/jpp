import { ModeToggle } from "./darkModeToggle";
import Login from "./Login";

export default function Nav() {
  return (
    <nav className="bg-muted-foreground/20 w-full py-1 flex justify-around ">
      <ModeToggle />
      <Login />
    </nav>
  )
}

