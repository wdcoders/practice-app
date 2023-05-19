import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WdButtonComponent } from './wd-button/wd-button.component';
import { WdInputComponent } from './wd-input/wd-input.component';
import { WdSelectComponent } from './wd-select/wd-select.component';
import { WdCardComponent } from './wd-card/wd-card.component';


const WD_COMPONENTS = [
    WdButtonComponent,
    WdInputComponent,
    WdSelectComponent,
    WdCardComponent
]


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...WD_COMPONENTS
    ], exports: [
        WdButtonComponent,
        WdInputComponent,
        ...WD_COMPONENTS
    ]
})
export class WdModule {}
