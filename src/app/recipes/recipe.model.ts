import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imageUrl: string;
  public ingredient: Ingredient[];

  constructor(
    name: string,
    description: string,
    imageUrl: string,
    ingredient: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.ingredient = ingredient;
  }
}
