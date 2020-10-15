import React from 'react';
import { HashRouter as Router } from "react-router-dom";
import { gql } from "apollo-boost";
import GlobalStyles from "../Styles/GlobalStyles";
import AppRouter from './Router';
import { useQuery } from 'react-apollo-hooks';

const Query = gql`
  {
    isLoggedIn @client
  }
`; 


export default () => {
  const { data: { isLoggedIn } } = useQuery(Query);
  return (
    <>
      <GlobalStyles />
      <Router>
        <AppRouter isLoggedIn={isLoggedIn}/>
      </Router>
    </>
  );
};