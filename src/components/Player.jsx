import { BiPlay, BiSkipNext, BiSkipPrevious } from 'react-icons/bi';

function Player() {
  return (
    <div className="fixed bottom-0 w-full bg-spotify-gray p-4">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="w-1/3">
          <div className="flex items-center">
            <img 
              src="https://via.placeholder.com/60" 
              alt="Album cover" 
              className="w-14 h-14 rounded"
            />
            <div className="ml-4">
              <div className="text-sm font-semibold">Song Title</div>
              <div className="text-xs text-spotify-lightgray">Artist Name</div>
            </div>
          </div>
        </div>
        
        <div className="w-1/3 flex justify-center items-center space-x-4">
          <BiSkipPrevious className="text-3xl cursor-pointer hover:text-spotify-green" />
          <div className="w-10 h-10 rounded-full bg-spotify-white flex items-center justify-center cursor-pointer">
            <BiPlay className="text-2xl text-spotify-black" />
          </div>
          <BiSkipNext className="text-3xl cursor-pointer hover:text-spotify-green" />
        </div>
        
        <div className="w-1/3">
          <div className="flex justify-end items-center">
            <div className="w-full max-w-md">
              <div className="bg-spotify-lightgray h-1 rounded-full">
                <div className="bg-spotify-white w-1/3 h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;