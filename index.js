/*const array = [1,2,3,4]

function myMap(array, f) {
    const myNewArray = []
    for (let i = 0; i < array.length; i++) {
        myNewArray.push(f(array[i]));
    }
    return myNewArray
}

const newArray = myMap(array, (item) => {
    return item *2;
});

console.log(newArray);*/


const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"
