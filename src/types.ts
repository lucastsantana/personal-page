export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
    inspirehep: string;
    lattes: string;
    orcid: string;
    twitter: string;
  };
  about: string;
  languages: { name: string; level: string }[];
}
