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
import waiver from '../../assets/2019_AGS_waiver.pdf'

const Note = styled.h3`
  margin-top: 45px;
`

const IndexPage = () => (
  <div>
    <MainDetail
      title="We believe in meaningful social interactions and community integration"
      description="At A.G.S. interactions, we encourage positive, social relationships among
      adults with special needs by developing and practicing effective social
      skills. We do this through interactive social group sessions and monthly dances!"
      image={scarecrowArt}
    />
    <MainDetail
      title="Sign up for our social group sessions"
      description="Our participants are empowered to apply and practice social skills through
        a variety of artistic, educational, and integrative community experiences."
      image={plantArt}
      subDetails={[
        '$25.00 per session',
        'Wednesdays 6pm-7pm',
        'Registration required (via email or facebook events)',
      ]}
    />
    <MainDetail
      title="Join us for our monthly dances"
      description="Get ready to meet some great new people, have some tasty snacks with friends, and dance the night away!"
      image={dance}
      subDetails={[
        '$7.00 per dance participant',
        'Once a month, date announced in advance',
        'Registration required (at least one day in advance)',
      ]}
    />
    <h1>Interested?</h1>
    <Note>
      Please note, parents or guardians must complete the{' '}
      <a href={waiver} download>
        <span>2019 waiver form</span>
      </a>{' '}
      for each participant before they can attend an A.G.S. event.
    </Note>

    <ContactItem
      url="mailto:agsinteractions@gmail.com"
      icon={email}
      description="To find out more about A.G.S. Interactions, email us!"
    />
    <ContactItem
      url="https://www.facebook.com/AGS-Interactions-442225855961712/"
      target="_blank"
      icon={fb}
      description="To stay up to date with our upcoming events, follow us on facebook!"
    />
    <Note>
      * A parent or guardian must remain on the premises at all times.
    </Note>
  </div>
)

export default IndexPage
