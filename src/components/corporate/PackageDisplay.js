import React from 'react';

import './PackageDisplay.css';

const PackageDisplay =({pricePack})=> {

    const showPackage = pricePack.map((pack, key) => {
        const details = pack.details.map((detail, k) => {
            return <li key={k}>{detail}</li>
        })
        return(
            <div key={key} className="pack-container">
                <img className="packBackgroundImage" src={`${pack.image}`} alt="pranayama yoga breath work"/>
                <div className="price-pack-box">
                    <section>{pack.title}</section>
                    <section>{pack.price}</section>
                    <section>{pack.duration}</section>
                    <section>{pack.secondTitle}</section>
                    {/* <section>{pack.secondTitle}</section> */}
                    {/* <section></section> */}
                    {/* <section>{pack.star}</section> */}
                    <ul>{details}</ul>
                </div>
                    <button>BUY NOW</button>
            </div>
        )
    })
    return(<>{showPackage}</>);
};
export default PackageDisplay;