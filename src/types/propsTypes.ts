export interface LogoProps {
  withText: boolean;
}

export interface UserProfileProps {
  userEmail: string;
}

export interface MovieListItemProps {
  id: number;
  backdropPath: string;
  title: string;
  voteAverage: number;
  voteCount: number;
  releaseDate: string;
}
