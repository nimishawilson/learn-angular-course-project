import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Meatball recipe', 'this is simply a test', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg'),
  new Recipe('Sri Lankan Chicken Curry', 'this is simply a test', 'https://www.theflavorbender.com/wp-content/uploads/2018/02/Sri-Lankan-Chicken-Curry-The-Flavor-Bender-Featured-Image-SQ-2-500x500.jpg'),
    new Recipe('Strawberry syrup', 'this is simply a test', 'https://www.cookingclassy.com/wp-content/uploads/2018/04/strawberry-syrup-7-267x347.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
