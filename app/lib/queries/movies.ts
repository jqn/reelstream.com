import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query GetMovies($pagination: PaginationInput, $where: MovieFilterInput) {
    movies(pagination: $pagination, where: $where) {
      nodes {
        title
        summary
        rating
        posterUrl
        id
        genres {
          title
          id
        }
        duration
      }
      pagination {
        totalPages
        perPage
        page
      }
    }
  }
`;

export const GET_MOVIE = gql`
  query GetMovie($id: ID!) {
    movie(id: $id) {
      id
      title
      posterUrl
      summary
      duration
      directors
      mainActors
      writers
      genres {
        id
        title
      }
      datePublished
      rating
      ratingValue
      bestRating
      worstRating
    }
  }
`;

export const GET_GENRES = gql`
  query Genres {
    genres {
      nodes {
        id
        title
      }
    }
  }
`;
