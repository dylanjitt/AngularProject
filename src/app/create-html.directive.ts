import { Directive, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCreateHtml]',
  standalone: true
})
export class CreateHtmlDirective implements OnInit,OnChanges{

  @Input() //show:boolean=true
  set appCreateHtml(value:boolean){
    if(value){
      this.viewContainer.createEmbeddedView(this.templateRef)
    }else{
      this.viewContainer.clear()
    }
  }

  constructor(private viewContainer:ViewContainerRef,private templateRef:TemplateRef<any>) { 

  }

  ngOnInit():void{
    // if(this.show){
    //   this.viewContainer.createEmbeddedView(this.templateRef)

    // }else{
    //   this.viewContainer.clear()
    // }
  }

  ngOnChanges(changes:SimpleChanges):void{
    // if(changes["appCreateHtml"]){
    //   if(changes["appCreateHtml"].currentValue){
    //     this.viewContainer.createEmbeddedView(this.templateRef)
    //   }else{
    //     this.viewContainer.clear()
    //   }
    // }
  }

}
