import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-edit-movie-info',
  templateUrl: './edit-movie-info.page.html',
  styleUrls: ['./edit-movie-info.page.scss'],
})
export class EditMovieInfoPage implements OnInit {

  updateMovieForm: FormGroup;
  id: any;

  constructor(
    private movieService: MovieService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.movieService.getMovie(this.id).subscribe(res => {
      this.updateMovieForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateMovieForm = this.fb.group({
      name: [''],
      actor: [''],
      year: ['']
    });
    console.log(this.updateMovieForm.value);
  }

  updateForm() {

    this.movieService.updateMovie(this.id, this.updateMovieForm.value);

  }

}
