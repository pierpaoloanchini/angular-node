import { NbMenuService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-not-found',
  styleUrls: ['./not-found.component.scss'],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
constructor(private menuService : NbMenuService){}


  goToHome() {
    this.menuService.navigateHome();
  }
}
