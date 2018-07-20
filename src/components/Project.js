import React from 'react'
import Link from "gatsby-link"
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import { rhythm } from '../utils/typography'

class Project extends React.Component {
    render() {
        return (
            <div
                style={{
                display: 'flex',
                marginBottom: rhythm(2),
            }}
            >
            <ul>
                <li>
                    <a href="https://github.com/chayatep01/fastasked">
                        <strong> Fastasked </strong>
                    </a>
                    Single-Page-Web-Chat  By VueJS with Font-Awesome
                </li>

                <li>
                    <a href="https://github.com/chayatep01/TellMe">
                        <strong> Tell Me </strong>
                    </a>
                    IOS APP - Notify where the Beacon are.
                    Builded by BANANACUPCAKE 
                </li>
    
            </ul>
            
            </div>
        )
    }
}

export default Project