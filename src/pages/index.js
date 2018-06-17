import React from 'react'
import styled from 'styled-components'

import StyledImg from '../styles/StyledImg'
import flowerArt from '../../assets/art/flowerArt.png'
import plantArt from '../../assets/art/plantArt.png'
import scarecrowArt from '../../assets/art/scarecrowArt.png'

const PhotoCatalog = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const PhotoCatalogImg = styled(StyledImg)`
  height: 350px;
  margin: 0 30px;
`

const MainPhoto = styled.div`
  margin: 30px auto;
  text-align: center;
`

const IndexPage = () => (
  <div>
    <h1>
      We believe in meaningful social interactions and community integration
    </h1>
    <p>
      At AGS interactions, we encourage positive, social relationships among
      adults with special needs by developing and practicing effective social
      skills
    </p>
    <MainPhoto>
      <StyledImg src={scarecrowArt} alt="flower art session" />
    </MainPhoto>
    <h1>Join our interactive social sessions</h1>
    <p>
      Our participants are empowered to apply and practice social skills through
      a variety of artistic, educational, and integrative community experiences
    </p>
    <PhotoCatalog>
      <PhotoCatalogImg src={plantArt} alt="plant art session" />
      <PhotoCatalogImg src={flowerArt} alt="flower art session" />
    </PhotoCatalog>
  </div>
)

export default IndexPage
