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

export const GET_MOVIE_BY_ID = gql`
  query GetMovieById($id: ID!) {
    movie(id: $id) {
      title
      summary
      rating
      ratingValue
      posterUrl
      mainActors
      duration
      genres {
        title
      }
      id
      directors
      datePublished
      bestRating
    }
  }
`;
