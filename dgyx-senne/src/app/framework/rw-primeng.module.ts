// 引入primeNg的所有模块
import { NgModule } from '@angular/core';
import { ShareLoading } from '../pages/common/loading/loading1/share-loading.component';
import { PrimeNgModule } from './primeng.module';

@NgModule({
  imports: [
    PrimeNgModule
  ],
  declarations: [
    ShareLoading
  ],
  exports: [
    ShareLoading
  ]
})

export class RwPrimeNgModule { }
