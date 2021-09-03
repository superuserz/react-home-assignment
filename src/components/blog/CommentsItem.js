function CommentsItem(props) {
    return (
        <div hidden={props.isVisible}>
            <ul>
                {props.comments.map((item) => (
                    <li key={item.id}>{item.comment}</li>
                ))}
            </ul>
        </div>
    );
}
export default CommentsItem;