import { StaticImageData } from 'next/image';

export interface IPostItemProps {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
}
