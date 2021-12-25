import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangecolor]',
})
export class ChangecolorDirective {
  mixColor = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#009688',
  ];
  @HostBinding('style.color') color!: string;
  @HostBinding('style.border-color') border!: string;
  @HostListener('keydown') setColor() {
    const indexColor = Math.floor(Math.random() * this.mixColor.length);
    console.log(indexColor);
    this.border = this.color = this.mixColor[indexColor];
  }
  constructor() {}
}
