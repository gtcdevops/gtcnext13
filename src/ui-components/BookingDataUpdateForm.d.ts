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
export declare type BookingDataUpdateFormInputValues = {
    name?: string;
    email?: string;
    contactno?: string;
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
    makebookigtimedate?: number;
};
export declare type BookingDataUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    contactno?: ValidationFunction<string>;
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
    makebookigtimedate?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookingDataUpdateFormOverridesProps = {
    BookingDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    contactno?: PrimitiveOverrideProps<TextFieldProps>;
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
export declare type BookingDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: BookingDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bookingData?: any;
    onSubmit?: (fields: BookingDataUpdateFormInputValues) => BookingDataUpdateFormInputValues;
    onSuccess?: (fields: BookingDataUpdateFormInputValues) => void;
    onError?: (fields: BookingDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookingDataUpdateFormInputValues) => BookingDataUpdateFormInputValues;
    onValidate?: BookingDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BookingDataUpdateForm(props: BookingDataUpdateFormProps): React.ReactElement;
