import { useState } from "react";
import Card from "../ui/Card";
import CommentsItem from "./CommentsItem";

function BlogItem(props) {
    const [hideComments, setHideComments] = useState(props.hideComments);
    let toggleCommentsVisibility = () => setHideComments(!hideComments);

    return (
        <Card>
            <div>
                <button className="button" onClick={toggleCommentsVisibility}>{hideComments ? 'Show Comments' : 'Hide Comments'}</button>
            </div>
            <div>Blog Id : {props.id}</div>
            <div>Title : {props.title}</div>
            <div>Description : {props.description}</div>
            <div>Timestamp : {props.timestamp}</div>
            <CommentsItem comments={props.comments} isVisible={hideComments}></CommentsItem>
        </Card>
    );
}
export default BlogItem;






