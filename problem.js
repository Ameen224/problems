
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
    console.log("palindrome for a given n number, extends 5 positions both side :",a.reverse().join(" ") + " " + n + " " + a.reverse().join(" "))
}
creating(0)


// Get the last element of an array in JavaScript?
function getLastElement(arr) {
    return arr[arr.length - 1];
}
console.log("The last element of the array is :",getLastElement([1, 2, 3, 4, 5])); // Output: 5



// Remove Duplicates from an Array in JavaScript?
function removeDuplicates(arr) {
 const unique=arr.filter((value,index)=>{
    return arr.indexOf(value)===index})
 return unique;
}
console.log("The unique array :",removeDuplicates([1,2,2,3,4,3,4,2,5,6,4,5])); 


// Check if Two Strings are Anagrams or not in JavaScript
function angram(str1,str2){
    const one = str1.split('').sort().join('')
    const two = str2.split('').sort().join('')
    if(one===two){
        console.log(" The word is anagram of each other")
    }else{
        console.log("rthe word is not anagram of each other")
    }
}
angram("one","eno")
