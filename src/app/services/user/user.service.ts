import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {ICategory} from 'src/app/interfaces/category';
import { IUser } from 'src/app/interfaces/user';
import { PagesDataService } from '../pages-data/pages-data.service';

/*const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
    'Authorisation': 'adminadmin',
  }
}*/

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private readonly pageDataService: PagesDataService
  ) { }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
    }
    return throwError('Something bad happens; please try again later');
  }

  getUser() {
    const httpOptions =  { headers: {
      'Content-Type': 'application/json',
      'Authorisation': `${this.pageDataService.userHashedInfo}`,
    }
  }
  console.log(httpOptions)
    return this.http.get('api/users', httpOptions)
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }


}
