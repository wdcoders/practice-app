import { Component, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Register } from './core/model/register';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    @ViewChild("f") loginForm!: NgForm;

    registerForm: Register = {
        email: 'example@gmail.com',
        password: '123456',
        gender: ''
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            console.log(form.value);
        }
    }
}
