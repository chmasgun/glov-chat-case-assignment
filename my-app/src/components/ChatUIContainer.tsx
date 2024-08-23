import React, { useState } from 'react';
import styled from 'styled-components';
import ContactListContainer from './ContactsListContainer';
import MessagingScreenContainer from './MessagingScreenContainer';
 

const messages: [string, number][] =  [["This is the latest message.", 0], ["how are you", 1], ["I'm fine thanks. It's been a long day. How was your day? Was it good? Really curious if this will overflow...", 0], ["how are you", 1], ["I'm fine thanks. It's been a long day. How was your day? Was it good? Really curious if this will overflow...", 0], ["how are you", 1], ["how are you", 1], ["how are you", 1]]

type ChatUIContainerProps = {

};

// The outer container, which changes width value smoothly at 768px
//  adding a fallback to width, in case of clamp not being supported on user's browser
const ChatUIContainerDiv = styled.div`
    width: 736px;
    width: clamp(736px, 80% ,1024px);
    height: min(80vh, 600px);
    background-color: rgb(226 232 240);
    border-radius: 1rem; 
    display:flex;
    overflow-x: hidden;

    @media (max-width: 768px) {
        width: 100%;   
      }    
     
  `;

// The inner container, which handles the (future) sliding of the Contacts-Messages. Transition will be applied.
// Uses grid structure. On a large width, 30% of contacts should be fine. For smaller screens, they becomes equal, making them the same width of their parents.
const ChatUIInnerContainerDiv = styled.div`
       width: 100%; 
       padding: 1rem;
       display:grid;
       grid-template-columns: 3fr 7fr;
       grid-template-rows: minmax(0, 1fr);
       
       gap: 1rem;
        @media (max-width: 768px) {
            min-width: calc(200% - 0rem);  
            transform: translateX(-50%);
            gap: 2rem; 
            grid-template-columns: repeat(2, minmax(0, 1fr));
            }    
        
        `;

const ChatUIContainer: React.FC<ChatUIContainerProps> = () => {






    return (
        <ChatUIContainerDiv>
            <ChatUIInnerContainerDiv>

                <ContactListContainer contactList={["ahmet", "muratcan", "james", "ömer", "b", "c", "a", "b", "c", "a", "b", "c"]}></ContactListContainer>
                <MessagingScreenContainer messages={messages}></MessagingScreenContainer>
            </ChatUIInnerContainerDiv>
        </ChatUIContainerDiv>
    );
};

export default ChatUIContainer;
