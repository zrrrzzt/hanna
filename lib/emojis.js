import randomEntry from './random-entry'
import emoji from 'random-angry-emoji'

export default () => {
  const seed = Array.from(Array(3).keys())
  const numberOfEmjois = randomEntry(seed) + 1
  let emojis = []
  let emjoiCount = 0
  while (emjoiCount < numberOfEmjois) {
    emjoiCount++
    emojis.push(emoji())
  }
  return emojis.join('')
}
