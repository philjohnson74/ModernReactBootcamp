import { choice, remove } from './helpers'
import foods from './foods'

const randomFood = choice(foods);

console.log("I'd like one " + randomFood + ", please.");
console.log("Here you go: " + randomFood);
console.log("Delicious! May I have another?");

remove(randomFood, foods);

console.log("I’m sorry, we’re all out. We have " + foods.length + " left.");
