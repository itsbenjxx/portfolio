export type ProjetSize = 'large' | 'medium' | 'small' | 'horizontal';

export interface Projet {
  id: number;
  title: string;
  description: string;
  tags: string[];
  linkText: string;
  linkRef: string;
  linkIcon: string;
  image?: string;
  icon?: string;
  size?: ProjetSize;
  createdAt: string;
}
