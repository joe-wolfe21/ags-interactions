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
`

const Person = styled.div`
  text-align: center;
`

const Headshot = styled(StyledImg)`
  height: 150px;
  border-radius: 65px;
}
`

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
  </div>
)

export default About
