
// create a palindrome for a given n number, extends 5 positions both side 
// Input: n = 3
// Output: -1 0 1 2 3 2 1 0 -1
function creating(n){
    let a=[]
    let b=n-1
    for(let i=0;i<5;i++){
        a.push(b)
        b--
    }
    console.log("1. palindrome for a given n number, extends 5 positions both side :",a.reverse().join(" ") + " " + n + " " + a.reverse().join(" "))
}
creating(0)


// Get the last element of an array in JavaScript?
function getLastElement(arr) {
    return arr[arr.length - 1];
}
console.log("2. The last element of the array is :",getLastElement([1, 2, 3, 4, 5])); // Output: 5



// Remove Duplicates from an Array in JavaScript?
function removeDuplicates(arr) {
 const unique=arr.filter((value,index)=>{
    return arr.indexOf(value)===index})
 return unique;
}
console.log("3. The unique array :",removeDuplicates([1,2,2,3,4,3,4,2,5,6,4,5])); 


// Check if Two Strings are Anagrams or not in JavaScript
function angram(str1,str2){
    const one = str1.split('').sort().join('')
    const two = str2.split('').sort().join('')
    if(one===two){
        console.log("4. The word is anagram of each other")
    }else{
        console.log("4. The word is not anagram of each other")
    }
}
angram("one","eno")



// Given an array of integers and a target number, return all unique pairs [a, b] where:
// a + b = target
// Pairs must be unique (no duplicates).
// Output should be an array of pairs.
// Example:
// Input: nums = [2, 7, 11, 15, -2, 9, 1], target = 9  
// Output: [[2, 7], [-2, 11]]
function array(arr, num) {
   let b=arr.filter((num,index)=> arr.indexOf(num)===index).sort((x,y)=>x-y)
   let a=[]
   for(let i=0;i<b.length;i++){
       for(let j=i;j<b.length;j++){
           if(b[i]+b[j]===num){
               a.push([b[i],b[j]])
           }
       }
   }
   console.log("5. The unique array of array :",a)
}
array([2, 7, 11,11, 15, -2,6,4, 9,-5 ,1,-5,5,5,-5], 10);


// Given three arrays, find the common elements in all three arrays.
function print(one, two, three) {
    let a = []
    let b = []
    

    for (let i = 0; i < one.length; i++) {
        for (let j = 0; j < two.length; j++) {
            if (one[i] === two[j]) {
                a.push(one[i])
            }
        }
    }

    for (let i = 0; i < three.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (three[i] === a[j]) {
                b.push(a[j])
            }
        }
    }
  console.log(b)
  const c= b.filter((value,index)=>{return b.indexOf(value)===index})
  console.log(c)
}
const ar1 = [1, 5, 10, 20,20, 40, 80]
const ar2 = [6, 7, 20, 80,20, 100]
const ar3 = [3, 4, 15, 20, 30, 70,80, 80, 120]

print(ar1, ar2, ar3) 



function mergeIntervals(arr) {
  arr.sort((x,y)=>x[0]-y[0])
  console.log(arr)
    const merged = [arr[0]]; 

    for (let i = 1; i < arr.length; i++) {
        let last = merged[merged.length - 1];
        let current = arr[i];

        if (last[1] >= current[0]) {
            last[1] = current[1];
        } else {
            merged.push(current);
        }
    }

    return merged;
}

// Test
const intervals = [[1,3],[2,8],[8,10],[15,18]];
console.log(mergeIntervals(intervals)); 



function space(arr){
    
    for(let i=0;i<arr.length;i++){
        if (arr[i]+i==arr.length-1){
            return i+1
        }
    }
     return arr
}

console.log("what are:",space([4,3,1,1,4]))


// Capitalize the First Letter of Each Word in a Sentence in JavaScript?
function unique(arr){
        let b=arr.split("").filter((value,index)=>{
            return arr.indexOf(value)===index
        })
    let a=b.join("")
    console.log(a)
}


unique("savad")


function pal(num) {
    console.log("Input:", num);

    let c = " ";

    for (let i = 0; i < num.length; i++) {
        let b = [];
        for (let j = i; j < num.length; j++) {
            b.push(num[j]);
            if (b.length > 1) {
                let str = b.join('');
                let rev = [...b].reverse().join('');
                if (str === rev && str.length>c.length) {
                    c=str
                }
            }
        }
    }

    console.log("Palindromes:", c);
}

pal('babad');


function sub(arr) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(arr[i]);

    if (sum === 0) {
     return result 
    }
  }

}

console.log(sub([2, -3, -4, 2, 3]))


function num(arr,numb){
    let num=0
    let result=[]
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i!==j){
                let sum=arr[i]+arr[j]
                if(sum<=numb&&sum>num){
                    num=sum
                    result=[i,j]
                }
            }
        }
    }
    return [num,result]
}


let movies = [90, 85, 75, 60, 120, 150, 125];
let T = 250;
console.log(num(movies, T)); 