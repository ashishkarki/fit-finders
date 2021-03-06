import Link from 'next/link';
import styled from 'styled-components';
import NavBar from './NavBar';

const LogoStyled = styled.h1`
  background-color: red;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyled = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

const Header = () => (
  <HeaderStyled>
    <div className="bar">
      <LogoStyled>
        <Link href="/">Fit Finders</Link>
      </LogoStyled>
    </div>

    <div className="sub-bar">
      <p>Search</p>
    </div>

    <NavBar />
  </HeaderStyled>
);

export default Header;
