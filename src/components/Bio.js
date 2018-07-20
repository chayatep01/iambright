import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Bright`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(3),
            height: rhythm(3),
          }}
        />
        <p>
         <strong>Chayatep Songpattanayothin</strong> <br/>
          Studying in 2nd year of Sirindhorn International Institute of Technology , Thammasat university
          <br/>
          <a href="https://github.com/chayatep01">
            <strong> Github </strong>
          </a> <br/>
          <a href="https://www.facebook.com/chayatep">
            <strong> Facebook</strong>
          </a> <br/>
          <a href="https://medium.com/@brightsongpat">
            <strong>Medium</strong>
          </a>
          
        </p> 
        
      


        
       
      </div>
    )
  }
}

export default Bio
