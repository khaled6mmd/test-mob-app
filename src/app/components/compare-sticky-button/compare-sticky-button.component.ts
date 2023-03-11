import { Component, OnInit } from '@angular/core';

interface Item {
  image: string;
  name: string;
  price: number;
}

@Component({
  selector: 'app-compare-sticky-button',
  templateUrl: './compare-sticky-button.component.html',
  styleUrls: ['./compare-sticky-button.component.css']
})
export class CompareStickyButtonComponent implements OnInit {

  isPopupOpen: boolean = false;

  items: Item[] = [
    { image: 'assets/images/stc-logo.svg', name: 'اسم باقة الشركة', price: 90 },
    { image: 'assets/images/stc-logo.svg', name: 'اسم باقة الشركة', price: 90 },
    { image: 'assets/images/stc-logo.svg', name: 'اسم باقة الشركة', price: 90 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  removeAllBtn(): void {
    this.items = [];
  }

  removeBtn(item: Item): void {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }

  compareNow(): void {
    // Handle clicking the "Compare Now" button
  }

  togglePopup(): void {
    this.isPopupOpen = !this.isPopupOpen;
  }
}