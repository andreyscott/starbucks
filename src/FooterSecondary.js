import React from 'react'
import { Link } from 'react-router-dom'
import FindAStore from './FindAStore'
import './FooterSecondary.css';
import External from './external';

function FooterSecondary({ alignItems, paddingLeft, flexDirection }) {
  return (
    <div
      className='footerSecondary'
      style={{ alignItems, paddingLeft: `${paddingLeft * 2}px` }}
    >
      <div
        className='footerSecondary__container'
        style={{ paddingLeft: `${paddingLeft}px` }}
      >
        <div className='footerSecondary__info'>
          <div className='footerSecondary__left'>
            <FindAStore />
          </div>
          <div className='footerSecondary__right' style={{ flexDirection }}>
            <Link>Responsibility</Link>
            <Link>Web Accessibility</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Use </Link>
            <Link to={External} >Developer Contact</Link>
          </div>
        </div>
        <span className='footerSecondary__copyright'>© 2021 Starbucks</span>
      </div>
    </div>
  )
}

export default FooterSecondary
