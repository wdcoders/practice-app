import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WdButtonComponent } from '../wd-button/wd-button.component';
import { Product } from 'src/app/core/model/product';

@Component({
    selector: 'app-wd-card',
    standalone: true,
    imports: [CommonModule, WdButtonComponent],
    templateUrl: './wd-card.component.html',
    styleUrls: ['./wd-card.component.scss']
})
export class WdCardComponent {
    @Input() data!: Product;
}
