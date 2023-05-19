import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
    providedIn: 'root'
})
export class ResturantService {

    burger: Array<Product> = [
        { id: 1, name: 'Cheese Burger', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem …', image: './assets/media/resturant/item_01-480x480.jpg', price: 19.02 },
        { id: 2, name: 'Royal Cheeseburger with Bacon', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem …', image: './assets/media/resturant/item_03-480x480.jpg', price: 13.49 },
        { id: 3, name: 'Black Gambugrer with Fishcake', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem …', image: './assets/media/resturant/item_04-480x480.jpg', price: 24.50 },
        { id: 4, name: 'Classic Bacon Hamburger', description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem …', image: './assets/media/resturant/item_01-480x480.jpg', price: 11.99 }
    ];

    constructor() {}

    getAllBurger() {
        return this.burger;
    }
}
