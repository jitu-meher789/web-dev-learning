import { useContext } from "react";
import { someContext , someContext2} from "./A";


function D(props) {
    let name = useContext(someContext);
    let lName = useContext(someContext2);
    return (
        <h1>{`${name} and  ${lName}`}</h1>
    );
}

export default D;
