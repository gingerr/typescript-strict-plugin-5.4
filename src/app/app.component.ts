import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-v17';

  /**
   * with typescript version higher than 5.3.3 this reports no strictness error, but it should.
   * if we downgrade typescript to 5.3.3, a strictness error will be shown here.
   */
  strictnessError(): string {
    return undefined;
  }
}
