import { Component, OnInit } from '@angular/core';
import { Package } from 'src/app/models/packages.model';

@Component({
  selector: 'app-similar-packages',
  templateUrl: './similar-packages.component.html',
  styleUrls: ['./similar-packages.component.css']
})
export class SimilarPackagesComponent implements OnInit {
  packages: Package[] = [
    {
      name: 'اسم باقة الشركة',
      icon: 'assets/images/mobile-icon.png',
      data: {
        label: 'البيانات',
        value: '20 جيجابايت'
      },
      minutes: {
        label: 'دقائق محلية',
        value: 'لا محدودة'
      },
      validity: {
        label: 'الصلاحية',
        value: '90 يوم'
      },
      price: {
        value: '90',
        currency: 'ريال'
      },
      tax: {
        label: 'ضريبة القيمة المضافة',
        value: true
      },
      buttonLabel: 'تفاصيل الباقة',
      color: 'c_cyan'
    },
    {
      name: 'اسم باقة الشركة',
      icon: 'assets/images/zain-icon.png',
      data: {
        label: 'البيانات',
        value: '20 جيجابايت'
      },
      minutes: {
        label: 'دقائق محلية',
        value: 'لا محدودة'
      },
      validity: {
        label: 'الصلاحية',
        value: '90 يوم'
      },
      price: {
        value: '90',
        currency: 'ريال'
      },
      tax: {
        label: 'ضريبة القيمة المضافة',
        value: true
      },
      buttonLabel: 'تفاصيل الباقة',
      color: 'c_green'
    },
    {
      name: 'اسم باقة الشركة',
      icon: 'assets/images/stc-icon.png',
      data: {
        label: 'البيانات',
        value: '20 جيجابايت'
      },
      minutes: {
        label: 'دقائق محلية',
        value: 'لا محدودة'
      },
      validity: {
        label: 'الصلاحية',
        value: '90 يوم'
      },
      price: {
        value: '90',
        currency: 'ريال'
      },
      tax: {
        label: 'ضريبة القيمة المضافة',
        value: true
      },
      buttonLabel: 'تفاصيل الباقة',
      color: 'c_purple'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
