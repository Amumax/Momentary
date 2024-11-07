import React, { useEffect } from 'react';
import { getTelegramWebApp } from './utils/getTelegramWebApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu/MainMenu';
import Game from './components/Game/Game';
import Pet from './components/Pet/Pet';
import Shop from './components/Shop/Shop';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Settings from './components/Settings/Settings';
import Feedback from './components/Feedback/Feedback';
import InviteFriend from './components/InviteFriend/InviteFriend';

function App() {
  useEffect(() => {
    const telegramWebApp = getTelegramWebApp();
    telegramWebApp.ready();
  }, []);
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/game" element={<Game />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/invite" element={<InviteFriend />} />
      </Routes>
    </Router>
  );
}

export default App;
