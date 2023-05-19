export class Register {
    email: string;
    password: string;
    gender: string;

    constructor(email: string, password: string, gender: string) {
        this.email = email;
        this.password = password;
        this.gender = gender;
    }
}