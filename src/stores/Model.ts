import { makeAutoObservable } from 'mobx';

export class Model {
  quantity: number = 0;
  plan: string = '3';
  location: string = '';

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  setPlan(plan: string) {
    this.plan = plan;
  }

  setLocation(location: string) {
    this.location = location;
  }

  get pricePerIp() {
    const q = this.quantity;

    if (q >= 100) return 2.25;
    if (q >= 50) return 2.5;
    if (q >= 25) return 2.75;
    return 3;
  }

  get total() {
    return this.quantity * this.pricePerIp;
  }

  get subscriptionLabel() {
    if (this.plan === '1') return '1 month';
    if (this.plan === '3') return '3 months';
    return '12 months';
  }

  get locationLabel() {
    switch (this.location) {
      case 'de':
        return 'Germany';
      case 'es':
        return 'Spain';
      case 'fr':
        return 'France';
      case 'us':
        return 'United States';
      case 'ca':
        return 'Canada';
      case 'au':
        return 'Australia';
      case 'br':
        return 'Brazil';
      case 'cn':
        return 'China';
      case 'au':
        return 'Australia';
      case 'uk':
        return 'United Kingdom';
      default:
        return 'Australia';
    }
  }
}

export default Model;
