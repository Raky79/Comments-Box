import { deleteComment } from "../api";

const Comment  = ({comment, replies, currentUserId, deleteComment}) => {
  const fiveMinutes = 300000; 
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;  // we disable deleting and editing comments after five minutes the comment was created, to not loose the context // new Date(comment.createdAt) --> the time when the comment was created ("new Date" means Now)
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed; // we don't allow editing if this time has not passed (we can only edit if the time is less than 5 minutes)
  const canDelete = currentUserId === comment.userId && !timePassed;  // timePassed --> amount of time that passed after the comment was created 
  const createdAt = new Date(comment.createdAt).toLocaleDateString(); // this is to make  the date User Friendly  (before was: "2021-08-16T23:00:33.010+02:00") 
  return (
     <div className="comment">
      <div className="comment-image-container">
        <img src="user-icon.png" alt="user image"/>
      </div>
      <div className="comment-right-part">
        <div className="comment-content">
          <div className="comment-author">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        <div className="comment-text">{comment.body}</div>
        <div className="comment-actions">
          {canReply && <div className="comment-action">Reply</div>}
          {canEdit && <div className="comment-action">Edit</div>}
          {canDelete && <div className="comment-action" onClick={() => deleteComment(comment.id)}>Delete</div>}
        </div>
        {replies.length > 0 && (          // we want to render our list of replies, and we know that replies is an array, this is why we want to check if replies is > 0 we want to render our markuo 
          <div className="replies">
            {replies.map(reply => (     
           <Comment 
           comment={reply} 
           key={reply.id} 
           replies={[]} 
           currentUserId={currentUserId} 
           deleteComment={deleteComment}/>     // each reply is a comment which is why we can call the comment here and the comment rendered will be our reply comment={reply}  
        ))}
          </div>
        )}
      </div>
     </div>
    );
  }
  
  export default Comment;