import {StarIcon} from '@heroicons/react/24/solid'

const Header = () => {
  return (
    <header>
    {/* left div section */}
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://fontmeme.com/temporary/a41721e640ca1372bc1c424129a14b7d.png"
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
      <div>
            <StarIcon className=""/>
      </div>
    </header>
  );
};

export default Header;
