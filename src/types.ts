export interface ITeacher {
  id: number;
  name: string;
  surname: string;
  rating: number;
  languages: string[];
  levels: string[];
  avatar_url: string;
  price_per_hour: number;
  lessons_done: number;
  lesson_info: string;
  conditions: string[];
  experience: string;
  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    avatar_url: string;
    comment: string;
  }[];
}
