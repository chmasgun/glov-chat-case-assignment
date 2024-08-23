import React from 'react';
import styled from 'styled-components';

type MessageProps = {
    // Add your props here
    message: [string, number]
};
// second arguments defines the sender, either we sent it or received

const MessageContainerDiv = styled.div`   
        display: flex;

        &:first-child{
            padding-bottom : 1rem;
        }

        `;


        
// Each individual message
const MessageDiv = styled.div<{ $sender?: number }>`
    overflow:clip;
    max-width: 75%;
        
    align-content:center;
    padding: 1rem;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3);
    border-radius: 1rem; 
    text-align: left;
    margin-left : ${(props) => (props.$sender ? '0' : 'auto')} ;
    background-color : ${(props) => (props.$sender ? 'rgb(214, 211, 209)' : 'rgb(168, 162, 158)')};
    `;





const Message: React.FC<MessageProps> = ({ message }) => {


    

    return (
        <MessageContainerDiv>

            <MessageDiv $sender={message[1]}>
                {message[0]}

            </MessageDiv>
        </MessageContainerDiv>
    );
};

export default Message;