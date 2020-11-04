import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredient: Ingredient[];
  private shopSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredient = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientChange.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredient = ingredient;
      }
    );
  }
  ngOnDestroy() {
    this.shopSubscription.unsubscribe();
  }
}
