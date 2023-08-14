// function outer (first) {
//     console.log("Inside outer");
//     return function inner(second) {
//         console.log("Inside inner");
//         return first + second;
//     }
// }

// let rVal = outer(2);
// console.log('before calling rVal that contains inner');
// let ans = rVal(4);
// console.log(ans);





function enterFirstName(first) {
    return function enterLastName(lastName) {
        return function enterAge(age) {
            return function printDetails() {
                console.log("Your name is " + first + " " + lastName + " and your age is "  + age);
            }
        }
    }
}

console.log("Kindly enter your name ");
let enterLast = enterFirstName("Jitu");
console.log("Kindly enter your last name");
let Age = enterLast("meher");
console.log('Kindly enter your age') ;
let printDetails = Age(26);
console.log("doing random stuff");
printDetails();