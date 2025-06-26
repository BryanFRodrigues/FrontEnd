import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '../../shared/banner-component/banner-component';
import { FooterComponent } from '../../shared/footer-component/footer-component';

@Component({
  selector: 'app-home-component',
  standalone: true, 
  imports: [CommonModule, BannerComponent, FooterComponent], 
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss'] 
})
export class HomeComponent {
}
