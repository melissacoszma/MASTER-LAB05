import { Component } from '@angular/core';

// importamos CommonModule para usar @for y @if
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; // botones de Material para la botonera

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, MatButtonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  images = [
  { id: 1, src: 'img/img-gato-1.jpg', title: 'Gato 1' },
  { id: 2, src: 'img/img-gato-2.jpg', title: 'Gato 2' },
  { id: 3, src: 'img/img-gato-3.jpg', title: 'Gato 3' },
  { id: 4, src: 'img/img-gato-4.jpg', title: 'Gato 4' },
  { id: 5, src: 'img/img-gato-5.jpg', title: 'Gato 5' },
  { id: 6, src: 'img/img-gato-6.jpg', title: 'Gato 6' },
  { id: 7, src: 'img/img-gato-7.jpg', title: 'Gato 7' },
  { id: 8, src: 'img/img-gato-8.jpg', title: 'Gato 8' },
  ];

// martcador del indice de la imagen actual
  selectedIndex = 0;
  imageSize = 400;

// variable para controlar el reproductor 
  private interval: any = null;

// devuelve la imagen seleccionada actualmente
  get selectedImage() {
    return this.images[this.selectedIndex];
  }

 
  selectImage(index: number) {
    this.selectedIndex = index;
  }

  next() {
    if (this.selectedIndex < this.images.length - 1) {
      this.selectedIndex++;
    }
  }

  prev() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }

  increase() {
    this.imageSize += 50;
  }
  decrease() {
    this.imageSize -= 50;
  }


  play() {
    this.interval = setInterval(() => {
      this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    }, 2000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

// devuelve si el reproductor está en marcha
  isPlaying() {
    return this.interval !== null;
  }
}
