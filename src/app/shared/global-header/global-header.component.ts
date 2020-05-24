import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() featureSelected = new EventEmitter<string>();
  onSelect(feature:string) {
    this.featureSelected.emit(feature);
  }

}
