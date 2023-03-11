import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.css']
})
export class PackageCardComponent implements OnInit {

  @Input() packageData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
