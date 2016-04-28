import {Directive,ElementRef,EventEmitter,Output} from 'angular2/core';
import {AnimationBuilder} from 'angular2/src/animate/animation_builder';


@Directive({
  selector: '[button-animation]',
  providers: [],
  properties:['rcolor'],
  host: {
    '(click)': 'onClick($event)',
    '[style.overflow]' : "'hidden'"
  }
})
export class ButtonAnimation {
  @Output() animationcomplete:EventEmitter<any>= new EventEmitter();
  rcolor:string='white';
  nativeElement:HTMLElement;
  ripple:HTMLSpanElement;
  constructor(private _ab: AnimationBuilder, private _e: ElementRef) {
   this.nativeElement = this._e.nativeElement;
  }

  onClick(event:any){
    let animation = this._ab.css();
    
    console.log(event);
    let clientHeight = this.nativeElement.clientHeight;
    let xOffset= +event.offsetX-2;
    let yOffset= +event.offsetY-2;
    this.ripple = document.createElement('span');
    let styleString = 'position:absolute;top:'+yOffset+'px;left:'+xOffset+'px; width: 5px;height: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;background: '+this.rcolor+';opacity: .2;  transition-timing-function:ease-out';
    console.log(styleString)
    this.ripple.setAttribute('style',styleString);
    
    let buttonWrapper = this.nativeElement.getElementsByClassName('md-button-wrapper')[0];
    buttonWrapper.appendChild(this.ripple);
    let clientWidth = this.nativeElement.clientWidth;
    console.log(clientWidth);
    animation
      .setDuration(400);
    
    animation.setFromStyles({width: '5px',height: '5px', top:yOffset+'px', left:xOffset+'px'})
               .setToStyles({width: clientWidth*2+'px',height: clientWidth*2+'px', top:+event.offsetY-(clientWidth)+'px', left:+event.offsetX-(clientWidth)+'px'})
    
    animation.start(this.ripple).onComplete((event:any)=>{
      buttonWrapper.removeChild(this.ripple);
      this.animationcomplete.next({});
      
    });
  }

}
