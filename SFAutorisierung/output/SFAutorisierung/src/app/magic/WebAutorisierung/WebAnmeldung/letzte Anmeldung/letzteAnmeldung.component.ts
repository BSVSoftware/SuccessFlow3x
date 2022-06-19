import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./letzteAnmeldung.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-letzteAnmeldung',
    providers: [...magicProviders],
    templateUrl: './letzteAnmeldung.component.html'
})
export class letzteAnmeldung extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "letzteAnmeldung";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return letzteAnmeldung.x;
    }
    Y() {
        return letzteAnmeldung.y;
    }
    Width(): string {
        return letzteAnmeldung.width;
    }
    Height(): string {
        return letzteAnmeldung.height;
    }
    IsCenteredToWindow() {
        return letzteAnmeldung.isCenteredToWindow;
    }
    FormName() {
        return letzteAnmeldung.formName;
    }
    ShowTitleBar() {
        return letzteAnmeldung.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return letzteAnmeldung.shouldCloseOnBackgroundClick;
    }
}