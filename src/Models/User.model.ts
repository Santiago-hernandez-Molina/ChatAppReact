export type User = {
  id: number;
  username: string;
  email: string;
  authorized: boolean;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type Contact = {
  id: number;
  username: string;
  email: string;
  isContact: boolean;
};

export type PaginatedUsers = {
  limit: number;
  offset: number;
  count: number;
  data: Contact[];
};
