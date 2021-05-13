import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: string = "";
  transform: string = "";
  update = new Subject<void>();

  ngOnInit() {
    this.update.pipe(
      debounceTime(500)
    ).subscribe(this.processUpdate);
  }

  processUpdate() {
    console.log('hey this works');
  }
}

