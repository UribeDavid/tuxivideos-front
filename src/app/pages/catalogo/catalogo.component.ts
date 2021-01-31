import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Movie } from '../../models/models';
import { CatalogoService } from '../../services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  catalogo: Movie[] = [];
  isVisible: boolean = false;
  peliculaDetail: Movie = null;

  constructor(private catalogoService: CatalogoService,
              private nzNotificationService: NzNotificationService) { }

  ngOnInit(): void {
    this.cargarCatalogo();
  }

  cargarCatalogo() {
    this.catalogoService.cargarCatalogo().subscribe(
      (response: any) => {
        if (response.status.ok) {
          this.catalogo = response.movies;
          this.catalogo.forEach(movie => {
            let actors = '';
            if (movie.actors.length > 0) {
              for (let i = 0; i < movie.actors.length; i++) {
                actors += (i == (movie.actors.length - 1)) ? `${movie.actors[i]}.` : `${movie.actors[i]}, `;
              }
              movie.actors = [actors];
            }
          });
        } else {
          this.catalogo = [];
        }
      },
      (err: HttpErrorResponse) => {
        this.catalogo = [];
      }
    );
  }

  reservar(movieId: string) {
    const userId = JSON.parse(localStorage.getItem('userData')).id;
    this.catalogoService.reservar({userId, movieId}).subscribe(
      (response: any) => {
        if (response.status.ok) {
          this.nzNotificationService.success('Exitoso!', 'Reserva realizada');
        } else {
          this.nzNotificationService.error('Error!', response.message);
        }
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.nzNotificationService.error('Error!', err.error.message);
      }
    );
  }

  movieDetail(pelicula) {
    this.peliculaDetail = pelicula;
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

}
