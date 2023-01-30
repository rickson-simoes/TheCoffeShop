import { createContext, useReducer, useState } from "react";
import { IBasketContextProvider, IBasketContextType, ITotalItemsInBasket, ICoffee } from "../interfaces";

export const BasketContext = createContext({} as IBasketContextType);

export function BasketContextProvider({ children }: IBasketContextProvider) {

  enum CoffeeActionTypes {
    Add = "Add",
    AddMore = "AddMore",
    Remove = "Remove",
    RemoveMore = "RemoveMore",
  }

  interface DispatchOptions {
    payload: ITotalItemsInBasket,
    type: CoffeeActionTypes
  };

  const [allCoffees, dispatch] = useReducer((state: ITotalItemsInBasket[], action: DispatchOptions) => {
    if (action.type === CoffeeActionTypes.Add) {
      return [...state, action.payload];
    }

    if (action.type === CoffeeActionTypes.AddMore) {
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

    if (action.type === CoffeeActionTypes.Remove) {
      return state.filter(coffee => coffee.id != action.payload.id);
    }

    if (action.type === CoffeeActionTypes.RemoveMore) {
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

    return state;
  }, [] as ITotalItemsInBasket[]);

  const findCoffee = (id: string) => allCoffees.find(coffee => coffee.id == id) ?? false;

  function addCoffee(item: ICoffee) {
    const selectedCoffee = findCoffee(item.id);

    if (!selectedCoffee) {
      dispatch({
        type: CoffeeActionTypes.Add,
        payload: {
          ...item,
          quantity: 1
        }
      });

    } else {
      dispatch({
        type: CoffeeActionTypes.AddMore,
        payload: {
          ...item,
          price: selectedCoffee.unitPrice + selectedCoffee.price,
          quantity: selectedCoffee.quantity + 1
        }
      });
    }
  }

  function removeCoffee(item: ICoffee) {
    const selectedCoffee = findCoffee(item.id);

    if (selectedCoffee)
      if (selectedCoffee.quantity == 1) {
        dispatch({
          type: CoffeeActionTypes.Remove,
          payload: {
            ...selectedCoffee
          }
        });

      } else {
        dispatch({
          type: CoffeeActionTypes.RemoveMore,
          payload: {
            ...item,
            price: selectedCoffee.price - selectedCoffee.unitPrice,
            quantity: selectedCoffee.quantity - 1
          }
        })
      }
  }

  function removeAll(id: string) {
    const selectedCoffee = findCoffee(id);

    if (selectedCoffee)
      dispatch({
        type: CoffeeActionTypes.Remove,
        payload: {
          ...selectedCoffee
        }
      });
  }

  return (
    <BasketContext.Provider
      value={{ addCoffee, removeCoffee, allCoffees, removeAll }}>
      {children}
    </BasketContext.Provider>
  )
};