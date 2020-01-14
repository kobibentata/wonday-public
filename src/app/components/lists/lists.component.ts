import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-lists',
	templateUrl: './lists.component.html',
	styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
	public pageTitle: string;

	constructor(public translate: TranslateService) { }

	ngOnInit() {
		console.log("lists component init");
		this.translate.use("he-il");
		this.pageTitle = this.translate.instant("sidebar.mailing-lists");
	}

}
