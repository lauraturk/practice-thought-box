import React from 'react';

export const ThoughtCard = ( {thought} ) => {
  return (
    <div className="thought-card">
    <section className="title">{thought.title}</section>
    <section className="body">{thought.body}</section>
    </div>
  )
}
