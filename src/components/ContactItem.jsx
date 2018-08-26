import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;

  p {
    margin-left: 25px;
  }
`

const Icon = styled.img`
  margin-top: 50%;
  height: 30px;
  margin-bottom: 0;
`

const ContactItem = ({ url, target = '', icon, description }) => (
  <Wrapper>
    <a target={target} href={url}>
      <Icon src={icon} alt="detail icon" />
    </a>
    <p>{description}</p>
  </Wrapper>
)

export default ContactItem
