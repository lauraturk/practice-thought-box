import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('renders App with className app', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find('.app').length).toBe(1)
});

it('initial state starts with an empty array', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.state('thoughts')).toEqual([])
});

it('having 2 thoughts in state should mean there are two thoughtCards', () => {
  const wrapper = mount(<App />)

  wrapper.setState({thoughts: [{title: 'title', body: 'body'}, {title: 'title1', body: 'body1'}] })

  expect(wrapper.find('.thought-card').length).toBe(2)

});

it('user can add a new thought which adds it to state and is also displayed on the screen', () => {
  const wrapper = mount(<App />)
  const mockedSubmit = jest.fn();

  const titleInput = wrapper.find('input').first();
  titleInput.simulate('change', { target: { value: 'hello' } });

  const bodyInput = wrapper.find('input').last();
  bodyInput.simulate('change', { target: { value: 'goodbye' } });

  wrapper.find('button').simulate('click');


  expect(wrapper.state('thoughts')).toEqual([{title: 'hello', body: 'goodbye', id: 0}])
  expect(wrapper.find('.title').text()).toEqual('hello')
  expect(wrapper.find('.body').text()).toEqual('goodbye')

});
