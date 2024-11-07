// src/components/InviteFriend/InviteFriend.js

import React from 'react';
import './InviteFriend.css';
import { useTranslation } from 'react-i18next';
import { getTelegramWebApp } from '../../utils/getTelegramWebApp';

function InviteFriend() {
  const { t } = useTranslation();

  const invite = () => {
    const telegramWebApp = getTelegramWebApp();

    if (telegramWebApp.MainButton) {
      telegramWebApp.MainButton.setText(t('invite'));
      telegramWebApp.MainButton.show();
      telegramWebApp.MainButton.onClick(() => {
        telegramWebApp.shareInviteLink();
      });
    } else {
      alert('Приглашение доступно только в Telegram.');
    }
  };

  return (
    <div className="invite-friend">
      <h2>{t('invite_friend')}</h2>
      <button className="invite-button" onClick={invite}>
        {t('invite')}
      </button>
    </div>
  );
}

export default InviteFriend;
