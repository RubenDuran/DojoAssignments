import { FormsModule } from '@angular/forms';

export class User {

    public f_name: string = "";
    public l_name: string = "";
    public email: string = "";
    public pw: string = "";
    public pwconf: string = "";
    public add: string = "";
    public unit: string = "";
    public city: string = "";
    public state: string = "";

    constructor(){
        this.f_name="";
        this.l_name="";
        this.email="";
        this.pw="";
        this.pwconf="";
        this.add="";
        this.unit="";
        this.city="";
        this.state="";
    }
}
