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
  
    gap: 1rem;
    justify-content:center;
    
    border-radius:  1rem; 
    `;
const TextingAreaDivExtended = styled.div`
    flex:1;
    display:flex;
    flex-direction: column;
    position: relative; 
    
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


const SuggestionList = styled.span`
    position: absolute;
    top:0%;
    width:100%;
    background-color: rgb(220 220 220);
    list-style: none;
    padding: 0;
    transform: translateY(-100%);
`;

const SuggestionItem = styled.li<{ highlighted: boolean }>`
    color: ${(props) => (props.highlighted ? 'gray' : 'black')};
    cursor: pointer;
    padding: 0.5rem;
`;

const TextingArea: React.FC<TextingAreaProps> = ({ setMessages }) => {
    
    const [suggestions, setSuggestions] = useState<string[]>(["Hello", "How are you?", "Long time no see!", "How was your day?", "Bye!", "See you later!", "I'll get back to you.", "Call me."]);

    const [inputValue, setInputValue] = useState<string>(''); // Initialize input value state as empty
    const [suggestionJustSet, setSuggestionJustSet] = useState<boolean>(false)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Update input value state on keyboard press
        setInputValue(event.target.value);
        setSuggestionJustSet(false);
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
    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
        setSuggestionJustSet(true);
    };

    const filteredSuggestions = suggestions.filter((suggestion) =>
         (!suggestionJustSet && // if suggestion is just clicked, we should not show it again
            inputValue.length>1 && // if the user typed in at least two characters, suggestions might appear
            suggestion.toLowerCase().includes(inputValue.toLowerCase())) 
    );

    return (

        <TextingAreaDiv>
            {/* input zone with suggestions and combo box */}
            <TextingAreaDivExtended>
                {/* input area, also watches for Enter press */}
                <TextingInput
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                />
                {filteredSuggestions.length > 0 && (
                    <SuggestionList>
                        {filteredSuggestions.map((suggestion, index) => (
                            <SuggestionItem
                                key={index}
                                highlighted={suggestion.toLowerCase().startsWith(inputValue.toLowerCase())}
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </SuggestionItem>
                        ))}
                    </SuggestionList>
                )}
            </TextingAreaDivExtended>
            {/* send button */}
            <SendMessage onClick={handleMessageSend}>Send</SendMessage>
        </TextingAreaDiv>
    );
};

export default TextingArea;