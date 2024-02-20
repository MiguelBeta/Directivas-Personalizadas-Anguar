import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { UsersServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-request';
import { Console } from 'console';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {

  //Para llamar al usuario desde el servicio inyectado la info se hace asi o por el constructor,
  //cualquiera de las dos formas es valida
  private usersService = inject(UsersServiceService);
  public userId = signal(1);

  //Los posibles valores que pueda tener la señal (valores interfaz o undefined en caso tal de que no exista)
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);
  public fullName = computed<string>( () => {
    if( !this.currentUser )return 'Usuario no encontrado';

    return `${ this.currentUser()?.first_name } ${this.currentUser()?.last_name}`;
  });



  //Cuando el componente se monta se hace la peticion http cuando este listo el componente
  ngOnInit(): void {
    this.loadUser( this.userId() )
  }

  loadUser( id: number ){
    if( id <= 0 )return;

    this.userId.set(id);
    this.currentUser.set(undefined);

    //Se hace la peticion http para obtener la informacion del backend
    this.usersService.getUserById( id )
      .subscribe({
        next: (user) => {
          this.currentUser.set( user );
          this.userWasFound.set(true);
        },
        error: () => {
          this.userWasFound.set(false);
          this.currentUser.set(undefined);
        }
      })

  }

}
