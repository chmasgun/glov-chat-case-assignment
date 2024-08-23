import React from 'react';
import styled from 'styled-components';

type MessageProps = {
    // Add your props here
    message: [string, number]
};


const Message: React.FC<MessageProps> = ({ message }) => {

    // second arguments defines the sender, either we sent it or received

    const MessageContainerDiv = styled.div`
        
        display: flex;
        
        position:relative;
        
        min-height: 80px;
     

        `;


    // Each individual message
    const MessageDiv = styled.div`
        overflow:clip;
        width:75%;
        text-align:center;
        align-content:center;
        padding: 1rem;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3);
        border-radius: 1rem; 
        margin-left : ${message[1] ? "0":"auto"} ;
        background-color : ${message[1] ? "rgb(214 211 209);":" rgb(168 162 158);"};
        `;



    return (
        <MessageContainerDiv>

            <MessageDiv>
                {message[0]}

            </MessageDiv>
        </MessageContainerDiv>
    );
};

export default Message;