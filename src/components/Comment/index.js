import React, { Component } from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

let commentCounter = 1;

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            commentValue: "",
            commentLine: [
                { 
                    commentId: null, 
                    text: "", 
                }
            ],
        };
    }

    /* 
    denna funktionen uppdaterar this.state.commentValue 
    med det som användaren fyller in i <input />
    */
    handleCommentValue = event => {
        this.setState({
            commentValue: event.target.value,
        });
    };

    setCommentLine = () => {
        this.setState({
            commentLine: [
                ...this.state.commentLine,
                { 
                    commentId: commentCounter++, 
                    text: this.state.commentValue 
                }
            ],
            commentValue: ""
        })
    };

    submitCommentLine = () => {
        this.setCommentLine();
    };

    enterCommentLine = event => {
        console.log(event.charCode)
        if (event.charCode === 13 && event.target.value) {
            this.setCommentLine();
        }
    }

    render() {
        return (
            <>
                <CommentBox
                    commentValue={this.state.commentValue}
                    handleCommentValue={this.handleCommentValue}
                    enterCommentLine={this.enterCommentLine}
                    submitCommentLine={this.submitCommentLine}
                />
                <CommentList 
                    commentLine={this.state.commentLine}
                />
            </>
        )
    }
}

export default Comment;
