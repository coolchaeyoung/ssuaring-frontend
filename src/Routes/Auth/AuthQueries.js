import { gql } from "apollo-boost";

export const LOG_IN = gql`
    mutation requestSecret($phoneNumber: String!) {
        requestSecret(phoneNumber: $phoneNumber)
    }
`;

/*export const CREATE_ACCOUNT = gql`
    mutation createAcount(
        $username: String!
        $email: String!
        $firstName: String
        $lastName: String
    ) {
        createAccount(
            username: $username
            email: $email
            firstName: $firstName
            lastName: $lastName
        )
    }
`;*/

export const CONFIRM_SECRET = gql`
    mutation confirmSecret($secret: String!, $phoneNumber: String!) {
        confirmSecret(secret: $secret, phoneNumber: $phoneNumber)
    }
`;

export const LOCAL_LOG_IN = gql`
    mutation logUserIn($token: String!) {
        localUserIn(token: $token) @client
    }
`;