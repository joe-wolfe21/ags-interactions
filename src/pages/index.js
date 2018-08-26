import React from 'react'
import styled from 'styled-components'

import MainDetail from '../components/MainDetail'
import ContactItem from '../components/ContactItem'
import flowerArt from '../../assets/art/flowerArt.png'
import plantArt from '../../assets/art/plantArt.png'
import scarecrowArt from '../../assets/art/scarecrowArt.png'
import dance from '../../assets/dances/dance.png'
import fb from '../../assets/fb.svg'
import email from '../../assets/email.svg'

const IndexPage = () => (
  <div>
    <MainDetail
      title="We believe in meaningful social interactions and community integration"
      description="At AGS interactions, we encourage positive, social relationships among
      adults with special needs by developing and practicing effective social
      skills. We do this through interactive social sessions and monthly dances!"
      image={scarecrowArt}
    />
    <MainDetail
      title="Stop by for one of our weekly social sessions"
      description="Our participants are empowered to apply and practice social skills through
        a variety of artistic, educational, and integrative community experiences"
      image={plantArt}
    />

    <MainDetail
      title="Party with us during our monthly dances"
      description="Get ready to eat some great snacks, meet some even greater people, and
dance your butts off!"
      image={dance}
    />
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
