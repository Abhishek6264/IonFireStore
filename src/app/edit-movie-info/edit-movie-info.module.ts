import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditMovieInfoPageRoutingModule } from './edit-movie-info-routing.module';

import { EditMovieInfoPage } from './edit-movie-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditMovieInfoPageRoutingModule
  ],
  declarations: [EditMovieInfoPage]
})
export class EditMovieInfoPageModule {}
