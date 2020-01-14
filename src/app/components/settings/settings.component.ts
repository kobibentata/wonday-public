import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
	public pageTitle: string;

	constructor(public translate: TranslateService) { }

	ngOnInit() {
		console.log("settings component init");

		this.pageTitle = this.translate.instant("sidebar.settings");
	}

}
