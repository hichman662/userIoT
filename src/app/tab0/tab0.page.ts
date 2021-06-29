import { ScenarioService } from './../services/scenario.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Scenario } from '../models/scenario.model';
@Component({
  selector: 'app-tab0',
  templateUrl: './tab0.page.html',
  styleUrls: ['./tab0.page.scss'],
})
export class Tab0Page implements OnInit {
  public idSecanrio: any;
  public scenarioName: string;
  constructor(private storage: Storage,
    private scenarioService: ScenarioService,
)
   { }

  async ngOnInit() {
   /* this.storage.get('idScenario').then((val) => {
      console.log('I´m carrying Scenario Id', val);
    }); */
    this.idSecanrio = await this.storage.get('idScenario');
    console.log('I´m carrying Scenario Id', this.idSecanrio);

    this.scenarioService.getScenarioById(this.idSecanrio)
    .subscribe( (res: any) => {
        this.scenarioName = res.Name;
    }, ( err) => {
        console.log(err);
    });

  }


}
