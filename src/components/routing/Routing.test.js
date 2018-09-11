import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Routing from './Routing';
import '../../EnzymeSetup.js';

describe('<Routing />', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const wrapper = shallow(<Routing />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});