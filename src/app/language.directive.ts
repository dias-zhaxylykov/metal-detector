import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import { Vocabulary, Lang } from './schemas';

@Directive({
  selector: '[appLanguage]'
})
export class LanguageDirective implements OnChanges{

  vocabulary: Vocabulary = {
    _name: {
      kaz: 'Аты',
      rus: 'Название'
    },
    _type: {
      kaz: 'Түрі',
      rus: 'Тип'
    },
    _year: {
      kaz: 'Жыл',
      rus: 'Год'
    },
    _count: {
      kaz: 'Саны',
      rus: 'Количество'
    },
    _country: {
      kaz: 'Мемлекет',
      rus: 'Страна'
    },
    _status: {
      kaz: 'Күй',
      rus: 'Статус'
    }
  }

  @Input()
  lang!: keyof Lang;

  @Input()
  text!: string;

  constructor(private el: ElementRef) {
  }

  ngOnChanges(changes:any) {
    this.translate();
   }

   translate() {
    if (this.vocabulary[<keyof Vocabulary>this.text]){
      let temp = this.vocabulary[<keyof Vocabulary>this.text][this.lang];
      this.el.nativeElement.innerText = temp;
    }
   }

}
