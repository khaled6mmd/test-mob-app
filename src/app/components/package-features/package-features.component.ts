import { Component, OnInit } from '@angular/core';
import { Compatibility, PackagesFeatures } from 'src/app/models/packages.model';
@Component({
  selector: 'app-package-features',
  templateUrl: './package-features.component.html',
  styleUrls: ['./package-features.component.css']
})
export class PackageFeaturesComponent implements OnInit {
  packagesFeatures: PackagesFeatures[] = [{
    label: 'البيانات',
    value: '20 جيجابايت',
    imgSrc: 'assets/images/signal-icon.svg'
  },
  {
    label: 'دقائق محلية', value: 'لا محدودة',
    imgSrc: 'assets/images/smart-phone.svg'
  },
  {
    label: 'الصلاحية', value: '90 يوم',
    imgSrc: 'assets/images/calendar-icon.svg'
  },
  {
    label: 'تواصل اجتماعي',
    value: 'لا محدودة', imgSrc: 'assets/images/contacts-icon.svg'
  },
  {
    label: 'البيانات',
    value: '20 جيجابايت', imgSrc: 'assets/images/signal-icon.svg'
  },
  { label: 'دقائق محلية', value: 'لا محدودة', imgSrc: 'assets/images/smart-phone.svg' },
  {
    label: 'الصلاحية',
    value: '90 يوم',
    imgSrc: 'assets/images/calendar-icon.svg'
  },
  {
    label: 'تواصل اجتماعي',
    value: 'لا محدودة',
    imgSrc: 'assets/images/contacts-icon.svg'
  }]
  compatibility: Compatibility[] = [
    {
      label: 'نوع الخط',
      value: 'فاتورة',
      imgSrc: 'assets/images/chip-icon.svg'
    },
    {
      label: 'متوافق',
      value: 'شريحة',
      imgSrc: 'assets/images/sim-icon.svg'
    },
    {
      label: 'متوافق',
      value: 'شريحة مدمجة',
      imgSrc: 'assets/images/chip-icon.svg'
    },
    {
      label: 'المدن',
      value: 'الرياض، جدة، الدمام',
      imgSrc: 'assets/images/location-icon.svg'
    }]
  constructor() { }

  ngOnInit(): void {
  }

}
