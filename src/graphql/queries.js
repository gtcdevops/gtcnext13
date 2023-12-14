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
      flightno
      fare
      agree
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        flightno
        fare
        agree
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncBookingData = /* GraphQL */ `
  query SyncBookingData(
    $filter: ModelBookingDataFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBookingData(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        flightno
        fare
        agree
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
