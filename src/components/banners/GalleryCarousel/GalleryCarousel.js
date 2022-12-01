import React, { useEffect } from 'react';

//==> NOTE: Carousel for fixed with & height images

import './GalleryCarousel.css';

const imageList = [{
    img: `https://cdn.shopify.com/s/files/1/0553/8342/5208/files/mobile-action_01.png?v=1620583331`
},{
    img: `https://cdn.shopify.com/s/files/1/0553/8342/5208/files/mobile-action_02.png?v=1620583331`
},{
    img: `https://cdn.shopify.com/s/files/1/0553/8342/5208/files/mobile-action_03.png?v=1620583331`
},{
    img: `https://cdn.shopify.com/s/files/1/0553/8342/5208/files/mobile-action_04.png?v=1620583331`
},{
    img: `https://cdn.shopify.com/s/files/1/0553/8342/5208/files/mobile-action_05.png?v=1620583331`
},{
    img: `https://cdn.shopify.com/s/files/1/0553/8342/5208/files/mobile-action_06.png?v=1620583331`
},{
    img: `https://cdn.shopify.com/s/files/1/0553/8342/5208/files/mobile-action_07.png?v=1620583331`
},{
    img: `https://cdn.shopify.com/s/files/1/0553/8342/5208/files/mobile-action_08.png?v=1620583331`
}];

const GalleryCarousel = () => {

    let list = imageList;

    useEffect(() => {
        setInterval(startCycle, 8000);
    }, []);

    //   Print images on screen
      const mapList = list.map((list, key) => {
        return (
            <div className="gallery-card" key={key}>
                <img src={`${list.img}`} />
            </div>)
      });
    
    //   Remove image from the front and add to the back of the row for continuous carousel
    const startCycle = () => {
      const card = list[0];
      const getCards = document.getElementsByClassName('gallery-card');
      getCards[0].classList.add('shift-left');
    
      list.push(list.shift());
    
      setTimeout(() => { 
        const gallery = document.getElementById('gallery');
          const createCard = document.createElement('div');
          createCard.className = 'gallery-card';
    
          const addImage = document.createElement('img');
          addImage.src = `${card.img}`;
          createCard.appendChild(addImage);
    
          gallery.appendChild(createCard);
      }, 5000);
    
      setTimeout(() => { 
        getCards[0].remove();
      }, 5000);
    };
    
    
    return (
        <div className="local-wrapper">
            <div className="gallery-container">
                <div id="gallery" className="gallery-row">{mapList}</div>
            </div>
        </div>
    )
}

export default GalleryCarousel;