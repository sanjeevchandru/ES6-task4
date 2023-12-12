var num=1221;
function palindrome(num){
    return new Promise((res,rej)=>{
        let rev=0,rem,n=num;
        while(n!=0){
            rem=n%10;
            rev=(rev*10)+rem;
            n=parseInt(n/10);
        }
        if(num==rev){
            res( "The number of "+num+" is palindrome")
        }
        else{
            rej("The number of "+num+" is not a palindrome")
        }
    })
}

palindrome(num).then((x)=>
{console.log("1."+x)
document.write("1."+x+"<br>")})
.catch((y)=>{
    console.log("1."+y);
});

/*...........................................................................*/
//prime or not
let val=23;
function prime(val){
    return new Promise((res,rej)=>{
        let count=0;
        for(let i=1;i<=val;i++){
            if(val%i==0){
                count++;
            }
        }
        if(count==2){
            res("2.The number of "+val+" is a prime Number")
        }else{
            rej("2.The number of "+val+" is not a prime Number")
        }
    });
}
prime(val).then((x)=>{
    console.log(x)
    document.write(x+"<br>")
});
prime(val).catch(console.log);

/*................................................................................*/
//to add digits of number,then to find even or not
let n=1256;
function sumofdigit(n){
    return new Promise((res,rej)=>{
        var z=n.toString().split("").reduce((a,b)=>{
            return parseInt(a)+parseInt(b);
        });
        if(z%2==0){
            res("3.Sum of "+n+" = "+z+" this number is Even");
        }
        else{
            rej("3.Sum of "+n+" = "+z+" this number is Odd");
        }
    })
}
sumofdigit(n).then((x)=>{
    console.log(x)
    document.write(x)
});
sumofdigit(n).catch(console.log);