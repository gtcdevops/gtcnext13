// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, BookingData } = initSchema(schema);

export {
  Todo,
  BookingData
};