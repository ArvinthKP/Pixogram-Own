export class User {
    id: number;
    name: String;
    email: String;
    password: String;

    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}