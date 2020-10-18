import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from 'react-apollo-hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from "../Styles/GlobalStyles";
import AppRouter from './Router';
import { ThemeProvider } from 'styled-components';
import Theme from '../Styles/Theme';
import Footer from './Footer';

const Query = gql`
  {
    isLoggedIn @client
  }
`; 


export default () => {
  const { data: { isLoggedIn } } = useQuery(Query);
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            <AppRouter isLoggedIn={isLoggedIn}/>
            <Footer />
            <ToastContainer position={toast.POSITION.BOTTOM_LEFT}/>
          </>
        </Router>
      </>
    </ThemeProvider>
  );
};