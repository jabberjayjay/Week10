let arr = [];

for (i=0; i<5; i++)
{

    arr.push(parseInt((Math.random() *10)));
}


function guess()
{
let count = 0;

    let g = parseInt(prompt("Guess an number between 0 and 9"));
    for(i=0; i<=arr.length; i++)
    {
        if(g === arr[i]){
            count++;
        }
    }
    alert("Guessed Item appears in array " + count + "times.");
    return count;
}
console.log(arr);
guess();


function countItems(){
    let g = parseInt(prompt("Guess a number between 0 and 9."));
    // let counta

}