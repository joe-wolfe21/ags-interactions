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

const SubDetails = styled.ul``

const SubDetail = styled.li``

const MainDetails = ({ title, description, image, subDetails = [] }) => (
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
    <SubDetails>
      {subDetails.map((subDetail, i) => (
        <SubDetail key={i}>{subDetail}</SubDetail>
      ))}
    </SubDetails>
    <MainPhoto>
      <StyledImg src={image} alt="main detail image" />
    </MainPhoto>
  </div>
)

export default MainDetails
