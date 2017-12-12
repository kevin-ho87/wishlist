import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import data from './data/Data';

it('renders without crashing', () => {
  shallow(<App data={data} />);
});

