import React from 'react';
import styled from 'styled-components';
import ContactListContainer from './ContactsListContainer';



type ChatUIContainerProps = {
    
};

const ChatUIContainer: React.FC<ChatUIContainerProps> = ( ) => {

    // The outer container, which changes width value smoothly at 768px

    const ChatUIContainerDiv = styled.div`
    width: 736px;
    height: min(80vh, 600px);
    background-color: rgb(226 232 240);
    border-radius: 1rem; 
    display:flex;
    padding: 1rem;

    @media (max-width: 768px) {
        width: 100%;   
      }    
     
  `;


    return (
        <ChatUIContainerDiv>
            <ContactListContainer contactList={ ["ahmet","muratcan","james","ömer","b","c","a","b","c","a","b","c"]}></ContactListContainer>
        </ChatUIContainerDiv>
    );
};

export default ChatUIContainer;
