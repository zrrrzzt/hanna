import randomEntry from './random-entry'
import emoji from 'random-angry-emoji'

const emojis = () => {
  const emojis = [emoji(), emoji(), emoji()]
  const numberOfEmjois = randomEntry([1, 2, 3])
  return emojis.slice(0, numberOfEmjois).join('')
}

export default emojis
