import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.increment.bind(this);
    }
    increment(){
       this.setState({count : this.state.count + 1})
        };
    decrement(){
       this.setState({count : this.state.count + 1})
        };

    render(){
        return(
            <div>
                <h1>{count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
    
        )


    }


}
export default ClassCounter