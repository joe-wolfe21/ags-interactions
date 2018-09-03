import React from 'react'
import Link from 'gatsby-link'

import styled from 'styled-components'
import logo from '../../assets/logo/ags.png'

const StyledNav = styled.div`
  background: linear-gradient(to right, #97c4c0, #012d68);
  color: white;
  margin-bottom: 5rem;
  padding: 1.45rem 1.0875rem;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1012px;
  margin: 0 auto;
`

const Header = styled(Link)`
  text-decoration: none;
  color: white;

  img {
    margin-top: -20px;
    height: 100px;
    margin-bottom: 0;
  }
`

const Empty = styled.div`
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

const Title = styled.h1`
  margin-bottom: 16px;
  margin-top: 8px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 700;
  font-size: 50px;
  text-align: center;
`

const Mission = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 30px auto;
  line-height: 1.75;
  color: white;
`

const Nav = ({ title }) => (
  <StyledNav>
    <Container>
      <Header to="/">
        <img src={logo} alt={'ags interactions logo'} />
      </Header>
      <Empty />
      <Links>
        <li>
          <Link to="/about">About</Link>
        </li>
      </Links>
    </Container>
    <Title>{title}</Title>
    <Mission>
      A social organization that provides an engaging, positive environment for
      young adults with special needs
    </Mission>
  </StyledNav>
)

export default Nav
