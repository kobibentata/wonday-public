import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule, MatFormFieldModule, MatIconModule, MatTooltipModule, MatButtonModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatRadioModule } from '@angular/material/radio';
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from '@angular/common/http';

export const createTranslateLoader = (http: HttpClient) => {
	console.log("createTranslateLoader");
	return new TranslateHttpLoader(http, "../../assets/i18n/", ".json");
};

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatInputModule,
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatIconModule,
		MatRadioModule,
		MatTooltipModule,
		MatButtonModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: createTranslateLoader,
				deps: [HttpClient]
			}
		})
	],
	exports: [
		MatInputModule,
		MatFormFieldModule,
		MatIconModule,
		MatRadioModule,
		MatTooltipModule,
		BrowserAnimationsModule,
		MatButtonModule,
		TranslateModule
	]
})
export class SharedModule { }
