import * as actionsTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionsTypes.ADD_INGREDIENT:
            const updateIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const updateIngredients = updateObject(state.ingredients, updateIngredient);
            const updatedState = {
                ingredients: updateIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedState);
        case actionsTypes.REMOVE_INGREDIENT:
            const updateIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
            const updateIngs = updateObject(state.ingredients, updateIng);
            const updatedSt = {
                ingredients: updateIngs,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
            return updateObject(state, updatedSt);
        case actionsTypes.SET_INGREDIENTS:
            return updateObject(state, {
                ingredients: action.ingredients,
                error: false,
                totalPrice: 4
            });
            
        case actionsTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, {error: true});
        default:
            return state;
    }
};

export default reducer;