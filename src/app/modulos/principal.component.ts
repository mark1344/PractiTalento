import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../estructura/header/header.component';
import { NavComponent } from '../estructura/nav/nav.component';
import { FooterComponent } from '../estructura/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,NavComponent,FooterComponent,DashboardComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
