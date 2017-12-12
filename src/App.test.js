import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Card from './components/Card';
import data from './data/Data';

it('renders without crashing', () => {
  shallow(<App data={data} />);
});

it('4 cards in total', () => {
  const wrapper = shallow(<App data={data} />);
  expect(wrapper.find(Card)).toHaveLength(4);
});

it('4 cards first, 3 cards after', () => {
  const wrapper = mount(<App data={data} />);
  expect(wrapper.find(Card)).toHaveLength(4);
  wrapper.find('.btn_remove').simulate('click');
  expect(wrapper.find(Card)).toHaveLength(3);
});

it('2 cards saved', () => {
  const wrapper = mount(<App data={data} />);
  expect(wrapper.find('.btn_remove')).toHaveLength(1);
  wrapper.find('.btn_add').at(0).simulate('click');
  expect(wrapper.find('.btn_remove')).toHaveLength(2);
});

it('Clicked add card button, button gets disabled attribute', () => {
  const wrapper = mount(<App data={data} />);
  expect(wrapper.find('.btn_add').at(0).prop('disabled')).toEqual(false);
  wrapper.find('.btn_add').at(0).simulate('click');
  expect(wrapper.find('.btn_add').at(0).prop('disabled')).toEqual(true);
});

const cardData = {
  "price": "$726",
  "agency": {
    "brandingColors": {
      "primary": "#ffe512"
    },
    "logo": "http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif"
  },
  "id": "1",
  "mainImage": "http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg"
}

it('Single card data price value', () => {
  const card = shallow(<Card data={cardData} />);
  const priceTag = <p>Price: $726</p>;
  expect(card.contains(priceTag)).toEqual(true);
});
