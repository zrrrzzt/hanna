import React, { useState } from 'react'
import Head from 'next/head'
import shout from 'random-shout'
import emojis from '../lib/emojis'
import words from '../lib/words'
import intros from '../lib/intros'
import endings from '../lib/endings'
import randomEntry from '../lib/random-entry'

function getWord () {
  const sentence = `Jeg ${randomEntry(intros)} ${randomEntry(words)} ${randomEntry(endings)} ${emojis()}`
  return shout(sentence)
}

function toggleImage (image) {
  return image === 'static/hanna.jpg' ? 'static/hanna-xray.jpg' : 'static/hanna.jpg'
}

const Index = () => {
  const [word, setWord] = useState(getWord())
  const [image, setImage] = useState(toggleImage())

  const handleClick = () => {
    setImage(toggleImage(image))
    setTimeout(() => setImage(toggleImage('/static/hanna-xray.jpg')), 100)
    setWord(getWord())
  }

  return (
    <div>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Hanna hater ting!</title>
      </Head>
      <div className={'wrapper'}>
        <h1>Hanna hater ting!</h1>
        <img src={image} />
        <div className='fortune-box'>
          {word}
        </div>
        <p>
          <button onClick={() => handleClick()}>Keep me going</button>
        </p>
        <style jsx global>
          {`
          body {
            background-color: Black;
            padding: 20px;
            color: lime;
          }
          img {
            border-radius: 25px;
          }
          button {
            font-weight: 500;
            width: 90%;
            height: 60px;
            font-size: 2em;
            border-radius: 25px;
            border: 1px solid black;
            cursor: pointer;
            display: inline-block;
            text-decoration: none;
            background-color: thistle;
            outline: 0;
          }
          button:focus {
            outline:0;
          }
          button:hover {
            outline:0;
          }
          button:active {
            outline: 0;
            background-color: plum;
          }
          .fortune-box {
            font-size: 2.5em;
            padding: 15px;
          }
          .wrapper {
            text-align: center;
          }
        `}
        </style>
      </div>
    </div>
  )
}

export default Index
