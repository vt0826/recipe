import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private baseUrl = environment.serverUrl;

  constructor(private http: HttpClient) {}

  getAllRecipes() {
    return this.http.get(this.baseUrl + '/recipes');
  }
  getRecipeById(id) {
    return this.http.get(this.baseUrl + `/recipes/${id}`);
  }

  createRecipe(recipe) {
    return this.http.post(this.baseUrl + '/recipes', { recipe });
  }
}
