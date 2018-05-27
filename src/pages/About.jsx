import React from 'react'
import styled from 'styled-components'

import aj from '../../assets/headshots/aj.png'
import gabriel from '../../assets/headshots/gabriel.png'
import stephen from '../../assets/headshots/stephen.png'

const AGS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Person = styled.div`
  text-align: center;
`

const Headshot = styled.img`
  height: 150px;
  border-radius: 65px;
  margin-bottom: 0;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 2px 0px, rgba(0, 0, 0, 0.16) 0px 2px 2px 0px;

  &:hover,
  &:focus {
  transition: all .3s ease-in-out;
  transform: scale(1.1);
  }
}
`

const About = () => (
  <div>
    <h1>Our own children with special needs motivated us to form AGS</h1>
    <AGS>
      <Person>
        <p>Anthony Zuazo</p>
        <Headshot src={aj} alt={'aj headshot'} />
      </Person>
      <Person>
        <p>Gabriel Wolfe</p>
        <Headshot src={gabriel} alt={'gabriel headshot'} />
      </Person>
      <Person>
        <p>Stephen Zuazo</p>
        <Headshot src={stephen} alt={'stephen headshot'} />
      </Person>
    </AGS>
    <p>
      Post graduation, we realized the limited options for social opportunities
      for adults with special needs. So, we created our own program as a way to
      fulfill this need.
    </p>
  </div>
)

export default About
