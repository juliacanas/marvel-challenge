import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 12px),
    calc(100% - 12px) 100%,
    0 100%
  );
`

export const CharacterInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 1.6rem 2.4rem 1.6rem;
  flex: 1;
`

export const StyledImage = styled.img`
  border-bottom: ${({ theme }) => `0.4rem solid ${theme.colors.red}`};
  height: 19rem;
  object-fit: cover;
`

export const Name = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`

export const Button = styled.button`
  all: unset;
`
