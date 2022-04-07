import { format } from "date-fns";

const apiResponse = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg",
      genre_ids: [28, 12, 878],
      id: 406759,
      original_language: "en",
      original_title: "Moonfall",
      overview:
        "A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.",
      popularity: 6302.489,
      poster_path: "/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
      release_date: "2022-02-03",
      title: "Moonfall",
      video: false,
      vote_average: 6.4,
      vote_count: 510,
    },
    {
      adult: false,
      backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 6284.07,
      poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      release_date: "2021-12-15",
      title: "Spider-Man: No Way Home",
      video: false,
      vote_average: 8.2,
      vote_count: 11074,
    },
    {
      adult: false,
      backdrop_path: "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
      genre_ids: [16, 10751, 35, 14],
      id: 508947,
      original_language: "en",
      original_title: "Turning Red",
      overview:
        "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
      popularity: 5126.644,
      poster_path: "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
      release_date: "2022-03-01",
      title: "Turning Red",
      video: false,
      vote_average: 7.5,
      vote_count: 1450,
    },
    {
      adult: false,
      backdrop_path: "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
      genre_ids: [28, 878, 35, 10751],
      id: 675353,
      original_language: "en",
      original_title: "Sonic the Hedgehog 2",
      overview:
        "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
      popularity: 3360.743,
      poster_path: "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
      release_date: "2022-03-30",
      title: "Sonic the Hedgehog 2",
      video: false,
      vote_average: 7.8,
      vote_count: 140,
    },
    {
      adult: false,
      backdrop_path: "/ewUqXnwiRLhgmGhuksOdLgh49Ch.jpg",
      genre_ids: [28, 12, 35, 878],
      id: 696806,
      original_language: "en",
      original_title: "The Adam Project",
      overview:
        "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self on a mission to save the future.",
      popularity: 2399.456,
      poster_path: "/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
      release_date: "2022-03-11",
      title: "The Adam Project",
      video: false,
      vote_average: 7,
      vote_count: 1570,
    },
    {
      adult: false,
      backdrop_path: "/t7I942V5U1Ggn6OevN75u3sNYH9.jpg",
      genre_ids: [28, 53],
      id: 760868,
      original_language: "sv",
      original_title: "Svart krabba",
      overview:
        "To end an apocalyptic war and save her daughter, a reluctant soldier embarks on a desperate mission to cross a frozen sea carrying a top-secret cargo.",
      popularity: 2371.207,
      poster_path: "/mcIYHZYwUbvhvUt8Lb5nENJ7AlX.jpg",
      release_date: "2022-03-18",
      title: "Black Crab",
      video: false,
      vote_average: 6.2,
      vote_count: 272,
    },
  ],
};

const movies = apiResponse.results.map(
  ({ title, poster_path, id, overview, release_date }) => ({
    title,
    posterUrl: `http://image.tmdb.org/t/p/w154${poster_path}`,
    posterAltText: `${title} movie poster`,
    id,
    overview,
    release_date: format(new Date(release_date), "yyyy, MMMM do"),
  })
);

export default movies;
