import { Component, OnInit, OnDestroy } from "@angular/core";
import { AppService } from "../../services/app.service";
import { Subscription } from "rxjs";
import * as _ from "lodash";
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
	private dataSubscription: Subscription;

	constructor(
		private appService: AppService,
		private router: Router,
		public translate: TranslateService) {
		translate.addLangs(['en-us', 'he-il']);
		translate.use("he-il");
		translate.setDefaultLang('en-us');
	}

	ngOnInit() {
		console.log("header component init");
	}

	ngOnDestroy() {
		if (this.dataSubscription.unsubscribe) {
			this.dataSubscription.unsubscribe();
		}
	}

}
