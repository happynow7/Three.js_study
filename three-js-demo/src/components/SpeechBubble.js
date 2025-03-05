import React from 'react';
import styled from 'styled-components';

const BubbleContainer = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    margin-top: 20px;
`;

const BubbleBody = styled.div`
    width: 100%;
    height: 100%;
    background-color: #674FDC;
`;

const BubbleTriangle = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0px 50px 50px 50px;
    border-color: transparent transparent #674FDC transparent;
    position: absolute;
    bottom: -50px; /* 말풍선 꼬리 위치 조절 */
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
`;

const SpeechBubble = () => {
    return (
        <BubbleContainer>
            <BubbleBody/>
            <BubbleTriangle/>
        </BubbleContainer>
    );
};

export default SpeechBubble;
