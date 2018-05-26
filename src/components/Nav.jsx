import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'
import logo from '../../assets/logo/ags.png'

const StyledNav = styled.div`
  background: #72aba6;
  color: white;
  margin-bottom: 3rem;
  padding: 1.45rem 1.0875rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1012px;
  margin: 0 auto;
`

const Title = styled(Link)`
  text-decoration: none;
  color: white;
  flex: 1;

  img {
    margin-top: -23px;
    height: 85px;
    margin-bottom: 0;
  }
`

const Links = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

  li {
    margin: 6px;

    a {
      color: white;
      text-decoration: none;
    }
  }
`

const Description = styled.h1`
  margin-bottom: 16px;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
  font-size: 64px;
  text-align: center;
`

const Mission = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 30px auto;
  line-height: 1.75;
  font-size: 24px;
`

const Nav = ({ title }) => (
  <StyledNav>
    <Container>
      <Title to="/">
        <img src={logo} alt={'ags interactions logo'} />
      </Title>
      <Links>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
      </Links>
    </Container>
    <Description>{title}</Description>
    <Mission>
      A social organization that provides an engaging, positive environment for
      adults with special needs
    </Mission>
  </StyledNav>
)

export default Nav
