import { Dog } from "./Dog"
import { ShelterDog } from "./ShelterDog";
import { add, divide, multiply } from "./utils";


console.log("From index File!")

const jack = new Dog("Jack", "German Shepard", 3);
jack.bark();

console.log(add(4, 5))
console.log(add(40, 50))
console.log(multiply(4, 5))
console.log(multiply(40, 50))
console.log(divide(4, 5))
console.log(divide(40, 50))

const lippy = new ShelterDog("Lippy", "pitbull", 7, "blue horizon shelter")
lippy.bark()