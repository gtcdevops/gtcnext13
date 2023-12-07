/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getBookingData } from "../graphql/queries";
import { updateBookingData } from "../graphql/mutations";
const client = generateClient();
export default function BookingDataUpdateForm(props) {
  const {
    id: idProp,
    bookingData: bookingDataModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    email: "",
    contactno: "",
    date: "",
    pickuptime: "",
    pax: "",
    luggage: "",
    typeofvehicle: "",
    pickup: "",
    dropoff: "",
    postal: "",
    typeoftransfer: "",
    vehicle: "",
    flightno: "",
    fare: "",
    orderno: "",
    makebookigtimedate: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [contactno, setContactno] = React.useState(initialValues.contactno);
  const [date, setDate] = React.useState(initialValues.date);
  const [pickuptime, setPickuptime] = React.useState(initialValues.pickuptime);
  const [pax, setPax] = React.useState(initialValues.pax);
  const [luggage, setLuggage] = React.useState(initialValues.luggage);
  const [typeofvehicle, setTypeofvehicle] = React.useState(
    initialValues.typeofvehicle
  );
  const [pickup, setPickup] = React.useState(initialValues.pickup);
  const [dropoff, setDropoff] = React.useState(initialValues.dropoff);
  const [postal, setPostal] = React.useState(initialValues.postal);
  const [typeoftransfer, setTypeoftransfer] = React.useState(
    initialValues.typeoftransfer
  );
  const [vehicle, setVehicle] = React.useState(initialValues.vehicle);
  const [flightno, setFlightno] = React.useState(initialValues.flightno);
  const [fare, setFare] = React.useState(initialValues.fare);
  const [orderno, setOrderno] = React.useState(initialValues.orderno);
  const [makebookigtimedate, setMakebookigtimedate] = React.useState(
    initialValues.makebookigtimedate
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = bookingDataRecord
      ? { ...initialValues, ...bookingDataRecord }
      : initialValues;
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setContactno(cleanValues.contactno);
    setDate(cleanValues.date);
    setPickuptime(cleanValues.pickuptime);
    setPax(cleanValues.pax);
    setLuggage(cleanValues.luggage);
    setTypeofvehicle(cleanValues.typeofvehicle);
    setPickup(cleanValues.pickup);
    setDropoff(cleanValues.dropoff);
    setPostal(cleanValues.postal);
    setTypeoftransfer(cleanValues.typeoftransfer);
    setVehicle(cleanValues.vehicle);
    setFlightno(cleanValues.flightno);
    setFare(cleanValues.fare);
    setOrderno(cleanValues.orderno);
    setMakebookigtimedate(cleanValues.makebookigtimedate);
    setErrors({});
  };
  const [bookingDataRecord, setBookingDataRecord] =
    React.useState(bookingDataModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBookingData.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBookingData
        : bookingDataModelProp;
      setBookingDataRecord(record);
    };
    queryData();
  }, [idProp, bookingDataModelProp]);
  React.useEffect(resetStateValues, [bookingDataRecord]);
  const validations = {
    name: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    contactno: [{ type: "Phone" }],
    date: [{ type: "Required" }],
    pickuptime: [{ type: "Required" }],
    pax: [{ type: "Required" }],
    luggage: [{ type: "Required" }],
    typeofvehicle: [],
    pickup: [{ type: "Required" }],
    dropoff: [{ type: "Required" }],
    postal: [{ type: "Required" }],
    typeoftransfer: [],
    vehicle: [],
    flightno: [],
    fare: [],
    orderno: [],
    makebookigtimedate: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertTimeStampToDate = (ts) => {
    if (Math.abs(Date.now() - ts) < Math.abs(Date.now() - ts * 1000)) {
      return new Date(ts);
    }
    return new Date(ts * 1000);
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          email,
          contactno: contactno ?? null,
          date,
          pickuptime,
          pax,
          luggage,
          typeofvehicle: typeofvehicle ?? null,
          pickup,
          dropoff,
          postal,
          typeoftransfer: typeoftransfer ?? null,
          vehicle: vehicle ?? null,
          flightno: flightno ?? null,
          fare: fare ?? null,
          orderno: orderno ?? null,
          makebookigtimedate: makebookigtimedate ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateBookingData.replaceAll("__typename", ""),
            variables: {
              input: {
                id: bookingDataRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BookingDataUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              contactno,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              contactno,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Contactno"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={contactno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno: value,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.contactno ?? value;
          }
          if (errors.contactno?.hasError) {
            runValidationTasks("contactno", value);
          }
          setContactno(value);
        }}
        onBlur={() => runValidationTasks("contactno", contactno)}
        errorMessage={errors.contactno?.errorMessage}
        hasError={errors.contactno?.hasError}
        {...getOverrideProps(overrides, "contactno")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date: value,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Pickuptime"
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={pickuptime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime: value,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.pickuptime ?? value;
          }
          if (errors.pickuptime?.hasError) {
            runValidationTasks("pickuptime", value);
          }
          setPickuptime(value);
        }}
        onBlur={() => runValidationTasks("pickuptime", pickuptime)}
        errorMessage={errors.pickuptime?.errorMessage}
        hasError={errors.pickuptime?.hasError}
        {...getOverrideProps(overrides, "pickuptime")}
      ></TextField>
      <TextField
        label="Pax"
        isRequired={true}
        isReadOnly={false}
        value={pax}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime,
              pax: value,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.pax ?? value;
          }
          if (errors.pax?.hasError) {
            runValidationTasks("pax", value);
          }
          setPax(value);
        }}
        onBlur={() => runValidationTasks("pax", pax)}
        errorMessage={errors.pax?.errorMessage}
        hasError={errors.pax?.hasError}
        {...getOverrideProps(overrides, "pax")}
      ></TextField>
      <TextField
        label="Luggage"
        isRequired={true}
        isReadOnly={false}
        value={luggage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime,
              pax,
              luggage: value,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.luggage ?? value;
          }
          if (errors.luggage?.hasError) {
            runValidationTasks("luggage", value);
          }
          setLuggage(value);
        }}
        onBlur={() => runValidationTasks("luggage", luggage)}
        errorMessage={errors.luggage?.errorMessage}
        hasError={errors.luggage?.hasError}
        {...getOverrideProps(overrides, "luggage")}
      ></TextField>
      <TextField
        label="Typeofvehicle"
        isRequired={false}
        isReadOnly={false}
        value={typeofvehicle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle: value,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.typeofvehicle ?? value;
          }
          if (errors.typeofvehicle?.hasError) {
            runValidationTasks("typeofvehicle", value);
          }
          setTypeofvehicle(value);
        }}
        onBlur={() => runValidationTasks("typeofvehicle", typeofvehicle)}
        errorMessage={errors.typeofvehicle?.errorMessage}
        hasError={errors.typeofvehicle?.hasError}
        {...getOverrideProps(overrides, "typeofvehicle")}
      ></TextField>
      <TextField
        label="Pickup"
        isRequired={true}
        isReadOnly={false}
        value={pickup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup: value,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.pickup ?? value;
          }
          if (errors.pickup?.hasError) {
            runValidationTasks("pickup", value);
          }
          setPickup(value);
        }}
        onBlur={() => runValidationTasks("pickup", pickup)}
        errorMessage={errors.pickup?.errorMessage}
        hasError={errors.pickup?.hasError}
        {...getOverrideProps(overrides, "pickup")}
      ></TextField>
      <TextField
        label="Dropoff"
        isRequired={true}
        isReadOnly={false}
        value={dropoff}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff: value,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.dropoff ?? value;
          }
          if (errors.dropoff?.hasError) {
            runValidationTasks("dropoff", value);
          }
          setDropoff(value);
        }}
        onBlur={() => runValidationTasks("dropoff", dropoff)}
        errorMessage={errors.dropoff?.errorMessage}
        hasError={errors.dropoff?.hasError}
        {...getOverrideProps(overrides, "dropoff")}
      ></TextField>
      <TextField
        label="Postal"
        isRequired={true}
        isReadOnly={false}
        value={postal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal: value,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.postal ?? value;
          }
          if (errors.postal?.hasError) {
            runValidationTasks("postal", value);
          }
          setPostal(value);
        }}
        onBlur={() => runValidationTasks("postal", postal)}
        errorMessage={errors.postal?.errorMessage}
        hasError={errors.postal?.hasError}
        {...getOverrideProps(overrides, "postal")}
      ></TextField>
      <TextField
        label="Typeoftransfer"
        isRequired={false}
        isReadOnly={false}
        value={typeoftransfer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer: value,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.typeoftransfer ?? value;
          }
          if (errors.typeoftransfer?.hasError) {
            runValidationTasks("typeoftransfer", value);
          }
          setTypeoftransfer(value);
        }}
        onBlur={() => runValidationTasks("typeoftransfer", typeoftransfer)}
        errorMessage={errors.typeoftransfer?.errorMessage}
        hasError={errors.typeoftransfer?.hasError}
        {...getOverrideProps(overrides, "typeoftransfer")}
      ></TextField>
      <TextField
        label="Vehicle"
        isRequired={false}
        isReadOnly={false}
        value={vehicle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle: value,
              flightno,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.vehicle ?? value;
          }
          if (errors.vehicle?.hasError) {
            runValidationTasks("vehicle", value);
          }
          setVehicle(value);
        }}
        onBlur={() => runValidationTasks("vehicle", vehicle)}
        errorMessage={errors.vehicle?.errorMessage}
        hasError={errors.vehicle?.hasError}
        {...getOverrideProps(overrides, "vehicle")}
      ></TextField>
      <TextField
        label="Flightno"
        isRequired={false}
        isReadOnly={false}
        value={flightno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno: value,
              fare,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.flightno ?? value;
          }
          if (errors.flightno?.hasError) {
            runValidationTasks("flightno", value);
          }
          setFlightno(value);
        }}
        onBlur={() => runValidationTasks("flightno", flightno)}
        errorMessage={errors.flightno?.errorMessage}
        hasError={errors.flightno?.hasError}
        {...getOverrideProps(overrides, "flightno")}
      ></TextField>
      <TextField
        label="Fare"
        isRequired={false}
        isReadOnly={false}
        value={fare}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare: value,
              orderno,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.fare ?? value;
          }
          if (errors.fare?.hasError) {
            runValidationTasks("fare", value);
          }
          setFare(value);
        }}
        onBlur={() => runValidationTasks("fare", fare)}
        errorMessage={errors.fare?.errorMessage}
        hasError={errors.fare?.hasError}
        {...getOverrideProps(overrides, "fare")}
      ></TextField>
      <TextField
        label="Orderno"
        isRequired={false}
        isReadOnly={false}
        value={orderno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno: value,
              makebookigtimedate,
            };
            const result = onChange(modelFields);
            value = result?.orderno ?? value;
          }
          if (errors.orderno?.hasError) {
            runValidationTasks("orderno", value);
          }
          setOrderno(value);
        }}
        onBlur={() => runValidationTasks("orderno", orderno)}
        errorMessage={errors.orderno?.errorMessage}
        hasError={errors.orderno?.hasError}
        {...getOverrideProps(overrides, "orderno")}
      ></TextField>
      <TextField
        label="Makebookigtimedate"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          makebookigtimedate &&
          convertToLocal(convertTimeStampToDate(makebookigtimedate))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : Number(new Date(e.target.value));
          if (onChange) {
            const modelFields = {
              name,
              email,
              contactno,
              date,
              pickuptime,
              pax,
              luggage,
              typeofvehicle,
              pickup,
              dropoff,
              postal,
              typeoftransfer,
              vehicle,
              flightno,
              fare,
              orderno,
              makebookigtimedate: value,
            };
            const result = onChange(modelFields);
            value = result?.makebookigtimedate ?? value;
          }
          if (errors.makebookigtimedate?.hasError) {
            runValidationTasks("makebookigtimedate", value);
          }
          setMakebookigtimedate(value);
        }}
        onBlur={() =>
          runValidationTasks("makebookigtimedate", makebookigtimedate)
        }
        errorMessage={errors.makebookigtimedate?.errorMessage}
        hasError={errors.makebookigtimedate?.hasError}
        {...getOverrideProps(overrides, "makebookigtimedate")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || bookingDataModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || bookingDataModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
