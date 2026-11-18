import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task-service';

@Component({
  imports: [],
  selector: 'app-task-details',
  styleUrl: './task-details.css',
  templateUrl: './task-details.html',
})
export class TaskDetails {
  private router = inject(Router)
  private route = inject(ActivatedRoute);
  private taskService = inject(TaskService);
  private taskId = signal<number | null>(null);

  task = computed(() => {
    const id = this.taskId();
    return id === null ? undefined : this.taskService.getTask(id);
  });

  constructor() {
    const routeId = this.route.snapshot.paramMap.get('id');
    const id = Number(routeId);

    if (routeId !== null && Number.isInteger(id)) {
      this.taskId.set(id);
    }
  }
  deleteTask(){
    const id = this.taskId();
    if (id){
      this.taskService.deleteTask(id)
      this.router.navigate(['/'])
    }
    }
    
}
