import React from 'react';
import './App.css';

const App = () => {
  const contactItems = [
    {
      type: 'social',
      icon: '/instagram.png',
      label: 'Instagram',
      value: '@husanboy_urolog',
      link: 'https://www.instagram.com/husanboy_urolog/profilecard/?igsh=MnFyNGkzNXc5OGgw'
    },
    {
      type: 'contact',
      icon: '/phone.png',
      label: 'Telefon raqam',
      value: '+998 91 484 99 22',
      link: 'tel:+998914849922'
    },
    {
      type: 'contact',
      icon: '/location.png',
      label: 'Manzil',
      value: 'Yusuf Otabekov ko\'chasi, 5-uy, Andijon shaxar, O\'zbekiston',
      link: "https://www.google.com/maps/place/Shox+International+Hospital,+Andijon+shaxar,+5+uy,+Yusuf+otabekov+ko'chasi,+170100,+Andijan,+Andijan+region,+Uzbekistan/@40.8115702,72.3177431,16z/data=!4m6!3m5!1s0x38bc95f739afe519:0xe25d5f92aec346f9!8m2!3d40.8115702!4d72.3177431!16s%2Fg%2F11vstz8fyc"
    },
    {
      type: 'social',
      icon: '/telegram.png',
      label: 'Telegram',
      value: '@Kurbanov_Husan_urolog',
      link: 'https://t.me/Kurbanov_Husan_urolog'
    },
    {
      type: 'social',
      icon: '/whatsapp.png',
      label: 'WhatsApp',
      value: '+998914849922',
      link: 'https://wa.me/998914849922'
    },
    {
      type: 'social',
      icon: '/tiktok.png',
      label: 'TikTok',
      value: '@Dr.Husanboy_Asqarovich',
      link: 'https://www.tiktok.com/@dr.husanboy_asqarovich?_t=8qxVHsFr8Zq&_r=1'
    }
  ];

  return (
    <div className="wrapper">
      <div className="backgroundImage" />
      <div className="overlay" />
      <div className="container">
        <header className="header">
          <div className="logo"></div>
          <h1 className="title">Urolog Husanboy</h1>
          <p className="subtitle">Barcha turdagi urologik muammolar yechimi.</p>
        </header>

        <section className="section">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              }}
            >
              <div className="icon">
                {item.icon.startsWith('/') ? (
                  <img src={item.icon} alt={item.label} className="iconImage" />
                ) : (
                  item.icon
                )}
              </div>
              <div className="content">
                <div className="label">{item.label}</div>
                <div className="value">{item.value}</div>
              </div>
            </a>
          ))}
        </section>

        <footer className="footer">
          <p>© 2024 Urolog Husanboy. Barcha huquqlar himoyalangan.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
