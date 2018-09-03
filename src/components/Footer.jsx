import React from 'react'
import styled from 'styled-components'
import fb from '../../assets/fb.svg'
import email from '../../assets/email.svg'

const StyledFooter = styled.div`
  background-color: #f9f9fa;
  height: 100%;
  color: rgb(96, 110, 119);
  padding: 0 15px 30px 15px;
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
  text-align: center;
  margin-top: 15px;
`

const ExtraDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1020px;
`

const DetailIcons = styled.div`
  display: flex;
  width: 100px;
  justify-content: space-between;
`

const FbIcon = styled.a`
  margin-top: 9px;

  img {
    height: 30px;
  }
`

const MailIcon = styled.a`
  margin-top: 2px;

  img {
    height: 45px;
  }
`

const Footer = () => (
  <StyledFooter>
    <Summary>
      A.G.S. Interactions is a social group for adults with special needs that
      instills social confidence and builds friendships in an enjoyable,
      positive atmosphere
    </Summary>
    <ExtraDetails>
      <Copyright>&copy; 2018 A.G.S. Interactions</Copyright>
      <DetailIcons>
        <FbIcon
          target={'_blank'}
          href={'https://www.facebook.com/AGS-Interactions-442225855961712/'}
        >
          <img src={fb} alt={'facebook icon'} />
        </FbIcon>
        <MailIcon href="mailto:agsinteractions@gmail.com">
          <img src={email} alt={'email icon'} />
        </MailIcon>
      </DetailIcons>
    </ExtraDetails>
  </StyledFooter>
)

export default Footer
