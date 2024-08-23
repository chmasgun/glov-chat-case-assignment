import React from 'react';
import styled from 'styled-components';

type MessageProps = {
    // Add your props here
    message: [string,number]
};


const Message: React.FC<MessageProps> = ({ message }) => {

    // second arguments defines the sender, either we sent it or received



    // Each individual message
    const MessageDiv = styled.div`
        overflow:clip;
        display:flex;
        height: 500px;
        flex-direction: column;
        border-radius: 0 1rem 1rem 0; 
        
        @media (max-width: 768px) {
            width: 100%;   
            }    
        
        `;

     

    return (
        <MessageDiv>
            {message}

        </MessageDiv>
    );
};

export default Message;