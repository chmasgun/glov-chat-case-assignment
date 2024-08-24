import React, { useState } from 'react';
import { TextingAreaDiv, TextingAreaDivExtended, TextingInput, SendMessage, SuggestionList, SuggestionItem, ComboBoxList, ComboBoxItem, PlaceholderDiv } from './TextAreaStyles';
import useImageFetch from './useImageFetch';

type TextingAreaProps = {
    // Add your props here
    setMessages: React.Dispatch<React.SetStateAction<Record<string, [string, number][]>>>;
    selectedContact: string;
};



const TextingArea: React.FC<TextingAreaProps> = ({ setMessages, selectedContact }) => {

    const [suggestions, setSuggestions] = useState<string[]>(["Hello", "How are you?", "Long time no see!", "How was your day?", "Bye!", "See you later!", "I'll get back to you.", "Call me.", "This is", "I'm tired.", "Shall we", "Happy birthday to you!", "Sorry!", "How's it going?"]);
    const comboBoxOptions = ["I'm busy", "How are you?", "In a meeting", "Let's talk later", "See you!"]

    const [inputValue, setInputValue] = useState<string>(''); // Initialize input value state as empty
    const [suggestionJustSet, setSuggestionJustSet] = useState<boolean>(false)
    const [comboBoxOpen, setComboBoxOpen] = useState<boolean>(false)

    // image related states and custom hook 
    const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false)
    const [imageInput, setImageInput] = useState<number>(0)
    const { imageData, loading, error } = useImageFetch(imageInput);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Update input value state on keyboard press
        setInputValue(event.target.value);
        setSuggestionJustSet(false);
        checkForComboAndImageBox(event.target.value, setComboBoxOpen, setImageBoxOpen)
    };

    const handleMessageSend = () => {
        // Concatenates the new messages with the previous messages list. Resets the input
        setMessages((currentMessages) => {
            currentMessages[selectedContact] = [[inputValue, 0], ...currentMessages[selectedContact]]
            return { ...currentMessages }
        });
        setInputValue('')
    };


    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // Enter button press for sending, in addition to send button
        if (event.key === 'Enter') {
            handleMessageSend();
        // Tab button to take the first auto-complete suggestion as the new input value
        }if (event.key === 'Tab') {
            event.preventDefault() // without this line, the input value gets out of focus, the user cannot click Enter button subsequently
            handleSuggestionClick(filteredSuggestions[0]);
        }
    };

    // 1 autocomplete function and 1 variable update below 
    const handleSuggestionClick = (suggestion: string) => {
        // When an autocomplete suggestion is clicked out of the list, it is set as new input value, and temporarily disables suggestion list
        setInputValue(suggestion);
        setSuggestionJustSet(true);
    };
    const filteredSuggestions = suggestions.filter((suggestion) =>
    (!suggestionJustSet && // if suggestion is just clicked, we should not show it again
        inputValue.length > 1 && // if the user typed in at least two characters, suggestions might appear
        suggestion.toLowerCase().startsWith(inputValue.toLowerCase()))
    );


    // 2 Combo box function below
    const checkForComboAndImageBox = (inputText: string, setComboBoxOpen: React.Dispatch<React.SetStateAction<boolean>>, setImageBoxOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
        // if the input is /select, we need to open to combo box
        setComboBoxOpen(inputText === "/select")

        // image regexp to detect image string and the number
        const image_regexp = /\/image (\d+)/;
        const match = inputText.match(image_regexp)        
        if (match) {
            setImageBoxOpen(true)
            setImageInput(parseInt(match[1]))
        }else{
            setImageBoxOpen(false)
        }

    };
    const handleComboBoxClick = (boxItem: string) => {
        // Very similar to handleMessageSend, only difference is that I close combo box
        // I had to make this a separate function because I need boxItem as input.
        setMessages((currentMessages) => {
            currentMessages[selectedContact] = [[boxItem, 0], ...currentMessages[selectedContact]]
            return { ...currentMessages }
        });
        setInputValue('')
        setComboBoxOpen(false)
    };

    console.log(loading)
    return (

        <TextingAreaDiv>
            {/* input zone with suggestions and combo box */}
            <TextingAreaDivExtended>
                {/* input area, also watches for Enter press */}
                <TextingInput
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message..."
                />
                {/* Autocomplete suggestion area. Only if there are suggestions */}
                {filteredSuggestions.length > 0 && (
                    <SuggestionList>
                        {filteredSuggestions.map((suggestion, index) => (
                            <SuggestionItem
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </SuggestionItem>
                        ))}
                    </SuggestionList>
                )}
                {/* Combo box area. Only if combo box is set to open*/}
                {
                    comboBoxOpen && (
                        <ComboBoxList>
                            {comboBoxOptions.map((boxItem, index) => (
                                <ComboBoxItem
                                    key={index}
                                    onClick={() => handleComboBoxClick(boxItem)}
                                >
                                    {boxItem}
                                </ComboBoxItem>
                            ))}
                        </ComboBoxList>
                    )
                }
                {/* Image area, a placeholder div for loading, error message if any, and images*/}
                {
                    imageBoxOpen && (
                        <ComboBoxList>
                            {
                                error ? <div>An error occurred, please try again. {error}</div> : 
                                loading ? <PlaceholderDiv ></PlaceholderDiv>:
                                <img src={imageData || undefined} alt="Fetched Image" />
                            }
                        </ComboBoxList>
                    )
                }
            </TextingAreaDivExtended>
            {/* send button */}
            <SendMessage onClick={handleMessageSend}>Send</SendMessage>
        </TextingAreaDiv>
    );
};

export default TextingArea;