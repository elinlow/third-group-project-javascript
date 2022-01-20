const CommentList = ({ commentLine }) => {

    return (
        <ul className="comments-list">
            {commentLine.map(comment => {
                return comment.text != '' && (
                    <li className="comment"  
                        key={comment.commentId}
                    >
                        <span>Comment ID: {comment.commentId}</span>
                        <p>Comment Text: {comment.text}</p>
                    </li>
                )})
            }
        </ul>
)};

export default CommentList;