import React from 'react';

class HelloWorld extends React.Component {
    // static defaultProps = {
    //     who: 'User'
    // }
    state = {
        who: 'user',
    }
    // constructor(props) {
    //     console.log('props in constructor', props)
    //     super(props)
    //     this.state = { who: 'User'}
    // }
    // handleButtonClick = () => {
    //     console.log('props in handleButtonClick', this.props)
    //     console.log('state in handleButtonClick', this.state)
    //     this.setState({ who: this.props.who})
    // }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button
                    onClick={() => this.setState({ who: 'world' })}
                >
                    World
                </button>
                <button
                    onClick={() => this.setState({ who: 'friend' })}
                    who='Friend'
                >
                    Friend
                </button>
                <button
                    onClick={() => this.setState({ who: 'React' })}
                    who='React'
                >
                    React
                </button>
            </div>
        )
    }
}

export default HelloWorld