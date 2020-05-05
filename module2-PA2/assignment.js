const arr = [1,2,3,4]

const arr2 = [...arr,5,6,7]

console.log(arr2)

const arr3 = [...arr2.filter (num => num!= 2 && num != 5)]

console.log(arr3)