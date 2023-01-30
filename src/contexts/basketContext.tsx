import { createContext, useState } from "react";
import { IBasketContextProvider, IBasketContextType, ITotalItemsInBasket, ICoffee } from "../interfaces";

export const BasketContext = createContext({} as IBasketContextType);

export function BasketContextProvider({ children }: IBasketContextProvider) {
  const [allCoffees, setAllCoffees] = useState<ITotalItemsInBasket[]>([]);
  const findCoffeeOrFalse = (item: ICoffee) => allCoffees.find(coffee => coffee.id == item.id) ?? false;

  function addCoffee(item: ICoffee) {
    const selectedCoffee = findCoffeeOrFalse(item);

    if (!selectedCoffee) {
      setAllCoffees([...allCoffees, { ...item, quantity: 1 }]);
    } else {
      setAllCoffees(state => state.map((coffee) => {
        if (coffee.id == item.id) {
          return {
            ...item,
            price: selectedCoffee.unitPrice + selectedCoffee.price,
            quantity: selectedCoffee.quantity + 1
          }
        } else {
          return coffee;
        }
      }));
    }
  }

  function removeCoffee(item: ICoffee) {
    const selectedCoffee = allCoffees.find(coffee => coffee.id == item.id);

    if (selectedCoffee)
      if (selectedCoffee.quantity == 1) {
        const updateCoffeeList = allCoffees.filter(coffee => coffee.id !== item.id);
        setAllCoffees(updateCoffeeList);
      } else {
        setAllCoffees(state => state.map(coffee => {
          if (coffee.id === item.id) {
            return {
              ...item,
              price: selectedCoffee.price - selectedCoffee.unitPrice,
              quantity: selectedCoffee.quantity - 1
            }
          } else {
            return coffee
          }
        }))
      }
  }

  function removeAll(id: string) {
    const removeAllCoffeesWithPropID = allCoffees.filter(coffee => coffee.id != id);

    setAllCoffees(removeAllCoffeesWithPropID)
  }

  return (
    <BasketContext.Provider
      value={{ addCoffee, removeCoffee, allCoffees, removeAll }}>
      {children}
    </BasketContext.Provider>
  )
};