import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Grid from './Grid';
import '../../EnzymeSetup.js';
import tarmacTeam from '../../tarmac-people.json';

describe('<Grid />', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const wrapper = shallow(<Grid />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders cells', () => {
      expect(shallow(<Grid />).find('Cell').length).toEqual(tarmacTeam.length); 
    });
  });

  describe('state', () => {
    it('cells must be array', () => {
      const wrapper = shallow(<Grid />); 
      expect(wrapper.state('cells')).toEqual(expect.any(Array)); 
    });
  });
});