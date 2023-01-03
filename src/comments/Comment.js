
const Comment  = ({comment, replies}) => {
    return (
     <div className="comment">
      <div className="comment-image-container">
        <img src="user-icon.png" alt="user image"/>
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{comment.createdAt}</div>
        </div>
        <div className="comment-text">{comment.body}</div>
        {replies.length > 0 && (          // we want to render our list of replies, and we know that replies is an array, this is why we want to check if replies is > 0 we want to render our markuo 
          <div className="replies">
            {replies.map(reply => (     
           <Comment comment={reply} key={reply.id} replies={[]}/>     // each reply is a comment which is why we can call the comment here and the comment rendered will be our reply comment={reply}  
        ))}
          </div>
        )}
      </div>
     </div>
    );
  }
  
  export default Comment;