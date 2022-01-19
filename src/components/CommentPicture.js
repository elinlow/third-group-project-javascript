import React, { useState } from 'react';
import CommentBox from './CommentBox';

let commentCounter = 1;

const CommentPicture = () => {
    const [comment, updateComment] = useState({
        commentValue: "",
        commentLine: [
            {
                commentId: "",
                text: ""
            }
        ]
    });

    const handleCommentValue = (e) => {
        updateComment({
            commentValue: e.target.value,
            ...comment
        })
    };

    const setCommentLine = () => {
        updateComment({
            commentLine: [
                { commentId: commentCounter++, text: comment.commentValue }
            ],
            commentValue: "",
        })
    };

    const submitCommentLine = (e) => {
        e.preventDefault();
        setCommentLine();
    };

    const changeCommentButtonStyle = () => {
        return (comment.commentValue ? "comments-button-enabled" : 
        "comments-button-disabled");
    }

    const enableCommentButton = () => {
        return (comment.commentValue ? false : true);
    }

    const enterCommentLine = (e) => {
        if (e.charCode === 13) {
            setCommentLine();
        }
    
        return (
            <div>
                <div className="comments-box">
                    <input 
                        onKeyPress={e => enterCommentLine(e)} 
                        value={comment.commentValue}
                        id="comments-input" 
                        onChange={e => handleCommentValue(e)}
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
                        Post123
                    </button>
                </div>
            </div>  
        )
    }

    return (
        <>
            <CommentBox
                // commentValue={comment.commentValue}
                // handleCommentValue={(e) => handleCommentValue(e)}
                // enterCommentLine={e => enterCommentLine(e)}
                // submitCommentLine={e => submitCommentLine(e)}
            /> 
        </>
    );
};

export default CommentPicture;