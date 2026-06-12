export type ProjectOverview = {
      slug: string,
  image: string;
  type: "coding" | "design" | "art";
  title: string;
  link?: string;
  year?: number;
  demo?: string;
  description: string;
  tags: string[];

}