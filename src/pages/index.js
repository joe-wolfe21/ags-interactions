import React from 'react'
import styled from 'styled-components'

import ContactItem from '../components/ContactItem'
import StyledImg from '../styles/StyledImg'
import flowerArt from '../../assets/art/flowerArt.png'
import plantArt from '../../assets/art/plantArt.png'
import scarecrowArt from '../../assets/art/scarecrowArt.png'
import dance from '../../assets/dances/dance.png'
import fb from '../../assets/fb.svg'
import email from '../../assets/email.svg'

const MainPhoto = styled.div`
  margin: 30px auto;
  text-align: center;

  img {
    max-height: 400px;
  }
`

const Section = styled.div`
  margin-bottom: 75px;
`

const IndexPage = () => (
  <div>
    <Section>
      <h1>
        We believe in meaningful social interactions and community integration
      </h1>
      <p>
        At AGS interactions, we encourage positive, social relationships among
        adults with special needs by developing and practicing effective social
        skills. We do this through interactive social sessions and monthly
        dances!
      </p>
      <MainPhoto>
        <StyledImg src={scarecrowArt} alt="flower art session" />
      </MainPhoto>
    </Section>
    <h1>Stop by for one of our weekly social sessions</h1>
    <p>
      Our participants are empowered to apply and practice social skills through
      a variety of artistic, educational, and integrative community experiences
    </p>
    <MainPhoto>
      <StyledImg src={plantArt} alt="plant art session" />
    </MainPhoto>
    <h1>Party with us during our monthly dances</h1>
    <p>
      Get ready to eat some great snacks, meet some even greater people, and
      dance your butts off!
    </p>
    <MainPhoto>
      <StyledImg src={dance} alt="dance group" />
    </MainPhoto>
    <h1>Interested? Find out more!</h1>
    <ContactItem
      url="https://www.facebook.com/AGS-Interactions-442225855961712/"
      target="_blank"
      icon={fb}
      description="Follow our facebook page to keep track of all our upcoming events!"
    />
    <ContactItem
      url="mailto:agsinteractions@gmail.com"
      icon={email}
      description="Questions? Want to help? Email us. We'll be glad to hear from you!"
    />
  </div>
)

export default IndexPage
