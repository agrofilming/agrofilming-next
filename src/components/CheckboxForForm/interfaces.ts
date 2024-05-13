import { StaticImageData } from 'next/image';

export interface ICheckboxForFormProps {
  name: string;
  control: any;
  disabled?: boolean;
  img?: StaticImageData;
}
