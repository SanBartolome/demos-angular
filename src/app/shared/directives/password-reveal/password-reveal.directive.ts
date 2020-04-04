import {
  Directive,
  ElementRef,
  Renderer2,
  Inject,
  OnInit,
  Input,
  ContentChild
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

const SHOW_PASSWORD_ICON = '/assets/images/login/ocultar.svg';
const HIDE_PASSWORD_ICON = '/assets/images/login/ver.svg';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'input[type=password]'
})
export class PasswordRevealElmDirective {
  constructor(private elmRef: ElementRef) {}

  get nativeElement() {
    return this.elmRef.nativeElement;
  }
}

@Directive({
  selector: '[passwordReveal]'
})
export class PasswordRevealDirective implements OnInit {
  eyeElm: HTMLImageElement;
  reveal = false;
  @Input() passwordReveal = false;
  @ContentChild(PasswordRevealElmDirective, { static: true })
  passwordRevealFieldElm: PasswordRevealElmDirective;

  constructor(
    private elmRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    if (typeof this.passwordReveal !== 'undefined') {
      this.appendEyeElm();
    }
  }

  appendEyeElm() {
    this.eyeElm = this.document.createElement('img');
    this.eyeElm.style.cursor = 'pointer';
    this.eyeElm.style.height = '16px';
    this.eyeElm.style.width = '22px';
    this.eyeElm.style.position = 'absolute';
    this.eyeElm.style.right = '8px';
    this.eyeElm.style.top = 'calc( 50% - 8px )';
    this.eyeElm.src = HIDE_PASSWORD_ICON;
    this.eyeElm.onclick = this.onEyeClick.bind(this);
    this.elmRef.nativeElement.style.position = 'relative';
    this.elmRef.nativeElement.style.width = '100%';
    this.renderer.appendChild(this.elmRef.nativeElement, this.eyeElm);
    this.passwordRevealFieldElm.nativeElement.style.paddingRight = '18px';
    this.passwordRevealFieldElm.nativeElement.style.width = '100%';
  }

  onEyeClick() {
    this.reveal = !this.reveal;
    if (this.reveal) {
      this.eyeElm.src = SHOW_PASSWORD_ICON;
      this.passwordRevealFieldElm.nativeElement.type = 'text';
    } else {
      this.eyeElm.src = HIDE_PASSWORD_ICON;
      this.passwordRevealFieldElm.nativeElement.type = 'password';
    }
  }
}
