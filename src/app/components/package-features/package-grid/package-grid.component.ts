import { Component, Input, OnInit } from '@angular/core';
import { Compatibility, PackagesFeatures } from 'src/app/models/packages.model';

@Component({
  selector: 'app-package-grid',
  templateUrl: './package-grid.component.html',
  styleUrls: ['./package-grid.component.css']
})
export class PackageGridComponent implements OnInit {

  @Input() title!: string;
  @Input() features!: PackagesFeatures[] | Compatibility[];

  constructor() { }

  ngOnInit(): void {
  }

}
