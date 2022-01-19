import React, { Component } from 'react';

const CommentBox = () => {
    const changeCommentButtonStyle = () => {
        const { commentValue } = this.props;
        return (commentValue ? "comments-button-enabled" : 
        "comments-button-disabled");
    }

    const enableCommentButton = () => {
        const { commentValue } = this.props;
        return (commentValue ? false : true);
    }
    
    const { commentValue, handleCommentValue, enterCommentLine } = this.props;

    return (
        <div className="comments-box">
            <input 
                onKeyPress={enterCommentLine} 
                value={commentValue}
                id="comments-input" 
                onChange={(e) => {
                    handleCommentValue(e);
                }}
                type="text" 
                placeholder="Add a comment..." 
            />
            <button 
                onClick={this.props.submitCommentLine} 
                type="submit"     
                className="comments-button"
                id={this.changeCommentButtonStyle()}
            >
                Post
            </button>
        </div>
    )
}

export default CommentBox;
