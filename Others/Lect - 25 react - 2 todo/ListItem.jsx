function ListItem (props) {
    return (
        <li>
            <span>{props.taskVal}</span>
            <button onClick={() => {
                props.removeTask(props.taskVal);
            }}>X</button> 
        </li>
    );
} 