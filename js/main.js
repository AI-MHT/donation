// Main Js File
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT Â© Zeno Rocha
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClipboardJS=e():t.ClipboardJS=e()}(this,function(){return o={},r.m=n=[function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),r=document.createRange();r.selectNodeContents(t),o.removeAllRanges(),o.addRange(r),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function r(){o.off(t,r),e.apply(n,arguments)}return r._=e,this.on(t,r,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,r=n.length;o<r;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],r=[];if(o&&e)for(var i=0,a=o.length;i<a;i++)o[i].fn!==e&&o[i].fn._!==e&&r.push(o[i]);return r.length?n[t]=r:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var d=n(3),h=n(4);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!d.string(e))throw new TypeError("Second argument must be a String");if(!d.fn(n))throw new TypeError("Third argument must be a Function");if(d.node(t))return s=e,f=n,(u=t).addEventListener(s,f),{destroy:function(){u.removeEventListener(s,f)}};if(d.nodeList(t))return a=t,c=e,l=n,Array.prototype.forEach.call(a,function(t){t.addEventListener(c,l)}),{destroy:function(){Array.prototype.forEach.call(a,function(t){t.removeEventListener(c,l)})}};if(d.string(t))return o=t,r=e,i=n,h(document.body,o,r,i);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var o,r,i,a,c,l,u,s,f}},function(t,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var a=n(5);function i(t,e,n,o,r){var i=function(e,n,t,o){return function(t){t.delegateTarget=a(t.target,n),t.delegateTarget&&o.call(e,t)}}.apply(this,arguments);return t.addEventListener(n,i,r),{destroy:function(){t.removeEventListener(n,i,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}t.exports=function(t,e){for(;t&&9!==t.nodeType;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}},function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),this.resolveOptions(t),this.initSelection()}var l=(function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}(c,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=r()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=r()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(t){var e=0<arguments.length&&void 0!==t?t:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("readonly"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "readonly" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("readonly")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "readonly" attributes');this._target=t}},get:function(){return this._target}}]),c),u=n(1),s=n.n(u),f=n(2),d=n.n(f),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t,e,n){return e&&y(t.prototype,e),n&&y(t,n),t};function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var m=(function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(v,s.a),p(v,[{key:"resolveOptions",value:function(t){var e=0<arguments.length&&void 0!==t?t:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=d()(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return b("action",t)}},{key:"defaultTarget",value:function(t){var e=b("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return b("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(t){var e=0<arguments.length&&void 0!==t?t:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),v);function v(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,v);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(v.__proto__||Object.getPrototypeOf(v)).call(this));return n.resolveOptions(e),n.listenClick(t),n}function b(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e.default=m}],r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6).default;function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}var n,o});


// A fixed variable containing the increment and decrement amounts if the Edit Flag is Y
let fixedChangeAmount = 5.0;

function addCommas(amount) {
    let resultString = "";

    amount = String(amount);

    let splitAmount = amount.split('.');
    let amountString = splitAmount[0];
    let amountRemainder = splitAmount.length > 1 ? "." + splitAmount[1] : "";

    for (let i = amountString.length; i >= 0; i -= 3) {
        let startIndex = Math.max(i - 3, 0);
        resultString = amountString.substring(startIndex, i) + "," + resultString;
    }

    resultString = resultString.replace(/^([,]*)/g, '');
    resultString = resultString.replace(/([,]*)$/g, '');

    resultString += amountRemainder;

    return resultString;
}

function changeVillage(villageName) {
    let search = window.location.search.replace(/^\?/, '').split('&');

    for (let i = 0; i < search.length; i++) {

        if (!search[i].includes('=')) {
            search.splice(i, 1);
            i--;
        }
        else if (search[i].toLowerCase().includes('village')) {
            search.splice(i, 1, 'village=' + villageName);
        }
    }

    let link = $('html').attr('lang') == 'ar' ? 'Default.aspx?' : 'Default_en.aspx?';

    link += (villageName + '&').replace(/^\&/, '') + search.join('&');

    window.location.href = link.replace(/\&$/, '').replace(/\?$/, '')
}

function animateProgressBar(percent) {
    var bars = {
        pj: percent
    };

    $.each(bars, function (key, value) {
        var skillbar = $("." + key);

        skillbar.animate(
          {
              width: value + "%"
          },
          2000,
          function () {
          }
        );
    });
}

// Copy Bank Account To Clipboard 
function copyData(event) {
    let container = $(event.target.closest('button')).siblings('.st')[0];
    var range = document.createRange();
    range.selectNode(container);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    alert("Bank Account Number Copied.");
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode >= 48 && charCode <= 57) || (charCode >= 1632 && charCode <= 1641))
        return true;
    return false;
}

function arabicNumbersToEnglish(number) {

    var numberMapper = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" };

    for (var i = 0; i < number.length; i++) {
        if (number[i] in numberMapper) {
            number = number.replace(number[i], numberMapper[number[i]]);
        }
    }

    return number;
}

var verifyPayment = function () {

    if (!$('#pageForm')[0].reportValidity()) {
        return false;
    }

}

function payBySamsung() {

    if (!$('#pageForm')[0].reportValidity()) {
        return false;
    }

    let dontypeID = $('#dontypeID').val();
    let totalAmount = $('#totalAmount').val();
    let workplaceID = $('#workplaceID').val();
    let application = $('#application').val();

    let donatorName = $('#donatorNameField').val();
    let donatorPhone = $('#donatorPhoneField').parent().find('.iti__selected-dial-code').text().replace("+", "00") + arabicNumbersToEnglish($('#donatorPhoneField').val()).replace(/^([0]*)/g, '');
    let giftedPhone = $('#giftedPhoneField').parent().find('.iti__selected-dial-code').text().replace("+", "00") + arabicNumbersToEnglish($('#giftedPhoneField').val()).replace(/^([0]*)/g, '');
    let zakatFlag = $('#sadaqahCheckBox').is(':checked') ? 'S' : $('#zakatCheckBox').is(':checked') ? 'Z' : '';
    let prmID = $('#paramID').val();

    let mco;

    $.ajax({
        type: "POST",
        url: ($('html').attr('lang') == 'ar' ? 'Default.aspx' : 'Default_en.aspx') + '/MCO',
        async: false,
        contentType: "application/json",
        success: function (res) {
            mco = res.d;
        },
        failure: function (res) {
            alert(res.d);
        }
    });
    
    $.ajax({
        type: "POST",
        url: ($('html').attr('lang') == 'ar' ? 'Default.aspx' : 'Default_en.aspx') + '/insertPayment',
        data: `{dontypeID: "${dontypeID}", totalAmount: "${totalAmount}", donatorName: "${donatorName}", donatorPhone: "${donatorPhone}", application: "${application}", giftedPhone: "${giftedPhone}", zakatFlag: "${zakatFlag}", prmID: "${prmID}", workplaceID: "${workplaceID}", mco: "${mco}"}`,
        contentType: "application/json",
        success: function (res) {
        },
        failure: function (res) {
            alert(res.d);
        }
    });

    var callback = new URL("https://" + location.hostname + "/ConfirmSamsungPaymentGeneral/Index.aspx");

    callback.searchParams.append('mco', mco);

    var params = {
        amount: totalAmount,
        serviceId: "e58f03dd3a3d4b0b8992c5",
        callback: callback,
        cancel: "https://www.emiratesrc.ae/",
        countryCode: "AE"
    }

    const url = ($('html').attr('lang') == 'ar' ? 'Default.aspx' : 'Default_en.aspx') + '/ValidateSamsung';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.d)
        console.log(callback)
        const res = JSON.parse(data.d);
        SamsungPay.connect(
                        res.id, res.href, params.serviceId, params.callback, params.cancel, params.countryCode, res.encInfo.mod, res.encInfo.exp, res.encInfo.keyId
                    );
    }).catch((error) => {
        console.error('Error:', error);
        console.log("If Reference error then make sure SDK script is included");
    });
}


function payByApple() {

    if (!$('#pageForm')[0].reportValidity()) {
        return false;
    }

    let dontypeID = $('#dontypeID').val();
    let totalAmount = $('#totalAmount').val();
    let workplaceID = $('#workplaceID').val();
    let application = $('#application').val();

    let donatorName = $('#donatorNameField').val();
    let donatorPhone = $('#donatorPhoneField').parent().find('.iti__selected-dial-code').text().replace("+", "00") + arabicNumbersToEnglish($('#donatorPhoneField').val()).replace(/^([0]*)/g, '');
    let giftedPhone = $('#giftedPhoneField').parent().find('.iti__selected-dial-code').text().replace("+", "00") + arabicNumbersToEnglish($('#giftedPhoneField').val()).replace(/^([0]*)/g, '');
    let zakatFlag = $('#sadaqahCheckBox').is(':checked') ? 'S' : $('#zakatCheckBox').is(':checked') ? 'Z' : '';
    let prmID = $('#paramID').val();

    let mco;

    if (window.ApplePaySession) {
        if (!ApplePaySession.canMakePayments) {
            alert('يرجى استخدام المتصفح Safari');
            return;
        }
    }
    else {
        alert('يرجى استخدام المتصفح Safari');
        return;
    }

    $.ajax({
        type: "POST",
        async: false,
        url: ($('html').attr('lang') == 'ar' ? 'Default.aspx' : 'Default_en.aspx') + '/MCO',
        contentType: "application/json; charset=utf-8",
        success: function (res) {
            mco = res.d;
        },
        failure: function (response) {
            alert(response.d);
        }
    });

    const request = {
        "countryCode": "AE",
        "currencyCode": "AED",
        "merchantCapabilities": [
            "supports3DS"
        ],
        "supportedNetworks": [
            "visa",
            "masterCard",
            "amex",
            "discover"
        ],
        "total": {
            "label": "Emirates Red Crescent",
            "type": "final",
            "amount": totalAmount,
        }
    };

    const session = new ApplePaySession(3, request);

    session.onvalidatemerchant = event => {
        $.ajax({
            type: "POST",
            url: ($('html').attr('lang') == 'ar' ? 'Default.aspx' : 'Default_en.aspx') + '/Apple_Validate',
            data: '{validationURL: "' + event.validationURL + '"}',
            contentType: "application/json; charset=utf-8",
            success: function (merchantSession) {
                console.log(JSON.parse(merchantSession.d));
                session.completeMerchantValidation(JSON.parse(merchantSession.d));
            },
            failure: function (response) {
                alert(response.d);
            }
        });


    };

    session.onpaymentauthorized = event => {

        let masterToken = event.payment.token.paymentData
        console.log("string data", masterToken);
        console.log("string type", typeof (masterToken));
        let masterTokenString = JSON.stringify(masterToken);

        console.log("final string", masterTokenString);

        $.ajax({
            type: "POST",
            url: ($('html').attr('lang') == 'ar' ? 'Default.aspx' : 'Default_en.aspx') + '/insertPayment',
            data: `{dontypeID: "${dontypeID}", totalAmount: "${totalAmount}", donatorName: "${donatorName}", donatorPhone: "${donatorPhone}", application: "${application}", giftedPhone: "${giftedPhone}", zakatFlag: "${zakatFlag}", prmID: "${prmID}", workplaceID: "${workplaceID}", mco: "${mco}"}`,
            contentType: "application/json",
            success: function (res) {
                
            },
            failure: function (res) {
                alert(res.d);
            }
        });

        $.ajax({
            type: "POST",
            url: ($('html').attr('lang') == 'ar' ? 'Default.aspx' : 'Default_en.aspx') + '/Pay',
            data: '{paymentToken: ' + JSON.stringify(masterTokenString) + ', amount: "' + totalAmount + '", mco: "' + mco + '"}',
            contentType: "application/json; charset=utf-8",
            success: function (res) {
                console.log(res.d);

                if (res.d == "Success") {

                    $('#mco').html(mco);

                    $('#appleDonatorName, #appleDonatorPhone').attr('required', 'required');
                    $('.hamla_thanks_popup .overlay').addClass('is-on');
                }
                else {
                    alert('Apple pay failed. لم يتم الدفع');
                    console.log(res.d);
                }
            },
            failure: function (response) {
                alert(response.d);
            }
        });


        const result = {
            "status": ApplePaySession.STATUS_SUCCESS
        };

        session.completePayment(result);
    };

    session.oncancel = event => {
        console.log("cancelled");
    };

    session.begin();
}

$(document).ready(function(){

    $('.counter').countUp({
        'time': 2000,
    });

    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 0,
        nav: true,
        center: true,
        items:1,
        autoWidth:true,
        lazyLoad: true,
        responsiveClass:true,
        responsive:{
            0:{
                loop:false,
                stagePadding: 0,
            },
            767:{
                loop:false,
                stagePadding: 0,
            },
            1025:{
                loop: false,
                stagePadding: 200,
            }
        }
    });

    $('.owl-carousel').on('translated.owl.carousel', function (event) {

        let selectedItem = $('.owl-item.center');
        let itemDontypeID = selectedItem.find('.dontypeID').html();
        let itemDontypeName = selectedItem.find('.dontypeName').html();
        let itemIsEditable = selectedItem.find('.editFlag').html() == "Y" ? true : false;
        let itemDescription = selectedItem.find('.dontypeDesc').html();
        let itemZakatOptions = selectedItem.find('.zakatFlag').html();
        let itemBankAccounts = selectedItem.find('.bankAccounts').html().split(',');
        let itemTargetAmount = selectedItem.find('.targetAmount').html();
        let itemStopWhenReached = selectedItem.find('.stopWhenReached').html();
        let itemDonationSum = selectedItem.find('.donationSum').html();

        if (itemIsEditable)
        {
            $('.pass-quantity input').attr('min', fixedChangeAmount);

            $('.pass-quantity input').val(fixedChangeAmount);

            $('.pass-quantity input').removeAttr('disabled');
        }
        else
        {
            $('.pass-quantity input').attr('min', selectedItem.find('.couponAmount').html());

            $('.pass-quantity input').val(selectedItem.find('.couponAmount').html());

            $('.pass-quantity input').attr('disabled', 'disabled');
        }

        switch (itemZakatOptions)
        {
            case "Z":
                $('.donation_type').show();
                $('.sadaqahcontainerCheckbox').hide();
                $('.zakatcontainerCheckbox').show();
                break;
            case "S":
                $('.donation_type').show();
                $('.sadaqahcontainerCheckbox').show();
                $('.zakatcontainerCheckbox').hide();
                break;
            case "B":
                $('.donation_type, .sadaqahcontainerCheckbox, .zakatcontainerCheckbox').show();
                break;
            case "N":
                $('.donation_type, .sadaqahcontainerCheckbox, .zakatcontainerCheckbox').hide();
        }
        
        if (itemBankAccounts == "") {
            $('.bank_transfers .asdlkio_det').each(function () {

                $(this).hide();
            });

            $('li.bank_transfer').hide();
        }
        else if (itemBankAccounts == "*") {
            $('.bank_transfers .asdlkio_det').each(function () {

                $(this).show();
            });

            $('li.bank_transfer').show();
        }
        else {
            $('.bank_transfers .asdlkio_det').each(function () {

                let bankAccountNumber = $(this).find('.st').html();

                $(this).hide();

                for (let i = 0; i < itemBankAccounts.length; i++) {

                    if (bankAccountNumber == itemBankAccounts[i]) {
                        $(this).show();
                    }
                }
            });

            $('li.bank_transfer').show();
        }

        if (itemDonationSum != "" && itemTargetAmount != "")
        {
            $('#totalPaid').html(addCommas(Math.min(parseFloat(itemDonationSum), parseFloat(itemTargetAmount))));
            $('#targetAmount').html(addCommas(itemTargetAmount));

            $('#progressBarDiv').show(500);

            let progressBarPercentage = Math.min(parseFloat(itemDonationSum) / parseFloat(itemTargetAmount) * 100.0, 100.0);

            animateProgressBar(progressBarPercentage);

            if (progressBarPercentage >= 100.0)
            {
                if (itemStopWhenReached == "N")
                {
                    $('#donateDiv').show(500);
                    $('#thanksForDonating').hide(500);
                }
                else if (itemStopWhenReached == "Y")
                {
                    $('#donateDiv').hide(500);
                    $('#thanksForDonating').show(500);
                }
            }
            else
            {
                $('#donateDiv').show(500);
                $('#thanksForDonating').hide(500);
            }
        }
        else
        {
            $('#progressBarDiv').hide(500);
            $('#thanksForDonating').hide(500);
            $('#donateDiv').show(500);
        }

        $('#selectedTitle').html(itemDontypeName);
        $('#selectedDesc').html(itemDescription);
        $('#dontypeID').val(itemDontypeID);
    });

    $('.owl-carousel').trigger('translated.owl.carousel');

    // Payment Section
    $('ul.sd_paym li.message_pay, ul.sd_paym li.card_pay, ul.sd_paym li.bank_transfer').click(function () {

        let selectedItem = $('.owl-item.active.center');
        let itemTitle = selectedItem.find('h3').html();
        let itemImageSource = selectedItem.find('img').attr('src');

        $('#innerTitle').html(itemTitle);
        $('#innerItemImage').attr('src', itemImageSource);

        $('#pageHeading').addClass('hide_inside');
    });

    $('.thanks-close').click(function () {

        $('#appleDonatorPhone, #appleDonatorName').removeAttr('required');

        $(this).closest('.overlay').removeClass('is-on');
    });

    $('#sendAppleInvoice').click(function () {

        if (!$('#appleDonatorName')[0].reportValidity() || !$('#appleDonatorPhone')[0].reportValidity())
            return;

        let appleDonatorName = $('#appleDonatorName').val();
        let appleDonatorPhone = $('#appleDonatorPhone').parent().find('.iti__selected-dial-code').text().replace("+", "00") + arabicNumbersToEnglish($('#appleDonatorPhone').val()).replace(/^([0]*)/g, '');

        $.ajax({
            type: "POST",
            data: `{donatorName: "${appleDonatorName}", donatorPhone: "${appleDonatorPhone}", mco: "${$('#mco').html()}"}`,
            url: ($('html').attr('lang') == 'ar' ? 'Default.aspx' : 'Default_en.aspx') + '/updateDetails',
            contentType: "application/json",
            success: function (res) {
	            
            },
            failure: function (res) {
	            
            }
        });

        $('.thanks-close').trigger('click');
    });

    $('.all_villages').click(function () {

        $('.main_slider, .sha_bg, .shudok, #donateDiv, .payments_div').hide();
        $('.villages_div').show();

    });

    // Card Donate
    $('ul.sd_paym li.card_pay').click(function () {

        $(".main_slider, .header, .s_title, .shudok, .payButton").hide();
        $("#tra_headr, .hea_content, .donatorDetails, .payment_details").show();
        $('html, body').animate({ scrollTop: 0 }, 300);

        $('#cardName, #cardNumber, #cardExpiryMonth, #cardExpiryYear, #cardCVV').attr('required', 'required');
    });

    // Samsung Pay Modifications
    $('ul.sd_paym li.samsung_pay').click(function () {
	    
        let selectedItem = $('.owl-item.active.center');
        let itemTitle = selectedItem.find('h3').html();
        let itemImageSource = selectedItem.find('img').attr('src');

        $('#innerTitle').html(itemTitle);
        $('#innerItemImage').attr('src', itemImageSource);

        $(".main_slider, .header, .s_title, .shudok, .payButton, .paymentDetails").hide();
        $("#tra_headr, .hea_content, .donatorDetails").show();
        $('html, body').animate({ scrollTop: 0 }, 300);

        $('#cardName, #cardNumber, #cardExpiryMonth, #cardExpiryYear, #cardCVV').removeAttr('required');

        $('#pageHeading').addClass('hide_inside');

        $('#samsungPay').show();
        $('#applePay').hide();
    });

    // Apple Pay Modifications
    $('ul.sd_paym li.apple_pay').click(function () {

        //let selectedItem = $('.owl-item.active.center');
        //let itemTitle = selectedItem.find('h3').html();
        //let itemImageSource = selectedItem.find('img').attr('src');

        //$('#innerTitle').html(itemTitle);
        //$('#innerItemImage').attr('src', itemImageSource);

        //$(".main_slider, .header, .s_title, .shudok, .payButton, .paymentDetails").hide();
        //$("#tra_headr, .hea_content, .donatorDetails").show();
        //$('html, body').animate({ scrollTop: 0 }, 300);

        $('#donatorNameField, #donatorPhoneField').removeAttr('required');
        $('#cardName, #cardNumber, #cardExpiryMonth, #cardExpiryYear, #cardCVV').removeAttr('required');

        //$('#pageHeading').addClass('hide_inside');

        //$('#applePay').show();
        //$('#samsungPay').hide();

        $('#donatorNameField').val('sponsor');
        $('#donatorPhoneField').val('800733');

        payByApple();

        $('#donatorNameField, #donatorPhoneField').val('');

        $('#cardName, #cardNumber, #cardExpiryMonth, #cardExpiryYear, #cardCVV').attr('required', 'required');
        $('#donatorNameField, #donatorPhoneField').attr('required', 'required');
    });

    // SMS Donate
    $('ul.sd_paym li.message_pay').click(function(){
        $(".main_slider, .header, .desc_amount, .shudok").hide();
        console.log('hi');
        let selectedItem = $('.owl-item.active.center');
        let smsCode = selectedItem.find('.smsCode').html();

        
        $('.payments_div .sms_option_wra .s_item .link_').each(function () {

            $(this).attr('href', $(this).attr('href').split('&')[0] + "&body=" + smsCode);
        });

        $("#tra_headr, .hea_content, .sms_payment").show();
        $('html, body').animate({scrollTop : 0},300);
    });

    // Bank Transfer
    $('ul.sd_paym li.bank_transfer').click(function(){
        $(".main_slider, .header, .desc_amount, .shudok").hide();
        $("#tra_headr, .hea_content, .bank_transfers").show();
        $('html, body').animate({scrollTop : 0},300);
    });

    $('.ret_back').click(function () {

        if ($('.villages_div').is(':visible')) {
            $('.main_slider, .sha_bg, .shudok, #donateDiv, .payments_div').show();
            $('.villages_div').hide();
        }
        else {

            $('#donatorNameField, #donatorPhoneField, #giftedPhoneField').val('');
            $('#cardName, #cardNumber, #cardExpiryMonth, #cardExpiryYear, #cardCVV').val('');
            $('#giftCheckbox').prop('checked', false).trigger('change');
            $('#sadaqahCheckBox, #zakatCheckBox').prop('checked', false);
            $('#sadaqahCheckBox, #zakatCheckBox').parent().removeClass('chosen');

            $(".main_slider, .header, .s_title, .desc_amount, .shudok").show();
            $("#tra_headr, .hea_content, .donatorDetails").hide();
            $(".payment_details, .bank_transfers, .sms_payment").hide();
            $('html, body').animate({ scrollTop: 0 }, 300);

            $('#pageHeading').removeClass('hide_inside');
        }
    });

	$('#giftCheckbox').change(function () {
	    let isChecked = $("#giftCheckbox").is(":checked")
	    $(".giftTo").each(function (e) {
	        if (isChecked) {
	            $(this).show();
	            $(this).find('input').attr('required', 'required');
	            $("input#giftedPhoneField").focus();
	        } else if (!isChecked) {
	            $(this).find('input').removeAttr('required');
	            $(this).hide();
	        }
	    })
	});

	$('.plus').click(function () {
	    
	    let $input = $('.pass-quantity input');
	    let selectedItem = $('.owl-item.active.center');
	    let itemIsEditable = selectedItem.find('.editFlag').html() == "Y" ? true : false;

	    let increment = itemIsEditable ? fixedChangeAmount : parseInt(selectedItem.find('.couponAmount').html());

	    let newVal = parseInt($input.val()) + increment;

	    newVal = Math.floor(newVal / increment) * increment;

	    $input.val(newVal);
	});

	// Number Spinner for donation amount
	$('.minus').click(function () {

        let $input = $('.pass-quantity input');
        let selectedItem = $('.owl-item.active.center');
        let itemIsEditable = selectedItem.find('.editFlag').html() == "Y" ? true : false;

        let decrement = itemIsEditable ? fixedChangeAmount : parseInt(selectedItem.find('.couponAmount').html());

        let newVal = parseInt($input.val()) - decrement;

        newVal = Math.max(Math.ceil(newVal / decrement) * decrement, decrement);

        $input.val(newVal);
    });

	$('.pass-quantity input').on('input', function () {

	    this.reportValidity();
	});

    //Change event handler for the amount
	$('.pass-quantity input').on('change', function () {

	    let selectedItem = $('.owl-item.active.center');
	    let itemIsEditable = selectedItem.find('.editFlag').html() == "Y" ? true : false;

	    if (this.value != "")
	    {
	        this.value = Math.max(parseInt(this.value), fixedChangeAmount);
	    }
	    else
	    {
	        this.value = fixedChangeAmount;
	    }

	});

    // Thank you popup close handler
	$('.hamla_thanks_popup .close').click(function () {

	    $('.hamla_thanks_popup .overlay').removeClass('is-on');

	});

    // Sadakat or Zakat
    $('.skie_fli input').change(function () {
        console.log($(this).is(':checked'))
        if ($(this).is(':checked'))
        {
            $('.skie_fli input').parent().removeClass('chosen');
            $('.skie_fli input').prop('checked', false);

            $(this).parent().addClass('chosen');
            $(this).prop('checked', true);
        }
        else
        {
            $(this).parent().removeClass('chosen');
        }

    });

    $('#giftedPhoneField, #donatorPhoneField, #appleDonatorPhone').each(function () {

        window.intlTelInput(this, {
            separateDialCode: true,
            utilsScript: "js/utils.js",
        });
    })

    $('.donatorDiv .iti__selected-dial-code').on('DOMSubtreeModified', function (event) {

        $('#donatorMobExt').html($(this).html().replace('+', '00'));

    });

    $('.giftedDiv .iti__selected-dial-code').on('DOMSubtreeModified', function (event) {

        $('#giftedMobExt').html($(this).html().replace('+', '00'));

    });

    /*
	----------------------
	 Share Modal
	----------------------
	*/
    $("a.shre_li").on("click", function() {
        $(".hamla_share_popup").addClass("warehaly");
        $(".hamla_share_popup .overlay").addClass("is-on");
    });
    $(".close").on("click", function() {
        $(".hamla_share_popup").removeClass("warehaly");
        $(".hamla_share_popup .overlay").removeClass("is-on");
        $(".hamla_paynow_popup").removeClass("warehaly");
        $(".hamla_paynow_popup .overlay").removeClass("is-on");
        $("body").removeClass("modal_on");
    });

    // Page URL
    document.getElementById('data').value = window.location;

    // Close Modal on press ESC
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            if ($('.hamla_share_popup').hasClass('warehaly')) {
                $('.hamla_share_popup').removeClass('warehaly');
            }
            if ($('.hamla_share_popup .overlay').hasClass('is-on')) {
                $('.hamla_share_popup .overlay').removeClass('is-on');
            }
        }
    });


    // Copy to Clipboard
    $("#copy").click(function() {
        $("#data").select();
        document.execCommand("copy");
        alert('تم نسخ رابط الحمله بنجاح!');
    });


    // Mobile Share Button
    const shareButton = document.querySelector('.share_ha');
    shareButton.addEventListener('click', event => {
        if (navigator.share) {
            navigator.share({
                title: 'ساهم معي ولو بالقليل في حملات الهلال الأحمر الإماراتي الخيرية',
                text: 'تحت إشراف الهلال الأحمر الإماراتي',
                url: 'https://www.emiratesrc.ae/lp/',
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch(console.error);
        } else {
        }
    });

});
