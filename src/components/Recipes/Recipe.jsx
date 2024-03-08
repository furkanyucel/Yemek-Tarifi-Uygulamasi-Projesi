import PropTypes from "prop-types";
import RecipeCard from "./RecipeCard";

import { RecipeData } from "../../recipeList.js";

import Style from "./Recipe.module.css";

const Recipe = () => {
  return (
    <div className={Style.main}>
      {RecipeData.map((RecList) => {
        return (
          <RecipeCard
            key={RecList.id}
            id={RecList.id}
            imgUrl={RecList.imgUrl}
            title={RecList.title}
            description={RecList.description}
            malzemeler={RecList.malzemeler}
            yapilis={RecList.yapilis}
          />
        );
      })}
    </div>
  );
};

export default Recipe;

RecipeCard.propTypes = {
  RecipeData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      RecipeData: PropTypes.object.isRequired,
    })
  )
};
