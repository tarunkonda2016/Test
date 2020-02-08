import PizzaActions from '../Actions/PizzaActions';

const initialState = {
  selected: 'default',
  smallPizzaPrice: 269.99,
  mediumPizzaPrice: 322.99,
  largePizzaPrice: 394.99,
  amazonLargePizzaOffer: 299.99,
  fbLargePizzaOffer: 389.99,
  smallPizzaQuantity: 0,
  mediumPizzaQuantity: 0,
  largePizzaQuantity: 0,
};

export default function PizzaCalculateReducer(state = initialState, action) {
  switch (action.type) {
    case PizzaActions.GET_DATA:
      return state;
    case PizzaActions.GET_DATA_SUCCESS:
      return {...state, data: action.data};
    case PizzaActions.SELECTED:
      return {...state, selected: action.data};
    case PizzaActions.CLEAR:
      return {
        ...state,
        smallPizzaQuantity: 0,
        mediumPizzaQuantity: 0,
        largePizzaQuantity: 0,
      };
    case PizzaActions.ADD_QUANTITY:
    case PizzaActions.MINUS_QUANTITY:
      if (action.typePizza === 'small') {
        return {
          ...state,
          smallPizzaQuantity:
            PizzaActions.ADD_QUANTITY === action.type
              ? state.smallPizzaQuantity + 1
              : state.smallPizzaQuantity > 0
              ? state.smallPizzaQuantity - 1
              : 0,
        };
      } else if (action.typePizza === 'medium') {
        return {
          ...state,
          mediumPizzaQuantity:
            PizzaActions.ADD_QUANTITY === action.type
              ? state.mediumPizzaQuantity + 1
              : state.mediumPizzaQuantity > 0
              ? state.mediumPizzaQuantity - 1
              : 0,
        };
      } else if (action.typePizza === 'large') {
        return {
          ...state,
          largePizzaQuantity:
            PizzaActions.ADD_QUANTITY === action.type
              ? state.largePizzaQuantity + 1
              : state.largePizzaQuantity > 0
              ? state.largePizzaQuantity - 1
              : 0,
        };
      }
    default:
      return state;
  }
}
