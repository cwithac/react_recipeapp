import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecipeInput.css';


class RecipeInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: '',
        instructions: '',
        ingredients: [''],
        img: ''
      };
    }
    render() {
      const {title, instructions, img, ingredients} = this.state;
      let inputs = ingredients.map((ing, i) => (
        <div
          className = "recipe-form-line"
          key={`ingreident-${i}`}
        >
          <label>
            <input
              type="text"
              name={`ingredient-${i}`}
              value={ing}
              size={45}
              autoComplete='off'
              placeholder=' Ingredient'
              onChange={() => {}} />
        </div>
      ));
    }
}

export default RecipeInput;
