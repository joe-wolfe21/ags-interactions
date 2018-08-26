import React from 'react'
import styled from 'styled-components'

import StyledImg from '../styles/StyledImg'

const MainPhoto = styled.div`
  margin: 30px auto;
  text-align: center;

  img {
    max-height: 400px;
  }
`

const MainDetails = ({ title, description, image }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <MainPhoto>
      <StyledImg src={image} alt="main detail image" />
    </MainPhoto>
  </div>
)

export default MainDetails
