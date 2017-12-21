import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-art-object-details',
  templateUrl: './art-object-details.component.html',
  styleUrls: ['./art-object-details.component.css']
})
export class ArtObjectDetailsComponent {
  @Input() artObjectDetails;
}
