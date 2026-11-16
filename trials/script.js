function maxmum(arr) {

    let i =0
    let maxele= arr[0]

    while(i<arr.length){
        if (arr[i]>maxele){
            maxele = arr[i]
        }
        i++
    }

    return maxele
    

}

let arr1 = [23,45,65,55]
console.log(maxmum(arr1))
