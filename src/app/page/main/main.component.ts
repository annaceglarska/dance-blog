import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  imports: [HeroComponent],
  standalone: true
})
export class MainComponent {

}
