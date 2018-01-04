import React from 'react'

import profilePic from './profile.jpg'

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img
          src={profilePic}
          alt={`Shunya Shishido`}
        />
        Written by <strong>Shunya Shishido</strong>
        {' '}
        <a href="https://twitter.com/sisidovski">Twitter</a>
      </p>
    )
  }
}

export default Bio
