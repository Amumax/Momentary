// src/components/NotFound/NotFound.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './NotFound.css';

function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <h2>{t('page_not_found')}</h2>
      <p>{t('sorry_page_not_found')}</p>
    </div>
  );
}

export default NotFound;
