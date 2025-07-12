import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private addresses = new BehaviorSubject<Address[]>([]);
  
  constructor() {
    // Load addresses from storage if available
    const savedAddresses = localStorage.getItem('addresses');
    if (savedAddresses) {
      this.addresses.next(JSON.parse(savedAddresses));
    }
  }

  getAddresses(): Observable<Address[]> {
    return this.addresses.asObservable();
  }

  addAddress(address: Address): void {
    const currentAddresses = this.addresses.getValue();
    address.id = Date.now().toString(); // Simple ID generation
    
    // If this is the first address or isDefault is true, make it the default
    // if (currentAddresses.length === 0 || address.isDefault) {
    //   currentAddresses.forEach(a => a.isDefault = false);
    //   address.isDefault = true;
    // }
    
    const newAddresses = [...currentAddresses, address];
    this.addresses.next(newAddresses);
    this.saveToStorage(newAddresses);
  }

  updateAddress(address: Address): void {
    const currentAddresses = this.addresses.getValue();
    const index = currentAddresses.findIndex(a => a.id === address.id);
    
    if (index !== -1) {
      // If setting this address as default, remove default from others
      // if (address.isDefault) {
      //   currentAddresses.forEach(a => a.isDefault = false);
      // }
      
      currentAddresses[index] = address;
      this.addresses.next([...currentAddresses]);
      this.saveToStorage(currentAddresses);
    }
  }

  deleteAddress(id: string): void {
    const currentAddresses = this.addresses.getValue();
    const newAddresses = currentAddresses.filter(address => address.id !== id);
    
    // If we deleted the default address and there are other addresses, make the first one default
    // if (currentAddresses.find(a => a.id === id)?.isDefault && newAddresses.length > 0) {
    //   newAddresses[0].isDefault = true;
    // }
    
    this.addresses.next(newAddresses);
    this.saveToStorage(newAddresses);
  }

  setDefaultAddress(id: string): void {
    const currentAddresses = this.addresses.getValue();
    const updatedAddresses = currentAddresses.map(address => ({
      ...address,
      isDefault: address.id === id
    }));
    
    this.addresses.next(updatedAddresses);
    this.saveToStorage(updatedAddresses);
  }

  private saveToStorage(addresses: Address[]): void {
    localStorage.setItem('addresses', JSON.stringify(addresses));
  }
}
