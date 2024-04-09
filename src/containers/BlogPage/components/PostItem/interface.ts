import { StaticImageData } from 'next/image';

export interface IPostItemProps {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
}
