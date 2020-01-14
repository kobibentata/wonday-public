import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-events',
	templateUrl: './events.component.html',
	styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
	public pageTitle: string;

	constructor(public translate: TranslateService) { }

	ngOnInit() {
		console.log("events component init");

		this.pageTitle = this.translate.instant("sidebar.events");
	}

}
