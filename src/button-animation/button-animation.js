"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var animation_builder_1 = require('angular2/src/animate/animation_builder');
var ButtonAnimation = (function () {
    function ButtonAnimation(_ab, _e) {
        this._ab = _ab;
        this._e = _e;
        this.animationcomplete = new core_1.EventEmitter();
        this.rcolor = 'white';
        this.nativeElement = this._e.nativeElement;
    }
    ButtonAnimation.prototype.onClick = function (event) {
        var _this = this;
        var animation = this._ab.css();
        console.log(event);
        var clientHeight = this.nativeElement.clientHeight;
        var xOffset = +event.offsetX - 2;
        var yOffset = +event.offsetY - 2;
        this.ripple = document.createElement('span');
        var styleString = 'position:absolute;top:' + yOffset + 'px;left:' + xOffset + 'px; width: 5px;height: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;border-radius: 50%;background: ' + this.rcolor + ';opacity: .2;  transition-timing-function:ease-out';
        console.log(styleString);
        this.ripple.setAttribute('style', styleString);
        var buttonWrapper = this.nativeElement.getElementsByClassName('md-button-wrapper')[0];
        buttonWrapper.appendChild(this.ripple);
        var clientWidth = this.nativeElement.clientWidth;
        console.log(clientWidth);
        animation
            .setDuration(400);
        animation.setFromStyles({ width: '5px', height: '5px', top: yOffset + 'px', left: xOffset + 'px' })
            .setToStyles({ width: clientWidth * 2 + 'px', height: clientWidth * 2 + 'px', top: +event.offsetY - (clientWidth) + 'px', left: +event.offsetX - (clientWidth) + 'px' });
        animation.start(this.ripple).onComplete(function (event) {
            buttonWrapper.removeChild(_this.ripple);
            _this.animationcomplete.next({});
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ButtonAnimation.prototype, "animationcomplete", void 0);
    ButtonAnimation = __decorate([
        core_1.Directive({
            selector: '[button-animation]',
            providers: [],
            properties: ['rcolor'],
            host: {
                '(click)': 'onClick($event)',
                '[style.overflow]': "'hidden'"
            }
        }), 
        __metadata('design:paramtypes', [animation_builder_1.AnimationBuilder, core_1.ElementRef])
    ], ButtonAnimation);
    return ButtonAnimation;
}());
exports.ButtonAnimation = ButtonAnimation;
//# sourceMappingURL=button-animation.js.map