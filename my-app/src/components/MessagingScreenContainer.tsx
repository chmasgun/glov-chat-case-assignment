import React from 'react';
import styled from 'styled-components';

type MessagingScreenContainerProps = {
    // Add your props here
    messages: [string, number][]
};


const MessagingScreenContainer: React.FC<MessagingScreenContainerProps> = ({ messages }) => {

    // The main messaging part on the right side.
    // This is the outer div that keeps texting area and messages together
    const MessagingContainerOuterDiv = styled.div`
        overflow:clip;
        display:flex;
        flex-direction: column;
        border-radius: 0 1rem 1rem 0; 
        
        @media (max-width: 768px) {
            width: 100%;   
            }    
        
        `;

    // This is the messages container
    const MessagingContainerDiv = styled.div`
        flex:1;
        overflow:clip;
        display:flex;
        flex-direction: column-reverse;
        background-color: rgb(203 213 225);
        border-radius: 1rem;

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
                {
                    messages.map(x => <div style={{ height: "100px" }}>{x}</div>)
                }
            </MessagingContainerDiv>
            <TextingArea></TextingArea>

        </MessagingContainerOuterDiv>
    );
};

export default MessagingScreenContainer;