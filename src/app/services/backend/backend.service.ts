import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ICategory} from 'src/app/interfaces/category';
import {ICard} from 'src/app/interfaces/card';
import { UserService } from '../user/user.service';
import { IUser } from 'src/app/interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  categoriesUrl: string = 'api/categories';

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }


  getHeaders(): { headers: {[header: string]: string}} {
    return {
      headers: {
        ...this.userService.getAuthHeaders(),
        'Content-Type': 'application/json',
      }
    }
  }


  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
    }
    return throwError('Something bad happens; please try again later');
  }

  getCategories() {
    return this.http.get<ICategory[]>(this.categoriesUrl)
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }

  addCategory(category: ICategory): Promise<ICategory> {
    return this.http.post<ICategory>(this.categoriesUrl, category, this.getHeaders())
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }


  updateCategory(id: number, category: ICategory): Promise<ICategory> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.put<ICategory>(url, category, this.getHeaders())
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }

  deleteCategory(id: number): Promise<unknown> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.delete(url, {...this.getHeaders(), responseType: 'text'})
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }

  getCards(catId: number) {
    const url = `${this.categoriesUrl}/${catId}/cards`;
    return this.http.get<ICard[]>(url)
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }

  addCard(catId: number, card: ICard): Promise<ICard> {
    const url = `${this.categoriesUrl}/${catId}/cards`;
    return this.http.post<ICard>(url, card, this.getHeaders())
      .pipe(
        catchError(this.handleError))
        .toPromise();
  }

  updateCard(catId: number, card: ICard, cardId: number): Promise<ICard> {
    const url = `${this.categoriesUrl}/${catId}/cards/${cardId}`;
    return this.http.put<ICard>(url, card, this.getHeaders())
      .pipe(
        catchError(this.handleError))
        .toPromise();
  }

  deleteCard(catId: number, cardId: number): Promise<unknown> {
    const url = `${this.categoriesUrl}/${catId}/cards/${cardId}`;
    return this.http.delete(url, {...this.getHeaders(), responseType: 'text'})
      .pipe(
        catchError(this.handleError))
        .toPromise();
  }

}

