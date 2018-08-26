import React from 'react'
import styled from 'styled-components'

const Center = styled.div`
  text-align: center;
`

const Icon = styled.img`
  height: 50px;
  margin-bottom: 0;
`

const ContactItem = ({ url, target = '', icon, description }) => (
  <div>
    <p>{description}</p>
    <Center>
      <a target={target} href={url}>
        <Icon src={icon} alt="detail icon" />
      </a>
    </Center>
  </div>
)

export default ContactItem
