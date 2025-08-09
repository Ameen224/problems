
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
    console.log(a.reverse().join(" ") + " " + n + " " + a.reverse().join(" "))
}
creating(0)


