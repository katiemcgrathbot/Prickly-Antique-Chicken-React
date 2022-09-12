import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Prickly Antique Chicken</title>
        <meta property="og:title" content="Prickly Antique Chicken" />
      </Helmet>
      <img
        alt="image"
        src="/playground_assets/katie%20mcgrath%20bot%20header2-1100w.png"
        className="home-image"
      />
      <div className="home-container01">
        <span className="home-text">This is the Katie McGrath bot page.</span>
        <span className="home-text01">
          The bot was created to keep old Katie content circulating, as
          everyone&apos;s favorite Irish hermit shows up maybe once in a blue
          moon.
        </span>
      </div>
      <div className="home-container02">
        <div className="home-container03">
          <span className="home-text02">
            This is how far along I am on uploading pictures to the repository.
          </span>
        </div>
        <div className="home-container04">
          <div className="home-container05">
            <span className="home-text03">
              <span>Photoshoots 100%</span>
              <br></br>
              <span>Red Carpets and Events 0%</span>
              <br></br>
              <span>Supergirl 12.5%</span>
              <br></br>
              <span>Merlin 25%</span>
              <br></br>
              <span>Dracula 40%</span>
              <br></br>
              <span>Slasher 25%</span>
              <br></br>
              <span>Secret Bridesmaids’ Business 0%</span>
              <br></br>
              <span>Frontier 0%</span>
              <br></br>
              <span>Labyrinth 0%</span>
            </span>
          </div>
          <span className="home-text21">
            <span>Dates 0%</span>
            <br></br>
            <span>Jurassic World 0%</span>
            <br></br>
            <span>W.E. 0%</span>
            <br></br>
            <span>Leading Lady 0%</span>
            <br></br>
            <span>Buttons 0%</span>
            <br></br>
            <span>The Throwaways 0%</span>
            <br></br>
            <span>A Princess for Christmas 0%</span>
            <br></br>
            <span>Freakdog (Red Mist) 0%</span>
          </span>
        </div>
      </div>
      <div className="home-container06">
        <span className="home-text37">
          I&apos;ve been getting some questions, so here&apos;s a faq. 
        </span>
      </div>
      <div className="home-container07">
        <div className="home-container08">
          <span className="home-text38">How do you set up a bot?</span>
        </div>
        <div className="home-container09"></div>
      </div>
    </div>
  )
}

export default Home
