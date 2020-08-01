import randomEntry from './random-entry'
import emoji from 'random-angry-emoji'

const emojis = () => {
  const seed = Array.from(Array(3).keys())
  const numberOfEmjois = randomEntry(seed) + 1
  const emojis = []
  let emjoiCount = 0
  while (emjoiCount < numberOfEmjois) {
    emjoiCount++
    emojis.push(emoji())
  }
  return emojis.join('')
}

export default emojis
