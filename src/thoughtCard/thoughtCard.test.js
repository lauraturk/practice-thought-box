import React from 'react';
import { shallow } from 'enzyme';

import { ThoughtCard } from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('has a thoughtCard class field', () => {
    const mockThought = {title: '', body: ''}
    const wrapper = shallow(<ThoughtCard thought={mockThought}/>)

    expect(wrapper.find('.thought-card').length).toBe(1)
  });

  it('has a title and body', () => {
    const mockThought = {title: '', body: ''}
    const wrapper = shallow(<ThoughtCard thought={mockThought}/>)

    expect(wrapper.find('.title').first().length).toBe(1)
    expect(wrapper.find('.body').length).toBe(1)

    expect(wrapper.find('.title').text()).toEqual('')
    expect(wrapper.find('.body').text()).toEqual('')

  });

});
