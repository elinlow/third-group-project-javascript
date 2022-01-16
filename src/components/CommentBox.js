import React from 'react';

class CommentBox extends Component {
    render() {
        const { commentValue, handleCommentValue, 
        enterCommentLine, submitCommentLine} = this.props;
        const enableCommentButton = () => {
        return (commentValue ? false : true);
    }

    const changeCommentButtonStyle = () => {
        return (commentValue ? "comments-button-enabled" : 
        "comments-button-disabled");
    }

    return (
        <div className="comments-box">
            <input 
                onKeyPress={enterCommentLine} 
                value={commentValue}
                id="comments-input" 
                onChange={handleCommentValue}
                type="text" 
                placeholder="Add a comment..." 
            />
            <button 
                onClick={submitCommentLine} 
                type="submit"     
                className="comments-button"
                id={changeCommentButtonStyle()}
                disabled={enableCommentButton()}
            >
                Post
            </button>
        </div>
    )}
}

export default CommentBox;
