import React from 'react'
import styled from 'styled-components'

import StyledImg from '../styles/StyledImg'
import aj from '../../assets/headshots/aj.png'
import gabriel from '../../assets/headshots/gabriel.png'
import stephen from '../../assets/headshots/stephen.png'

const AGS = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const Person = styled.div`
  text-align: center;
`

const Headshot = styled(StyledImg)`
  height: 150px;
  border-radius: 65px;
}
`

const Mission = styled.p``

const About = () => (
  <div>
    <h1>
      Our sons with special needs motivated us to form A.G.S. Interactions
    </h1>
    <AGS>
      <Person>
        <p>A.J. Zuazo</p>
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
      for adults with special needs. As a result, A.G.S. Interactions was born!
    </p>
    <h1>Our mission</h1>
    <Mission>
      Our goal is to encourage positive, social relationships among adults with
      special needs by developing and practicing effective social skills.
    </Mission>
    <div>Ann Wolfe, founder</div>
    <div>Janet Zuazo (M.Ed), founder</div>
  </div>
)

export default About
