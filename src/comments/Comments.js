import { useState, useEffect } from "react";
import {getComments as getCommentsApi} from '../api';
import Comment from './Comment'; 

const Comments  = ({currentUserId}) => {     // we need to pass in our props the currentUserId (in App.js -- <Comments currentUserId="1"/>) which will pass from our parent
    
    const [backendComments, setbackendComments] = useState([]);  // the state where we will store all the comments we get from the backend . An empty array by default as we don't have any data and the backend comments are blank 
   
    const rootComments = backendComments.filter(
        backendComment => backendComment.parentId === null
        );              // we take this comments with parentId === null which means this comments don't have parentId which is why we are filtering by this predicate(a function that returns a single TRUE or FALSE) [backendComment.parentId === null)], and we are accessing this backendComment 
    
    // We need to create a function which returns replies for an specific comment: 
    const getReplies = commentId => {
        return backendComments.filter(backendComment => backendComment.parentId === commentId) // we are getting the array of our replies but we want the newest comments to be on the top 
    }

    useEffect(() => {
        getCommentsApi().then(data => {      //the data will be the array of the backendComments
            setbackendComments(data);        // this is why here we can set the data we got from the backend
        })

    }, [])

    return (
      <div className="comments">
       <h3 className="comments-title">Comments</h3>
       {/* the container for the list of comments: */}
       <div className="comments-container">
       {/* and inside we want map through our comments and some of the comments are actuallly replies, so here we must first of all get our roots for comments and then render 
       their replies this is why on the line 8 we have to create a new variable rootComments */}
       {rootComments.map(rootComment => (
        <Comment key={rootComment.id} comment= {rootComment}/>
       ))}      
       </div>   
      </div>
    );
  }
  
  export default Comments;






  //Deleted from line 29 , previous code : 
    // <div key={rootComment.id}>    we need to provide an unique id, which why <div key={rootComment.id}>
        // inside we can get some markup for this route comment i.e. {rootComment.body}  because now body is our text
    //  {rootComment.body}    
    //     </div> 