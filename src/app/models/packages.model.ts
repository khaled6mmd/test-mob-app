export interface Package {
  name: string;
  icon: string;
  data: {
    label: string;
    value: string;
  };
  minutes: {
    label: string;
    value: string;
  };
  validity: {
    label: string;
    value: string;
  };
  price: {
    value: string;
    currency: string;
  };
  tax: {
    label: string;
    value: boolean;
  };
  buttonLabel: string;
  color: string;
}

export interface PackagesFeatures {
  label: string;
  value: string;
  imgSrc: string;
}

export interface Compatibility {
  label: string;
  value: string;
  imgSrc: string;
}