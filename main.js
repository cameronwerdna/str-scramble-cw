function scramble(str, arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
      result[arr[i]] = str[i]
    }
    return result.join('')
  };


console.log(scramble('abcd', [0,3,1,2])) // => acdb
console.log(scramble('herald', [1,0,3,4,2,5])) // => ehlrad
console.log(scramble('sup', [2,0,1])) // => ups
