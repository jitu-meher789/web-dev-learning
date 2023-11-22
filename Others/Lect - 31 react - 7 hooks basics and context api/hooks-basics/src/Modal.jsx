import "./Modal.css";
function Modal(props) {
    if(!props.data) {
        return <div>No Data Yet</div>
    }
    return (
        <div className={`modal ${(props.visible) ? "" : "hide"}`}>
            <button onClick={() => {
                props.handleVisible(false);
            }}>X</button>
            <p>Cloud cover - {props.data.cloudcover}</p>
            <p>Seeing - {props.data.seeing}</p>
            <p>Temperature- {props.data.temp2m}</p>
            <p>TimePoint - {props.data.timepoint}</p>
        </div>
    );
}

export default Modal;