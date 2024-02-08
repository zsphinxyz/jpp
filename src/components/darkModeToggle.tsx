"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"

export function ModeToggle() {
  const [dark, setDark] = React.useState(true)
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