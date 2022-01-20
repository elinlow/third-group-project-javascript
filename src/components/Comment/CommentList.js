const CommentList = ({ commentLine }) => {

    return (
        <ul className="comments-list">
            {commentLine.map(comment => {
                return comment.text != '' && (
                    <li className="comment"  
                        key={comment.commentId}
                    >
                        <span>User: {comment.commentId}</span>
                        <p>Comment: {comment.text}</p>
                    </li>
                )})
            }
        </ul>
)};

export default CommentList;