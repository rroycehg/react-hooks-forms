function Form(props) {

    return(
     <div>
        <form>
         <label>Subscribe to Our Newsletter?</label>
           <input 
            type="checkbox"
            id="newsletter"
            onChange={props.handleNewsletterChange}
            checked={props.newsletter}
            />
        </form>
        
        <form>
          <input type="text" onChange={props.handleFirstNameChange} value={props.firstName} />
          <input type="text" onChange={props.handleLastNameChange }value={props.lastName} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}

export default Form