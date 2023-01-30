import { CoffeeActionTypes, ICoffee, ITotalItemsInBasket } from "../../interfaces";

export function addCoffeeAction(item: ICoffee) {
  return {
    type: CoffeeActionTypes.Add,
    payload: {
      ...item,
      quantity: 1
    }
  }
};

export function addMoreCoffeeAction(item: ICoffee, coffeeInBasket: ITotalItemsInBasket) {
  return {
    type: CoffeeActionTypes.AddMore,
    payload: {
      ...item,
      price: coffeeInBasket.unitPrice + coffeeInBasket.price,
      quantity: coffeeInBasket.quantity + 1
    }
  }
};

export function removeCoffeeAction(coffeeInBasket: ITotalItemsInBasket) {
  return {
    type: CoffeeActionTypes.Remove,
    payload: {
      ...coffeeInBasket
    }
  }
};

export function removeMoreCoffeesAction(item: ICoffee, coffeeInBasket: ITotalItemsInBasket) {
  return {
    type: CoffeeActionTypes.RemoveMore,
    payload: {
      ...item,
      price: coffeeInBasket.price - coffeeInBasket.unitPrice,
      quantity: coffeeInBasket.quantity - 1
    }
  }
};