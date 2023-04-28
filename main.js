const str = 'Привет, мир! Ты прекрасен'
const myName = 'Dmitry'

const arr = str.split(' ').join().split('!').join().split(',')

for (let i=0;i<arr.length;i++){
    if (arr[i] === '') {
        arr.splice(i,1)
    }
}
arr[1] = 'Могилев'

//console.log(newArr.length)
let sum = 0
const newArr = [2,4,7,6,'привет',25]





// newArr.push(60) //добавляет послед эл
// console.log(newArr)
// const popVal = newArr.pop(5) //добавляет послед эл
// console.log(newArr)
// console.log(popVal) 
// newArr.unshift('мир')
// console.log(newArr)
// newArr.shift()
// console.log(newArr)


// let newArr2 = newArr.filter(element => element > 5)

// console.log(newArr2)

// let k = 0
// let newArr2 = newArr.map(element => {
    
//     if (typeof element === 'number' ) {
//        element = element ** 3  
//        return element
//     }
// })
//console.log('Количество элементов ' + k)







// let i=0

// // newArr.forEach(el => {
// //         newArr2[i] = el * el
// //         i=i+1
// // })
// // console.log(newArr2)










//console.log(arr)




// text:
// for(let j=0;j<str.length;j++) {
// index = str.indexOf('е', i) 
//     if (index === -1) {
//         break
//     }
//     k=k+1
//     i=index+1
//     newStr = str.slice(0,index) + 'Е' + str.slice(index+1,) 
//     console.log(newStr)
// }

// console.log(newStr)







