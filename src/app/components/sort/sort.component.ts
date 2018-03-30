import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-sort',
  templateUrl: 'sort.component.html',
  styleUrls: ['sort.component.css']
})

export class SortComponent {
  @Input()
  results: number;
}