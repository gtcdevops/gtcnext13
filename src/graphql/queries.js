/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookingData = /* GraphQL */ `
  query GetBookingData($id: ID!) {
    getBookingData(id: $id) {
      id
      name
      email
      contactno
      date
      pickuptime
      pax
      luggage
      typeofvehicle
      pickup
      dropoff
      postal
      typeoftransfer
      vehicle
      flightno
      fare
      orderno
      makebookigtimedate
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBookingData = /* GraphQL */ `
  query ListBookingData(
    $filter: ModelBookingDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookingData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        contactno
        date
        pickuptime
        pax
        luggage
        typeofvehicle
        pickup
        dropoff
        postal
        typeoftransfer
        vehicle
        flightno
        fare
        orderno
        makebookigtimedate
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
