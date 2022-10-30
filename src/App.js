import './App.css';
import TopBar from './components/TopBar'
import Background from './components/Background'
import StoreListings from './components/storeListings'


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;