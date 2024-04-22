import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../services/data-storage.service";

@Component({
  selector: "app-faq-citizen",
  templateUrl: "./faq-citizen.component.html",
  styleUrls: ["./faq-citizen.component.css"],
})
export class FaqCitizenComponent implements OnInit {
  langCode = "";
  data = [];
  answerTranslation = "";

  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit() {
    this.langCode = localStorage.getItem("langCode");
    this.dataStorageService
      .getI18NLanguageFiles(this.langCode)
      .subscribe((response) => {
        this.data = response["faq-citizen"]["questions"];
        this.answerTranslation = response["faq-citizen"]["answer"];
      });
  }
}
