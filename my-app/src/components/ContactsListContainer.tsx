import React from 'react';
import styled from 'styled-components';

type ContactListContainerProps = {
    // Add your props here
    contactList: string[]
};

const ContactListContainer: React.FC<ContactListContainerProps> = ({ contactList }) => {


    // The Contacts div on the left part. Will disappear in small screens

    const ContactListDiv = styled.div`
    
    overflow-y:auto;
    overflow-x:hidden;
    background-color: rgb(203 213 225);
    border-radius: 1rem; 
    

    @media (max-width: 768px) {
        width: 100%;   
      }    
     
  `;


    return (
        <ContactListDiv>
            {
               contactList.map(x => <div style={{height: "60px"}}>{x}</div>)
            }
        </ContactListDiv>
    );
};

export default ContactListContainer;