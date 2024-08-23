import React from 'react';
import styled from 'styled-components';

type TextingAreaProps = {
    // Add your props here
     
};


const TextingArea: React.FC<TextingAreaProps> = ({   }) => {

    // second arguments defines the sender, either we sent it or received

     // This is the text area (will change, need details)
     const TextingArea = styled.div`
     height: 60px;
     overflow:clip;
     background-color: rgb(250 250 250);
     border-radius:  1rem; 
     `;

 


    return (
        <TextingArea/>
 
    );
};

export default TextingArea;