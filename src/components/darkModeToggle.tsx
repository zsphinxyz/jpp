"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { useState } from "react"

export function ModeToggle() {
  const [dark, setDark] = useState(localStorage.getItem('theme') == 'dark' ? true : false)
  const { setTheme } = useTheme()

  function handleClick() {
    setDark(!dark);
    dark ? setTheme('light') : setTheme('dark');
  }

  return (
    <Button variant='outline' className="cursor-pointer px-2" onClick={handleClick}>
      {
        dark ?
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-foreground " />
        :
        <MoonIcon className="h-[1.2rem] w-[1.2rem] text-foreground " />
      }
    </Button>
  )
}