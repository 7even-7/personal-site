import React from 'react';

const About = () => {
  return (
    <div className='aboutContainer'>
      <h1>About</h1>
      <h2>Of course, you want to check the About first!</h2>
      <p>I am John, a recent graduate from University of California Irvine and currently reside in CA, USA. </p>
      <p>I enjoy the pursuit of craft, solving complex problems and helping others.</p>
      <p>In terms of hobbies, I enjoy travel, hiking, fishing, and seeking for yummy food!</p>
      <br /><br />
      <p>Favorite Food:</p>
      <div className='foodContainer'>
        <ul>
            <li><div className='hotpot'></div><h4>Hot Pot</h4></li>
            <li><div className='pekingduck'></div><h4>Peking Duck</h4></li>
        </ul>
        <ul>
            <li><div className='guilin'></div><h4>Guilin Noodle</h4></li>
            <li><div className='lionhead'></div><h4>Lion Head</h4></li>
        </ul>
      </div>

    </div>
  )
}

export default About
