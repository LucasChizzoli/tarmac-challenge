import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import './EnzymeSetup.js';

import App from './App';
import Grid from './components/grid/Grid.js';
import Detail from './components/detail/Detail.js';

describe('<App />', () => {

  describe('mount()', () => {
    it('Successfully mount and render grid on / path', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
          <App/>
        </MemoryRouter>
      );

      expect(wrapper.find(Grid)).toHaveLength(1);

    });

    it('Successfully mount and render detail on /member/0 path', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={[ '/member/0' ]}>
          <App/>
        </MemoryRouter>
      );

      expect(wrapper.find(Detail)).toHaveLength(1);

    });
  });
});