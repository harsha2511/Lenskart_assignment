export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

export interface Genre {
  id: number;
  name: string;
}

export const genres: Genre[] = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Sci-Fi" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    poster_path: "https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    release_date: "2010-07-16",
    vote_average: 8.4,
    genre_ids: [28, 878, 53],
  },
  {
    id: 2,
    title: "The Dark Knight",
    poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    release_date: "2008-07-18",
    vote_average: 9.0,
    genre_ids: [28, 80, 18],
  },
  {
    id: 3,
    title: "Interstellar",
    poster_path: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    release_date: "2014-11-07",
    vote_average: 8.6,
    genre_ids: [12, 18, 878],
  },
  {
    id: 4,
    title: "The Shawshank Redemption",
    poster_path: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    release_date: "1994-09-23",
    vote_average: 8.7,
    genre_ids: [18, 80],
  },
  {
    id: 5,
    title: "Pulp Fiction",
    poster_path: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    release_date: "1994-10-14",
    vote_average: 8.5,
    genre_ids: [53, 80],
  },
  {
    id: 6,
    title: "The Matrix",
    poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    release_date: "1999-03-31",
    vote_average: 8.2,
    genre_ids: [28, 878],
  },
  {
    id: 7,
    title: "Forrest Gump",
    poster_path: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/ghgfzbEV7kbpbi1O3rFrQdKs5m0.jpg",
    overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    release_date: "1994-07-06",
    vote_average: 8.5,
    genre_ids: [35, 18, 10749],
  },
  {
    id: 8,
    title: "Fight Club",
    poster_path: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    release_date: "1999-10-15",
    vote_average: 8.4,
    genre_ids: [18, 53],
  },
  {
    id: 9,
    title: "Avatar",
    poster_path: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/o0s4XsEDfDlvit5pDRKjzXR4pp2.jpg",
    overview: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    release_date: "2009-12-18",
    vote_average: 7.6,
    genre_ids: [28, 12, 14, 878],
  },
  {
    id: 10,
    title: "The Godfather",
    poster_path: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    overview: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
    release_date: "1972-03-14",
    vote_average: 8.7,
    genre_ids: [18, 80],
  },
  {
    id: 11,
    title: "Gladiator",
    poster_path: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/hsLpYxMjMNKXU5VJcP5yNYEHyEe.jpg",
    overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    release_date: "2000-05-05",
    vote_average: 8.2,
    genre_ids: [28, 12, 18],
  },
  {
    id: 12,
    title: "The Lion King",
    poster_path: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/wXsQvli6tWqja51pYxXNG1LFIGV.jpg",
    overview: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    release_date: "1994-06-24",
    vote_average: 8.3,
    genre_ids: [16, 12, 18, 10751],
  },
];

export const getGenreNames = (genreIds: number[]): string[] => {
  return genreIds
    .map((id) => genres.find((g) => g.id === id)?.name)
    .filter(Boolean) as string[];
};
