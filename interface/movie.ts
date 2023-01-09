export interface movieRaw {
      adult: boolean,
      backdrop_path: string,
      genre_ids: number[],
      id: number,
      original_language: string,
      original_title: string,
      overview: string,
      popularity: number,
      poster_path: string,
      release_date: string,
      title: string,
      video: boolean,
      vote_average: number,
      vote_count: number,
    }

  export interface movieListProps {
    movies: movieRaw[]
  }

  export interface movieDetailsProps {
    details: movieDetails
    cast: castDetails[]
  }

  export interface movieBasic {
      id: number,
      release_date: string,
      title: string,
      vote_average: number,
    }

    export interface movieReduced extends movieBasic {
      poster_path: string
    }

    
  export interface movieDetails extends movieBasic {
      budget: number,
      genres: [
        { id: number, name: string },
        { id: 12, name: string},
        { id: 28, name: string }
      ],
      homepage: string,
      id: number,
      original_language: string,
      original_title: string,
      overview: string,
      popularity: number,
      poster_path: string,
      production_companies: [
        {
          id: number,
          logo_path: string,
          name: string,
          origin_country: string,
        },
        {
          id: number,
          logo_path: string,
          name: string,
          origin_country: string
        }
      ],
      release_date: string,
      revenue: number,
      runtime: number,
      spoken_languages: [ { english_name: string, iso_639_1: string, name: string } ],
      status: string,
      tagline: string,
      title: string,
      vote_average: number,
      vote_count: number
    }
  

  export interface castDetails extends movieBasic {
      id: number,
      name: string,
      popularity: number,
      profile_path: string | null,
      credit_id: string,
      job: string
  }