import React from 'react';
import './Accordion.css'

export default class Accordion extends React.Component {
    state = {
        currentButtonIndex: null
    }
    static defaultProps = {
        sections: []
    }
    handleButtonClick(index) {
        this.setState({ currentButtonIndex: index})
    }
    renderButtons(section, index, currentButtonIndex) {
        return (
            <li className="Accordion-item" key={index}>
                <button
                key={index}
                onClick={() => this.handleButtonClick(index)}
                >
                {section.title}
                </button>
                {(currentButtonIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }
    // renderContent() {
    //     const currentButton = this.props.sections[this.state.currentButtonIndex]
    //     return (
    //         <p>
    //             {currentButton.content}
    //         </p>
    //     )
    // }
    render() {
        const { currentButtonIndex } = this.state
        const { sections } = this.props
        return (
                <ul className="Accordion">                
                    {sections.map((section, index) =>
                        this.renderButtons(section, index, currentButtonIndex)
                    )}                 
                </ul>
        )
    }
}


// when a button is clicked, ONLY that section should be open, and the other sections should be closed

// manage which section is currently active/opened by keeping track of the index of the last clicked button in state

// use array map to generate the li elements from the section array prop