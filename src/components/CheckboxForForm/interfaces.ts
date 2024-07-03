import { StaticImageData } from 'next/image';

export interface ICheckboxForFormProps {
  name: string;
  options: { value: string; label: string }[];
  control: any;
  disabled?: boolean;
  img?: StaticImageData;
}
