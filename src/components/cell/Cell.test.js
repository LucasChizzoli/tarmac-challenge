import React from 'react';
import { shallow, mount } from 'enzyme';
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

  describe('props', () => {
    it('props must contain id', () => {
      const wrapper = shallow(<Cell member={member} id={1}/>);
      expect(wrapper.find('.cell-wrapper').props('id').children.props.to).toContain(1); 
    });
  });
});