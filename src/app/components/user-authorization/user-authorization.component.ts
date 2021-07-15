import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { BackendService } from 'src/app/services/backend/backend.service';
import { PagesDataService } from 'src/app/services/pages-data/pages-data.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-authorization',
  templateUrl: './user-authorization.component.html',
  styleUrls: ['./user-authorization.component.scss']
})
export class UserAuthorizationComponent implements OnInit {

  login: string = '';
  password: string = '';
  isActiveBtn: boolean = false;
  isUser: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly pagesDataService: PagesDataService,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
  }


  onCoverClick() {
    return this.router.navigate(['/main']);
  }

  onFormClick(event: Event) {
    event.stopPropagation();
  }

  getHashInfo(login: string, password: string) {
    const hashedInfo = `${login}${password}`;
    return hashedInfo;
  }

  onGetLoginInputValue(input: HTMLInputElement) {
    if(input.validity.valid) {
      this.login = input.value;
    }
  }

  onGetPasswordInputValue(input: HTMLInputElement) {
    if(input.validity.valid) {
      this.password = input.value;
    }
  }

  async onSubmit(event: Event) {
    this.pagesDataService.userHashedInfo = this.getHashInfo(this.login, this.password);
    //const response = await this.userService.getUser();
    //console.log('response', response)
    //console.log(response.headers.get('Authorisation'));
    console.log(this.login)
    if (this.login !== '' && this.password !== '') {
      this.isUser = true;
      this.router.navigate(['/admin/categories'])
      console.log(this.isUser)
    }
    else {
      event.preventDefault();
      this.isUser = false;
      //this.router.navigate(['/main']);
      console.log(this.isUser)
    }
  }



}
