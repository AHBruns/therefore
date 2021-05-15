import Link from "next/link";

export const Header = () => {
  return (
    <header className="z-40 sticky top-0">
      <nav className="relative border-b bg-white border-gray-300 p-4">
        <Link href="/">
          <h1 className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer bg-orange-500 font-black mt-[-7px] px-[2px] text-4xl tracking-normal leading-none text-transparent bg-clip-text">
            &there4;
          </h1>
        </Link>
        <div className="flex space-x-4 items-center justify-end text-gray-700 tracking-wider leading-tight font-light text-sm">
          <Link href="/">
            <a>Posts</a>
          </Link>
          <Link href="/books">
            <a>Books</a>
          </Link>
          <Link href="/errata">
            <a>Errata</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};
