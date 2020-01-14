import { Component, OnInit } from '@angular/core';
import { ISidebarItem } from '../../models/app.models';
import { AppService } from '../../services/app.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	public sidebarItems: ISidebarItem[] = [];

	constructor(
		private appService: AppService,
		public translate: TranslateService) { }

	ngOnInit() {
		console.log("sidebar component init");

		this.sidebarItems = [
			{
				title: "sidebar.dashboard",
				icon: "dashboard",
				link: "/"
			},
			{
				title: "sidebar.mailing-lists",
				icon: "lists",
				link: "/lists"
			},
			{
				title: "sidebar.events",
				icon: "events",
				link: "/events"
			},
			{
				title: "sidebar.branches",
				icon: "branches",
				link: "/branches"
			},
			{
				title: "sidebar.settings",
				icon: "settings",
				link: "/settings"
			}
		];
	}

}
