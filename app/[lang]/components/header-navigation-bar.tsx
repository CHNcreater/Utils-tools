"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { type getDictionary } from "@/get-dictionary";

export function HeaderNavigationBar({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["header"];
}) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="sticky top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-background border-b border-border dark:bg-background-dark dark:border-border-dark">
      <Link href="/">
        <Image
          src="/next.svg"
          alt="Logo"
          width={90}
          height={19}
          className="dark:invert mx-4"
        />
      </Link>

      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">{dictionary.menu.home}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">{dictionary.menu.components}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">{dictionary.menu.docs}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex-grow "></div>
      <div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="ml-2 bg-ghost-white dark:bg-ghost-white-dark w-16 border-none shadow-none hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary-dark dark:hover:text-primary-foreground-dark"
          asChild
        >
          <Link href="/login">{dictionary.auth.login}</Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="ml-2 bg-ghost-white dark:bg-ghost-white-dark w-16 border-none shadow-none hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary-dark dark:hover:text-primary-foreground-dark"
          asChild
        >
          <Link href="/signup">{dictionary.auth.register}</Link>
        </Button>
      </div>
    </div>
  );
}
