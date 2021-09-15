import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

//Servicios
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.css'],
  providers: [TasksService]
})
export class DetallePage {
  private task: string = "";
  private descripcion: string = "";
  private id: string = "";
  private accion: string = "";

  constructor(private _navControl: NavController, private router: Router, private _taskService: TasksService) {
    if (this.router.getCurrentNavigation().extras.state) {
      const parametros = this.router.getCurrentNavigation().extras.state;
      this.accion = parametros.accion;
      if (this.accion !== "nueva") {
        this.task = parametros.tarea.tarea;
        this.descripcion = parametros.tarea.descripcion;
        this.id = parametros.tarea._id;
      }
    }
    console.log(this.accion);
  }


  goToHome() {
    this._navControl.navigateBack("/home");
  }

  update() {
    //Actualizamos
    if (this.accion !== "nueva") {
      this._taskService.actualizarTarea(this.id, this.task, this.descripcion).subscribe(
        reponse => {
          this._navControl.navigateBack("/home");
        },
        error => {
          console.error(error);
        }
      );
    }
    else {
      this._taskService.guardarTarea({tarea: this.task, descripcion: this.descripcion}).subscribe(
        response => {
          this._navControl.navigateBack("/home");
        },
        error => {
          console.error(error);
        }
      );

    }
  }

}
