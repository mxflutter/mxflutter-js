import { TextEditingValue, TextInputConfiguration } from './text-input';
import { MXDartClass } from '@mxflutter/mxflutter-base';
declare class AutofillHints extends MXDartClass {
    static get addressCity(): string;
    static get addressCityAndState(): string;
    static get addressState(): string;
    static get birthday(): string;
    static get birthdayDay(): string;
    static get birthdayMonth(): string;
    static get birthdayYear(): string;
    static get countryCode(): string;
    static get countryName(): string;
    static get creditCardExpirationDate(): string;
    static get creditCardExpirationDay(): string;
    static get creditCardExpirationMonth(): string;
    static get creditCardExpirationYear(): string;
    static get creditCardFamilyName(): string;
    static get creditCardGivenName(): string;
    static get creditCardMiddleName(): string;
    static get creditCardName(): string;
    static get creditCardNumber(): string;
    static get creditCardSecurityCode(): string;
    static get creditCardType(): string;
    static get email(): string;
    static get familyName(): string;
    static get fullStreetAddress(): string;
    static get gender(): string;
    static get givenName(): string;
    static get impp(): string;
    static get jobTitle(): string;
    static get language(): string;
    static get location(): string;
    static get middleInitial(): string;
    static get middleName(): string;
    static get mxName(): string;
    static get namePrefix(): string;
    static get nameSuffix(): string;
    static get newPassword(): string;
    static get newUsername(): string;
    static get nickname(): string;
    static get oneTimeCode(): string;
    static get organizationName(): string;
    static get password(): string;
    static get photo(): string;
    static get postalAddress(): string;
    static get postalAddressExtended(): string;
    static get postalAddressExtendedPostalCode(): string;
    static get postalCode(): string;
    static get streetAddressLevel1(): string;
    static get streetAddressLevel2(): string;
    static get streetAddressLevel3(): string;
    static get streetAddressLevel4(): string;
    static get streetAddressLine1(): string;
    static get streetAddressLine2(): string;
    static get streetAddressLine3(): string;
    static get sublocality(): string;
    static get telephoneNumber(): string;
    static get telephoneNumberAreaCode(): string;
    static get telephoneNumberCountryCode(): string;
    static get telephoneNumberDevice(): string;
    static get telephoneNumberExtension(): string;
    static get telephoneNumberLocal(): string;
    static get telephoneNumberLocalPrefix(): string;
    static get telephoneNumberLocalSuffix(): string;
    static get telephoneNumberNational(): string;
    static get transactionAmount(): string;
    static get transactionCurrency(): string;
    static get url(): string;
    static get username(): string;
}
export { AutofillHints };
declare class AutofillConfiguration extends MXDartClass {
    uniqueIdentifier: string;
    autofillHints: Array<any>;
    currentEditingValue: TextEditingValue;
    constructor(namedParameters?: {
        uniqueIdentifier?: string;
        autofillHints?: Array<any>;
        currentEditingValue?: TextEditingValue;
    });
}
export { AutofillConfiguration };
declare abstract class AutofillClient extends MXDartClass {
}
export { AutofillClient };
declare abstract class AutofillScope extends MXDartClass {
}
export { AutofillScope };
declare class _AutofillScopeTextInputConfiguration extends TextInputConfiguration {
    allConfigurations: any;
    constructor(namedParameters?: {
        allConfigurations?: any;
        currentClientConfiguration?: TextInputConfiguration;
    });
}
export { _AutofillScopeTextInputConfiguration };
declare abstract class AutofillScopeMixin extends MXDartClass {
}
export { AutofillScopeMixin };
