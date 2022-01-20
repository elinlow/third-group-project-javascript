const CommentList = ({ commentLine }) => {
    return (
        <ul>
            {commentLine.map(comment => {
                return comment.text != '' && (
                    <li 
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