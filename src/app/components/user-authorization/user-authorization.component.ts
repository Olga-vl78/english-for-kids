import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PagesDataService} from 'src/app/services/pages-data/pages-data.service';
import {UserService} from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-authorization',
  templateUrl: './user-authorization.component.html',
  styleUrls: ['./user-authorization.component.scss']
})
export class UserAuthorizationComponent  {

  login: string = '';
  password: string = '';
  wrongPassword = false;

  constructor(
    private readonly router: Router,
    private readonly pagesDataService: PagesDataService,
    private readonly userService: UserService
  ) { }


  onCoverClick() {
    return this.router.navigate(['/main']);
  }

  onFormClick(event: Event) {
    event.stopPropagation();
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

  async onSubmit(cover: HTMLDivElement) {

    const user = await this.userService.login(this.login, this.password);

    if (user.role === 'admin') {
      this.wrongPassword = false;
      this.router.navigate(['/admin/categories'])
      cover.classList.add('hidden');
    } else {
      this.wrongPassword = true;
    }
  }

}
