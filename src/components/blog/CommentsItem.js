

//A functional child component
function CommentsItem(props) {
    return (   
            <div hidden={props.isVisible}>  
                <ul>
                    {props.comments.map((item,index) => (
                        <li key={index}>{item.comment}</li>
                    ))}
                </ul>
            </div>  
    );
}
export default CommentsItem;