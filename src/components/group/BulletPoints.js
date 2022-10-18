import React            from 'react';
import styled           from 'styled-components';

const BulletPoints = ({ columns, container, info, id }) => {
    
    const getInfo = info.filter(inf => inf.id === id);

    const mapList = getInfo[0].list.map((li, key) => {
        return (
            <li className={getInfo[0].style}>{li}</li>
        );
    });

    return(
        <Container className={container}>
            { getInfo[0].header && <h1 className="header">{getInfo[0].header}</h1> }
            { getInfo[0].subheader && <h2 className="subheader">{getInfo[0].subheader}</h2> }
            { getInfo[0].subtext && <p className="subtext">{getInfo[0].subtext}</p> }
            <BulletPoint className={columns}>
                { mapList }
            </BulletPoint>
        </Container>
    );
};
const Container = styled.div`
   p.subtext {
    font-style: italic;
    margin-top: -16px;
   }
    &.rounded {
        padding: 40px 0;
        border-radius: 15px;
        margin: 0 auto 20px;
        box-shadow: 5px 5px 15px rgba(0 0 0 / 25% );
    }
`;
const BulletPoint = styled.ul`
    list-style-type: none;
    text-align: left;
    display: inline-block;
    li {
        font-size: 23px;
        line-height: 30px;
        padding-left: 1.25em;
        margin-bottom: 15px;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        vertical-align: baseline;
        background: transparent;
        list-style-position: outside;
        padding-left: 10px;
    }


    li::before {
        content: '';
        display: inline-block;
        
        background-repeat: no-repeat;
        background-size: 12px;
        height: 12px;
        width: 20px;
        margin-left: -20px;
    }

    &.two-columns {
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;
        padding: 0 5%;
        display: block;
        li {
            margin: 0 5px;
        }
    }


    .circle::before {
        background-image: url('/bullets/circle.svg');
    }
    .check::before {
        background-image: url('/bullets/check.svg');
    }
    .arrow::before {
        background-image: url('/bullets/arrow.svg');
    }
`;

export default BulletPoints;