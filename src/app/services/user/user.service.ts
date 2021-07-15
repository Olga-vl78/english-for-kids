import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {IUser} from "../../interfaces/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  userHash: string | null = null;
  user: IUser = {role: 'user'};

  constructor(
    private http: HttpClient,
  ) {
  }


  async login(login: string, password: string) {

    this.userHash = btoa(`${login}:${password}`);
    this.user = await this.fetchUser();
    return this.user;
  }


  logout() {
    this.userHash = null;
    this.user = {role: 'user'};
  }

  isAdmin() {

    return this.user.role === 'admin';
  }

  getAuthHeaders(): {[key: string]: string} {
    if (this.userHash) {
      return {
        'Authorization': `Basic ${this.userHash}`
      }
    } else {
      return {};
    }
  }


  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    }
    else {
      console.error(`Backend returned code ${error.status}, body was:`, error.error);
    }
    return throwError('Something bad happens; please try again later');
  }


  async fetchUser(): Promise<IUser> {

    return this.http.get<IUser>('api/users', {
        headers: {
          'Content-Type': 'application/json',
          ...this.getAuthHeaders(),
        },
        observe: 'body',
        responseType: 'json'
      })
      .pipe(
        catchError(this.handleError))
      .toPromise();
  }
}
