import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getCliente(username: string) {
    return this.http.get(`https://petstore.swagger.io/v2/user/${username}`);
  }

  enviarUsuario(usuario: any) {
    return this.http.post('https://petstore.swagger.io/v2/user', usuario);
  }

  actualizarCliente(usuario: any){
    return this.http.put(`https://petstore.swagger.io/v2/user/${usuario.username}`, usuario);
  }

  eliminarCliente(username: string) {
    return this.http.delete(`https://petstore.swagger.io/v2/user/${username}`);
  }
}
