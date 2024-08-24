import React from 'react';
import styled from 'styled-components';

type ContactListContainerProps = {
    // Add your props here
    contactList: string[];
    selectedContact: string;
    setSelectedContact: React.Dispatch<React.SetStateAction<string>>;
    setMobileContactOn: React.Dispatch<React.SetStateAction<boolean>>;
};

// The Contacts div on the left part. Will disappear in small screens
const ContactListDiv = styled.div`
    
   overflow-y:auto;
   overflow-x:hidden;
   background-color: rgb(203 213 225);
   border-radius: 1rem; 
   box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.15);

   @media (max-width: 768px) {
       width: 100%;   
     }    
    
 `;

// Each individual contact card
const ContactDiv = styled.div<{ $isSelected?: boolean }>`
    height: 60px;
    align-content: center;
    margin: 0.5rem ;
    padding: 0 0.5rem ;
    background-color: ${(props) => (props.$isSelected ? 'rgb(223 243 245)' : 'rgb(223 223 225)')} ;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    border-bottom: 1px solid gray;
    transition: border 0.3s,background-color 0.3s, box-shadow 0.3s;
    border-radius :   0.5rem ;
    cursor:pointer;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    &:hover{
        border-bottom: 1px solid limegreen;
        background-color: rgb(223 253 225);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    }
    @media (max-width: 768px) {
     background-color:rgb(223 223 225);
    }

 `;
const ContactListContainer: React.FC<ContactListContainerProps> = ({ contactList, selectedContact, setSelectedContact, setMobileContactOn}) => { //, setMobileContactOn 


    const handleContactClick = (contactName : string) => {
        setSelectedContact(contactName)
        setMobileContactOn(false) // switch to the messaging UI
    }



    return (
        <ContactListDiv>
            {
                contactList.map((x, i) => <ContactDiv key={i} onClick={() => handleContactClick(x) } $isSelected={selectedContact ===x} >{x}</ContactDiv>)
            }
        </ContactListDiv>
    );
};

export default ContactListContainer;