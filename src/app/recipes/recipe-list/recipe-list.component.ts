
import { Component, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";
import { from } from 'rxjs';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './receipe-list.component.html'
})
export class RecipeList {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('Biryani-1', 'Very tasty Lahori Biryani', 'https://upload.wikimedia.org/wikipedia/commons/3/35/Biryani_Home.jpg'),
        new Recipe('Biryani-2', 'Very tasty Lahori Biryani', 'https://upload.wikimedia.org/wikipedia/commons/3/35/Biryani_Home.jpg'),
        new Recipe('Biryani-3', 'Very tasty Lahori Biryani', 'https://upload.wikimedia.org/wikipedia/commons/3/35/Biryani_Home.jpg'),

    ];
    onSelectedRecipe(recipe: Recipe) {
        this.recipeWasSelected.emit(recipe);
    }


}