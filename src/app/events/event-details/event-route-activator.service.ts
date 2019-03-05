import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private EventService:EventService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        const eventExists = !!this.EventService.getEvent(+route.params['id'])

        if (!eventExists)
            this.router.navigate(['/404'])
        return eventExists
    }
}