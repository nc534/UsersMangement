import { Component, OnInit } from '@angular/core';

import { NavigationComponent } from '../navigation/navigation.component';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(public userService: UserService) { }
  
  // ngOnInit(): void {
  // }

}
