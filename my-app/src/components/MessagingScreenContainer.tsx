import React from 'react';
import styled from 'styled-components';
import Message from './Message';
import TextingArea from './TextingArea';

type MessagingScreenContainerProps = {
    // Add your props here
    messages: [string, number][]
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

// This is the messages container
const MessagingContainerDiv = styled.div`
        flex:1;
        display:flex;
        border-radius: 0 1rem 1rem 0; 
        overflow:auto; 
        padding: 1rem;
        background-color: rgb(203 213 225);
        @media (max-width: 768px) {
            width: 100%;   
        }    
        
    `;

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

const MessagingScreenContainer: React.FC<MessagingScreenContainerProps> = ({ messages }) => {





    return (
        <MessagingContainerOuterDiv>
            <MessagingContainerDiv>
                <MessagingContainerOverflowingDiv>
                    {
                        messages.map((x,i) => <Message key={i} message={x} />)
                    }
                </MessagingContainerOverflowingDiv>
            </MessagingContainerDiv>

            <TextingArea></TextingArea>

        </MessagingContainerOuterDiv>
    );
};

export default MessagingScreenContainer;