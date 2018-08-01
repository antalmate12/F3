import { Injectable } from '@angular/core';

export class TranslationSet {
  public languange: string;
  public values: { [key: string]: string } = {};
}

@Injectable()
export class TranslationService {
  public languages = ['hun', 'eng'];
  public language = 'hun';

  private dictionary: { [key: string]: TranslationSet } = {
    'hun': {
      languange: 'hun',
      values: {
        'dt': 'Dátum',
        'megj': 'Megjegyzés',
        'pc': 'Költség',
      }
    },
    'eng': {
      languange: 'eng',
      values: {
        'dt': 'Date',
        'megj': 'About',
        'pc': 'Price',
      }
    }
  };

  constructor() { }

  translate(value: string): string {
    //console.log('translate called with value ' + value + ' and language ' + this.language);
    if (this.dictionary[this.language] != null) {
      return this.dictionary[this.language].values[value];
    }
  }
}