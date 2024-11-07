import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './MainMenu.css';

function MainMenu() {
  const { t } = useTranslation();

  return (
    <div className="main-menu">
      <h1>{t('welcome')}</h1>
      <div className="menu-buttons">
        <Link to="/game">
          <button className="menu-button">{t('start_game')}</button>
        </Link>
        <Link to="/pet">
          <button className="menu-button">{t('pet')}</button>
        </Link>
        <Link to="/shop">
          <button className="menu-button">{t('shop')}</button>
        </Link>
        <Link to="/leaderboard">
          <button className="menu-button">{t('leaderboard')}</button>
        </Link>
        <Link to="/settings">
          <button className="menu-button">{t('settings')}</button>
        </Link>
        <Link to="/feedback">
          <button className="menu-button">{t('feedback')}</button>
        </Link>
        <Link to="/invite">
          <button className="menu-button">{t('invite_friend')}</button>
        </Link>
      </div>
    </div>
  );
}

export default MainMenu;
