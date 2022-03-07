let obj={}
function fib (n){
    if(n===0) return 0
    if(n===1) return 1
    if(obj[n]) return obj[n]
    obj[n]=(fib(n-1)+fib(n-2))%1000000007
    return (fib(n-1) +fib(n-2))%1000000007
}