import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    NzCarouselModule,
    NzIconModule,
    NzDividerModule
  ]
})
export class NgZorroAntdModule { }
