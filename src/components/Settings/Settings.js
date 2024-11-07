// src/components/Settings/Settings.js
import React, { useState } from 'react';
import './Settings.css';
import { useTranslation } from 'react-i18next';

function Settings() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [sound, setSound] = useState(true);
  const [music, setMusic] = useState(true);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <div className="settings">
      <h2>{t('settings')}</h2>
      <div className="settings-option">
        <label>{t('language')}:</label>
        <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="ru">Русский</option>
        </select>
      </div>
      <div className="settings-option">
        <label>{t('sound')}:</label>
        <input
          type="checkbox"
          checked={sound}
          onChange={(e) => setSound(e.target.checked)}
        />
      </div>
      <div className="settings-option">
        <label>{t('music')}:</label>
        <input
          type="checkbox"
          checked={music}
          onChange={(e) => setMusic(e.target.checked)}
        />
      </div>
    </div>
  );
}

export default Settings;
