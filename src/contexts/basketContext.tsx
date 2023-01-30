import { createContext, useState } from "react";
import { IBasketContextProvider, IBasketContextType, ITotalItemsInBasket, ICoffee } from "../interfaces";

export const BasketContext = createContext({} as IBasketContextType);

export function BasketContextProvider({ children }: IBasketContextProvider) {
  const [allCoffees, setAllCoffees] = useState<ITotalItemsInBasket[]>([]);
  const findCoffeeOrFalse = (item: ICoffee) => allCoffees.find(coffee => coffee.id == item.id) ?? false;

  function addCoffee(item: ICoffee) {
    const coffeeExists = findCoffeeOrFalse(item);

    if (!coffeeExists) {
      setAllCoffees([...allCoffees, { ...item, quantity: 1 }]);
    } else {
      const coffeeIndex = allCoffees.findIndex(coffee => coffee.id == item.id);

      const renewCoffeeValue: ITotalItemsInBasket = {
        ...item,
        price: coffeeExists.unitPrice + coffeeExists.price,
        quantity: coffeeExists.quantity + 1,
      }

      allCoffees.splice(coffeeIndex, 1, renewCoffeeValue);
      setAllCoffees([...allCoffees]);
    }
  }

  function removeCoffee(item: ICoffee) {
    const coffeeExists = findCoffeeOrFalse(item);

    if (coffeeExists) {
      const coffeeIndex = allCoffees.findIndex(coffee => coffee.id == item.id);

      if (coffeeExists.quantity == 1) {
        allCoffees.splice(coffeeIndex, 1);
        setAllCoffees([...allCoffees]);
      } else {
        const renewCoffeeValue: ITotalItemsInBasket = {
          ...item,
          price: coffeeExists.price - coffeeExists.unitPrice,
          quantity: coffeeExists.quantity - 1,
        }

        allCoffees.splice(coffeeIndex, 1, renewCoffeeValue);
        setAllCoffees([...allCoffees]);
      }
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