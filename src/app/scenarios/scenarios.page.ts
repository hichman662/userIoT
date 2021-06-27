import { ScenarioService } from './../services/scenario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Scenario } from '../models/scenario.model';
import { IonItemSliding, AlertController, LoadingController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.page.html',
  styleUrls: ['./scenarios.page.scss'],
})
export class ScenariosPage implements OnInit {

  public listScenario: Scenario[] = [];
  constructor(
    private scenarioService: ScenarioService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public router: Router,
    private menu: MenuController,
    private storage: Storage
  ) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {
    this.scenarioService.getAllScenario()
    .subscribe( (res: any) => {
        this.listScenario = res;
    }, ( err) => {
        console.log(err);
    });
  }

  async start(id) {
    console.log(id);
    this.router.navigateByUrl('/tabs', { replaceUrl:true });
  }
}
