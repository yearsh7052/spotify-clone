import { BiHome, BiSearch, BiLibrary } from 'react-icons/bi';

function Sidebar() {
  return (
    <div className="w-64 bg-spotify-black h-screen p-6">
      <div className="text-2xl font-bold mb-8">Spotify</div>
      <nav>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 hover:text-spotify-green cursor-pointer">
            <BiHome className="text-2xl" />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-4 hover:text-spotify-green cursor-pointer">
            <BiSearch className="text-2xl" />
            <span>Search</span>
          </li>
          <li className="flex items-center space-x-4 hover:text-spotify-green cursor-pointer">
            <BiLibrary className="text-2xl" />
            <span>Your Library</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;