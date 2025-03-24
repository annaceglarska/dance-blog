import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrl: './tags-list.component.scss',
  imports: [MatButtonModule],
  standalone: true
})
export class TagsListComponent {

}
