module.exports = array => array.length > 1 ? array[Math.floor(Math.random() * (array.length - 1))] : array[0]
