import React from 'react';
import { shallow, mount } from 'enzyme';

import { ThoughtList } from './thoughtList.js';

describe('ThoughtList', () => {

  it('has a thoughtList class field', () => {
    const wrapper = shallow(<ThoughtList thoughtList={[]}/>)

    expect(wrapper.find('.thought-list').length).toBe(1)
  });

  it('has multiple ThoughtCard class fields', () => {
    const thoughts = [{title: "", body:""},{title: "", body:""}]
    const wrapper = mount(<ThoughtList thoughtList={thoughts}/>)

    expect(wrapper.find('.thought-card').length).toBe(2)
  });

});
