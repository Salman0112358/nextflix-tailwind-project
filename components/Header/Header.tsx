import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [scorlling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScrolling = () => {
      window.scrollY > 0 ? setScrolling(true) : setScrolling(false);
    };

    // listening for the scrolling event then calling the handleScrolling function
    window.addEventListener("scroll", handleScrolling);

    return () => {
      //cleaning up the event listener
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  return (
    <header className={`${scorlling && 'bg-[#3f056e]'}`}>
      {/* left div section */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://fontmeme.com/permalink/221020/6a07ca75a3c1b9e24d3b3346fc06771c.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      {/* right div section */}
      <div className="flex items-centre space-x-4 font-light">
        <MagnifyingGlassIcon className="hidden sm:inline h-6 w-6 fill-white " />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6 fill-white" />
        <Link href="/account">
          <img
            src="https://ih0.redbubble.net/image.618379802.1473/flat,1000x1000,075,f.u2.jpg"
            width={24}
            height={24}
            alt="profile icon"
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
