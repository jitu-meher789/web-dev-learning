class Test extends React.Component {
    constructor(props) {
        // one time upon creation
        // it was to create state
        this.state = {
            a : 1
        };
        console.log("constructor is called");
    }





    // when two same function is defined,then first one is being ignored or 
    // be fake fucntion, and last function will be considered, it is happens in execution context
    componentDidMount() {
        // it was to do one time task
        console.log("component did mount was called");
    }
    componentDidMount() {
        // it was to do one time task
        console.log("component did mount was called");
    }



    componentDidUpdate() {
        // multiple times : after every re-render
        // to do something after every re-render
        console.log("component did update was called");
    }

    componentWillUnmount() {
        // one time
        // when component is about to be removed from the screen
        // database clone that connection
        console.log("componentWillUnmount was called");
    }
    render() {
        console.log("first");
        return (
            <div>Hello</div>
        )
    }
}