import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html'
})

export class RecipeItem {
    @Input() recipe: Recipe;
    @Output() completeRecipe = new EventEmitter<void>();

    recipeDetail() {
        this.completeRecipe.emit();
    }
}