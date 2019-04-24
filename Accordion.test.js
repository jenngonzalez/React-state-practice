import React from 'react'
import ReactDOM from 'react-dom'
import Accordion from './Accordion'
// import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'


describe(`Accordion Component`, () => {
    const sectionsProp = [
        {
            title: 'Section 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          },
          {
            title: 'Section 2',
            content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
          },
          {
            title: 'Section 3',
            content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
          },
    ]
  
    it('renders without errors', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Accordion />, div);
      ReactDOM.unmountComponentAtNode(div);
    })

    it ('renders empty given no selection', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it ('renders no sections by default', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it ('opens any clicked section', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        // console.log('>>> WRAPPER <<<')
        // console.log(wrapper.debug())
        // console.log('>>> FIND(BUTTON) <<<')
        // console.log(wrapper.find('button').at(1).debug())
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it ('opens only one section at a time', () => {
        const wrapper = shallow(<Accordion sections={sectionsProp} />)
        wrapper.find('button').at(1).simulate('click')
        wrapper.find('button').at(2).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})