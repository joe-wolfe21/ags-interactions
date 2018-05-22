import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'
import logo from '../../assets/logo/ags-logo.jpg'

const StyledNav = styled.div`
  background: #365899;
  color: white;
  margin-bottom: 1.45rem;
  padding: 1.45rem 1.0875rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1012px;
  margin: 0 auto;
`

const Logo = styled.div``

const Title = styled(Link)`
  text-decoration: none;
  color: white;
  flex: 1;
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

const Nav = ({ title }) => (
  <StyledNav>
    <Container>
      <Logo>
        <div style={{ width: '50px', height: '50px' }} />
      </Logo>
      <Title to="/">
        <h1>{title}</h1>
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
  </StyledNav>
)

export default Nav
