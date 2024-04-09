"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

export function ModeToggle() {
  
  const [dark, setDark] = useState<boolean>()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      let localStorageTheme = localStorage.getItem('theme')
      setDark(localStorageTheme == 'dark' ? true : false)
    }
  }, [])

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