import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss',
})
export class AllTasksComponent {
  newTask = '';
  taskList: { id: string; title: string }[] = [];
  httpService = inject(HttpService);

  ngOnInit() {
    this.getAllTasks();
  }
  addTask() {
    console.log('Adding task', this.newTask);
    this.httpService.addTask(this.newTask).subscribe(() => {
      this.newTask = '';
      this.getAllTasks();
    });
  }
  getAllTasks() {
    this.httpService.getAllTasks().subscribe((res: any) => {
      console.log(res);
      this.taskList = res;
    });
  }
}
