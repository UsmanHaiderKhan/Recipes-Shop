import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe(
      'Biryani-1',
      'Very tasty Lahori Biryani',
      'https://upload.wikimedia.org/wikipedia/commons/3/35/Biryani_Home.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Rice', 2),
        new Ingredient('Oil', 1),
      ]
    ),
    new Recipe(
      'Biryani-2',
      'Very tasty Lahori Biryani',
      'https://upload.wikimedia.org/wikipedia/commons/3/35/Biryani_Home.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Rice', 2),
        new Ingredient('Oil', 1),
      ]
    ),
    new Recipe(
      'Biryani-3',
      'Very tasty Lahori Biryani',
      'https://upload.wikimedia.org/wikipedia/commons/3/35/Biryani_Home.jpg',
      [
        new Ingredient('Meat', 2),
        new Ingredient('Rice', 2),
        new Ingredient('Oil', 1),
      ]
    ),
  ];
  constructor(private shoppingListService: ShoppingListService) { }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(index: number) {
    return this.recipes[index];
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
