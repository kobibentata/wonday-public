import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { CONTACTS_URL, icons } from "../models/app.consts";

@Injectable({
	providedIn: "root"
})
export class AppService {

	constructor(
		private http: HttpClient,
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer) {

		console.log("constructing the app service");

		icons.forEach((icon: string) => {
			this.matIconRegistry.addSvgIcon(
				icon,
				this.domSanitizer.bypassSecurityTrustResourceUrl(`./assets/icons/${icon}.svg`)
			);
		});
	}

	public async getAccounts() {
		return this.http.get(CONTACTS_URL);
	}

	public getCurrentLanguage() {
		const language = localStorage.getItem("wd_lang") || "en-us";
		localStorage.setItem("wd_lang", language);
		return language;
	}
}