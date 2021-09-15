import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

//Servicios
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [TasksService]
})
export class HomePage {
  private tasks: any = [];

  constructor(private _taskService : TasksService, private _navControl : NavController) {}


  
  ionViewDidEnter(){
    this.obtenerTareas();
  }

  obtenerTareas() {
    this._taskService.obtenerTareas().subscribe(
      response=> {
        this.tasks = response;
    }, 
      error=> {
        console.error(error);
      });
  }

  detalleTarea(tarea){
    this._navControl.navigateForward('/detalle',{ state: {tarea: tarea, accion: "guardar"} });
  }

  TareaNueva(){
    this._navControl.navigateForward('/detalle',{ state: {accion: "nueva"}});
  }

  borrarTarea(tarea){
    this._taskService.eliminarTarea(tarea._id).subscribe(
      response => {
        let tmpArray = [];
       for(let i=0; i < this.tasks.length; i++) {
         if(this.tasks[i]._id != response._id){
           tmpArray.push(this.tasks[i]);
         }
       }
       this.tasks = tmpArray;
      },
      error => {
        console.error(error);
      }
    );
  }



}
