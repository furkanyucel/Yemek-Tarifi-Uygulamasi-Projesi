import React, { useState } from 'react';
import Recipe from './Recipe';

import Style from './RecipeList.module.css';

const RecipeList = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={Style.main}>
      <Recipe />
    </div>
  );
};

export default RecipeList;
