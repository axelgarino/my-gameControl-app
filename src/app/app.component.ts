import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-gameControl-app';

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumbernumber: number){
    if(firedNumbernumber%2===0){
      this.evenNumbers.push(firedNumbernumber)
    }else{
      this.oddNumbers.push(firedNumbernumber)
    }
  }


}
