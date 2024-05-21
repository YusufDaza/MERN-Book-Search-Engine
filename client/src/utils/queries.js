import {gql} from '@apollo/client'

export const QUERY_ME=gql`
query Daza {
    daza {
      _id
      bookCount
      email
      savedBooks {
        title
        link
        description
        image
        bookId
        authors
        _id
      }
    }
  }
`