import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    this.login = input.value;
    console.log(this.login)
  }

  onGetPasswordInputValue(input: HTMLInputElement) {
    this.password = input.value;
    console.log(this.password)
  }

  async onSubmit(event: Event) {
    //debugger;
    this.pagesDataService.userHashedInfo = this.getHashInfo(this.login, this.password);
    console.log(this.pagesDataService.userHashedInfo);
    const status = await this.userService.getUser();
    console.log('status', status)
    if (status !== 'admin') {
      event.preventDefault();
      this.router.navigate(['/main']);
    }
  }

}
