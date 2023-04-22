import { SearchIcon, BookmarkIcon, ShoppingCartIcon } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="flex h-20 items-center bg-red-200 px-4 py-2">
      <Logo />
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
      <h1 className="text-4xl">LavenScape</h1>
    </div>
  );
}

function Nav() {
  return (
    <div className="flex items-center">
      <Search />
      <Cart />
      <Bookmark />
      <UserInfo />
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
        className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
      />

      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button>
          <span className="sr-only">Search</span>
          <SearchIcon />
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

function UserInfo() {
  return <div>Sign In</div>;
}

// Wrap this around any icon to make it a button
function IconButton({ children }: { children: React.ReactNode }) {
  return <button>{children}</button>;
}
