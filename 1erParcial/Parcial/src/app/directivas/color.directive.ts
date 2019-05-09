import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})


export class ColorDirective {
@Input() public color : string;
  constructor(private el: ElementRef<HTMLInputElement>) {
       el.nativeElement.style.backgroundColor = this.color;
  }

}
