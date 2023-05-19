import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/model/product';
import { ResturantService } from 'src/app/core/services/resturant.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    burger: Product[] = [];

    constructor(private resturantService: ResturantService) {}

    ngOnInit(): void {
        this.burger = this.resturantService.burger;
        console.log(this.burger);

    }
}
