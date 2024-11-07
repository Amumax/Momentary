// src/components/Shop/Shop.js
import React from 'react';
import './Shop.css';
import { useTranslation } from 'react-i18next';

function Shop() {
  const { t } = useTranslation();

  const items = [
    {
      id: 1,
      name: t('common_egg'),
      price: 100,
      image: process.env.PUBLIC_URL + '/assets/images/eggs/common_egg.png',
    },
    {
      id: 2,
      name: t('rare_egg'),
      price: 300,
      image: process.env.PUBLIC_URL + '/assets/images/eggs/rare_egg.png',
    },
    // Добавьте другие товары
  ];

  const buyItem = (itemId) => {
    // Логика покупки товара
    alert(`${t('buy')} ${items.find((item) => item.id === itemId).name}`);
  };

  return (
    <div className="shop">
      <h2>{t('shop')}</h2>
      <div className="shop-items">
        {items.map((item) => (
          <div key={item.id} className="shop-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>
              {item.price} {t('coins')}
            </p>
            <button className="buy-button" onClick={() => buyItem(item.id)}>
              {t('buy')}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
