import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

type EagerBookingData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BookingData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly contactno?: string | null;
  readonly date?: string | null;
  readonly pickuptime?: string | null;
  readonly pax?: string | null;
  readonly luggage?: string | null;
  readonly typeofvehicle?: string | null;
  readonly pickup?: string | null;
  readonly dropoff?: string | null;
  readonly postal?: string | null;
  readonly typeoftransfer?: string | null;
  readonly flightno?: string | null;
  readonly fare?: string | null;
  readonly agree?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBookingData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BookingData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly contactno?: string | null;
  readonly date?: string | null;
  readonly pickuptime?: string | null;
  readonly pax?: string | null;
  readonly luggage?: string | null;
  readonly typeofvehicle?: string | null;
  readonly pickup?: string | null;
  readonly dropoff?: string | null;
  readonly postal?: string | null;
  readonly typeoftransfer?: string | null;
  readonly flightno?: string | null;
  readonly fare?: string | null;
  readonly agree?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BookingData = LazyLoading extends LazyLoadingDisabled ? EagerBookingData : LazyBookingData

export declare const BookingData: (new (init: ModelInit<BookingData>) => BookingData) & {
  copyOf(source: BookingData, mutator: (draft: MutableModel<BookingData>) => MutableModel<BookingData> | void): BookingData;
}