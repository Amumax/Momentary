// src/components/Feedback/Feedback.js

import React, { useState } from 'react';
import './Feedback.css';
import { useTranslation } from 'react-i18next';
import { getTelegramWebApp } from '../../utils/getTelegramWebApp';

function Feedback() {
  const { t } = useTranslation();
  const [feedback, setFeedback] = useState('');

  const sendFeedback = () => {
    // Используйте telegramWebApp для отправки отзыва на сервер или через Telegram
    const telegramWebApp = getTelegramWebApp();

    // Пример отправки данных на сервер (необязательно)
    // axios.post('/api/feedback', { feedback })

    alert(t('thank_you_for_feedback'));
    setFeedback('');
  };

  return (
    <div className="feedback">
      <h2>{t('feedback')}</h2>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder={t('enter_feedback')}
      ></textarea>
      <button className="send-button" onClick={sendFeedback}>
        {t('send')}
      </button>
    </div>
  );
}

export default Feedback;
