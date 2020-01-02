import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('A test recipe', 'this is simply a test', 'https://www.cookingclassy.com/wp-content/uploads/2019/09/meatballs-21.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
