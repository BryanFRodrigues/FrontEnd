import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home-component/home-component";
import { HeaderComponent } from "./shared/header-component/header-component";
import { BannerComponent } from "./shared/banner-component/banner-component";
import { FooterComponent } from './shared/footer-component/footer-component';
import { LoginComponent } from './pages/login-component/login-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent, BannerComponent,FooterComponent, LoginComponent ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'frontend';
}
