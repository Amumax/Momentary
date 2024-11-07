// src/components/Pet/Pet.js

import React, { useState } from 'react';
import './Pet.css';
import { useTranslation } from 'react-i18next';
import { getTelegramWebApp } from '../../utils/getTelegramWebApp';

function Pet() {
  const { t } = useTranslation();
  const [hunger, setHunger] = useState(50);
  const [happiness, setHappiness] = useState(50);

  const feedPet = () => {
    setHunger(Math.max(0, hunger - 10));
    // Здесь вы можете использовать telegramWebApp для отправки данных на сервер, если необходимо
  };

  const playWithPet = () => {
    setHappiness(Math.min(100, happiness + 10));
    // Здесь вы можете использовать telegramWebApp для отправки данных на сервер, если необходимо
  };

  return (
    <div className="pet">
      <h2>{t('pet')}</h2>
      <div className="pet-image">
        {/* Замените на путь к изображению вашего питомца */}
        <img src={process.env.PUBLIC_URL + '/assets/images/pet.png'} alt="Pet" />
      </div>
      <div className="pet-stats">
        <p>
          {t('hunger')}: {hunger}%
        </p>
        <p>
          {t('happiness')}: {happiness}%
        </p>
      </div>
      <div className="pet-actions">
        <button className="pet-button" onClick={feedPet}>
          {t('feed')}
        </button>
        <button className="pet-button" onClick={playWithPet}>
          {t('play')}
        </button>
      </div>
    </div>
  );
}

export default Pet;
