import React from 'react';
import { ThoughtCard } from '../thoughtCard/thoughtCard'

export const ThoughtList = ( { thoughtList }) => {

  const thoughtArray = thoughtList.map( (thought, index) => {
    return ( <ThoughtCard key={index} thought={thought}/>)
  })

  return (
    <div className="thought-list">
      {thoughtArray}
    </div>
  );
}
