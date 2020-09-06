import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  completeRecipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.completeRecipe.subscribe((recipe: Recipe) => {
      this.completeRecipe = recipe;
    });
  }
}
