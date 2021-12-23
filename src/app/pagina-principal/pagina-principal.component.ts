import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Routes, RouterModule, Router } from '@angular/router'

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  pedidos(){

  }

  produtos(){

  }

  clientes(){
    
  }

  voltar(){
    this.router.navigate([''])
  }

}
