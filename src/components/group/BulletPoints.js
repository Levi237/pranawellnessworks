import React            from 'react';
import styled           from 'styled-components';


const BulletPoints = ({ info, id }) => {
    
    const getInfo = info.filter(inf => inf.id === id);

    const mapList = getInfo[0].list.map((li, key) => {
        return (
            <section key={key}>{li}</section>
        )
    })
    return(
        <div>
        {mapList}
        </div>
    );
};


export default BulletPoints;