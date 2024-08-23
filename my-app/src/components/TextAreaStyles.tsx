import styled from 'styled-components';

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
    min-width: 0px;
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
    z-index: 10;
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

// Autocomplete suggestions container
const SuggestionList = styled.span`
    overflow:clip;
    position: absolute;
    top:0%;
    width:100%;
    background-color: rgb(220 220 220);
    list-style: none;
    padding: 0;
    padding-bottom: 2rem;
    z-index:0;
    transform: translateY(calc(-100% + 2rem));
    border-radius: 1rem 1rem 0 0;
    border : 1px solid gray
`;
// Autocomplete suggestion elements
const SuggestionItem = styled.li`
    color: gray;
    cursor: pointer;
    padding: 0.5rem;
    border-bottom: 1px solid gray;
    &:last-child{
    border-bottom: 0;
    }
     &:hover{
        background-color: rgb(230 235 230);
        color: #222;
    }
`;

// Combo box elements container. Same with autocomplete container, now
const ComboBoxList = styled.span`
    overflow:clip;
    position: absolute;
    top:0%;
    width:100%;
    background-color: rgb(220 220 220);
    list-style: none;
    padding: 0;
    padding-bottom: 2rem;
    z-index:0;
    transform: translateY(calc(-100% + 2rem));
    border-radius: 1rem 1rem 0 0;
    border : 1px solid gray
`;
// Combo box elements. Same with autocomplete elements, now
const ComboBoxItem = styled.li`
    color: gray;
    cursor: pointer;
    padding: 0.5rem;
    border-bottom: 1px solid gray;
    &:last-child{
    border-bottom: 0;
    }
     &:hover{
        background-color: rgb(230 235 230);
        color: #222;
    }
`;


export {TextingAreaDiv, TextingAreaDivExtended, TextingInput, SendMessage, SuggestionList, SuggestionItem, ComboBoxList, ComboBoxItem}