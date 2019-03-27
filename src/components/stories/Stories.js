import React from 'react';
import Story from '../story/Story';

const Stories = ({ items }) => {
  return (
    <ul>
      {items.map(storyId => {
        return <Story id={storyId} key={storyId} />;
      })}
    </ul>
  );
};

export default Stories;
