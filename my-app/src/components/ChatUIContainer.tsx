import React from 'react';
import styled from 'styled-components';
import ContactListContainer from './ContactsListContainer';
import MessagingScreenContainer from './MessagingScreenContainer';


type ChatUIContainerProps = {

};

const ChatUIContainer: React.FC<ChatUIContainerProps> = () => {

    // The outer container, which changes width value smoothly at 768px

    const ChatUIContainerDiv = styled.div`
    width: 736px;
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
       gap: 1rem;
        @media (max-width: 768px) {
            min-width: calc(200% - 2rem);  
            gap: 2rem; 
            grid-template-columns: repeat(2, minmax(0, 1fr));
            }    
        
        `;



    return (
        <ChatUIContainerDiv>
            <ChatUIInnerContainerDiv>

                <ContactListContainer contactList={["ahmet", "muratcan", "james", "ömer", "b", "c", "a", "b", "c", "a", "b", "c"]}></ContactListContainer>
                <MessagingScreenContainer messages={[ ["how are you", 0], ["I'm fine thanks",1]]}></MessagingScreenContainer>
            </ChatUIInnerContainerDiv>
        </ChatUIContainerDiv>
    );
};

export default ChatUIContainer;
