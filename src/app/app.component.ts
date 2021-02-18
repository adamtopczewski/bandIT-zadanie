import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AirlinesService } from './airlines.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public airlines:[any];
  regexp: RegExp = new RegExp('/^A/', 'i');
  constructor(private airlinesService: AirlinesService){
  }

  ngOnInit() {
    this.airlinesService.getAirlines().subscribe( airlines => {
      const startsWithA = airlines.filter((airline) => airline.name.startsWith("A") && airline.icao_code !== '');
      this.airlines = startsWithA
    });
  }
  
}
