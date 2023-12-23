/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AuthError = BaseError & {
  __typename?: 'AuthError';
  /** Arabic message indicating the error for the client. */
  arbMessage: Scalars['String']['output'];
  /**
   * The field that the error is related to.
   * Ex: PASSWORD when chosen password is too short
   */
  errorField: AuthField;
  /** English message indicating the error for the client. */
  message: Scalars['String']['output'];
};

export enum AuthField {
  Email = 'EMAIL',
  Password = 'PASSWORD',
  Username = 'USERNAME'
}

export type BaseError = {
  arbMessage: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type BookTimeslotError = BaseError & {
  __typename?: 'BookTimeslotError';
  arbMessage: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type City = {
  __typename?: 'City';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type InvalidTimeslotDataError = BaseError & {
  __typename?: 'InvalidTimeslotDataError';
  arbMessage: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addTimeslot: AddTimeslotResult;
  bookTimeslot: BookTimeslotResult;
  createStadium: CreateStadiumResult;
  ownerLogin: OwnerAuthResult;
  ownerSignup: OwnerAuthResult;
  userLogin: UserAuthResult;
  userSignup: UserAuthResult;
};


export type MutationAddTimeslotArgs = {
  timeslotData: AddTimeslotInput;
};


export type MutationBookTimeslotArgs = {
  timeslotId: Scalars['ID']['input'];
};


export type MutationCreateStadiumArgs = {
  stadiumData: CreateStadiumInput;
};


export type MutationOwnerLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationOwnerSignupArgs = {
  signupData: SignupInput;
};


export type MutationUserLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUserSignupArgs = {
  signupData: SignupInput;
};

export type Owner = {
  __typename?: 'Owner';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  stadiums: Array<Stadium>;
  username: Scalars['String']['output'];
};


export type OwnerStadiumsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type OwnerAuthPayload = {
  __typename?: 'OwnerAuthPayload';
  owner: Owner;
  /** JWT used for later owner authentication. */
  token: Scalars['String']['output'];
};

export type OwnerAuthResult = AuthError | OwnerAuthPayload;

export type OwnerAuthorizationError = BaseError & {
  __typename?: 'OwnerAuthorizationError';
  arbMessage: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  cities: Array<City>;
  getStadium: Stadium;
  getStadiums: Array<Stadium>;
  verifyOwner: VerifyOwnerResult;
  verifyUser: VerifyUserResult;
};


export type QueryGetStadiumArgs = {
  stadiumId: Scalars['ID']['input'];
};


export type QueryGetStadiumsArgs = {
  cursor?: InputMaybe<Scalars['ID']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type SignupInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Stadium = {
  __typename?: 'Stadium';
  /** Timeslots whose beginnig time is in the future and are not booked. */
  avillableTimeslots: Array<Timeslot>;
  /** Timeslots whose beginnig time is in the future and are booked. */
  bookedTimeslots: Array<Timeslot>;
  city?: Maybe<City>;
  /** The number of stadiums of the same properties the owner has. */
  count: Scalars['Int']['output'];
  /** Description for the stadium. */
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  name: Scalars['String']['output'];
  /** Timeslots whose beginnig time is in the past. */
  oldTimeslots: Array<Timeslot>;
  owner: Owner;
  /** The number of players per team including the goal keeper. */
  size?: Maybe<Scalars['Int']['output']>;
};

export type Timeslot = {
  __typename?: 'Timeslot';
  /** The user who booked the stadium for this timeslot. Null if not booked. */
  bookedBy?: Maybe<User>;
  /** Indicates the end of the allocated timeslot. */
  endTime: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Integer value representing the price for booking the stadium for this timeslot in EGP. */
  price: Scalars['Int']['output'];
  stadium: Stadium;
  /** Indicates the beginning of the allocated timeslot. */
  startTime: Scalars['DateTime']['output'];
};

export type User = {
  __typename?: 'User';
  currentTimeslots: Array<Timeslot>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  previousTimeslots: Array<Timeslot>;
  upcomingTimeslots: Array<Timeslot>;
  username: Scalars['String']['output'];
};

export type UserAuthPayload = {
  __typename?: 'UserAuthPayload';
  /** JWT used for later user authentication. */
  token: Scalars['String']['output'];
  user: User;
};

export type UserAuthResult = AuthError | UserAuthPayload;

export type UserAuthorizationError = BaseError & {
  __typename?: 'UserAuthorizationError';
  arbMessage: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type AddTimeslotInput = {
  endTime: Scalars['DateTime']['input'];
  price: Scalars['Int']['input'];
  stadiumId: Scalars['ID']['input'];
  startTime: Scalars['DateTime']['input'];
};

export type AddTimeslotResult = InvalidTimeslotDataError | OwnerAuthorizationError | Timeslot;

export type BookTimeslotResult = BookTimeslotError | Timeslot | UserAuthorizationError;

export type CreateStadiumInput = {
  cityId?: InputMaybe<Scalars['ID']['input']>;
  count?: InputMaybe<Scalars['Int']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  name: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateStadiumResult = OwnerAuthorizationError | Stadium;

export type VerifyOwnerResult = Owner | OwnerAuthorizationError;

export type VerifyUserResult = User | UserAuthorizationError;

export type UserLoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type UserLoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'AuthError', errorField: AuthField, message: string } | { __typename?: 'UserAuthPayload', token: string, user: { __typename?: 'User', id: string } } };

export type OwnerLoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type OwnerLoginMutation = { __typename?: 'Mutation', ownerLogin: { __typename?: 'AuthError', errorField: AuthField, message: string } | { __typename?: 'OwnerAuthPayload', token: string, owner: { __typename?: 'Owner', id: string } } };

export type OwnerSignupMutationVariables = Exact<{
  signupData: SignupInput;
}>;


export type OwnerSignupMutation = { __typename?: 'Mutation', ownerSignup: { __typename?: 'AuthError', message: string, errorField: AuthField } | { __typename?: 'OwnerAuthPayload', token: string, owner: { __typename?: 'Owner', id: string } } };

export type UserSignupMutationVariables = Exact<{
  signupData: SignupInput;
}>;


export type UserSignupMutation = { __typename?: 'Mutation', userSignup: { __typename?: 'AuthError', message: string, errorField: AuthField } | { __typename?: 'UserAuthPayload', token: string, user: { __typename?: 'User', id: string } } };

export type GetBookingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBookingsQuery = { __typename?: 'Query', verifyUser: { __typename?: 'User', previousTimeslots: Array<{ __typename?: 'Timeslot', id: string, endTime: any, price: number, startTime: any, stadium: { __typename?: 'Stadium', id: string, name: string, owner: { __typename?: 'Owner', username: string }, city?: { __typename?: 'City', name: string } | null } }>, currentTimeslots: Array<{ __typename?: 'Timeslot', id: string, endTime: any, price: number, startTime: any, stadium: { __typename?: 'Stadium', id: string, name: string, owner: { __typename?: 'Owner', username: string }, city?: { __typename?: 'City', name: string } | null } }>, upcomingTimeslots: Array<{ __typename?: 'Timeslot', id: string, endTime: any, price: number, startTime: any, stadium: { __typename?: 'Stadium', id: string, name: string, owner: { __typename?: 'Owner', username: string }, city?: { __typename?: 'City', name: string } | null } }> } | { __typename?: 'UserAuthorizationError' } };

export type GetOwnerProfileDataQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetOwnerProfileDataQuery = { __typename?: 'Query', verifyOwner: { __typename?: 'Owner', email: string, username: string, stadiums: Array<{ __typename?: 'Stadium', id: string, name: string, size?: number | null, location?: { __typename?: 'Location', latitude: number, longitude: number } | null, owner: { __typename?: 'Owner', username: string }, city?: { __typename?: 'City', name: string } | null }> } | { __typename?: 'OwnerAuthorizationError', message: string } };

export type GetStadiumsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['ID']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetStadiumsQuery = { __typename?: 'Query', getStadiums: Array<{ __typename?: 'Stadium', id: string, name: string, count: number, size?: number | null, owner: { __typename?: 'Owner', id: string, email: string, username: string }, location?: { __typename?: 'Location', latitude: number, longitude: number } | null, city?: { __typename?: 'City', name: string } | null }> };

export type BookTimeslotMutationVariables = Exact<{
  timeslotId: Scalars['ID']['input'];
}>;


export type BookTimeslotMutation = { __typename?: 'Mutation', bookTimeslot: { __typename?: 'BookTimeslotError', message: string } | { __typename?: 'Timeslot', id: string } | { __typename?: 'UserAuthorizationError', message: string } };

export type GetStadiumQueryVariables = Exact<{
  stadiumId: Scalars['ID']['input'];
}>;


export type GetStadiumQuery = { __typename?: 'Query', getStadium: { __typename?: 'Stadium', desc?: string | null, id: string, name: string, size?: number | null, avillableTimeslots: Array<{ __typename?: 'Timeslot', id: string, endTime: any, startTime: any, price: number }>, city?: { __typename?: 'City', name: string } | null, location?: { __typename?: 'Location', latitude: number, longitude: number } | null, owner: { __typename?: 'Owner', username: string, id: string } } };

export type MutationMutationVariables = Exact<{
  stadiumData: CreateStadiumInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', createStadium: { __typename?: 'OwnerAuthorizationError' } | { __typename?: 'Stadium', id: string } };

export type GetCitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCitiesQuery = { __typename?: 'Query', cities: Array<{ __typename?: 'City', id: string, name: string }> };


export const UserLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorField"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<UserLoginMutation, UserLoginMutationVariables>;
export const OwnerLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OwnerLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ownerLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OwnerAuthPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errorField"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<OwnerLoginMutation, OwnerLoginMutationVariables>;
export const OwnerSignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"OwnerSignup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signupData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ownerSignup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signupData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signupData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"errorField"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OwnerAuthPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<OwnerSignupMutation, OwnerSignupMutationVariables>;
export const UserSignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signupData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSignup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signupData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signupData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthPayload"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"errorField"}}]}}]}}]}}]} as unknown as DocumentNode<UserSignupMutation, UserSignupMutationVariables>;
export const GetBookingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBookings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"previousTimeslots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"stadium"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"currentTimeslots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"stadium"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}}]}},{"kind":"Field","name":{"kind":"Name","value":"upcomingTimeslots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"stadium"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetBookingsQuery, GetBookingsQueryVariables>;
export const GetOwnerProfileDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOwnerProfileData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyOwner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Owner"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"stadiums"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OwnerAuthorizationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<GetOwnerProfileDataQuery, GetOwnerProfileDataQueryVariables>;
export const GetStadiumsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStadiums"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStadiums"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetStadiumsQuery, GetStadiumsQueryVariables>;
export const BookTimeslotDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"BookTimeslot"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timeslotId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bookTimeslot"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"timeslotId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timeslotId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timeslot"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthorizationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BookTimeslotError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<BookTimeslotMutation, BookTimeslotMutationVariables>;
export const GetStadiumDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStadium"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stadiumId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStadium"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stadiumId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stadiumId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avillableTimeslots"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"city"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"desc"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetStadiumQuery, GetStadiumQueryVariables>;
export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stadiumData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"createStadiumInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createStadium"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"stadiumData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stadiumData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Stadium"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const GetCitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cities"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetCitiesQuery, GetCitiesQueryVariables>;