import React from 'react';
import styled, { keyframes } from 'styled-components';

const PoppingCircle = ({color, size}) => {
    return <Wrapper style={{ width: size, height: size, backgroundColor: color, zIndex: 0}}></Wrapper>
}

const scaleToFade = keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
    }
    50% {
        opacity: 0.5;
        transform: scale(1);
    }

    100% {
        opacity: 0;
    }
`;

const Wrapper = styled.div`
    position: absolute;
    border-radius: 50%;
    animation: ${scaleToFade} 500ms forwards;
`;

export default PoppingCircle;