import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[ngColors]',//cambiar nombre para designaciones xd
  standalone: true
})
export class AppColorsDirective {

  @Input() ngColors!: string
  @Input() defaultColor!: string

  @Output() colorChange: EventEmitter<string>=new EventEmitter<string>()
  @Output() doubleColorChange: EventEmitter<string>=new EventEmitter<string>()

  @HostListener('click') onClick(){
    this.element.nativeElement.style.backgroundColor=this.ngColors
    this.colorChange.emit("1 click: "+this.ngColors)
  }

  @HostListener('dblclick') onDoubleClick(){
    this.element.nativeElement.style.backgroundColor=this.ngColors
    this.colorChange.emit("2 click: "+this.ngColors)
  }

  @HostListener('mouseleave') onBlur(){
    this.ngColors=this.defaultColor
  }

  constructor(private element:ElementRef) {

   }

}


