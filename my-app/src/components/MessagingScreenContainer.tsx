import React from 'react';
import styled from 'styled-components';
import Message from './Message';


type MessagingScreenContainerProps = {
    // Add your props here
    messages: [string, number][]
};


const MessagingScreenContainer: React.FC<MessagingScreenContainerProps> = ({ messages }) => {

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

    // This is the messages container
    const MessagingContainerDiv = styled.div`
        flex:1;
         border-radius: 0 1rem 1rem 0; 
        overflow:auto; 
        @media (max-width: 768px) {
            width: 100%;   
        }    
        
    `;

    const MessagingContainerOverflowingDiv = styled.div`
        
        
        display:flex;
        flex-direction: column-reverse;
        background-color: rgb(203 213 225);
        border-radius: 1rem;
        padding: 1rem;
         
        @media (max-width: 768px) {
            width: 100%;   
        }    
        
    `; 
    
    // This is the text area (will change, need details)
    const TextingArea = styled.div`
        height: 60px;
        overflow:clip;
        background-color: rgb(250 250 250);
        border-radius:  1rem; 
        `;

    return (
        <MessagingContainerOuterDiv>
            <MessagingContainerDiv>
                <MessagingContainerOverflowingDiv>
                    {
                        messages.map(x => <Message message={x} />)
                    }
                </MessagingContainerOverflowingDiv>
            </MessagingContainerDiv>
            <TextingArea></TextingArea>

        </MessagingContainerOuterDiv>
    );
};

export default MessagingScreenContainer;