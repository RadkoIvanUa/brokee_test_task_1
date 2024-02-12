import { gql } from '@apollo/client';

export const GET_ALL_TESTS = gql`
  query GetAllTest {
    tests {
      brokee_id
      category
      difficulty
      featured_image
      name
      roles
      status
      tech_stack
      type
      description_short
      requires_payment
    }
  }
`;
