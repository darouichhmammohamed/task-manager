import { computed, Injectable, signal } from '@angular/core';
export interface task{
    id : number;
    title : string;
    description : string ;
    completed : boolean;
    createdAt: Date;
}

const STORAGE_KEY = 'task-manager.tasks';

const initialTasks: task[] = [
    {
        id: 1,
        title: 'learn Angular Basics',
        description: 'understand components , services , and routing',
        completed: true,
        createdAt: new Date('2026-01-01')
    },
    {
        id: 2,
        title: 'build a project',
        description: 'create a task manager application',
        completed: false,
        createdAt: new Date('2026-01-03')
    },
];

@Injectable({
    providedIn:'root',
})
export class TaskService {
    private tasksSignal = signal<task[]>(this.loadTasks());
    tasks = this.tasksSignal.asReadonly()

    completedTasks = computed(() => {
        return this.tasksSignal().filter(tasks => tasks.completed)
    })
    activeTasks = computed(()=>{
        return this.tasksSignal().filter(tasks => !tasks.completed)
    })
    getTask(id : number){
        return this.tasks().find(task => task.id === id )
    }
    deleteTask(id : number){
        const updatedTasks = this.tasksSignal().filter(task => task.id !== id);
        this.saveTasks(updatedTasks);
    }
    addTask(title : string , description:string){
        const tasks = this.tasksSignal();
        const updatedTasks = [...tasks, {
            id: tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
            title,
            description,
            completed : false,
            createdAt : new Date()
        }];
        this.saveTasks(updatedTasks);
    }

    private saveTasks(tasks: task[]): void {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        this.tasksSignal.set(tasks);
    }

    private loadTasks(): task[] {
        const savedTasks = localStorage.getItem(STORAGE_KEY);
        return savedTasks
            ? JSON.parse(savedTasks).map((task: task) => ({
                ...task,
                createdAt: new Date(task.createdAt),
            }))
            : initialTasks;
    }

}
