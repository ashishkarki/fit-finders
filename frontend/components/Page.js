import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --red: #FF0000;
    --black: #393939;
    --grey: #3A3A3A;
    --lightGrey: #E1E1E1;
    --offWhite: #EDEDED;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);

    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'radnika_next', Roboto, sans-serif;

    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family: 'radnika_next', Roboto, sans-serif;
  }
`;

const InnerStyled = styled.div`
  max-width: var(--maxWidth, 1000px);
  margin: 0 auto;
  padding: 2rem;
`;

const Page = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />

    <InnerStyled>{children}</InnerStyled>
  </div>
);

export default Page;

Page.propTypes = {
  children: PropTypes.any,
};
