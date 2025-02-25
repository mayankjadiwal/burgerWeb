// import React from 'react'
// import './Header.css'

// const Header = () => {
//   return (
//     <div className='header'>
//       <div className="header-contents">
//         <h2>Order your favourite food here</h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus veniam iusto explicabo autem veritatis? Adipisci consequuntur harum molestiae autem sunt suscipit inventore voluptatem impedit.</p>
//         <button>View Menu</button>
//       </div>
//     </div>
//   )
// }

// export default Header

import React , { useEffect} from 'react';
import './Header.css';
import { assets } from '../../assets/assets';
import ScrollReveal from 'scrollreveal';

const Header = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 300,
    });

    sr.reveal(`.home__data`);
    sr.reveal(`.home__dish`, { delay: 500, distance: '100px', origin: 'bottom' });
    sr.reveal(`.home__burger`, { delay: 1200, distance: '100px', duration: 1500 });
    sr.reveal(`.home__ingredient`, { delay: 1600, interval: 100 });
  }, []);

  
  return (
    <main className="main">
      {/*==================== HOME ====================*/}
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">Love Every <br /> Burger</h1>

            <p className="home__description">
              We serve the best burgers on the planet, 
              paving the way for cooking and preparing hot, 
              delicious burgers.
            </p>               

            <a href="#" className="button">Bite Now</a>
               
            <img src={assets.sticker_potatoes} alt="home__sticker" className="home__sticker"/>
          </div>

          <div className="home__images">
            <img src={assets.home_burger} alt="image" className="home__burger" />
            <img src={assets.home_dish} alt="image" className="home__dish" />

            <img src={assets.home_potato} alt="image" className="home__ingredient home__potato-1" />
            <img src={assets.home_potato} alt="image" className="home__ingredient home__potato-2" />
            <img src={assets.home_tomato} alt="image" className="home__ingredient home__tomato-1" />
            <img src={assets.home_tomato} alt="image" className="home__ingredient home__tomato-2" />
            <img src={assets.home_lettuce} alt="image" className="home__ingredient home__lettuce-1" />
            <img src={assets.home_lettuce} alt="image" className="home__ingredient home__lettuce-2" />
          </div>              
        </div>
      </section>
    </main>
  );
};





export default Header;

