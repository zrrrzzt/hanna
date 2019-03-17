const test = require('ava')
const randomEntry = require('../../lib/random-entry')

test('it returns one element from the array', t => {
  const array = [1, 2, 3]
  const element = randomEntry(array)
  t.truthy(array.includes(element), 'element in array')
})

test('it returns first element if array.length is 1', t => {
  const array = [1]
  const element = randomEntry(array)
  t.is(1, element, 'element returned')
})

test('it returns random character if input is letter', t => {
  const string = 'random'
  const element = randomEntry(string)
  t.truthy(string.includes(element), 'element in string')
})
