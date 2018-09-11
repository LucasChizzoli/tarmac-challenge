import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import '../../EnzymeSetup.js';

import Cell from './Cell';

describe('<Cell />', () => {

  const member = {};

  describe('render()', () => {
    it('renders the component', () => {
      const wrapper = shallow(<Cell member={member} id={0}/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('onClick()', () => {
    it('Successfully call onClick event', () => {
      const mockOnClick = jest.fn();
      const wrapper = shallow(<Cell onClick={mockOnClick} member={member} id={0}/>);

      wrapper.find('Link').simulate('click', { button: 0 });

      console.log(wrapper.find('Link'));

      expect(mockOnClick.mock.calls.length).toEqual(1);
    });
  });
});