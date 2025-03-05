import React from 'react';
import { Canvas } from '@react-three/fiber';
import Earth from './components/Earth';
import SpeechBubble from './components/SpeechBubble';
import styled from "styled-components";

const CanvasContainer = styled.div`
  width: 500px;  /* 원하는 너비 */
  height: 500px; /* 원하는 높이 */
`;

function App() {
  return (
      <div>
        <CanvasContainer>
          <Canvas>
            <Earth />
          </Canvas>
        </CanvasContainer>
        <SpeechBubble />
      </div>
  );
}

export default App;
