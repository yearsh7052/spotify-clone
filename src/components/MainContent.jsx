function MainContent() {
  const playlists = [
    { id: 1, name: "Today's Top Hits", image: "https://via.placeholder.com/150", description: "The biggest hits right now" },
    { id: 2, name: "Discover Weekly", image: "https://via.placeholder.com/150", description: "Your weekly mixtape of fresh music" },
    { id: 3, name: "Chill Hits", image: "https://via.placeholder.com/150", description: "Kick back to the best new and recent chill hits" },
    { id: 4, name: "Rock Classics", image: "https://via.placeholder.com/150", description: "Rock legends & epic songs" },
  ];

  return (
    <div className="flex-1 overflow-auto p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Good evening</h2>
        <div className="grid grid-cols-3 gap-4">
          {playlists.slice(0, 3).map(playlist => (
            <div 
              key={playlist.id}
              className="bg-spotify-gray flex items-center rounded overflow-hidden hover:bg-opacity-80 cursor-pointer"
            >
              <img src={playlist.image} alt={playlist.name} className="w-20 h-20" />
              <span className="p-4 font-semibold">{playlist.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Made for you</h2>
        <div className="grid grid-cols-4 gap-6">
          {playlists.map(playlist => (
            <div 
              key={playlist.id}
              className="bg-spotify-gray p-4 rounded hover:bg-opacity-80 cursor-pointer"
            >
              <img 
                src={playlist.image} 
                alt={playlist.name} 
                className="w-full aspect-square rounded mb-4"
              />
              <h3 className="font-semibold mb-2">{playlist.name}</h3>
              <p className="text-sm text-spotify-lightgray">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent;