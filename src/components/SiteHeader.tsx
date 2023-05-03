import {
  SearchIcon,
  BookmarkIcon,
  ShoppingCartIcon,
  PlusIcon,
} from "lucide-react";
import UserInfo from "./UserInfo";
import Link from "next/link";
import { useState } from "react";
import CartModal from "./CartModal";

export default function SiteHeader() {
  return (
    <header className="flex h-20 items-center bg-slate-950 px-4 py-2">
      <Logo />
      <div className="hidden lg:block mx-12 h-9 w-[1px] bg-violet-200" />
      <Nav />
    </header>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <div className="h-16 w-16">
        <img src="/lavender-snake.png" alt="lavender snake logo" />
      </div>
      <h1 className="hidden sm:block via-purple-200-200 bg-gradient-to-r from-pink-100 to-violet-300 bg-clip-text hover:from-pink-200 hover:to-violet-400 font-poppins text-4xl font-extrabold text-transparent">
        LavenScape
      </h1>
    </Link>
  );
}

function Nav() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="md:mr-4 flex flex-1 items-center justify-between">
      <Search />
      <div className="flex gap-3 sm:gap-4 md:gap-6 ml-auto">
        <Plus />
        <Cart openCart={toggleIsCartOpen} />
        <Bookmark />
        <UserInfo />
      </div>
      {isCartOpen && <CartModal closeCart={toggleIsCartOpen} /> }
    </div>
  );
}

function Search() {
  return (
    <div className="hidden lg:block relative w-80">
      <label htmlFor="searchBox" className="sr-only">
        Search for an art piece
      </label>

      <input
        type="text"
        id="searchBox"
        placeholder="Discover your next masterpiece..."
        className="w-full rounded-md bg-violet-100 px-4 py-2.5 pe-10 text-slate-950 placeholder-slate-950 shadow-sm focus:border-none focus:outline-none focus:ring-2 focus:ring-violet-600 sm:text-sm"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button>
          <span className="sr-only">Search</span>
          <SearchIcon className="text-slate-950" />
        </button>
      </span>
    </div>
  );
}

function Plus() {
  return (
    <IconButton>
      <Link href="/new">
        <PlusIcon />
      </Link>
    </IconButton>
  );
}

function Cart(props: {openCart: () => void}) {
  return (
    <IconButton>
      <div className="relative" onClick={props.openCart}>
        <ShoppingCartIcon />
        <div className="absolute w-full -top-[0.65rem] pl-[0.2rem] text-[#ad4392] text-sm font-bold">
          6
        </div>
      </div>
    </IconButton>
  );
}

function Bookmark() {
  return (
    <IconButton>
      <BookmarkIcon />
    </IconButton>
  );
}

// Wrap this around any icon to make it a button
export function IconButton({ children }: { children: React.ReactNode }) {
  return <button className="text-violet-200 hover:text-violet-500 flex items-center justify-center">{children}</button>;
}