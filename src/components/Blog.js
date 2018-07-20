import React from 'react'
import Link from "gatsby-link"
// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'
import { rhythm } from '../utils/typography'

class Blog extends React.Component {
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
                    <a href="https://medium.com/@brightsongpat/%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3-destructuring-object%E0%B9%83%E0%B8%99-es6-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%B0-470018a0f2bd">
                        <strong> มารู้จักการ Destructuring Objectใน ES6 กันเทอะ </strong>
                    </a>
                </li>
    
            </ul>
            
            </div>
        )
    }
}

export default Blog