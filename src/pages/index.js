import React from 'react'
import styled from 'styled-components'

const Summary = styled.p`
  color: rgb(56, 64, 70);
  line-height: 1.5;
  margin-top: 15px;
  font-size: 24px;
`
const IndexPage = () => (
  <div>
    <h1>
      We believe in meaningful social interactions and community integration
    </h1>
    <Summary>
      At AGS interactions, we encourage positive, social relationships among
      adults with special needs by developing and practicing effective social
      skills.
    </Summary>

    <h1>Join our interactive social sessions</h1>
    <Summary>
      Our participants are empowered to apply and practice social skills through
      a variety of artistic, educational, and integrative community experiences
    </Summary>
  </div>
)

export default IndexPage
