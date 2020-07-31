import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
