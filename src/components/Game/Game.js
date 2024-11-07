// src/components/Game/Game.js

import React, { useState, useEffect } from 'react';
import './Game.css';
import { useTranslation } from 'react-i18next';
import { getTelegramWebApp } from '../../utils/getTelegramWebApp';

function Game() {
  const { t } = useTranslation();
  const [currentLevel, setCurrentLevel] = useState(1);
  const [gridSize, setGridSize] = useState({ rows: 2, cols: 2 });
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [phase, setPhase] = useState('memorization'); // 'memorization', 'selection', 'result'
  const [message, setMessage] = useState('');
  const [isTelegram, setIsTelegram] = useState(false);

  useEffect(() => {
    const telegramWebApp = getTelegramWebApp();
    setIsTelegram(!!window.Telegram?.WebApp);

    // Инициализируем уровень
    initializeLevel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLevel]);

  const initializeLevel = () => {
    // Определяем размеры сетки в зависимости от уровня
    const size = getGridSizeForLevel(currentLevel);
    setGridSize(size);

    // Генерируем последовательность активных блоков
    const seq = generateSequence(size, currentLevel);
    setSequence(seq);

    // Очищаем пользовательский выбор и сообщение
    setUserSequence([]);
    setMessage('');

    // Устанавливаем фазу игры
    setPhase('memorization');

    // Переходим к фазе выбора после запоминания
    const memorizationTime = currentLevel >= 9 ? sequence.length * 500 : 3000;
    setTimeout(() => {
      setPhase('selection');
    }, memorizationTime);
  };

  const getGridSizeForLevel = (level) => {
    switch (level) {
      case 1:
        return { rows: 2, cols: 2 };
      case 2:
      case 3:
        return { rows: 3, cols: 3 };
      case 4:
        return { rows: 4, cols: 4 };
      case 5:
        return { rows: 5, cols: 5 };
      case 6:
        return { rows: 6, cols: 6 };
      case 7:
        return { rows: 7, cols: 7 };
      case 8:
        return { rows: 7, cols: 9 };
      case 9:
        return { rows: 3, cols: 3 };
      case 10:
        return { rows: 4, cols: 4 };
      case 11:
        return { rows: 5, cols: 5 };
      case 12:
        return { rows: 6, cols: 6 };
      case 13:
        return { rows: 7, cols: 7 };
      case 14:
        return { rows: 7, cols: 8 };
      case 15:
        return { rows: 7, cols: 9 };
      case 16:
        return { rows: 8, cols: 10 };
      default:
        return { rows: 2, cols: 2 };
    }
  };

  const generateSequence = (size, level) => {
    const totalTiles = size.rows * size.cols;
    let numberOfActiveTiles = Math.floor(totalTiles / 4) + 1; // Количество активных блоков

    const seq = [];
    const availableTiles = Array.from({ length: totalTiles }, (_, index) => index);

    if (level >= 9) {
      // Для уровней 9 и выше последовательная подсветка
      for (let i = 0; i < numberOfActiveTiles; i++) {
        const randomIndex = Math.floor(Math.random() * availableTiles.length);
        seq.push(availableTiles[randomIndex]);
        availableTiles.splice(randomIndex, 1);
      }
    } else {
      // Для уровней ниже 9 случайные блоки
      while (seq.length < numberOfActiveTiles) {
        const randomIndex = Math.floor(Math.random() * totalTiles);
        if (!seq.includes(randomIndex)) {
          seq.push(randomIndex);
        }
      }
    }

    return seq;
  };

  const handleTileClick = (index) => {
    if (phase === 'selection') {
      if (userSequence.includes(index)) {
        // Если блок уже выбран, отменяем выбор
        setUserSequence(userSequence.filter((i) => i !== index));
      } else {
        // Добавляем блок в выбор
        setUserSequence([...userSequence, index]);
      }
    }
  };

  const finishLevel = () => {
    setPhase('result');

    // Проверяем, сколько блоков угадано правильно
    const correctTiles = sequence.filter((tile) => userSequence.includes(tile)).length;
    const totalActiveTiles = sequence.length;

    setMessage(`${t('correct')}: ${correctTiles} / ${totalActiveTiles}`);

    // Здесь можно добавить логику начисления монет и перехода на следующий уровень
  };

  const nextLevel = () => {
    if (currentLevel < 16) {
      setCurrentLevel(currentLevel + 1);
    } else {
      // Если это последний уровень, можно завершить игру или начать заново
      setCurrentLevel(1);
    }
  };

  return (
    <div className="game">
      <h2>
        {t('level')} {currentLevel}
      </h2>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${gridSize.cols}, 50px)` }}>
        {Array.from({ length: gridSize.rows * gridSize.cols }, (_, index) => (
          <div
            key={index}
            className={`tile ${
              phase === 'memorization' && sequence.includes(index)
                ? 'active'
                : phase === 'selection' && userSequence.includes(index)
                ? 'selected'
                : ''
            }`}
            onClick={() => handleTileClick(index)}
          ></div>
        ))}
      </div>
      {phase === 'selection' && (
        <button className="finish-button" onClick={finishLevel}>
          {t('finish')}
        </button>
      )}
      {phase === 'result' && (
        <div>
          <p>{message}</p>
          <button className="next-level-button" onClick={nextLevel}>
            {t('next_level')}
          </button>
        </div>
      )}
    </div>
  );
}

export default Game;
