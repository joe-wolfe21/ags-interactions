import React from 'react'
import styled from 'styled-components'
import fb from '../../assets/fb.svg'
import email from '../../assets/email.svg'

const StyledFooter = styled.div`
  background-color: #f9f9fa;
  height: 100%;
  color: rgb(96, 110, 119);
  padding-bottom: 30px;
`

const Summary = styled.p`
  max-width: 650px;
  text-align: center;
  margin: 0 auto;
  line-height: 1.5;
  font-size: 20px;
  padding: 60px 0 30px 0;
`

const Item = styled.div`
  text-align: center;
  margin-top: 30px;

  img {
    height: 30px;
    cursor: pointer;
    margin-bottom: 0;
  }
`

const Label = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25;
  margin: 0px;
`

const Value = styled.div`
  margin-top: 15px;
`

const Copyright = styled.div`
  font-size: 14px;
  color: rgb(122, 140, 151);
  margin: 0px;
  text-align: center;
  margin-top: 15px;
`

const Footer = () => (
  <StyledFooter>
    <Summary>
      AGS Interactions is an interactive social group for adults with special
      needs. Our sessions instill social confidence and build friendships in an
      enjoyable, positive environment
    </Summary>
    <Item>
      <Label>Join Us</Label>
      <Value>
        <a
          target={'_blank'}
          href={'https://www.facebook.com/AGS-Interactions-442225855961712/'}
        >
          <img src={fb} alt={'facebook icon'} />
        </a>
      </Value>
    </Item>
    <Item>
      <Label>Contact Us</Label>
      <Value>
        <a href="mailto:agsinteractions@gmail.com">
          <img src={email} alt={'email icon'} />
        </a>
      </Value>
    </Item>
    <Copyright>© 2018 AGS Interactions</Copyright>
  </StyledFooter>
)

export default Footer
