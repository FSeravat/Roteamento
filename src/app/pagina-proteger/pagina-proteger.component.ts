import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-pagina-proteger',
  templateUrl: './pagina-proteger.component.html',
  styleUrls: ['./pagina-proteger.component.css'],
})
export class PaginaProtegerComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
    this.router.navigate(['']);
  }
}
