import {gql} from '@apollo/client'

export const QUERY_DAZA=gql`
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