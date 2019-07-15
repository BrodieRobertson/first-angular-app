import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(name) {
    window.alert('The ' + name + ' has been shared!');
  }

  onNotify(name) {
    window.alert('You will be notified when the ' + name + ' goes on sale')
  }
}
