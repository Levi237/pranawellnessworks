import React from 'react';
import styled from 'styled-components';

const LeviEikoBrand = () => {
    const svgLogo = 
    <svg version="1.1" width="100%" height="100%" viewBox="0 0 500 500">
      <rect fill="transparent" stroke-width="0" width="500" height="500" x="0" y="0" />
      <path stroke-width="0" 
        d="M0 0 H75 V300 H265 V425 H500 V500 H0, M140 0 H500 V125 H265 V250 H140, M325 175 H500 V375 H325 V300 H425 V250 H325 Z"/>
    </svg>

    return (
        <LogoWrapper href="https://levieiko.com" alt="LeviEiko.com" target="_blank" rel="noopener noreferrer">
            <section>
                { svgLogo }
            </section>
            <section>
                <h3>
                    built by:
                </h3>
                <h2>L<small>evi</small>E<small>iko.com</small></h2>
            </section>
        </LogoWrapper>
    )
}

const LogoWrapper = styled.a`
    display: inline-flex;
    position: relative;
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    h2 {
        margin: 0;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
        text-align: left;
        letter-spacing: 1px;
        line-height: 80%;
    }
    h3 {
        margin: 0;
        color: #fff;
        font-size: 12px;
        font-weight: 100;
        letter-spacing: 1px;
        line-height: 90%!important;
        text-align: left;
    }

    > section {
        margin-right: 1px;
        svg {
            height: 23px;
            width: 23px;
            margin-top: 0px;
            path {
                fill: #fff;
            }
        }
    }

`;
export default LeviEikoBrand;