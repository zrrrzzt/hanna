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
        <link rel='apple-touch-icon' sizes='57x57' href='static/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='static/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='static/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='static/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='static/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='static/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='static/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='static/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='static/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='static/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='static/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='static/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='static/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='static/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
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
            img.save-link {
              height: 40px;
              border-radius: 0px;
              border: 0px;
              margin-left: 5px;
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
          <img src='/static/recycle.png' className='save-link' alt='Trykk for å resirkulere' role='button' tabIndex='0' onClick={handleClick} />
          <img src='/static/floppy.png' className='save-link' alt='Trykk for å lagre som bilde' role='button' tabIndex='0' onClick={saveCard} />
        </div>
      </main>
    </div>
  )
}

export default Index
