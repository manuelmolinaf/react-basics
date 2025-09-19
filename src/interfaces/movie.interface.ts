export interface Movie {
  rank: number;
  id: string;
  name: string;
  year: number;
  imbd_votes: number;   // typo in original JSON (should be imdb_votes?)
  imdb_rating: number;
  certificate: string;
  duration: number;     // minutes
  genre: string;        // could also be string[] if split later
  cast_id: string;      // comma-separated list of IDs
  cast_name: string;    // comma-separated list of names
  director_id: string;
  director_name: string;
  writer_name: string;  // comma-separated list
  writer_id: string;    // comma-separated list
  img_link: string;
}