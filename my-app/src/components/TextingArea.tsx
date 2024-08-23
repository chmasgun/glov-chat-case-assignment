import React from 'react';
import styled from 'styled-components';

type TextingAreaProps = {
    // Add your props here
     
};

// This is the text area (will change, need details)
const TextingAreaDiv = styled.div`
height: 60px;
overflow:clip;
background-color: rgb(250 250 250);
border-radius:  1rem; 
`;

const TextingInput = styled.input`
height: 60px;
overflow:clip;
background-color: rgb(250 250 250);
border-radius:  1rem; 
`;

const TextingArea: React.FC<TextingAreaProps> = ({   }) => {

    const autoCompleteMessages = ["Hello", "How are you?", "Long time no see!", "How was your day?", "Bye!", "See you later!", "I'll get back to you.", "Call me."]

 


    return (
         
        <TextingAreaDiv>
            <TextingInput></TextingInput>

        </TextingAreaDiv>
    );
};

export default TextingArea;