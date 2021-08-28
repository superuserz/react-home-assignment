import { Component} from "react";
import Card from "../ui/Card";
import CommentsItem from "./CommentsItem";

class BlogItem extends Component {

    //props needs to be passed into constructor.
    constructor(props) {
        super(props);

        //this will tell react to create a manageable object to store the state of a prop variable.
        this.state = {
            hideComments: this.props.hideComments
        };  //this object can hold N number of variables.
    }

    //React provides a default method to update the state of a managed object.
    toggleCommentsVisibility() {
        this.setState((curState) => //here we are just passing the current state object holding the current values
        {
            return { hideComments: !curState.hideComments} //any key returned from here will be ovewritten in the state object.
        });
    }

    //render method has to be implemented for all classical components.
    render() {
        console.log(this.props);
return  <Card>
            <div>Id : {this.props.id}</div>
            <div>Title : {this.props.title}</div>
            <div>Description : {this.props.description}</div>
            <CommentsItem comments={this.props.comments} isVisible={this.state.hideComments}></CommentsItem>
            <button className="button" onClick={this.toggleCommentsVisibility.bind(this)}>{this.state.hideComments ? 'Show Comments' : 'Hide Comments'}</button>
        </Card>
    }
}
export default BlogItem;

/*
*Equivalent Functional Component
*
*
*
function Blogitem(props) {
    const [hideComments, setHideComments] = useState(props.hideComments);  //we cannot use useState in a classical Component
    let toggleCommentsVisibility = () => setHideComments(!hideComments);

    return (
        <Card>
            <div>Title : {props.title}</div>
            <div>Description : {props.description}</div>
            <CommentsItem comments={props.comments} isVisible={hideComments}></CommentsItem>
            <button className="button" onClick={toggleCommentsVisibility}>Show Comments</button>
        </Card>
    );
}
*/





