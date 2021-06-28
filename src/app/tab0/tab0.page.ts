import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab0',
  templateUrl: './tab0.page.html',
  styleUrls: ['./tab0.page.scss'],
})
export class Tab0Page implements OnInit {
  public name: any;
  constructor(private storage: Storage) { }

  async ngOnInit() {
   /* this.storage.get('idScenario').then((val) => {
      console.log('I´m carrying Scenario Id', val);
    }); */
    this.name = await this.storage.get('idScenario');
    console.log('I´m carrying Scenario Id', this.name);

  }

}
