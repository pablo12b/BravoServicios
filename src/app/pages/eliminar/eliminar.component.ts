import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {
  username: string = '';

  constructor(private clienteServicio: ClienteService) { }

  eliminarCliente() {
    this.clienteServicio.eliminarCliente(this.username).subscribe(
      (response) => {
        console.log('Usuario eliminado con éxito:', response);
        alert('El usuario eliminado con éxito.');
        // Aquí puedes manejar la respuesta del servidor si es necesario
      },
      (error) => {
        console.error('Error al eliminar el usuario:', error);
        // Aquí puedes manejar el error si es necesario
      }
    );
  }

}
