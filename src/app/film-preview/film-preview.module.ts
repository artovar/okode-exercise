import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmPreviewComponent } from './film-preview.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [FilmPreviewComponent],
  exports: [FilmPreviewComponent]
})
export class FilmPreviewModule { }
