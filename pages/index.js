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

  const handleClick = event => {
    event.preventDefault()
    setImage(randomEntry(images))
    setWord(getWord())
    setColor(randomEntry(colors))
    setFont(randomEntry(fonts))
  }

  const saveCard = async event => {
    event.preventDefault()
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
      <main>
        <div className={'wrapper'} id='hanna-card'>
          <img src={image} alt='Illuastrasjonsbilde av Hanna' />
          <div className='fortune-box'>
            {word}
          </div>
          <style jsx global>
            {`
            body {
              background-color: white;
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
              height: 300px;
            }
            img:hover, img:active {
              outline: none;
            }
            .fortune-box {
              font-size: 3em;
              padding: 15px;
            }
            .wrapper {
              padding: 10px;
              width: 780px;
              display: flex;
              background-color: black;
              border-radius: 25px;
            }
            .save-wrapper {
              margin-top: 10px;
              text-align: right;
            }
            .save-link {
              text-decoration: none;
              font-size: 2em;
              padding: 5px;
            }
            .save-link:hover, .save-link:active {
              outline: none;
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
          <a href='#' className='save-link' title='Recycle' role='button' tabIndex='0' onClick={handleClick}>♻️</a>
          <a href='#' className='save-link' title='Save this moment 4ever' role='button' tabIndex='0' onClick={saveCard}>💾</a>
        </div>
      </main>
    </div>
  )
}

export default Index
