import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 24px),
    calc(100% - 24px) 100%,
    0 100%
  );
`
