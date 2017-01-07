import { Injectable } from '@angular/core';
import { Recipe } from '../recipe';
import { Ingredient } from '../ingredient';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://lorempixel.com/200/200/cats/1', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://lorempixel.com/200/200/cats/2')
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
