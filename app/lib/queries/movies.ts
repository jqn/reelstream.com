import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query GetMovies($pagination: PaginationInput, $where: MovieFilterInput) {
    movies(pagination: $pagination, where: $where) {
      nodes {
        writers
        worstRating
        title
        summary
        ratingValue
        rating
        posterUrl
        mainActors
        id
        genres {
          title
          id
        }
        duration
        directors
        datePublished
        bestRating
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
