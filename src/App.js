import React from 'react';
import styled from 'styled-components';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #121212;
  height: 100vh;
  padding: 20px;
`;

const LeftPanel = styled.div`
  flex: 1;
  background-color: #333;
  margin-right: 20px;
  border-radius: 10px;
  padding: 20px;
  color: white;
`;

const RightPanel = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function App() {
  return (
    <Container>
      <LeftPanel>
        <h2>Official Instructions</h2>
        <p>1. Keep the left half of the screen responsive for laptops</p>
        <p>2. You can know about me by goining through About Me section</p>
        <p>3. You can aslo go through my projects i have done and technologies is used for them  by switching to Experiences</p>
        <p>4. Recommended section will get to know about my skills and learned courses</p>
        <p>5. You can Add any image using the add image button.After clicking on add image button an There will be a pop up message which allows you to enter the url of any pictuter you want to add to the web page</p>
        <p>6. Delete icon will be displayed on top of the every image it allows you to remove the image</p>
        {}
      </LeftPanel>
      <RightPanel>
        <Tabs />
        <Gallery />
      </RightPanel>
    </Container>
  );
}

export default App;
