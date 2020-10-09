import { Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { DomHandler } from 'primeng/dom';

@Component({
  selector: 'share-loading',
  styleUrls: ['./share-loading.component.scss'],
  template: `
  <div #mask class="ui-blockui ui-widget-overlay" [ngClass]="{'ui-blockui-document':!target}" [ngStyle]="{display: blocked ? 'block' : 'none'}">
      <div class="loading-div" [ngStyle]="{backgroundSize:bgSize}"></div>
  </div>
  `,
  providers: [DomHandler]
})
export class ShareLoading implements OnDestroy {

  @Input() bgSize: string = '200px';

  @Input() target: any;

  @Input() autoZIndex: boolean = true;

  @Input() baseZIndex: number = 0;

  @ViewChild('mask') mask: ElementRef;

  hiddenLoadingTime = 300;

  _blocked: boolean;

  constructor(public el: ElementRef, public domHandler: DomHandler) { }

  @Input() get blocked(): boolean {
    return this._blocked;
  }

  set blocked(val: boolean) {

    if (val) {
      this._blocked = val;
      this.block();
    } else {
      window.setTimeout(() => {
        this._blocked = val;
        this.unblock();
      }, this.hiddenLoadingTime);
    }
  }

  block() {
    if (this.target) {
      let _t;
      if (this.target instanceof Element) {
        _t = this.target;
        _t.appendChild(this.mask.nativeElement);
        _t.style.position = 'relative';
      } else {
        // panel  table 。。。。
        if (this.target.getBlockableElement) {
          _t = this.target.getBlockableElement();
          _t.appendChild(this.mask.nativeElement);
          _t.style.position = 'relative';
        }

        // ts viewChild引入的target
        if (this.target.nativeElement) {
          _t = this.target.nativeElement;
          _t.appendChild(this.mask.nativeElement);
          _t.style.position = 'relative';
        }

        // Dialog
        if (this.target.containerViewChild && this.target.containerViewChild.nativeElement) {
          this.target.containerViewChild.nativeElement.appendChild(this.mask.nativeElement);
        }

      }
    } else {
      document.body.appendChild(this.mask.nativeElement);
    }

    if (this.autoZIndex) {
      this.mask.nativeElement.style.zIndex = String(this.baseZIndex + (++DomHandler.zindex));
    }
  }

  unblock() {
    this.el.nativeElement.appendChild(this.mask.nativeElement);
  }

  ngOnDestroy() {
    this.unblock();
  }
}
