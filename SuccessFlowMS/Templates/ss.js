/*
* Copyright 2014, www.SuperSignature.com
* This code is not a freeware. You need to buy it before use!
* ver 1.5.0.3  Mar 05 2014 (SOURCE)

Hi!

If you came here for a reason. You know, " curiousity killed the cat ". 
If you are in a risky mood, just drop us a line admin@supersignature.com
		 
*/

ValidateSignature = function (id) {
    var result = true;

    if (null != id && 'undefined' != id && "" != id) {

        try {
            result = eval("obj" + id).IsValid();
            if (!isMobileIE && result == false) {
                document.getElementById(id).style.borderColor = "red";
            }
        }
        catch (e) {
        }
    }

    return result;
};

ClearSignature = function (id) {

    if (null != id && 'undefined' != id && "" != id) { eval("obj" + id).ResetClick(); }

};

ResizeSignature = function (id, w, h) {
    eval("obj" + id).ResizeSignature(w, h);
};

SignatureColor = function (id, color) {
    eval("obj" + id).SignatureColor(color);
};

SignatureBackColor = function (id, color) {
    eval("obj" + id).SignatureBackColor(color);
};

SignaturePen = function (id, size) {
    eval("obj" + id).SignaturePen(size);
};

SignatureEnabled = function (id, enable) {
    eval("obj" + id).SignatureEnabled(enable);
};

SignatureStatusBar = function (id, show) {
    eval("obj" + id).SignatureStatusBar(show);
};

SignatureTotalPoints = function (id) {
    return eval("obj" + id).CurrentTotalpoints();
};

UndoSignature = function (id) {
    eval("obj" + id).UndoSignature();
};

LoadSignature = function (id, data, ratio) {
    eval("obj" + id).LoadSignature(data, ratio);
};

var msie = window.navigator.userAgent.toUpperCase().indexOf("MSIE ");
var isIE = false;
var isIENine = false;
var isMobileIE = false;
var isOperaMini = false;
var isIETablet = false;
var winTabletPointerEvt = false;
var iever = getInternetExplorerVersion();

if (window.navigator.userAgent.toUpperCase().indexOf("OPERA MINI") > 0) {
    isOperaMini = true;
}

if (window.navigator.userAgent.toUpperCase().indexOf("OPERA MOBI") > 0) {
    isOperaMini = true;
}

function supports_canvas() {
    try {
        document.createElement("canvas").getContext("2d");
        return true;
    }
    catch (e) {
        return false;
    }
}

function getInternetExplorerVersion() {
    var rv = -1;
    if (window.navigator.appName == 'Microsoft Internet Explorer') {
        var ua = window.navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

if (msie > 0) {
    isIE = true;

    if (supports_canvas()) {

        isIE = false;

        if (iever >= 9.0) {
            isIENine = true;
        }
    }

    if (window.navigator.userAgent.toUpperCase().indexOf("IEMOBILE ") > 0) {
        isMobileIE = true;
    }
}

isIETablet = (new RegExp("Tablet PC", "i")).test(window.navigator.userAgent);
winTabletPointerEvt = !!window.navigator.msPointerEnabled;

if (!isIETablet) {
    if (window.navigator.userAgent.toUpperCase().indexOf("WINDOWS PHONE ") > 0) {
        isIETablet = true;
    }
    if (window.navigator.msMaxTouchPoints) {
        isIETablet = true;
    }
}

function SuperSignature() {
    this.SignObject = "";
    this.PenSize = 3;
    this.PenColor = "#D24747";
    this.PenCursor = '';
    this.ClearImage = '';
    this.BorderWidth = "2px";
    this.BorderStyle = "dashed";
    this.BorderColor = "#DCDCDC";
    this.BackColor = "#fffffe";
    this.BackImageUrl = '';
    this.SignzIndex = "99";
    this.SignWidth = 450;
    this.SignHeight = 250;
    this.CssClass = "";
    this.ApplyStyle = true;
    this.SignToolbarBgColor = "#FFFFFF";
    this.RequiredPoints = 50;
    this.ErrorMessage = "Please continue your signature.";
    this.StartMessage = "Please sign.";
    this.SuccessMessage = "Signature OK.";
    this.ImageScaleFactor = 0.50;
    this.TransparentSign = true;
    this.Enabled = true;
    this.Visible = true;
    this.Edition = "Trial";
    this.IsCompatible = false;
    this.InternalError = "";
    this.LicenseKey = "";
    this.IeModalFix = false;
    this.SmoothSign = true;

    for (var n in arguments[0]) { this[n] = arguments[0][n]; }


    var pointCount = 0;
    var isIPhone = false;

    var currentSignObj = null;
    var currentSignContainerObj = null;
    var currSignStatus = null;
    var currSignToolbar = null;
    var currSignData = null;
    var currSignDataSmooth = null;
    var currSignDebug = null;

    var enabled = this.Enabled == 'true';

    var mouseMoved = false;
    var dataSaved = false;

    var cData = [], fData = [], kData = [], bData = [], pData = [];
    var currVersion = "1", dcMode = false, currPenSize = this.PenSize, currPenColor = this.PenColor, currBackColor = this.BackColor, currBorderColor = this.BorderColor;
    var currID = this.SignObject;
    var currW = this.SignWidth;
    var currH = this.SignHeight;
    var currStartMsg = this.StartMessage;
    var currErrMsg = this.ErrorMessage;
    var currSuccessMsg = this.SuccessMessage;
    var currBackUrl = this.BackImageUrl;
    var isValid = false;
    var currImgScale = this.ImageScaleFactor;
    var currTrans = this.TransparentSign;
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var currReqPts = this.RequiredPoints;
    var currTotalPts = 0;

    var htm = "";
    var lastPositionX = 0;
    var lastPositionY = 0;
    var graphics;

    var iPhoneXPos = 0;
    var iPhoneYPos = 0;

    var iemodalfix = this.IeModalFix;
    var dotTime = null;

    var iPhoneDotX = 0;
    var iPhoneDotY = 0;
    var doBeizer = this.SmoothSign;

    var canvasCreated = false;

    if (isMobileIE) {

        graphics = new jsGraphics(currID + "_Container");

        if (graphics != null && graphics != 'undefined') {

            try {
                graphics.clear();
                graphics.paint();
            }
            catch (ee) {
                alert("Graphics object error " + ee.description);
            }
        }
        else {
            alert("Graphics object error");
        }

    }

    this.IsValid = function () { return isValid; };

    this.CurrentTotalpoints = function () { return currTotalPts; };

    this.ReturnFalse = function (e) {

        if (e.preventManipulation) {
            e.preventManipulation();
        }

        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

    };


    function MyAttachEvent(obj, evt, fnc) {

        if (!obj.myEvents) obj.myEvents = {};

        if (!obj.myEvents[evt]) obj.myEvents[evt] = [];

        var evts = obj.myEvents[evt];

        evts[evts.length] = fnc;

    }

    function MyFireEvent(obj, evt) {

        if (!obj || !obj.myEvents || !obj.myEvents[evt]) return;

        var evts = obj.myEvents[evt];

        for (var i = 0, len = evts.length; i < len; i++) evts[i]();

    }

    this.XBrowserAddHandler = function (target, eventName, handlerName) {
        if (target.addEventListener)
            target.addEventListener(eventName, handlerName, false);
        else if (target.attachEvent)
            target.attachEvent("on" + eventName, handlerName);
        else {
            try {
                MyAttachEvent(target, eventName, handlerName);
                target['on' + eventName] = function () { MyFireEvent(target, eventName) };
            }
            catch (ex) {
                alert("Event attaching exception, " + ex.description);
            }
        }

    };

    this.DisableSelection = function () {
        if (!isIE) {
            if (typeof currentSignContainerObj.style.MozUserSelect != "undefined") {
                currentSignContainerObj.style.MozUserSelect = "none";
            }
            else {

                currentSignContainerObj.style.cursor = "default";
            }
        }
    };


    this.ResizeSignature = function (w, h) {

        currentSignContainerObj.style.width = w + "px";
        currentSignContainerObj.style.height = h + "px";

        currSignToolbar.style.width = w + "px";

        if (!isIE) {
            var curSiO = document.getElementById(this.SignObject);
            curSiO.width = parseInt(w, 0);
            curSiO.height = parseInt(h, 0);

            curSiO.style.width = w + "px";
            curSiO.style.height = h + "px";
        }
        else {
            currentSignObj.style.width = w + "px";
            currentSignObj.style.height = h + "px";
        }

        this.ResetClick();

        this.SignWidth = w;
        this.SignHeight = h;

        currW = w;
        currH = h;
    };

    this.SignatureColor = function (color) {
        this.PenColor = color;
        currPenColor = color;
    };

    this.SignatureBackColor = function (color) {
        this.BackColor = color;
        currBackColor = color;

        if (isIE) {
            currentSignObj.style.backgroundColor = color;
        }
        else {
            currentSignObj.fillStyle = color;
            currentSignObj.fillRect(0, 0, currW, currH);
        }
    };

    this.SignaturePen = function (size) {
        this.PenSize = size;
        currPenSize = size;
    };

    this.SignatureEnabled = function (enable) {
        this.Enabled = enable;
        enabled = enable;
    };

    this.SignatureStatusBar = function (show) {
        if (show) {
            $("#" + currSignToolbar.id).show("slow");
        }
        else {
            $("#" + currSignToolbar.id).hide("slow");
        }
    };

    this.UndoSignature = function () {

        if (cData.length <= 2) {
            this.ResetClick();
            return;
        }

        cData.pop();
        bData.pop();
        kData.pop();
        pData.pop();

        SetSignData();

        var dataNow = base64Decode("'" + currSignData.value + "'");

        this.LoadSignature(dataNow, 1);
    };

    this.LoadSignature = function (data, ratio) {

        this.ResetClick();

        if (ratio == null || ratio == 'undefined') {
            ratio = '1.0';
        }

        ratio = parseFloat(ratio);

        var cords = findPos(currentSignContainerObj);
        var XPos = cords[0];
        var YPos = cords[1];

        var allStrokes = RTrim(LTrim(data)).split(";");

        cData[0] = "";

        for (var i = 0; i < allStrokes.length - 1; i++) {
            cData[i] = allStrokes[i] + ";";
        }

        for (var i = 0; i < allStrokes.length - 1; i++) {
            var tmpArr = RTrim(LTrim(allStrokes[i])).split(' ');
            pData[i] = tmpArr[0];
            bData[i] = new BezierCurves(GetPointArray(tmpArr), 30);
        }

        var allusefullData = allStrokes[0].split(",");

        currBackColor = allusefullData[1];
        currW = allusefullData[3];
        currH = allusefullData[4];
        currTrans = allusefullData[5];


        if (currBackUrl.length == 0) {
            this.SignatureBackColor(currBackColor);
        }

        kData[0] = 0;

        for (var i = 1, len = allStrokes.length; i < len - 1; i++) {

            var allCords = RTrim(LTrim(allStrokes[i])).split(" ");

            kData[i] = parseInt(allCords.length, 0) - 1;
            kData[0] = parseInt(kData[0], 0) + parseInt(allCords.length, 0);

            for (var j = 0, lent = allCords.length; j < lent; j++) {
                var twoVals = allCords[j].split(",");
                var ptX = twoVals[0];
                var ptY = twoVals[1];

                if (j == 0) {
                    this.SignaturePen(ptX);
                    this.SignatureColor(ptY);
                    currentSignObj.strokeStyle = ptY;
                    currentSignObj.lineWidth = ptX;
                }
                else if (j == 1) {

                    ptX = Math.abs(parseInt(ptX, 0) * ratio);
                    ptY = Math.abs(parseInt(ptY, 0) * ratio);


                    if (isIE) {
                        if (isMobileIE) {

                            lastPositionX = ptX;
                            lastPositionY = ptY;

                        }
                        else {
                            var w = '<SuperSignature:stroke weight="' + currPenSize + '" color="' + currPenColor + '" />';
                            var t = '"m' + ptX + "," + ptY + " l" + ptX + "," + ptY;
                            var v = '<SuperSignature:shape id="' + currID + "_l_" + (i - 1) + '" style="position: absolute; left:0px; top:0px; width:' + currW + "px; height: " + currH + 'px;" coordsize="' + currW + "," + currH + '"><SuperSignature:path v=' + t + ' e" /><SuperSignature:fill on="false" />' + w + "</SuperSignature:shape>";
                            currentSignObj.pathCoordString = t;
                            currentSignObj.insertAdjacentHTML("beforeEnd", v);
                        }
                    }
                    else {
                        currentSignObj.beginPath();
                        currentSignObj.lineJoin = "round";
                        currentSignObj.lineCap = "round";
                        currentSignObj.moveTo(ptX, ptY);
                    }

                    if (allCords.length == 2) {
                        eval("obj" + currID).DrawDot(ptX, ptY);
                    }
                }
                else {

                    ptX = Math.abs(parseInt(ptX, 0) * ratio);
                    ptY = Math.abs(parseInt(ptY, 0) * ratio);

                    if (!isIE && !doBeizer) {
                        currentSignObj.strokeStyle = currPenColor;
                        currentSignObj.lineWidth = currPenSize;

                        currentSignObj.lineTo(ptX, ptY);
                        currentSignObj.stroke();
                        currentSignObj.moveTo(ptX, ptY);
                    }
                    else {
                        currentSignObj.pathCoordString += " " + ptX + "," + ptY;
                        var g = document.getElementById(currID + "_l_" + (i - 1));
                        if (g) {
                            var ic = g.firstChild;

                            if (ic) {
                                try {
                                    ic.setAttribute("v", currentSignObj.pathCoordString + " e");
                                }
                                catch (je)
                                { var erxx = je.Description; }
                            }
                        }
                    }
                }

                if (!isIE) {
                    currentSignObj.closePath();
                    currentSignObj.restore();
                }
                else {
                    currentSignObj.innerHTML = currentSignObj.innerHTML;
                }

            }
            pointCount++;
        }

        if (!isIE && doBeizer) {
            ProcessCanvasArea(ratio);
        }

        SetSignData();

    };

    this.CheckCompatibility = function () {
        if (isIE) {
            this.IsCompatible = true;

            if (!isMobileIE) {
                if (!document.namespaces["SuperSignature"]) {
                    document.namespaces.add("SuperSignature", "urn:schemas-microsoft-com:vml", "#default#VML");
                }
            }
        }
        else {

            try {
                canvasCreated = !!document.createElement("canvas").getContext("2d");
            }
            catch (e) {
                canvasCreated = !!document.createElement("canvas").getContext;
            }

            if (canvasCreated) {
                this.IsCompatible = true;
            }
            else {
                document.write("Your browser does not support our signature control.");
            }
        }
    };

    function ShowMessage(msg) {
        ShowDebug(msg);
    };

    function LTrim(value) {
        var re = /\s*((\S+\s*)*)/;
        return value.replace(re, "$1");
    }

    function RTrim(value) {
        var re = /((\s*\S+)*)\s*/;
        return value.replace(re, "$1");
    }

    function ShowDebug(msg) {

        if (currSignDebug != null && currSignDebug != 'undefined') {
            try {
                currSignDebug.innerHTML = msg + "...<br/>" + currSignDebug.innerHTML;
            }
            catch (exp1) {
                alert(exp1.description);
            }
        }
    };

    function base64Encode(b) {
        var h = "", i, d, e, k, l, j, f, g = 0;
        b = c(b);
        while (g < b.length) {
            i = b.charCodeAt(g++);
            d = b.charCodeAt(g++);
            e = b.charCodeAt(g++);
            k = i >> 2;
            l = (i & 3) << 4 | d >> 4;
            j = (d & 15) << 2 | e >> 6;
            f = e & 63;
            if (isNaN(d)) {
                j = f = 64;
            }
            else if (isNaN(e)) {
                f = 64;
            }
            h = h + a.charAt(k) + a.charAt(l) + a.charAt(j) + a.charAt(f);
        }
        return h;
    };

    function b(c) {
        var d = "", a = 0, b = c1 = c2 = 0;
        while (a < c.length) {
            b = c.charCodeAt(a);
            if (b < 128) {
                d += String.fromCharCode(b);
                a++;
            }
            else if (b > 191 && b < 224) {
                c2 = c.charCodeAt(a + 1);
                d += String.fromCharCode((b & 31) << 6 | c2 & 63);
                a += 2;
            }
            else {
                c2 = c.charCodeAt(a + 1);
                c3 = c.charCodeAt(a + 2);
                d += String.fromCharCode((b & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                a += 3;
            }
        }

        return d;
    };

    function c(c) {
        c = c.replace(/\x0d\x0a/g, "\n");
        for (var b = "", d = 0; d < c.length; d++) {
            var a = c.charCodeAt(d);
            if (a < 128) {
                b += String.fromCharCode(a);
            }
            else if (a > 127 && a < 2048) {
                b += String.fromCharCode(a >> 6 | 192);
                b += String.fromCharCode(a & 63 | 128);
            }
            else {
                b += String.fromCharCode(a >> 12 | 224);
                b += String.fromCharCode(a >> 6 & 63 | 128);
                b += String.fromCharCode(a & 63 | 128);
            }
        }
        return b;
    };

    function base64Decode(input) {
        var output = "";
        var chr1, chr2, chr3 = "";
        var enc1, enc2, enc3, enc4 = "";
        var i = 0;
        var keyStr = a;

        var base64test = /[^A-Za-z0-9\+\/\=]/g;
        if (base64test.exec(input)) {
        }

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        do {
            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

            chr1 = chr2 = chr3 = "";
            enc1 = enc2 = enc3 = enc4 = "";

        } while (i < input.length);

        return unescape(output);
    };

    function SetSignData() {

        kData[0] = 0;

        for (var h = 1; h < kData.length; h++) {
            kData[0] += kData[h];
        }

        isValid = kData[0] >= currReqPts ? true : false;
        currTotalPts = kData[0];

        var j = "";


        cData[0] = currVersion + "," + currBackColor + "," + currImgScale + "," + currW + "," + currH + "," + currTrans + "," + kData[0] + "," + currID + ";";

        for (var p = 0; p < cData.length; p++) {
            j += cData[p];
        }

        if (cData.length > 1) {
            currSignData.value = base64Encode(j);
        }
        else {
            currSignData.value = "";
        }

        if (!isIE && doBeizer) {
            var retVal = "";
            if (bData.length > 0) {
                for (var i = 0; i < bData.length; i++) {
                    var arr = bData[i];

                    if (arr.length) {
                        for (var j = 0; j < arr.length; j++) {
                            retVal = retVal + (arr[j].x + ' ' + arr[j].y + ",");
                        }
                    }
                    else {
                        retVal = retVal + arr.x + ' ' + arr.y + ",";
                    }
                    retVal = retVal + ";"
                }

                currSignDataSmooth.value = base64Encode(retVal);
            }
            else {
                currSignDataSmooth.value = "";
            }
        }
    };

    function GetPointArray(inputData) {

        var strokes = inputData;
        strokes.splice(0, 1);
        var inputStrokes = [];

        for (var icount = 0; icount < strokes.length; icount++) {
            var coord = strokes[icount].split(',');
            inputStrokes.push({ x: parseInt(coord[0]), y: parseInt(coord[1]) });
        }

        return inputStrokes;
    };

    function ProcessCanvasArea(ratio) {

        currentSignObj.clearRect(0, 0, currW, currH);

        if (currBackUrl.length == 0) {
            SignatureBackColor(currID, currBackColor);
        }

        for (var istroke = 0; istroke < bData.length; istroke++) {
            var bezierPts = bData[istroke];
            var penDetails = pData[istroke].split(',');
            var penWidth = penDetails[0];
            var penColor = penDetails[1];

            if (bezierPts.length) {

                currentSignObj.beginPath();
                currentSignObj.lineWidth = penWidth;
                currentSignObj.moveTo(bezierPts[0].x * ratio, bezierPts[0].y * ratio);


                for (var iCount = 1; iCount <= bezierPts.length - 3; iCount = iCount + 3) {
                    currentSignObj.bezierCurveTo(bezierPts[iCount].x * ratio, bezierPts[iCount].y * ratio, bezierPts[iCount + 1].x * ratio, bezierPts[iCount + 1].y * ratio, bezierPts[iCount + 2].x * ratio, bezierPts[iCount + 2].y * ratio);
                    currentSignObj.strokeStyle = penColor;
                    currentSignObj.stroke();
                    currentSignObj.beginPath();
                    currentSignObj.moveTo(bezierPts[iCount + 2].x * ratio, bezierPts[iCount + 2].y * ratio);
                }

                currentSignObj.closePath();
            }
            else {
                currentSignObj.beginPath();
                currentSignObj.moveTo(bezierPts.x * ratio, bezierPts.y * ratio);
                currentSignObj.arc(bezierPts.x * ratio, bezierPts.y * ratio, penWidth / 2, 0, 2 * Math.PI, false);
                currentSignObj.strokeStyle = penColor;
                currentSignObj.fill();
                currentSignObj.stroke();
                currentSignObj.closePath();
            }

        }
    };

    function findPos(obj) {
        var curleft = curtop = 0;

        if (obj.offsetParent) {
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        return [curleft, curtop];
    }

    this.MouseMove = function (e) {

        if (!enabled) {
            return;
        }
        if (!mouseMoved) {
            return;
        }

        ReturnEvent(e);

        var ptX = 0, ptY = 0;
        var mOffSet = $('#' + currentSignContainerObj.id).offset();

        if (isIPhone) {

            var touch = e.targetTouches[0];

            ptX = touch.pageX - iPhoneXPos;
            ptY = touch.pageY - iPhoneYPos;
        }
        else {

            if (e.originalEvent) {
                if (e.pageX) {
                    ptX = parseInt(e.pageX - mOffSet.left);
                    ptY = parseInt(e.pageY - mOffSet.top);
                }
                else {
                    ptX = parseInt(e.originalEvent.pageX - mOffSet.left);
                    ptY = parseInt(e.originalEvent.pageY - mOffSet.top);
                }
            }
            else {
                if (isIE || isIENine) {
                    ptX = parseInt(e.x);
                    ptY = parseInt(e.y);

                    if (iever >= 9.0) {
                        ptX = parseInt(e.pageX - mOffSet.left);
                        ptY = parseInt(e.pageY - mOffSet.top);
                    }
                }
                else {
                    ptX = parseInt(e.pageX - mOffSet.left);
                    ptY = parseInt(e.pageY - mOffSet.top);
                }
            }
        }

        if (isMobileIE) {
            fData.push(Math.abs(parseInt(ptX) - parseInt(currentSignContainerObj.offsetLeft)) + "," + Math.abs(parseInt(ptY) - parseInt(currentSignContainerObj.offsetTop)));
        }
        else {
            fData.push(Math.abs(parseInt(ptX)) + "," + Math.abs(parseInt(ptY)));
        }

        kData[pointCount]++;

        if (!isIE) {
            currentSignObj.lineTo(ptX, ptY);
            currentSignObj.stroke();
        }
        else {

            if (isMobileIE) {

                var difx = (ptX - lastPositionX);
                var dify = (ptY - lastPositionY);

                var sqDist = (difx * difx + dify * dify);
                var sqPrec = (8 * 8);

                if (sqDist > sqPrec) {

                    if (graphics != null && graphics != 'undefined') {
                        try {
                            graphics.setStroke(currPenSize);
                            graphics.setColor(currPenColor);

                            graphics.drawLine(lastPositionX, lastPositionY, ptX, ptY);
                            graphics.paint();
                        }
                        catch (mme) {
                            ShowDebug("Drawing error: " + mme.description);
                        }
                    }
                    else {
                        ShowDebug("Graphics object NULL");
                    }

                    lastPositionX = ptX;
                    lastPositionY = ptY;
                }

            }
            else {
                currentSignObj.pathCoordString += " " + ptX + "," + ptY;
                var g = document.getElementById(currID + "_l_" + pointCount);
                if (g) {
                    var i = g.firstChild;

                    if (i) {
                        try {
                            i.setAttribute("v", currentSignObj.pathCoordString + " e");
                        }
                        catch (j) { var erj = j.Description; }
                        if (dcMode && kData[pointCount] % 8 == 0) {
                            currentSignObj.innerHTML = currentSignObj.innerHTML;
                        }
                    }
                }
            }
        }

    };

    this.DrawDot = function (ptX, ptY) {

        kData[pointCount]++;

        if (!isIE) {
            currentSignObj.arc(ptX, ptY, currPenSize / 2, 0, 2 * Math.PI, false);
            currentSignObj.fill();
            currentSignObj.stroke();
        }
        else {
            var stroke = '<SuperSignature:stroke weight="' + currPenSize + '" color="' + currPenColor + '" />';
            var shape = '<SuperSignature:oval id="' + currID + "_l_" + pointCount + '" style="position: absolute; left:' + ptX + 'px; top:' + ptY + 'px; width:' + currPenSize + "px; height: " + currPenSize + 'px;"' + '">' + stroke + "</SuperSignature:oval>";
            currentSignObj.insertAdjacentHTML("beforeEnd", shape);
        }
    };

    this.MouseOut = function (e) {
        if (!enabled) {
            return;
        }

        ShowDebug("Mouse out");

        if (!dataSaved) {
            MarkStrokeEnd();
        }
    };

    function MarkStrokeEnd() {

        dataSaved = true;
        mouseMoved = false;

        if (fData.length > 0) {
            cData[pointCount] = " " + fData.join(" ") + ";";


            if (!isIE && doBeizer) {

                pData.push(fData[0]);
                var inputStrokes = GetPointArray(fData);

                if (inputStrokes.length > 0) {
                    var bezierPts = new BezierCurves(inputStrokes, 30);
                    bData.push(bezierPts);
                    ProcessCanvasArea(1);
                }
            }

        }

        SetSignData();

        if (kData[0] < currReqPts) {
            currSignStatus.innerHTML = currErrMsg;
        }
        else {
            currSignStatus.innerHTML = currSuccessMsg;
        }

        if (!isIE) {
            currentSignObj.closePath();
            currentSignObj.restore();
        }
        else {
            currentSignObj.innerHTML = currentSignObj.innerHTML;
        }

        if (isIPhone) {
            iPhoneXPos = 0;
            iPhoneYPos = 0;
        }
    }

    function ReturnEvent(e) {
        if (e.preventManipulation) {
            e.preventManipulation();
        }

        if (e.preventDefault) {
            e.preventDefault();
        }
        else if (e.returnValue) {
            e.returnValue = false;
        }

        if (e.originalEvent) {
            if (e.originalEvent.preventManipulation) {
                e.originalEvent.preventManipulation();
            }

            if (e.originalEvent.returnValue) {
                e.originalEvent.returnValue = false;
            }
        }
    }

    this.MouseUp = function (e) {

        if (!enabled) {
            return;
        }

        ShowDebug("Mouse up");

        if (null != dotTime) {
            var td = parseInt(new Date() - dotTime);

            if (td < 125) {
                var ptX = 0, ptY = 0;
                ShowDebug("Time diff " + td);

                if (isIPhone) {
                    ptX = iPhoneDotX;
                    ptY = iPhoneDotY;
                }
                else {
                    var mOffSet = $('#' + currentSignContainerObj.id).offset();
                    if (e.originalEvent) {
                        if (e.pageX) {
                            ptX = parseInt(e.pageX - mOffSet.left);
                            ptY = parseInt(e.pageY - mOffSet.top);
                        }
                        else {
                            ptX = parseInt(e.originalEvent.pageX - mOffSet.left);
                            ptY = parseInt(e.originalEvent.pageY - mOffSet.top);
                        }
                    }
                    else {
                        if (isIE || isIENine) {
                            ptX = parseInt(e.x);
                            ptY = parseInt(e.y);
                        }
                        else {
                            ptX = parseInt(e.pageX - mOffSet.left);
                            ptY = parseInt(e.pageY - mOffSet.top);
                        }
                    }
                }

                if (isIE) {
                    ShowDebug("Drawing Dot At (" + ptX + "," + ptY + ")");
                    eval("obj" + currID).DrawDot(ptX, ptY);
                }
            }

            dotTime = null;
        }

        if (!dataSaved) {
            MarkStrokeEnd();
        }
    };

    this.MouseDown = function (e) {

        if (!enabled) {
            return;
        }

        ReturnEvent(e);

        ShowDebug("Mouse down");

        dotTime = new Date();
        mouseMoved = true;
        dataSaved = false;

        var ptX, ptY;

        if (isIPhone) {

            var touch = e.targetTouches[0];

            if (iPhoneXPos == 0) {
                var cords = findPos(currentSignContainerObj);
                iPhoneXPos = cords[0];
                iPhoneYPos = cords[1];
            }

            ptX = touch.pageX - iPhoneXPos;
            ptY = touch.pageY - iPhoneYPos;

            iPhoneDotX = ptX;
            iPhoneDotY = ptY;
        }
        else {
            var mOffSet = $('#' + currentSignContainerObj.id).offset();

            if (e.originalEvent) {
                if (e.pageX) {
                    ptX = parseInt(e.pageX - mOffSet.left);
                    ptY = parseInt(e.pageY - mOffSet.top);
                }
                else {
                    ptX = parseInt(e.originalEvent.pageX - mOffSet.left);
                    ptY = parseInt(e.originalEvent.pageY - mOffSet.top);
                }
            }
            else {
                if (isIE || isIENine) {
                    if (iever < 9.0) {
                        ptX = parseInt(e.x);
                        ptY = parseInt(e.y);
                    }
                    else if (isIENine) {
                        ptX = parseInt(e.pageX) - parseInt(mOffSet.left) + parseInt($('html').css('margin-left'));
                        ptY = parseInt(e.pageY) - parseInt(mOffSet.top) + parseInt($('html').css('margin-top'));

                        if (iever >= 10.0) {
                            ptX = parseInt(e.pageX - mOffSet.left);
                            ptY = parseInt(e.pageY - mOffSet.top);
                        }
                    }
                }
                else {
                    ptX = parseInt(e.pageX - mOffSet.left);
                    ptY = parseInt(e.pageY - mOffSet.top);
                }
            }
        }

        ShowDebug("Down (" + ptX + "," + ptY + ")");

        pointCount++;
        kData[pointCount] = 0;
        fData.length = 0;
        fData[0] = currPenSize + "," + currPenColor;

        if (isMobileIE) {
            fData.push(Math.abs(parseInt(ptX) - parseInt(currentSignContainerObj.offsetLeft)) + "," + Math.abs(parseInt(ptY) - parseInt(currentSignContainerObj.offsetTop)));
        }
        else {
            fData.push(Math.abs(parseInt(ptX)) + "," + Math.abs(parseInt(ptY)));
        }

        if (isIE) {
            if (isMobileIE) {

                lastPositionX = ptX;
                lastPositionY = ptY;

            }
            else {
                var stroke = '<SuperSignature:stroke weight="' + currPenSize + '" color="' + currPenColor + '" />';
                var path = '"m' + ptX + "," + ptY + " l" + ptX + "," + ptY;
                var shape = '<SuperSignature:shape id="' + currID + "_l_" + pointCount + '" style="position: absolute; left:0px; top:0px; width:' + currW + "px; height: " + currH + 'px;" coordsize="' + currW + "," + currH + '"><SuperSignature:path v=' + path + ' e" /><SuperSignature:fill on="false" />' + stroke + "</SuperSignature:shape>";

                currentSignObj.pathCoordString = path;
                currentSignObj.insertAdjacentHTML("beforeEnd", shape);
            }
        }
        else {
            currentSignObj.save();
            currentSignObj.beginPath();
            currentSignObj.lineJoin = "round";
            currentSignObj.lineCap = "round";
            currentSignObj.strokeStyle = currPenColor;
            currentSignObj.lineWidth = currPenSize;
            currentSignObj.moveTo(ptX, ptY);
        }

        return false;

    };

    this.ResetClick = function (e) {

        if (!enabled) {
            return;
        }

        if (!isMobileIE) {
            SignatureBackColor(currID, currBackColor);
        }

        if (isIE) {
            currentSignObj.innerHTML = "";

            if (isMobileIE) {
                lastPositionX = 0;
                lastPositionY = 0;

                if (graphics != null && graphics != 'undefined') {
                    graphics.clear();
                    graphics.paint();
                }
            }

            if (currBackUrl.length > 0) {
                currentSignObj.style.backgroundImage = 'url("' + currBackUrl + '")';
            }
        }
        else {
            currentSignObj.clearRect(0, 0, currW, currH);
        }

        cData = [], fData = [], kData = [], bData = [], pData = [];

        SetSignData();

        pointCount = 0;
        htm = "";
        currSignStatus.innerHTML = currStartMsg;
    };

    this.Init = function () {



        if (!this.Visible) {
            ShowDebug("Control hidden");
            return;
        }

        this.CheckCompatibility();

        if (this.IsCompatible) {

            if (canvasCreated) {
                if (document.getElementById(this.SignObject).nodeName.toUpperCase() == 'DIV') {
                    var canvasElement = "<canvas ID='" + this.SignObject + "' width='" + currW + "' height='" + currH + "' style='left:0px;top:0px;position:absolute;'></canvas>";
                    $('#' + this.SignObject).replaceWith(canvasElement);
                    ShowDebug("DIV changed to CANVAS");
                }
            }
            else {
                if (document.getElementById(this.SignObject).nodeName.toUpperCase() == 'CANVAS') {
                    var divElement = "<div ID='" + this.SignObject + "' style='width:" + currW + "px;height:" + currH + "px" + ";left:0px;top:0px;'></div>";
                    $('#' + this.SignObject).replaceWith(divElement);
                    ShowDebug("CANVAS changed to DIV");
                }
            }

            currSignDebug = document.getElementById(this.SignObject + "_Debug");

            currentSignObj = document.getElementById(this.SignObject);
            currentSignContainerObj = document.getElementById(this.SignObject + "_Container");


            if (currentSignObj.addEventListener) {
                ShowDebug("addEventListener supported");
            }
            else if (currentSignObj.attachEvent) {
                ShowDebug("attachEvent supported");
            }
            else {
                ShowDebug("Mouse events are not supported");
                return;
            }

            this.mouseMoved = false;

            if (currentSignObj != null && currentSignObj != 'undefined') {

                ShowDebug("Objects OK");

                if (isIE && !isMobileIE) {
                    dcMode = document.documentMode ? document.documentMode >= 8 : false;
                }

                if (isMobileIE) {
                    ShowDebug("Mobile IE");
                }

                if (isIENine) {
                    ShowDebug("IE 9 Or Above");
                }

                if (isOperaMini) {
                    ShowDebug("Opera Mini, not supported.");
                }


                kData[0] = 0;
                cData[0] = currVersion + "," + currBackColor + "," + currImgScale + "," + currW + "," + currH + "," + currTrans + "," + kData[0] + "," + currID + ";";

                if (this.ApplyStyle) {

                    ShowDebug("Setting up style");

                    try {
                        if (isMobileIE) {
                            currentSignContainerObj.style.borderWidth = this.BorderWidth;
                            currentSignContainerObj.style.borderStyle = this.BorderStyle;
                            currentSignContainerObj.style.borderColor = this.BorderColor;
                            currentSignContainerObj.style.backgroundColor = this.BackColor;

                            currentSignContainerObj.style.zIndex = this.SignzIndex;

                            if (this.PenCursor.length > 0) {
                                currentSignContainerObj.style.cursor = "url('" + this.PenCursor + "'), pointer";
                            }

                            if (this.BackImageUrl.length > 0) {
                                currentSignContainerObj.style.backgroundImage = 'url("' + this.BackImageUrl + '")';
                            }
                        }
                        else {

                            currentSignObj.style.borderWidth = this.BorderWidth;
                            currentSignObj.style.borderStyle = this.BorderStyle;
                            currentSignObj.style.borderColor = this.BorderColor;
                            currentSignObj.style.backgroundColor = this.BackColor;

                            currentSignObj.style.zIndex = this.SignzIndex;

                            if (this.PenCursor.length > 0) {
                                currentSignObj.style.cursor = "url('" + this.PenCursor + "'), pointer";
                            }

                            if (this.BackImageUrl.length > 0) {
                                currentSignObj.style.backgroundImage = 'url("' + this.BackImageUrl + '")';
                            }


                            if (this.CssClass != "") {
                                currentSignObj.className = this.CssClass;
                            }


                            currentSignObj.style.width = this.SignWidth + "px";
                            currentSignObj.style.height = this.SignHeight + "px";

                            if (currentSignObj.style.cursor == "auto") {
                                currentSignObj.style.cursor = "url('" + this.PenCursor + "'), hand";
                            }
                        }

                        ShowDebug("Style OK");
                    }
                    catch (exs) {
                        ShowDebug("Style Error : " + exs.description);
                    }


                }

                pointCount = 0;

                var mouseDownEvent = "mousedown", mouseUpEvent = "mouseup", mouseMoveEvent = "mousemove", mouseOutEvent = "mouseout";

                if (isIE) {
                    mouseOutEvent = "mouseleave";
                }

                isIPhone = (new RegExp("iPhone", "i")).test(navigator.userAgent) || (new RegExp("iPad", "i")).test(navigator.userAgent) || (new RegExp("Android", "i")).test(navigator.userAgent) || (new RegExp("playbook", "i")).test(navigator.userAgent) || (new RegExp("symbian", "i")).test(navigator.userAgent);

                if (!isIPhone && !isIE) {
                    isIPhone = ("ontouchstart" in window);
                    ShowDebug("Touch supported!");
                }

                if (isIPhone) {
                    ShowDebug("Found iPhone, iPad, Android or Touch Screen Device");
                    mouseDownEvent = "touchstart";
                    mouseUpEvent = "touchend";
                    mouseMoveEvent = "touchmove";
                    //mouseOutEvent = "touchleave";
                }

                if (isIETablet) {
                    ShowDebug("Found Tablet 2.0 or Windows Phone or Touch Screen Device");
                }

                if (winTabletPointerEvt) {
                    ShowDebug("MSPointer supported");

                    mouseDownEvent = "MSPointerDown";
                    mouseUpEvent = "MSPointerUp";
                    mouseMoveEvent = "MSPointerMove";
                    mouseOutEvent = "MSPointerOut";

                }
                else {
                    ShowDebug("MSPointer NOT supported");
                }


                if (typeof currentSignObj.style.msTouchAction != "undefined") {
                    currentSignObj.style.msTouchAction = "none";
                    $('#' + currentSignObj.id).css("-ms-touch-action", "none");
                    ShowDebug("MS Touch CSS added");
                }

                if (typeof currentSignContainerObj.style.msTouchAction != "undefined") {
                    currentSignContainerObj.style.msTouchAction = "none";
                    $('#' + currentSignContainerObj.id).css("-ms-touch-action", "none");
                }


                if (!isIE) {
                    currentSignObj = document.getElementById(this.SignObject).getContext("2d");
                    currentSignObj.width = this.SignWidth;
                    currentSignObj.height = this.SignHeight;
                }

                currSignStatus = document.getElementById(this.SignObject + "_status");
                currSignStatus.innerHTML = currStartMsg;

                currSignToolbar = document.getElementById(this.SignObject + "_toolbar");
                currSignData = document.getElementById(this.SignObject + "_data");
                currSignDataSmooth = document.getElementById(this.SignObject + "_data_smooth");

                var objResetButton = document.getElementById(this.SignObject + "_resetbutton");

                if (null != objResetButton) {
                    this.XBrowserAddHandler(objResetButton, "click", this.ResetClick);
                }

                ShowDebug("Attaching events");

                this.XBrowserAddHandler(currentSignContainerObj, "contextmenu", this.ReturnFalse);
                this.XBrowserAddHandler(currentSignContainerObj, "selectstart", this.ReturnFalse);
                this.XBrowserAddHandler(currentSignContainerObj, "dragstart", this.ReturnFalse);

                this.XBrowserAddHandler(currentSignObj, "contextmenu", this.ReturnFalse);
                this.XBrowserAddHandler(currentSignObj, "selectstart", this.ReturnFalse);
                this.XBrowserAddHandler(currentSignObj, "dragstart", this.ReturnFalse);

                this.DisableSelection();

                if (this.IeModalFix) {
                    ShowDebug("IeModalFix true");
                }

                if (this.IeModalFix && !isIPhone && !isIETablet) {

                    $(currentSignContainerObj).bind(mouseDownEvent, this.MouseDown);
                    $(currentSignContainerObj).bind(mouseUpEvent, this.MouseUp);
                    $(currentSignContainerObj).bind(mouseMoveEvent, this.MouseMove);
                    $(currentSignContainerObj).bind(mouseOutEvent, this.MouseOut);

                    ShowDebug("ModalFix event attached");
                }
                else {
                    if (isIE && !isMobileIE) {
                        this.XBrowserAddHandler(currentSignObj, mouseDownEvent, this.MouseDown);
                        this.XBrowserAddHandler(currentSignObj, mouseUpEvent, this.MouseUp);
                        this.XBrowserAddHandler(currentSignObj, mouseMoveEvent, this.MouseMove);
                        this.XBrowserAddHandler(currentSignObj, mouseOutEvent, this.MouseOut);
                    }
                    else {
                        this.XBrowserAddHandler(currentSignContainerObj, mouseDownEvent, this.MouseDown);
                        this.XBrowserAddHandler(currentSignContainerObj, mouseUpEvent, this.MouseUp);
                        this.XBrowserAddHandler(currentSignContainerObj, mouseMoveEvent, this.MouseMove);
                        this.XBrowserAddHandler(currentSignContainerObj, mouseOutEvent, this.MouseOut);
                        this.XBrowserAddHandler(currentSignObj, mouseOutEvent, this.MouseOut);
                    }
                }

                ShowDebug("isIE " + isIE);
                ShowDebug("isIE 9+ " + isIENine);

                if (isIE || isIENine || isIETablet) {
                    ShowDebug("IE Ver - " + iever);
                }

                if (supports_canvas()) {
                    ShowDebug("Canvas - Yes");
                }

                if (!enabled) {
                    ShowDebug("Control is disabled");
                }

                ShowDebug("Ready");
            }
            else {
                ShowDebug("Error initializing signature control");
            }
        }
    };

};

/* Beizer Start */

BezierCurves = function (inputPoints, t) {
    if (inputPoints.length < 2) {
        return inputPoints[0];
    }

    var objSmooth, tmpSmooth;
    this.points = [];

    for (var i = 0; i < inputPoints.length; i++) {
        objSmooth = new Smooth(inputPoints[i].x, inputPoints[i].y);
        objSmooth.CheckValid(tmpSmooth) || this.points.push(objSmooth), tmpSmooth = objSmooth;
        this.offSet = 0;
        this.error = t;
        this.result = [];
        this.result.push({ x: inputPoints[0].x, y: inputPoints[0].y + this.offSet });
    }

    return this.fit();
};

BezierCurves.prototype =
    {
        fit: function () {
            this.processFitPoints(0, this.points.length - 1, this.points[1].MathFunc2(this.points[0]).nOR(), this.points[this.points.length - 2].MathFunc2(this.points[this.points.length - 1]).nOR());
            return this.result;
        },

        processFitPoints: function (n, t, i, r) {
            var e, c, u, l, o, f;
            if (t - n == 1) {
                var s = this.points[n],
                    h = this.points[t],
                    a = s.MathFunc6(h) / 3;
                this.savePoints([s, s.MathFunc1(i.nOR(a)), h.MathFunc1(r.nOR(a)), h]);
                return;
            }
            for (e = this.cLP(n, t), c = Math.max(this.error, this.error * this.error), l = 0; l <= 4; l++) {
                if (o = this.gB(n, t, e, i, r), f = this.fM(n, t, o, e), f.error < this.error) {
                    this.savePoints(o);
                    return;
                }
                if (u = f.index, f.error >= c) break;
                this.rP(n, t, e, o), c = f.error
            }
            var y = this.points[u - 1].MathFunc2(this.points[u]),
                p = this.points[u].MathFunc2(this.points[u + 1]),
                v = y.MathFunc1(p).MathFunc4(2).nOR();
            this.processFitPoints(n, u, i, v), this.processFitPoints(u, t, v.MathFunc5(), r)
        },

        savePoints: function (n) {
            this.result.push({
                x: this.r2(n[1].x),
                y: this.r2(n[1].y + this.offSet)
            }), this.result.push({
                x: this.r2(n[2].x),
                y: this.r2(n[2].y + this.offSet)
            }), this.result.push({
                x: this.r2(n[3].x),
                y: this.r2(n[3].y + this.offSet)
            })
        },

        r2: function (n) {
            return Math.round(n * 100) / 100
        },

        gB: function (n, t, i, r, u) {
            for (var s = 1e-11, v = this.points[n], y = this.points[t], f = [
                    [0, 0],
                    [0, 0]
                ], e = [0, 0], b, a, o, ut, ft, k, et, d, c = 0, g = t - n + 1; c < g; c++) {
                var h = i[c],
                    l = 1 - h,
                    nt = 3 * h * l,
                    ot = l * l * l,
                    tt = nt * l,
                    it = nt * h,
                    st = h * h * h,
                    p = r.nOR(tt),
                    w = u.nOR(it),
                    rt = this.points[n + c].MathFunc2(v.MathFunc3(ot + tt)).MathFunc2(y.MathFunc3(it + st));
                f[0][0] += p.dot(p), f[0][1] += p.dot(w), f[1][0] = f[0][1], f[1][1] += w.dot(w), e[0] += p.dot(rt), e[1] += w.dot(rt)
            }
            return b = f[0][0] * f[1][1] - f[1][0] * f[0][1], Math.abs(b) > s ? (ut = f[0][0] * e[1] - f[1][0] * e[0], ft = e[0] * f[1][1] - e[1] * f[0][1], a = ft / b, o = ut / b) : (k = f[0][0] + f[0][1], et = f[1][0] + f[1][1], a = Math.abs(k) > s ? o = e[0] / k : Math.abs(k) > s ? o = e[1] / et : o = 0), d = y.MathFunc6(v), s *= d, (a < s || o < s) && (a = o = d / 3), [v, v.MathFunc1(r.nOR(a)), y.MathFunc1(u.nOR(o)), y]
        },

        rP: function (n, t, i, r) {
            for (var u = n; u <= t; u++) i[u - n] = this.fR(r, this.points[u], i[u - n])
        },

        fR: function (n, t, i) {
            for (var u = [], e = [], r = 0; r <= 2; r++) u[r] = n[r + 1].MathFunc2(n[r]).MathFunc3(3);
            for (r = 0; r <= 1; r++) e[r] = u[r + 1].MathFunc2(u[r]).MathFunc3(2);
            var h = this.eV(3, n, i),
                f = this.eV(2, u, i),
                c = this.eV(1, e, i),
                o = h.MathFunc2(t),
                s = f.dot(f) + o.dot(c);
            return Math.abs(s) < 1e-5 ? i : i - o.dot(f) / s
        },

        eV: function (n, t, i) {
            for (var u = t.slice(), r, f = 1; f <= n; f++)
                for (r = 0; r <= n - f; r++) u[r] = u[r].MathFunc3(1 - i).MathFunc1(u[r + 1].MathFunc3(i));
            return u[0]
        },

        cLP: function (n, t) {
            for (var r = [0], u, i = n + 1; i <= t; i++) r[i - n] = r[i - n - 1] + this.points[i].MathFunc6(this.points[i - 1]);
            for (i = 1, u = t - n; i <= u; i++) r[i] /= r[u];
            return r
        },

        fM: function (n, t, i, r) {
            for (var o = Math.floor((t - n + 1) / 2), e = 0, u = n + 1; u < t; u++) {
                var h = this.eV(3, i, r[u - n]),
                    f = h.MathFunc2(this.points[u]),
                    s = f.x * f.x + f.y * f.y;
                s >= e && (e = s, o = u)
            }
            return {
                error: e,
                index: o
            }
        }
    };

Smooth = function (inX, inY) {
    this.x = inX;
    this.y = inY;
};

Smooth.prototype = {
    CheckPtArray: function (point) {
        return typeof point == "number" ? {
            x: point,
            y: point
        } : point;
    },

    MathFunc1: function (pointIn) {
        pointIn = this.CheckPtArray(pointIn);
        return SmoothRet(this.x + pointIn.x, this.y + pointIn.y);
    },

    MathFunc2: function (pointIn) {
        pointIn = this.CheckPtArray(pointIn);
        return SmoothRet(this.x - pointIn.x, this.y - pointIn.y);
    },

    MathFunc3: function (pointIn) {
        pointIn = this.CheckPtArray(pointIn);
        return SmoothRet(this.x * pointIn.x, this.y * pointIn.y);
    },

    MathFunc4: function (pointIn) {
        pointIn = this.CheckPtArray(pointIn);
        return SmoothRet(this.x / pointIn.x, this.y / pointIn.y);
    },

    MathFunc5: function () {
        return SmoothRet(-this.x, -this.y);
    },

    MathFunc6: function (pointIn, t) {
        var i = pointIn.x - this.x,
            r = pointIn.y - this.y,
            u = i * i + r * r;
        return t ? u : Math.sqrt(u);
    },

    getLength: function () {
        var n = this.x * this.x + this.y * this.y;
        return arguments[0] ? n : Math.sqrt(n);
    },

    nOR: function (n) {
        if (n === undefined) {
            n = 1;
        }
        var t = this.getLength(),
            i = t != 0 ? n / t : 0;

        return SmoothRet(this.x * i, this.y * i);
    },

    CheckValid: function (point) {
        return point == null ? false : this.x == point.x && this.y == point.y;
    },

    dot: function (n) {
        return this.x * n.x + this.y * n.y;
    }
};

var SmoothRet = function (ptX, ptY) {
    return new Smooth(ptX, ptY);
};

Compress = function (n, t) {
    var o = 0,
            s = 0,
            h = n.length,
            r = "",
            f, e, u, i;
    for (t = Math.pow(10, t), i = 0; i < h; i++) f = Math.round(n[i].y * t), e = Math.round(n[i].x * t), r += EncodeStr(f - o), r += EncodeStr(e - s), o = f, s = e;
    for (u = [
            ["?", "0"],
            ["@", "1"],
            ["[", "2"],
            ["\\", "3"],
            ["]", "4"],
            ["^", "5"],
            ["`", "6"],
            ["{", "7"],
            ["|", "8"],
            ["}", "9"]
        ], i = 0; i < u.length; i++) r = r.replaceAll(u[i][0], u[i][1]);
    return r;
};

EncodeStr = function (n) {
    var n = n << 1, t;
    for (n < 0 && (n = ~n), t = ""; n >= 32; ) t += String.fromCharCode((32 | n & 31) + 63), n >>= 5;
    return t + String.fromCharCode(n + 63);
};

String.prototype.replaceAll = function (n, t, i) {
    return this.replace(new RegExp(n.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), i ? "gi" : "g"), typeof t == "string" ? t.replace(/\$/g, "$$$$") : t);
};

