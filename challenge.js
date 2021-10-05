
function sockMerchant(n, ar) {
   
    let sorted = ar.sort((a,b) => a - b);
    /*
       1) if return < 0 ... a will came first.
       2) if return 0 nothing will change.
       3) if return > 0 ... b will came first.
     */
    let pairs = 0;
    
    for(let i=0; i < n - 1; i++){
      
      //We increment the pair's value if we find a match
        if (sorted[i] === sorted[i + 1]){
            pairs++;
            // We also increment i by one to skip the next item since we already checked it.
            i += 1;
        }
    }
    
    return pairs;

}

let sock = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let n = 9;
console.log(sockMerchant(n, sock));
