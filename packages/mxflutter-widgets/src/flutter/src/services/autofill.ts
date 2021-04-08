// Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import { TextEditingValue, TextInputConfiguration } from './text-input';
import { MXDartClass, MXMirrorWidget, MXWidget } from '@mxflutter/mxflutter-base';
class AutofillHints extends MXDartClass {
  static get addressCity() {
    return 'addressCity';
  }
  static get addressCityAndState() {
    return 'addressCityAndState';
  }
  static get addressState() {
    return 'addressState';
  }
  static get birthday() {
    return 'birthday';
  }
  static get birthdayDay() {
    return 'birthdayDay';
  }
  static get birthdayMonth() {
    return 'birthdayMonth';
  }
  static get birthdayYear() {
    return 'birthdayYear';
  }
  static get countryCode() {
    return 'countryCode';
  }
  static get countryName() {
    return 'countryName';
  }
  static get creditCardExpirationDate() {
    return 'creditCardExpirationDate';
  }
  static get creditCardExpirationDay() {
    return 'creditCardExpirationDay';
  }
  static get creditCardExpirationMonth() {
    return 'creditCardExpirationMonth';
  }
  static get creditCardExpirationYear() {
    return 'creditCardExpirationYear';
  }
  static get creditCardFamilyName() {
    return 'creditCardFamilyName';
  }
  static get creditCardGivenName() {
    return 'creditCardGivenName';
  }
  static get creditCardMiddleName() {
    return 'creditCardMiddleName';
  }
  static get creditCardName() {
    return 'creditCardName';
  }
  static get creditCardNumber() {
    return 'creditCardNumber';
  }
  static get creditCardSecurityCode() {
    return 'creditCardSecurityCode';
  }
  static get creditCardType() {
    return 'creditCardType';
  }
  static get email() {
    return 'email';
  }
  static get familyName() {
    return 'familyName';
  }
  static get fullStreetAddress() {
    return 'fullStreetAddress';
  }
  static get gender() {
    return 'gender';
  }
  static get givenName() {
    return 'givenName';
  }
  static get impp() {
    return 'impp';
  }
  static get jobTitle() {
    return 'jobTitle';
  }
  static get language() {
    return 'language';
  }
  static get location() {
    return 'location';
  }
  static get middleInitial() {
    return 'middleInitial';
  }
  static get middleName() {
    return 'middleName';
  }
  static get mxName() {
    return 'name';
  }
  static get namePrefix() {
    return 'namePrefix';
  }
  static get nameSuffix() {
    return 'nameSuffix';
  }
  static get newPassword() {
    return 'newPassword';
  }
  static get newUsername() {
    return 'newUsername';
  }
  static get nickname() {
    return 'nickname';
  }
  static get oneTimeCode() {
    return 'oneTimeCode';
  }
  static get organizationName() {
    return 'organizationName';
  }
  static get password() {
    return 'password';
  }
  static get photo() {
    return 'photo';
  }
  static get postalAddress() {
    return 'postalAddress';
  }
  static get postalAddressExtended() {
    return 'postalAddressExtended';
  }
  static get postalAddressExtendedPostalCode() {
    return 'postalAddressExtendedPostalCode';
  }
  static get postalCode() {
    return 'postalCode';
  }
  static get streetAddressLevel1() {
    return 'streetAddressLevel1';
  }
  static get streetAddressLevel2() {
    return 'streetAddressLevel2';
  }
  static get streetAddressLevel3() {
    return 'streetAddressLevel3';
  }
  static get streetAddressLevel4() {
    return 'streetAddressLevel4';
  }
  static get streetAddressLine1() {
    return 'streetAddressLine1';
  }
  static get streetAddressLine2() {
    return 'streetAddressLine2';
  }
  static get streetAddressLine3() {
    return 'streetAddressLine3';
  }
  static get sublocality() {
    return 'sublocality';
  }
  static get telephoneNumber() {
    return 'telephoneNumber';
  }
  static get telephoneNumberAreaCode() {
    return 'telephoneNumberAreaCode';
  }
  static get telephoneNumberCountryCode() {
    return 'telephoneNumberCountryCode';
  }
  static get telephoneNumberDevice() {
    return 'telephoneNumberDevice';
  }
  static get telephoneNumberExtension() {
    return 'telephoneNumberExtension';
  }
  static get telephoneNumberLocal() {
    return 'telephoneNumberLocal';
  }
  static get telephoneNumberLocalPrefix() {
    return 'telephoneNumberLocalPrefix';
  }
  static get telephoneNumberLocalSuffix() {
    return 'telephoneNumberLocalSuffix';
  }
  static get telephoneNumberNational() {
    return 'telephoneNumberNational';
  }
  static get transactionAmount() {
    return 'transactionAmount';
  }
  static get transactionCurrency() {
    return 'transactionCurrency';
  }
  static get url() {
    return 'url';
  }
  static get username() {
    return 'username';
  }
}
export { AutofillHints };
class AutofillConfiguration extends MXDartClass {
  uniqueIdentifier: string;
  autofillHints: Array<any>;
  currentEditingValue: TextEditingValue;
  public constructor(namedParameters: {uniqueIdentifier?: string, autofillHints?: Array<any>, currentEditingValue?: TextEditingValue} = {}) {
    super();
    this.uniqueIdentifier = namedParameters.uniqueIdentifier;
    this.autofillHints = namedParameters.autofillHints;
    this.currentEditingValue = namedParameters.currentEditingValue;
    this.className = 'AutofillConfiguration';
  }
}
export { AutofillConfiguration };
abstract class AutofillClient extends MXDartClass {}
export { AutofillClient };
abstract class AutofillScope extends MXDartClass {}
export { AutofillScope };
class _AutofillScopeTextInputConfiguration extends TextInputConfiguration {
  allConfigurations: any;
  public constructor(namedParameters: {allConfigurations?: any, currentClientConfiguration?: TextInputConfiguration} = {}) {
    super();
    this.allConfigurations = namedParameters.allConfigurations;
    this['currentClientConfiguration'] = namedParameters.currentClientConfiguration;
    this.className = '_AutofillScopeTextInputConfiguration';
  }
}
export { _AutofillScopeTextInputConfiguration };
abstract class AutofillScopeMixin extends MXDartClass {}
export { AutofillScopeMixin };
