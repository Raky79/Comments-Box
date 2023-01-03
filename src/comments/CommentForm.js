import { useState } from "react";

const CommentForm  = ({handleSubmit, submitLabel}) => {    // that we created in the Comments component
  const[text, setText] = useState("");   // we create the state for the text
  const isTextareaDisabled = text.length === 0;    // this disables the button if we don't have any text   
  const onSubmit = event => {
    event.preventDefault();       // so our form won't be submitted by default 
    handleSubmit(text);
    setText("");        // to clean our textarea
  };
    return (
     <form onSubmit={onSubmit}>
     {/* the value inside the textarea will be sync with our state ----> setText(e.target.value)*/}
      <textarea className="comment-form-textarea" value={text} onChange={(e) => setText(e.target.value)}/> 
      {/* this disables the button if we don't have any text ---> disabled={isTextareaDisabled} */}
       <button className="comment-form-button" disabled={isTextareaDisabled}>{submitLabel}</button>  
      </form>
    );
  };
  
  export default CommentForm;