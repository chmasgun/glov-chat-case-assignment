import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Message from './Message';
import TextingArea from './TextingArea';

type MessagingScreenContainerProps = {
    // Add your props here
    messages: [string, number][];
    setMessages: React.Dispatch<React.SetStateAction<Record<string, [string, number][]>>>;  
    selectedContact : string;
    setMobileContactOn: React.Dispatch<React.SetStateAction<boolean>>;
};

// The main messaging part on the right side.
// This is the outer div that keeps texting area and messages together
const MessagingContainerOuterDiv = styled.div`
         
        display:flex;
        flex-direction: column;
        border-radius: 0 1rem 1rem 0; 
        overflow:clip; 
        gap: 1rem;
        @media (max-width: 768px) {
            width: 100%;   
            }    
        
        `;

// This is the messages container, that has a fixed height, overflow clip
const MessagingContainerDiv = styled.div`
        flex:1;
        display:flex;
        border-radius: 1rem; 
        overflow:auto; 
        padding: 1rem;
        background-color: rgb(203 213 225);
        @media (max-width: 768px) {
            width: 100%;   
        }    
        
    `;
// This is the messages container that overflows, and allows scrolling
const MessagingContainerOverflowingDiv = styled.div`
        
        flex:1;
        display:flex;
        flex-direction: column-reverse;
        
        border-radius: 1rem;
        
        gap: 1rem;
        justify-content: flex-end;
        @media (max-width: 768px) {
            width: 100%;   
        }    
        
    `;
// Messaging header container
const MessagingHeader = styled.div`
        height:30px;
        display:flex;
       
    `;

// The back button inside the header, visible only on small screens
const BackButton = styled.button`
        width:50px;
        display:none;
        background-color: lightgray;  
        border-radius: 0.5rem;
        @media (max-width: 768px) {
           display:block;  
        }  
    `
// Messaging contact div
const MessagingContactName = styled.div`
         flex:1;
         align-content:center;
    `
const MessagingScreenContainer: React.FC<MessagingScreenContainerProps> = ({ messages, setMessages, selectedContact, setMobileContactOn }) => {

    const messagingContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Scroll to the bottom whenever messages change
        if (messagingContainerRef.current) {
          messagingContainerRef.current.scrollTop = messagingContainerRef.current.scrollHeight;
        }
      }, [messages]);


    return (
        <MessagingContainerOuterDiv>
            {/* top header*/}
            <MessagingHeader > 
                <BackButton onClick={() => setMobileContactOn(true)}>{'<'}</BackButton>
                <MessagingContactName>{selectedContact}</MessagingContactName>
            </MessagingHeader>
            
             {/* container fixed height, overflow auto */}
            <MessagingContainerDiv ref={messagingContainerRef}>
                {/* container variable height, overflows*/}
                <MessagingContainerOverflowingDiv>
                    {
                    /* each message*/
                    messages.map((x,i) => <Message key={i} message={x} />)
                    }
                   
                </MessagingContainerOverflowingDiv>
            </MessagingContainerDiv>

            {/* text area */}
            <TextingArea setMessages={setMessages} selectedContact={selectedContact}></TextingArea>

        </MessagingContainerOuterDiv>
    );
};

export default MessagingScreenContainer;