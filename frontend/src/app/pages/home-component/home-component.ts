import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/banner-component/banner-component";
import {FooterComponent} from "../../shared/footer-component/footer-component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home-component',
  imports: [BannerComponent,FooterComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateRegisterIndividual() {
    this.router.navigate(['/individual-component']);
  }

 
}
