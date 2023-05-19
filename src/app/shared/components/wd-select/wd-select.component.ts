import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-wd-select',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './wd-select.component.html',
    styleUrls: ['./wd-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: WdSelectComponent
        }
    ]
})
export class WdSelectComponent implements ControlValueAccessor {
    @Input() placeholder = "" || 'Select Option';

    writeValue(obj: any): void {
    }
    registerOnChange(fn: any): void {
    }
    registerOnTouched(fn: any): void {
    }
    setDisabledState?(isDisabled: boolean): void {
    }
}
