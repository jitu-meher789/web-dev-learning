function List(props) {
  return (
    <ul>
      {props.tasks.map((item, index) => {
        return <ListItem removeTask={props.removeTaskHandler} key={index} taskVal={item} />;
      })}
    </ul>
  );
}
