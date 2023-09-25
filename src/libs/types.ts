export interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}
export interface Event {
  id: 4;
  attributes: {
    Title: string;
    createdAt: string;
    eventId: string;
    location: string;
    mediaLink: string;
    presenter: string;
    presenterIntro: string;
    publishedAt: string;
    signUpLink: string;
    time: string;
    updatedAt: string;
  };
}
