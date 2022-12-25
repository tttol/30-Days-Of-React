import React from 'react'

class StateSample extends React.Component {
    state =  {
        count: 0,
    }
    render() {
        const count = this.state.count;
        return(
            <div>
                <h1>{count}</h1>
                <button onClick={() => this.setState({count: count + 1})}>Add</button>
                <button onClick={() => this.setState({count: count - 1})}>Minus</button>
            </div>
        )
    }
}

export default StateSample;