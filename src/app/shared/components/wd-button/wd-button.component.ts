import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface WdButtonConfig {
    styling: string;
    size: string;
    rounded: boolean;
}

@Component({
    selector: 'app-wd-button',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './wd-button.component.html',
    styleUrls: ['./wd-button.component.scss']
})
export class WdButtonComponent {
    @Input() text: string = "" || 'Button';
    // styling = ["primary", "secondary", "danger", "success"]
    wdButtonConfig: WdButtonConfig = {
        styling: 'success',
        size: 'md',
        rounded: true
    }

}
