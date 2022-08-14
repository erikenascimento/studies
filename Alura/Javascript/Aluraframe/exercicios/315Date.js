const dataString = '17-05-2016';
console.log("🚀 ~ file: 315Date.js ~ line 2 ~ dataString", dataString)

const splitData = dataString.split('-')
console.log("🚀 ~ file: 315Date.js ~ line 5 ~ splitData", splitData)

const reverseData = splitData.reverse()
console.log("🚀 ~ file: 315Date.js ~ line 8 ~ reverseData", reverseData)

let date = new Date(splitData)
console.log("🚀 ~ file: 315Date.js ~ line 11 ~ date", date)

/* ou diretamente:

const dataString = '17-05-2016';

const date = new Date(dataString.split('-').reverse());
console.log("🚀 ~ file: 315Date.js ~ line 18 ~ date", date)

*/