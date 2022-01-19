
const CommentBox = ({ commentValue, enterCommentLine, handleCommentValue, submitCommentLine }) => {
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
                /*
                när användaren trycker på enter kallas enterCommentLine-funktionen som passas ner som en prop från Comment/index.js
                */ 
                onKeyPress={enterCommentLine}
                value={commentValue}
                id="comments-input" 
                /*
                varje gång användaren skriver ett tecken i input-fältet, kallas handleCommentValue-funktionen  som passas ner som en prop från Comment/index.js
                */ 
                onChange={handleCommentValue}
                type="text" placeholder="Add a comment..." 
            />
            <button 
                /*
                när användaren trycker "post"-knappen kallas submitCommentLine-funktionen som passas ner som en prop från Comment/index.js
                */ 
                onClick={submitCommentLine} 
                type="submit"     
                className="comments-button"
                /*
                denna funktionen kallas på direkt när komponenten renderar och kollar om det finns några tecken i input-fältet
                */
                id={changeCommentButtonStyle()}
                /*
                denna funktionen kallas på direkt när komponenten renderar och kollar om det finns några tecken i input-fältet och gör knappen klickar eller ej.
                */
                disabled={enableCommentButton()}
            >
                Post
            </button>
        </div>
    )
}

export default CommentBox;