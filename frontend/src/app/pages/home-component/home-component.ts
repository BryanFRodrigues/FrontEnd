import { Component } from '@angular/core';
import { BannerComponent } from "../../shared/banner-component/banner-component";

@Component({
  selector: 'app-home-component',
  imports: [BannerComponent],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {

}
