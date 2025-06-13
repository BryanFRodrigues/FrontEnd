import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/banner-component/banner-component";
import {FooterComponent} from "../../shared/footer-component/footer-component";


@Component({
  selector: 'app-home-component',
  imports: [BannerComponent,FooterComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {

}
