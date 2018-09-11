import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Detail from './Detail';
import '../../EnzymeSetup.js';

describe('<Detail />', () => {
  describe('render()', () => {
    it('renders the component', () => {
      const match = {
        params: {
          id:"0"
        }
      };
      const wrapper = shallow(<Detail match={match}/>);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});