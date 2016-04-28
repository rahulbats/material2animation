import { ElementRef, EventEmitter } from 'angular2/core';
import { AnimationBuilder } from 'angular2/src/animate/animation_builder';
export declare class ButtonAnimation {
    private _ab;
    private _e;
    animationcomplete: EventEmitter<any>;
    rcolor: string;
    nativeElement: HTMLElement;
    ripple: HTMLSpanElement;
    constructor(_ab: AnimationBuilder, _e: ElementRef);
    onClick(event: any): void;
}
