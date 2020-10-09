import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

// 公告
@Pipe({
  name: 'html'
})
export class HtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(style) {
      return this.sanitizer.bypassSecurityTrustHtml(style);
  }
}
