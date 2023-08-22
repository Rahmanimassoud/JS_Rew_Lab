

// let oddNumbers = [1, 3, 5, 7, 9,  10, 11, 13, 15, 17, 19, 20];
// write a function that will check if this array is ONLY odd numbers.
// Bonus: replace any even numbers with odd numbers.


let oddNumbers = [1, 3, 5, 7, 9,  10, 11, 13, 15, 17, 19, 20];

const checkIfOdd = (arr) => {
    let isOdd = true;

    // loop through the array
    arr.forEach((element, i) => {
        if (element % 2 === 0) {
            isOdd = false;
            arr.splice(i, 1, element+1);
        }
    });

    return isOdd;
};

// console.log(checkIfOdd(oddNumbers));
// console.log(oddNumbers);
 

 

// const fahrenheitTemps = [32, 50, 68, 86, 104, 122, 140, 158, 176, 194];
// 2.  Write a function that will Calculate the average temperature of this array. 
// Also find the highest temperature and log it. 

//  how to get the ava, add all the numbers in the array get the total sum of the array. 
// devid the total sum by the number of indexe.
// write a loop that checks every number and adds the begest number to a variable.


 

const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

// 3. Write a function that will search this array for your favorite fruit. If your favorite fruit isn't found, add it!

const findFavFruit = (arr)=> {
    let favorite = "Apple";
    let isFavPresent = false;

    arr.forEach((element)=>{
        if(element === favorite){
            isFavPresent = true;
            console.log(favorite + " It's already in the array")
            return;
        }
    });
    if(!isFavPresent){
        arr.push(favorite);
        console.log("Added " + favorite + " my fav fruit to the list")
    }    
};

// findFavFruit(fruits);

 

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"];

// 4. write a function that will shorten each string to just it's first 3 characters ("January" turns into  "Jan")
const shortenStr = string => {
    const shortenString  = string.map(i => i.substring(0, 3));
    return shortenString;
};
// const newMonth = shortenStr(months);
// console.log(newMonth);


 

const mixedData = [42, 'hello', true, 3.14, 'world', false, null, undefined, 'goodbye', 7];

// 5. Make a new array called onlyStrings. Loop through mixed Data and push only things that are string data type to this new array. 


const  onlyStrings = [];
for(let i = 0; i<mixedData.length; i++){
    if(typeof mixedData[i] === 'string') {
        onlyStrings.push(mixedData[i])
    };
};
console.log(onlyStrings);