import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'expenses-home-profile',
  templateUrl: './home-profile.component.html',
  styleUrls: ['./home-profile.component.scss']
})
export class HomeProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

}
