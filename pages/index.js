import React from 'react'
import Head from 'next/head'
import shuffle from 'crypto-shuffle'
import shout from 'random-shout'
import words from '../lib/words'
import intros from '../lib/intros'
import endings from '../lib/endings'

function getWord () {
  const wordList = shuffle(words.slice(0))
  const introList = shuffle(intros.slice(0))
  const endingsList = shuffle(endings.slice(0))
  const sentence = `Jeg ${introList[0]} ${wordList[0]} ${endingsList[0]}`
  return shout(sentence)
}

const Index = class extends React.Component {
  constructor () {
    super()
    this.state = {
      word: getWord()
    }
    this.deployHappiness = this.deployHappiness.bind(this)
  }

  deployHappiness () {
    const word = getWord()
    this.setState({ word: word })
  }

  render () {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>Hanna hater ting!</title>
        </Head>
        <div className={'wrapper'}>
          <h1>Hanna hater ting!</h1>
          <img src={'/static/hanna.jpg'} />
          <div className='fortune-box'>
            {this.state.word}
          </div>
          <p>
            <button onClick={this.deployHappiness}>Keep me going</button>
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
              width: 400px;
              height: 60px;
              font-size: 40px
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
            button:active {
              outline: 0;
              background-color: plum;
            }
            .fortune-box {
              font-size: 48px;
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
}

export default Index
