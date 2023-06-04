import Image from "next/image";
import Link from "next/link";

import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

function Header() {
  const session = false;
  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-2/5">
        <Link href="/">
          <div
            className="relative  h-10 w-5 cursor-pointer
        opacity-75 transition duration-300 ease-in-out  hover:opacity-100"
          >
            <Image src="/apple.png" alt="" fill objectFit="contain" />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <Link href="/" className="headerLink">
          Product
        </Link>
        <Link href="/" className="headerLink">
          Explore
        </Link>
        <Link href="/" className="headerLink">
          Support
        </Link>
        <Link href="/" className="headerLink">
          Business
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <MagnifyingGlassIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            <span
              className="absolute -right-1 -top-1 z-50 flex h-4 w-5 items-center 
          justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white">
              5
            </span>
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
            
        )}
      </div>
    </header>
  );
}

export default Header;
