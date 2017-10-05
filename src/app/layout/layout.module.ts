import { NgModule } from '@angular/core';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  imports: [],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
