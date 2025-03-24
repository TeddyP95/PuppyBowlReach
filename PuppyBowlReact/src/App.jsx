import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PlayerList from './components/PlayerList';
import PlayerDetails from './components/PlayerDetails';
import NewPlayerForm from './components/NewPlayerForm';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Router>
      <div className="app">
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <main className="container">
          <Routes>
            <Route path="/" element={<PlayerList searchQuery={searchQuery} />} />
            <Route path="/players/:id" element={<PlayerDetails />} />
            <Route path="/new-player" element={<NewPlayerForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 