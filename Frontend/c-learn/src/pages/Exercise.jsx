import React, { useState } from 'react';
import ContentMenu from '../components/ContentMenu';
import ExerciseList from '../components/ExerciseList';
import './Exercise.css';

const Exercise = () => {
  const [selectedContent, setSelectedContent] = useState(1);

  const handleSelectContent = (contentId) => {
    setSelectedContent(contentId);
  };

  return (
    <div className="app">
      <div className='Exercise-menu' >
          <ContentMenu onSelect={handleSelectContent} />
        </div>
      <div className='Exercise-page'>
          {selectedContent && <ExerciseList contentId={selectedContent} />}
      </div>
    </div>
  );
};

export default Exercise;