import { Component } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { MgFormControlsAccessor, MgControlName, MgCustomProperties } from "./neueAnmeldung.mg.controls.g";


import { TaskBaseMagicComponent, magicProviders } from "@magic-xpa/angular";


import { MagicModalInterface } from "@magic-xpa/angular";

@Component({
    selector: 'mga-neueAnmeldung',
    providers: [...magicProviders],
    templateUrl: './neueAnmeldung.component.html'
})
export class neueAnmeldung extends TaskBaseMagicComponent implements MagicModalInterface {

    mgc = MgControlName;
    mgcp = MgCustomProperties;
    mgfc: MgFormControlsAccessor;
    createFormControlsAccessor(formGroup: FormGroup) {
        this.mgfc = new MgFormControlsAccessor(formGroup, this.magicServices);
    }
    private static readonly formName: string = "neueAnmeldung";
    private static readonly showTitleBar: boolean = true;
    private static readonly x: number = 0;
    private static readonly y: number = 0;
    private static readonly width: string = "300px";
    private static readonly height: string = "300px";
    private static readonly isCenteredToWindow: boolean = true;
    private static readonly shouldCloseOnBackgroundClick = true;
    X() {
        return neueAnmeldung.x;
    }
    Y() {
        return neueAnmeldung.y;
    }
    Width(): string {
        return neueAnmeldung.width;
    }
    Height(): string {
        return neueAnmeldung.height;
    }
    IsCenteredToWindow() {
        return neueAnmeldung.isCenteredToWindow;
    }
    FormName() {
        return neueAnmeldung.formName;
    }
    ShowTitleBar() {
        return neueAnmeldung.showTitleBar;
    }
    ShouldCloseOnBackgroundClick() {
        return neueAnmeldung.shouldCloseOnBackgroundClick;
    }
}