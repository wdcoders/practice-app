import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-wd-input',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './wd-input.component.html',
    styleUrls: ['./wd-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: WdInputComponent
        }
    ]
})
export class WdInputComponent implements ControlValueAccessor {

    @Input() placeholder = "";
    @Input() type = "" || 'text';
    @Input() value: any;

    private onChange = (value: any) => {};
    private onTouched = () => {};
    touched = false;
    disabled = false;

    writeValue(value: any): void {
        this.value = value
    }
    registerOnChange(onChange: any): void {
        this.onChange = onChange;
    }
    registerOnTouched(onTouched: any): void {
        this.onTouched = onTouched;
    }
    setDisabledState?(isDisabled: boolean): void {
        // throw new Error('Method not implemented.');
    }

    onInputChange(event: any) {
        this.markAsTouched();
        this.onChange(event.target.value)
    }

    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

}
