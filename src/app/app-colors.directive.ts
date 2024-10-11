import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[ngColors]',//cambiar nombre para designaciones xd
  standalone: true
})
export class AppColorsDirective {

  @Input() color!: string
  @Input() defaultColor!: string

  @Output() colorChange: EventEmitter<string>=new EventEmitter<string>()
  @Output() doubleColorChange: EventEmitter<string>=new EventEmitter<string>()

  @HostListener('click') onClick(){
    this.element.nativeElement.style.backgroundColor=this.color
    this.colorChange.emit("1 click: "+this.color)
  }

  @HostListener('dblclick') onDoubleClick(){
    this.element.nativeElement.style.backgroundColor=this.color
    this.colorChange.emit("2 click: "+this.color)
  }

  @HostListener('mouseleave') onBlur(){
    this.color=this.defaultColor
  }

  constructor(private element:ElementRef) {

   }

}


