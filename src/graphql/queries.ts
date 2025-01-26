import { gql } from "@apollo/client";

export const GET_NOVELS = gql`
  query Novel {
    novels {
      authors {
        id
        name
        novelID
      }
      createdAt
      id
      image
      title
      updatedAt
    }
  }
`;

export const GET_NOVEL = gql`
  query Novel($id: ID!) {
    novel(id: $id) {
      authors {
        id
        name
        novelId
      }
      id
      image
      title
    }
  }
`;
