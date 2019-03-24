import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { NgForm } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { DataApiService } from '../../services/data-api.service';
import { UserInterface } from '../../models/user';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private servicioCarrito: CrudService, private dataApi: DataApiService) { }
  public userUid: string = null;
  public products:Producto[];

  ngOnInit() {
  }
  getCarrito(){
  

  }
}
