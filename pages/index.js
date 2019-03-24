import React, { useState } from 'react'
import Head from 'next/head'
import shout from 'random-shout'
import domToImage from 'dom-to-image'
import { saveAs } from 'file-saver'
import emojis from '../lib/emojis'
import words from '../lib/words'
import intros from '../lib/intros'
import endings from '../lib/endings'
import images from '../lib/images'
import colors from '../lib/colors'
import fonts from '../lib/fonts'
import randomEntry from '../lib/random-entry'

function getWord () {
  const sentence = `Jeg ${randomEntry(intros)} ${randomEntry(words)} ${randomEntry(endings)} ${emojis()}`
  return shout(sentence)
}

const Index = () => {
  const [word, setWord] = useState(getWord())
  const [image, setImage] = useState(randomEntry(images))
  const [color, setColor] = useState(randomEntry(colors))
  const [font, setFont] = useState(randomEntry(fonts))

  const handleClick = () => {
    setImage(randomEntry(images))
    setWord(getWord())
    setColor(randomEntry(colors))
    setFont(randomEntry(fonts))
  }

  const saveCard = async e => {
    e.preventDefault()
    const blob = await domToImage.toBlob(window.document.getElementById('hanna-card'))
    saveAs(blob, `hanna-${new Date().getTime()}.png`)
  }

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Side som genererer tilfeldige ting Hanna hater.' />
        <title>Hanna hater ting!</title>
      </Head>
      <div className={'wrapper'} id='hanna-card'>
        <img src={image} alt='Illuastrasjonsbilde av Hanna' onClick={() => handleClick()} />
        <div className='fortune-box'>
          {word}
        </div>
        <style jsx global>
          {`
          body {
            background-color: Black;
            padding: 20px;
            color: ${color};
            font-family: ${font}, serif;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          img {
            border-radius: 25px;
            border: 2px solid ${color};
            cursor: pointer;
          }
          .fortune-box {
            font-size: 3em;
            padding: 15px;
          }
          .wrapper {
            width: 780px;
            display: flex;
            background-color: black;
          }
          .save-wrapper {
            text-align: right;
          }
          .save-link {
            text-decoration: none;
            font-size: 2em;
          }
          @media screen and (max-width: 780px) {
            img {
              height: 100px;
            }
            .wrapper {
              width: 100%;
              display: block;
              text-align: center;
            }
            .fortune-box {
              font-size: 2em;
              padding: 10px;
            }
          }
        `}
        </style>
      </div>
      <div className='save-wrapper'>
        <a href='#' className='save-link' onClick={saveCard}>💾</a>
      </div>
    </div>
  )
}

export default Index
