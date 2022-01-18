import React, { Component } from 'react';

class CommentBox extends Component {
    changeCommentButtonStyle = () => {
        const { commentValue } = this.props;
        return (commentValue ? "comments-button-enabled" : 
        "comments-button-disabled");
    }

    enableCommentButton = () => {
        const { commentValue } = this.props;
        return (commentValue ? false : true);
    }

    render() {
        const { commentValue, handleCommentValue, enterCommentLine } = this.props;

        return (
            <div className="comments-box">
                <input 
                    onKeyPress={enterCommentLine} 
                    value={commentValue}
                    id="comments-input" 
                    onChange={(e) => {
                        handleCommentValue();
                        console.log(e)
                    }}
                    type="text" 
                    placeholder="Add a comment..." 
                />
                <button 
                    onClick={this.props.submitCommentLine} 
                    type="submit"     
                    className="comments-button"
                    id={this.changeCommentButtonStyle()}
                    disabled={this.enableCommentButton()}
                >
                    Post
                </button>
            </div>
        )
    }
}

export default CommentBox;
