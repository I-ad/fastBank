import {BoxAtomType} from '../BoxAtom/interface';
import {ButtonAtomType} from '../ButtonAtom/interface';

export interface IconAtomType {
  name: string;
  color?: string;
  width?: number | string;
  dataTestId?: string;
}

export interface IconWrapperAtomType extends IconAtomType {
  wrapperProps?: BoxAtomType;
}

export interface IconButtonAtomType extends IconAtomType {
  buttonProps?: ButtonAtomType;
}

export interface IconType {
  width?: number;
  color?: string;
  dataTestId?: string;
}
