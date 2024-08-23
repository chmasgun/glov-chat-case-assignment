import React, { useState } from 'react';
import styled from 'styled-components';

type TextingAreaProps = {
    // Add your props here
    setMessages: React.Dispatch<React.SetStateAction<[string, number][]>>;  

};

// This is the text outer container, bottom part
const TextingAreaDiv = styled.div`
    display:flex;
    height: 60px;
    overflow:clip;
    gap: 1rem;
    justify-content:center;
    
    border-radius:  1rem; 
    `;

// Actual text are, input
const TextingInput = styled.input`
    height: 60px;
    flex:1;
    padding: 0 1rem;
    font-size: 1rem;
    overflow:clip;
    background-color: rgb(250 250 250);
    border-radius:  1rem; 
    `;

// Send message button, green colored
const SendMessage = styled.div`
 
    overflow:clip;
    padding: 0 2rem;
    align-content:center;
    background-color: rgb(120 225 120);
    border-radius:  1rem; 
    cursor:pointer;
    transition: background-color 0.5s;
    &:hover{
        background-color: rgb(120 255 120);
    }
    `;

const TextingArea: React.FC<TextingAreaProps> = ({ setMessages }) => {
    const autoCompleteMessages = ["Hello", "How are you?", "Long time no see!", "How was your day?", "Bye!", "See you later!", "I'll get back to you.", "Call me."]


    const [inputValue, setInputValue] = useState<string>(''); // Initialize input value state as empty


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Update input value state on keyboard press
        setInputValue(event.target.value); 
    };

    const handleMessageSend = () => {
        // Concatenates the new messages with the previous messages list. Resets the input
        setMessages((currentMessages) => [[inputValue, 0], ...currentMessages]);
        setInputValue('')
    };


    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // Enter button press for sending, in addition to send button
        if (event.key === 'Enter') {
            handleMessageSend();
        }
    };


    return (

        <TextingAreaDiv>
            {/* input area, also watches for Enter press */}
            <TextingInput
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
            />
            {/* send button */}
            <SendMessage onClick={handleMessageSend}>Send</SendMessage>
        </TextingAreaDiv>
    );
};

export default TextingArea;