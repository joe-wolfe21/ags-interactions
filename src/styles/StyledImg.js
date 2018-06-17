import styled from 'styled-components'

export default styled.img`
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.16) 0px 2px 2px 0px;
  border-radius: 6px;

  &:hover,
  &:focus {
    transition: all 0.3s ease-in-out;
    transform: scale(1.1);
  }
`
