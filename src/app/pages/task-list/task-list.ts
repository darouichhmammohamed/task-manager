import { Component, computed, inject, signal } from '@angular/core';
import { TaskService } from '../../services/task-service';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})
export class TaskList {
  taskService = inject(TaskService);
  filter = signal<'all' | 'completed' | 'active'>('all');
  fileterTasks= computed(()=>{
    switch(this.filter()){
      case "all":
        return this.taskService.tasks();
      case "completed":
        return this.taskService.completedTasks();
      case "active":
        return this.taskService.activeTasks();
      default:
        return this.taskService.tasks();
    }
  })
  constructor() {
    console.log("Completed:" , this.taskService.completedTasks);
    console.log("Active :", this.taskService.activeTasks)
  }
  setFilter(filter :'all'|'completed'|'active'){
    this.filter.set(filter)
  }
  deleteTask(id : number){
    this.taskService.deleteTask(id);
  }
}
