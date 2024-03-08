import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button/Button";

import Style from "./RecipeCard.module.css";

const RecipeCard = (props) => {
  const { imgUrl, title, description, malzemeler, yapilis } = props;

  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={Style.main}>
      <img src={imgUrl} alt="Yemek Görsel" />
      <h4>{title}</h4>
      <p>{description}</p>
      <Button>
        <button onClick={handleButtonClick}>Detaylı İncele</button>
      </Button>

      {isModalOpen && (
        <div className={Style.modal}>
          <h2>{title}</h2>
          <img src={imgUrl} alt="" />
          <h3>Malzeme Listesi</h3>
          <p>{malzemeler}</p>
          <h3>Hazırlanışı</h3>
          <p>{yapilis}</p>

          <button onClick={handleCloseModal}>Kapat</button>
        </div>
      )}
    </div>
  );
};


export default RecipeCard;


RecipeCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
};
