import { someContext } from "./A";

function D(props) {
    return (
        
        <someContext.Consumer>
            {(value) => {
                return <h1>{value}</h1>
            }}
        </someContext.Consumer>
    );
}

export default D;
