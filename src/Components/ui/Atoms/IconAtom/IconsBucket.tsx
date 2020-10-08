import * as React from 'react';
import {
  BellIcon,
  CalendarIcon,
  EmailIcon,
  PasswordIcon,
  PhoneIcon,
} from './Icons';

interface IconType {
  width?: number | string;
  color?: string;
  dataTestId?: string;
}

class Icons {
  private allIcons: {[key: string]: React.FC<IconType>} = {};
  private _names: string[] = [];

  public get all(): {[key: string]: React.FC<IconType>} {
    const I: {[key: string]: React.FC<IconType>} = {};
    this._names.map((i) => (I[i] = this.allIcons[i]));
    return I;
  }

  public getByName(name: string): React.FC<IconType> | null {
    if (this._names.indexOf(name) === -1) {
      return null;
    }
    return this.allIcons[name];
  }

  public addIcon(name: string, Icon: any) {
    if (this._names.indexOf(name) === -1) {
      this._names.push(name);
    }
    this.allIcons[name] = Icon;
  }

  get names(): string[] {
    return this._names;
  }
}

const IconsBucket = new Icons();

IconsBucket.addIcon('BellIcon', BellIcon);
IconsBucket.addIcon('EmailIcon', EmailIcon);
IconsBucket.addIcon('PasswordIcon', PasswordIcon);
IconsBucket.addIcon('PhoneIcon', PhoneIcon);
IconsBucket.addIcon('CalendarIcon', CalendarIcon);
export default IconsBucket;
