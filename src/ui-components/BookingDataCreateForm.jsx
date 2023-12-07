/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
export default function BookingDataCreateForm(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    contactno: "",
    name: "",
    email: "",
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
  const [contactno, setContactno] = React.useState(initialValues.contactno);
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
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
    setContactno(initialValues.contactno);
    setName(initialValues.name);
    setEmail(initialValues.email);
    setDate(initialValues.date);
    setPickuptime(initialValues.pickuptime);
    setPax(initialValues.pax);
    setLuggage(initialValues.luggage);
    setTypeofvehicle(initialValues.typeofvehicle);
    setPickup(initialValues.pickup);
    setDropoff(initialValues.dropoff);
    setPostal(initialValues.postal);
    setTypeoftransfer(initialValues.typeoftransfer);
    setVehicle(initialValues.vehicle);
    setFlightno(initialValues.flightno);
    setFare(initialValues.fare);
    setOrderno(initialValues.orderno);
    setMakebookigtimedate(initialValues.makebookigtimedate);
    setErrors({});
  };
  const validations = {
    contactno: [{ type: "Phone" }],
    name: [],
    email: [{ type: "Email" }],
    date: [],
    pickuptime: [],
    pax: [],
    luggage: [],
    typeofvehicle: [],
    pickup: [],
    dropoff: [],
    postal: [],
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
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          contactno,
          name,
          email,
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
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "BookingDataCreateForm")}
      {...rest}
    >
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
      <TextField
        label="Label"
        type="tel"
        value={contactno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno: value,
              name,
              email,
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
        label="Name"
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name: value,
              email,
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
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email: value,
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
        label="Date"
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        type="time"
        value={pickuptime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        value={pax}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        value={luggage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        value={typeofvehicle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        value={pickup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        value={dropoff}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        value={postal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        value={typeoftransfer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        value={vehicle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        value={flightno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        value={fare}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        value={orderno}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
        type="datetime-local"
        value={makebookigtimedate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              contactno,
              name,
              email,
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
    </Grid>
  );
}