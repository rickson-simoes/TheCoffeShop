import { CoffeeActionTypes, DispatchOptions, ITotalItemsInBasket } from "../../interfaces";

export function CoffeeReducer(state: ITotalItemsInBasket[], action: DispatchOptions) {
  switch (action.type) {
    case CoffeeActionTypes.Add: {
      return [...state, action.payload];
    }

    case CoffeeActionTypes.AddMore: {
      return state.map((coffee) => {
        if (coffee.id == action.payload.id) {
          return {
            ...action.payload
          }
        } else {
          return coffee;
        }
      });
    }

    case CoffeeActionTypes.Remove: {
      return state.filter(coffee => coffee.id != action.payload.id);
    }

    case CoffeeActionTypes.RemoveMore: {
      return state.map(coffee => {
        if (coffee.id == action.payload.id) {
          return {
            ...action.payload
          }
        } else {
          return coffee;
        }
      });
    }

    default: {
      return state;
    }
  }
};