// src/components/Leaderboard/Leaderboard.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Leaderboard.css';
import { useTranslation } from 'react-i18next';

function Leaderboard() {
  const { t } = useTranslation();
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:5000'); // Замените на URL вашего сервера

    socket.on('leaderboardUpdate', (data) => {
      setLeaders(data);
    });

    // Отписываемся при размонтировании компонента
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="leaderboard">
      <h2>{t('leaderboard')}</h2>
      <table>
        <thead>
          <tr>
            <th>{t('position')}</th>
            <th>{t('player')}</th>
            <th>{t('score')}</th>
          </tr>
        </thead>
        <tbody>
          {leaders.map((leader, index) => (
            <tr key={leader.telegramId}>
              <td>{index + 1}</td>
              <td>{leader.name}</td>
              <td>{leader.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
