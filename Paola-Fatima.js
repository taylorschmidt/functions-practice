const menu = {
  pepperoni: {
    toppings:['garlic', 'tomatoes', 'pepperoni'],
    price:"4"
  },
  cheese: {
  toppings: ['spinach', 'mushrooms', 'pineapple'],
  price:"$5"
  },
  margarita: {
    toppings: ['onions', 'feta', 'sausage'],
    price: "$6"
  },
  everything: {
    toppings: ['sauce', 'oregano', 'ranch'],
    price: "$7"
  },
  mediterrean: {
    toppings: ['yogurt', 'vinegar', 'alfredo'],
    price: "$8"
  }
}

console.log(Object.keys(menu))

if ('banana' in menu) {
  console.log("true")
} else {
  console.log("False")
}
