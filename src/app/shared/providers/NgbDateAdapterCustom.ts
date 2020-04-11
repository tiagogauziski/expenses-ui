import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

/**
 * This Service handles how the date is represented in scripts i.e. ngModel.
 */
@Injectable()
export class NgbDateAdapterCustom extends NgbDateAdapter<string> {

  readonly DELIMITER = '-';
  readonly HOUR_DELIMITER = ':';

  fromModel(value: string | null): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      let day = date[2].split(this.HOUR_DELIMITER)[0];

      return {
        day : parseInt(day, 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[0], 10)
      };
    }
    return null;
  }

  /**
   * Add leading zeros to a nunber and covert to string
   * @param num Number to add leading zeros
   * @param size Size of leading zeros
   */
  padString(num: number, size) : string {
    let s = num + '';

    while (s.length < size) {
      s = '0' + s;
    }

    return s;
  }

  toModel(date: NgbDateStruct | null): string | null {
    return date ? 
      date.year + this.DELIMITER + 
      this.padString(date.month, 2) + this.DELIMITER + 
      this.padString(date.day, 2)  : null;
  }
}