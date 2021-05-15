// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type Post = {
  id: number;
  name: string;
  body: unknown; // todo : use sanity's type
  author: string;
  created_at: unknown; // todo : date type
  updated_at: unknown; // todo : date type
  status: "DRAFT" | "PUBLIC" | "PRIVATE";
};
