import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';

export class Movie {
  $key: string;
  name: string;
  actor: string;
  year: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {


  constructor(
    private db: AngularFireDatabase,
    private ngFirestore: AngularFirestore,
    private router: Router
    ) {}
  // Create
  createMovie(mv: Movie) {
    return new Promise<any>((resolve, reject) => {
      this.ngFirestore.collection('movies').add(mv)
        .then(
          res => resolve(res),
          err => reject(err));
    });
  }
  // Get Single
  getMovie(id: string) {
    return this.ngFirestore.collection('movies').doc(id).valueChanges();
  }
  // Get List
  getMovieList() {
    return this.ngFirestore.collection('movies').snapshotChanges();
  }
  // Update
  updateMovie(id, mv: Movie) {
    this.ngFirestore.collection('movies').doc(id).update(mv)
    .then(() => {
      this.router.navigate(['/home']);
    }).catch(error => console.log(error));;
  }
  // Delete
  deleteMovie(id: string) {
    this.ngFirestore.doc('movies/' + id).delete();
  }
}
