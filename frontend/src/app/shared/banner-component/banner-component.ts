import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-component',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './banner-component.html',
  styleUrls: ['./banner-component.scss'] 
})
export class BannerComponent {}
