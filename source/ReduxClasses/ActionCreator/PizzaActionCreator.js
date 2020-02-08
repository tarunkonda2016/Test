import PizzaActions from '../Actions/PizzaActions';

export const PizzaActionCreator = {
  getData: () => {
    return {
      type: PizzaActions.GET_DATA,
    };
  },

  getDataChange: data => {
    return {
      type: PizzaActions.SELECTED,
      data,
    };
  },

  getDataSuccess: data => {
    return {
      type: PizzaActions.GET_DATA_SUCCESS,
      data,
    };
  },
  getDataMinus: (typePizza, customer) => {
    return {
      type: PizzaActions.MINUS_QUANTITY,
      typePizza,
      customer,
    };
  },
  getDataAdd: (typePizza, customer) => {
    return {
      type: PizzaActions.ADD_QUANTITY,
      typePizza,
      customer,
    };
  },
  getDataClear: () => {
    return {
      type: PizzaActions.CLEAR,
    };
  },
};
