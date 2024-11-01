import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Player from './components/Player';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <Player />
    </div>
  );
}

export default App;