/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  active = '';

  NAV = [
    {
      name: 'Profile',
      link: '/profile',
      icon: 'person-circle'
    },
    {
      name: 'Logout',
      link: '/login',
      icon: 'exit'
    }
  ];

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;

  constructor(public storage: Storage,private router: Router,
    private idle: Idle, private keepalive: Keepalive) {
    this.storage.create();
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url;
    });


    // sets an idle timeout of 10 seconds.
    idle.setIdle(10);

    // sets a timeout period of 10 seconds. after 20 seconds of inactivity, the user will timed out.
    idle.setTimeout(10);

    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');

idle.onTimeout.subscribe(() => {
       this.idleState = 'Timed out!';
      this.timedOut = true;
});
idle.onIdleStart.subscribe(() => this.idleState = 'idle state');

idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');     // sets the ping interval to 15 seconds

keepalive.interval(15);

this.reset();
 }

reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }

}
