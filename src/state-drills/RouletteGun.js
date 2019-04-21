import React from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false
    }
    static defaultProps = {
        bulletInChamber: 8
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    handleClickEvent = () => {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            console.log(randomChamber);
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
            })
        }, 2000)
        }
    renderDisplay() {
        const { chamber, spinningTheChamber } = this.state
        const { bulletInChamber } = this.props
        if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!'
        }
        else if (chamber === bulletInChamber) {
            return 'BANG!!!!'
        }
        else if (chamber !== bulletInChamber){
            return 'You\'re safe!'
        }
    }
       
    render() {
        return (
            <div>
                <button onClick={this.handleClickEvent}>
                    Pull the trigger!
                </button>
                <p>{this.renderDisplay()}</p>
            </div>
        )
    }
}

export default RouletteGun