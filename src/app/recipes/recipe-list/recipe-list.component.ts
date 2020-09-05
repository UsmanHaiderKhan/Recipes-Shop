import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { from } from 'rxjs';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './receipe-list.component.html',
})
export class RecipeList implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
