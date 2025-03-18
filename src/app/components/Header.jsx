"use client";
import { Button, Navbar, TextInput } from "flowbite-react";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  UserButton
} from "@clerk/nextjs";
import { dark, light } from "@clerk/themes";

export default function Header() {
  const path = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <Navbar className="border-b-2">
      <Link
        href="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <h1 className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Feras's Blog
        </h1>
      </Link>

      {/* Search Bar */}
      <div className="relative hidden lg:block">
        <TextInput type="text" placeholder="Search..." className="pr-10" />
        <AiOutlineSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
      </div>

      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>

      <div className="flex gap-2 md:order-2">
        {/* Theme Toggle */}
        <Button
          className="w-12 h-10 hidden sm:inline"
          color="gray"
          pill
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>

        {/* User Authentication */}
        <SignedIn>
          <UserButton
            appearance={{ baseTheme: theme === "light" ? light : dark }}
          />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>

        <Navbar.Toggle />
      </div>

      {/* Navigation Links */}
      <Navbar.Collapse>
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" },
          { href: "/projects", label: "Projects" }
        ].map(({ href, label }) => (
          <Link key={href} href={href}>
            <Navbar.Link active={path === href} as="div">
              {label}
            </Navbar.Link>
          </Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
