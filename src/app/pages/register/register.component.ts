import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/core/model/register';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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
