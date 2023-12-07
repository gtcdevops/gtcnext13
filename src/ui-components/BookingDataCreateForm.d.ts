/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookingDataCreateFormInputValues = {
    contactno?: string;
    name?: string;
    email?: string;
    date?: string;
    pickuptime?: string;
    pax?: string;
    luggage?: string;
    typeofvehicle?: string;
    pickup?: string;
    dropoff?: string;
    postal?: string;
    typeoftransfer?: string;
    vehicle?: string;
    flightno?: string;
    fare?: string;
    orderno?: string;
    makebookigtimedate?: string;
};
export declare type BookingDataCreateFormValidationValues = {
    contactno?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    pickuptime?: ValidationFunction<string>;
    pax?: ValidationFunction<string>;
    luggage?: ValidationFunction<string>;
    typeofvehicle?: ValidationFunction<string>;
    pickup?: ValidationFunction<string>;
    dropoff?: ValidationFunction<string>;
    postal?: ValidationFunction<string>;
    typeoftransfer?: ValidationFunction<string>;
    vehicle?: ValidationFunction<string>;
    flightno?: ValidationFunction<string>;
    fare?: ValidationFunction<string>;
    orderno?: ValidationFunction<string>;
    makebookigtimedate?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookingDataCreateFormOverridesProps = {
    BookingDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    contactno?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    pickuptime?: PrimitiveOverrideProps<TextFieldProps>;
    pax?: PrimitiveOverrideProps<TextFieldProps>;
    luggage?: PrimitiveOverrideProps<TextFieldProps>;
    typeofvehicle?: PrimitiveOverrideProps<TextFieldProps>;
    pickup?: PrimitiveOverrideProps<TextFieldProps>;
    dropoff?: PrimitiveOverrideProps<TextFieldProps>;
    postal?: PrimitiveOverrideProps<TextFieldProps>;
    typeoftransfer?: PrimitiveOverrideProps<TextFieldProps>;
    vehicle?: PrimitiveOverrideProps<TextFieldProps>;
    flightno?: PrimitiveOverrideProps<TextFieldProps>;
    fare?: PrimitiveOverrideProps<TextFieldProps>;
    orderno?: PrimitiveOverrideProps<TextFieldProps>;
    makebookigtimedate?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BookingDataCreateFormProps = React.PropsWithChildren<{
    overrides?: BookingDataCreateFormOverridesProps | undefined | null;
} & {
    onSubmit: (fields: BookingDataCreateFormInputValues) => void;
    onChange?: (fields: BookingDataCreateFormInputValues) => BookingDataCreateFormInputValues;
    onValidate?: BookingDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function BookingDataCreateForm(props: BookingDataCreateFormProps): React.ReactElement;
