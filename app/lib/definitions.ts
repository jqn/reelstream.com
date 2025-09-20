// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.

import { Maybe } from "graphql/jsutils/Maybe";

export const GENRE_CONTENT_TYPE = "genre";

export type Genre = {
  id: string;
  title: string | null;
  movies: Array<Partial<Movie>>;
};

export type PaginationInput = {
  perPage: number;
  page: number;
};

export type MovieFilterInput = {
  search?: string | null;
  genre?: string | null;
};

export type PageInfo = {
  totalPages: number;
  perPage: number;
  page: number;
};

export type Movie = {
  id: string;
  title: string;
  posterUrl: string;
  summary: string;
  duration: string;
  directors: string[];
  mainActors: string[];
  genres: Maybe<Omit<Genre, "movies">>[];
  datePublished: string;
  rating: string;
  ratingValue: number;
  bestRating: number;
  worstRating: number;
  writers: string[];
};

export type GetMoviesQuery = {
  movies: {
    nodes: Movie[];
    pagination: PageInfo;
  };
};

export type GetMovieQuery = {
  movie: Movie;
};

export type GetGenresQuery = {
  genres: {
    nodes: Pick<Genre, "id" | "title">[];
  };
};
