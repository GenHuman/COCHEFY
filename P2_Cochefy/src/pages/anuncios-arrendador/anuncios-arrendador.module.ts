import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnunciosArrendadorPage } from './anuncios-arrendador';

@NgModule({
  declarations: [
    AnunciosArrendadorPage,
  ],
  imports: [
    IonicPageModule.forChild(AnunciosArrendadorPage),
  ],
})
export class AnunciosArrendadorPageModule {}
