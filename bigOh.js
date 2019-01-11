
// This is from 1-11, Friday, Day 5 BIG OH NOTES


console.log("sanity check")
// guess a number
// - loop through AbortController

// let number = 5;
// let numberList=[1,2,3,4,5];
// let number=Math.ceil(Math.random() * numberList.length);
// console.log(`Number chosen is ${number}`);
// for(let i=0; i<numberList.length; i++){
//     if (numberList[i] === number){
//         console.log("Found", number);
//         console.log(`It took ${i+1} guesses to get the answer`);
//         break;
//     }
// }
// guess randomly(THIS IS NOT a good option)
// let found = false;
// let counter=0;
// while (!found){     //or you could have while (found === false)
//     counter++
//     let randIndex = Math.ceil(Math.random() * numberList.length);
//     if(numberList[randIndex]===number){
//         found=true;
//         console.log("hooray, we finshed, the number was", number)
//         console.log(`it took ${counter} guesses`)
//     }
// }

// Binary search takes log(N) because we cut the number of remaining numbers to guess against in half each time
// let numberList=[1,2,3,4,5];
// let number=Math.ceil(Math.random() * numberList.length);
// console.log(`Number chosen is ${number}`);
// found = false;
// let index = (Math.floor(numberList.length/2));
// while(!found){
//     if(number===numberList[index]){
//         console.log(`Number was `, numberList[index]);
//         found = true;
//     }else if(number<numberList[index]){
//         //cut off the top half by moving the index to the middle of the lower half
//         //creating boundaries in a way...
//         index=Math.floor(index/2);
//         console.log("Number is lower");
//     }else{
//         // we know it's higher
//         index=Math.floor((index+numberList.length)/2);
//         console.log("Number is higher");
//     }
// }



// function biarySearch(list,value){

// }



// Bubble Sorting
let array = [5,32,64,53,7453,6,4,3,2,1]

let sorted = false
console.log('sanity check')
let k=0

function bubbleSort (array){
   while (!sorted){   // while list is unsorted, continue...
       let placeholder = 0  // reset placeholder; placeholder will be defined later
       let swap = 0    // this will be used to check whether the array is already sorted.
       for (i=0; i<array.length; i++){     //ends the for loop IF we are at the end.
           if (i === array.length-k){  // checks to see if the array is sorted, and ENDS the while loop
               if (swap === 0){    // if this is true THEN
                console.log("swap triggered");
                   sorted = true   // THEN end the while loop
               }
               console.log("far enough");
               console.log(i,k);
               break       // ends the for loop.
           }
           if (array[i]>array[i+1]){ //bread and butter; if index is greater than the next index value
               placeholder = array[i]  // the value of array[i] is equal to placeholder; this will be the first thing changed every time.
               array[i] = array[i+1] // now i is equaled to i + 1
               array[i+1]= placeholder  //now placeholder is equal to the OLD value of i
               swap++ // to ensure there was a swap so we can know if we continue or not. If swapped is 0, game over on the next iteration.
                console.log(array);
            }
       }
       k++ //used to save computing power to keep from checking redundent cases.
   }
}

bubbleSort(array)
console.log(array)