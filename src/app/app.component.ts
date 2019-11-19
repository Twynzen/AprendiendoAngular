//Los componentes ts son pedazos de codigo js, se puede decir que clases 
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'AprendiendoAngular';
}
