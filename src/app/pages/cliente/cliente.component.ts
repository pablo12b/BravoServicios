import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clienteData: any; // Variable para almacenar los datos del cliente
  username: string = '';

  constructor(private clienteServicio: ClienteService) { }

  ngOnInit(): void {
  }

  obtenerCliente() {
    this.clienteServicio.getCliente(this.username).subscribe(
      (data: any) => {
        this.clienteData = data; // Almacena los datos del cliente en la variable
      },
      (error) => {
        console.log('Error al obtener los datos del cliente:', error);
        alert('El usuario no existe.');
      }
    );
  }

}
