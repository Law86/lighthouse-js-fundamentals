const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"]; 

// Write a while loop that prints out the contents of ingredients:
  
while (ingredients < 8) {
  console.log(ingredients)
}

// Write a for loop that prints out the contents of ingredients:

for (const ingredient of ingredients) {
   console.log(ingredient)
 }

// Write any loop (while or for) that prints out the contents of ingredients backwards:   

for (i=ingredients.length - 1; i>0; i--) {
    console.log(ingredients[i]);
}
