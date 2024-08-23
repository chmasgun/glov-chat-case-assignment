import React from 'react';
import styled from 'styled-components';

type ChatUIContainerProps = {
  // Add your props here
};

const ChatUIContainer: React.FC< ChatUIContainerProps> = ({ }) => {

    const Box1 = styled.div`
    width: 736px;
    height: min(80vh, 600px);
    background-color: rgb(226 232 240);
    border-radius: 1rem; 

    @media (max-width: 768px) {
        width: 100%;   
      }    
     
  `;
    

  return (
    <Box1/>
  );
};

export default ChatUIContainer;
