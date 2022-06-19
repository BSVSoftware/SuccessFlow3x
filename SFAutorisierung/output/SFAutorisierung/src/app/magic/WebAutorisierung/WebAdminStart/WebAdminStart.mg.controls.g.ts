import {
    FormControl,
    FormGroup
} from "@angular/forms";
import {
    MagicServices
} from "@magic-xpa/angular";
export enum MgControlName {
    WebAdminStart = "WebAdminStart",
        EbenenString_v = "EbenenString_v",
        BenutzerNameVorname_gv = "BenutzerNameVorname_gv",
        Benutzer = "Benutzer",
        btn_Benutzer = "btn_Benutzer",
        btn_Steuerfile = "btn_Steuerfile",
        Konvertieren = "Konvertieren",
        btn_BenutzerGruppen = "btn_BenutzerGruppen",
        btn_Maildaten = "btn_Maildaten",
        Logfile = "Logfile",
        WebAdRouterOutlet = "WebAdRouterOutlet",
        btn_RechteGruppen = "btn_RechteGruppen",
        btn_EbeneErstellen = "btn_EbeneErstellen",
        btn_KDBerechtigungenNeu = "btn_KDBerechtigungenNeu",
        OnOffBTN = "OnOffBTN",
        btn_Rechte = "btn_Rechte",
        btn_Ebenenfarben = "btn_Ebenenfarben",
        btn_BenutzerRechteNeuSchreiben = "btn_BenutzerRechteNeuSchreiben",
        btn_BenutzerRechte = "btn_BenutzerRechte",
        btn_StandardImporte = "btn_StandardImporte",
        btn_DateiExplorerBTN = "btn_DateiExplorerBTN",
        btn_SQLBackups = "btn_SQLBackups",
        btn_RechteWS = "btn_RechteWS",
        btn_ProgrammeWS = "btn_ProgrammeWS",
        btn_MenueWS = "btn_MenueWS",
        btn_CloudTools = "btn_CloudTools",
        btn_V8BenutzerKonvert = "btn_V8BenutzerKonvert",
        btn_MasterDatenImport = "btn_MasterDatenImport",
        Label2 = "Label2",
        AktBenutzername_gv = "AktBenutzername_gv",
}
export enum MgCustomProperties {}
export class MgFormControlsAccessor {
    constructor(private fg: FormGroup, private magicServices: MagicServices) {}

    get EbenenString_v(): FormControl {
        return this.fg.controls[MgControlName.EbenenString_v] as FormControl;
    }

    get BenutzerNameVorname_gv(): FormControl {
        return this.fg.controls[MgControlName.BenutzerNameVorname_gv] as FormControl;
    }

    get AktBenutzername_gv(): FormControl {
        return this.fg.controls[MgControlName.AktBenutzername_gv] as FormControl;
    }

    getTableChildFormControl(name: MgControlName): FormControl {
        return this.magicServices.mgAccessorService.getFormGroupByRow(this.magicServices.tableService.getSelectedRow()).controls[name] as FormControl;
    }
}