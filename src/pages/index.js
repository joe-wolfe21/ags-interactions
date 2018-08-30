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

const Note = styled.h3`
  margin-top: 45px;
`

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
        a variety of artistic, educational, and integrative community experiences. $25.00 per session."
      image={plantArt}
    />
    <MainDetail
      title="Party with us during our monthly dances"
      description="Get ready to meet some great new people, have some tasty snacks with friends, and dance the night away! $7.00 per dance participant."
      image={dance}
    />
    <h1>Interested?</h1>
    <ContactItem
      url="mailto:agsinteractions@gmail.com"
      icon={email}
      description="To find out more about AGS Interactions, email us to be added to our distribution list for social group topics and dance themes."
    />
    <ContactItem
      url="https://www.facebook.com/AGS-Interactions-442225855961712/"
      target="_blank"
      icon={fb}
      description="Follow us on facebook to stay up to date with our latest events and to see even more pictures of our latest socials!"
    />
    <Note>* Parents/Guardians must remain on the premises at all times.</Note>
  </div>
)

export default IndexPage
