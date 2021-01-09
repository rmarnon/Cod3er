import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBlue]'
})
export class BlueDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = '#3232ff';
   }

}
