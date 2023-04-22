import { SearchIcon, BookmarkIcon, ShoppingCartIcon } from "lucide-react";
import UserInfo from "./UserInfo";

export default function SiteHeader() {
  return (
    <header className="flex h-20 items-center bg-slate-950 px-4 py-2">
      <Logo />
      <div className="mx-12 h-9 w-[1px] bg-violet-200" />
      <Nav />
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-16 w-16">
        <img src="/lavender-snake.png" alt="lavender snake logo" />
      </div>
      <h1 className="via-purple-200-200 bg-gradient-to-r from-pink-100 to-violet-300 bg-clip-text text-4xl font-extrabold text-transparent">
        LavenScape
      </h1>
    </div>
  );
}

function Nav() {
  return (
    <div className="mr-4 flex flex-1 items-center justify-between">
      <Search />
      <div className="flex gap-6">
        <Cart />
        <Bookmark />
        <UserInfo />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative w-80">
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

function Cart() {
  return (
    <IconButton>
      <ShoppingCartIcon />
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
function IconButton({ children }: { children: React.ReactNode }) {
  return <button className="text-violet-200">{children}</button>;
}
