import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-branches',
	templateUrl: './branches.component.html',
	styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
	public pageTitle: string;

	constructor(public translate: TranslateService) { }

	ngOnInit() {
		console.log("branches component init");
		
		this.pageTitle = this.translate.instant("sidebar.branches");
	}

}
