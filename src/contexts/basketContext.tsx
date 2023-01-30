import { createContext, useReducer, useState } from "react";
import { IBasketContextProvider, IBasketContextType, ITotalItemsInBasket, ICoffee } from "../interfaces";
import { addCoffeeAction, addMoreCoffeeAction, removeCoffeeAction, removeMoreCoffeesAction } from "../reducers/coffees/actions";
import { CoffeeReducer } from "../reducers/coffees/reducer";

export const BasketContext = createContext({} as IBasketContextType);

export function BasketContextProvider({ children }: IBasketContextProvider) {

  const [allCoffees, dispatch] = useReducer(CoffeeReducer, [] as ITotalItemsInBasket[]);

  const findCoffee = (id: string) => allCoffees.find(coffee => coffee.id == id) ?? false;

  function addCoffee(item: ICoffee) {
    const selectedCoffee = findCoffee(item.id);

    if (!selectedCoffee) {
      dispatch(addCoffeeAction(item));

    } else {
      dispatch(addMoreCoffeeAction(item, selectedCoffee));
    }
  }

  function removeCoffee(item: ICoffee) {
    const selectedCoffee = findCoffee(item.id);

    if (selectedCoffee)
      if (selectedCoffee.quantity == 1) {
        dispatch(removeCoffeeAction(selectedCoffee));

      } else {
        dispatch(removeMoreCoffeesAction(item, selectedCoffee))
      }
  }

  function removeAll(id: string) {
    const selectedCoffee = findCoffee(id);

    if (selectedCoffee)
      dispatch(removeCoffeeAction(selectedCoffee));
  }

  return (
    <BasketContext.Provider
      value={{ addCoffee, removeCoffee, allCoffees, removeAll }}>
      {children}
    </BasketContext.Provider>
  )
};