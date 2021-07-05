import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(false)

function handleNewsletterChange(e) {
  setNewsletter(e.target.checked)
}

  function handleFirstNameChange(e) {
  setFirstName(e.target.value)
}

function handleLastNameChange(e) {
  setLastName(e.target.value)
}


  return (
    <div>
      <Form 
        firstName={firstName}
        lastName={lastName}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}

        newsletter={newsletter}
        handleNewsletterChange={handleNewsletterChange}
       /> 
       <DisplayData firstName={firstName} lastName={lastName} />
    </div>
  );
}

export default ParentComponent;
