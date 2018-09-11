import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Grid from './Grid';
import '../../EnzymeSetup.js';

describe('<Grid />', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const wrapper = shallow(<Grid />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});