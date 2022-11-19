import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($userId: ID!, $bookId: String!) {
    saveBook(userId: $userId, $bookId: String) {
      _id
      username
      bookCount
      savedBooks{
        bookId
        title
        authors
        description
        link
        image
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($userId: ID!, $bookId: String!) {
    removeBook(userId: $userId, $bookId: String) {
      _id
      username
      bookCount
      savedBooks{
        bookId
        title
        authors
        description
        link
        image
      }
    }
  }
`;
