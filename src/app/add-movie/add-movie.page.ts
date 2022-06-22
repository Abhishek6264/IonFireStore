import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MovieService } from './../shared/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {

  movieForm: FormGroup;
  constructor(
    private movieService: MovieService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.movieForm = this.fb.group({
      name: [''],
      actor: [''],
      year: ['']
    });
  }

  formSubmit() {
    if (!this.movieForm.valid) {
      return false;
    } else {
      this.movieService.createMovie(this.movieForm.value).then(res => {
        console.log(res);
        this.movieForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }

}
