import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms"
import { UsersService } from "../services/users.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required)
  });

  constructor(private userService:UsersService, private router:Router) { }

    userData: any = [];

  ngOnInit(): void {
  }

  onLogin(form:any){

    if (form.usuario=="" || form.password==""){
      alert("Llene todos los campos");
    }
    else{
      console.log(form);
      this.userService.login(form.usuario).subscribe(
        res => {
          console.log(res)
          //convierte el objeto a .json
          this.userData=JSON.stringify(res);
          console.log(this.userData);
          //saca el id y passwor del .json
          const aux = JSON.parse(this.userData)
          const idUser= aux[0].id_usuarios
          const pass= aux[0].contrasena
          console.log(idUser)
          console.log(pass)

          if(pass == form.password){
            localStorage.setItem("token",idUser)
            this.router.navigate(["/mainpage"]);
          }
          else{
            alert("Usuario o contraseña invalida");
          }
        },
        err => console.error(err)
      );
      
    }
    
    
  }

}
