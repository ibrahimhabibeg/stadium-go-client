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

export type Location = {
  __typename?: 'Location';
  latitude: Scalars['Int']['output'];
  longitude: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createStadium: CreateStadiumResult;
  ownerLogin: OwnerAuthResult;
  ownerSignup: OwnerAuthResult;
  userLogin: UserAuthResult;
  userSignup: UserAuthResult;
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
  getStadium: Stadium;
  getStadiums: Array<Stadium>;
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
  /** The number of stadiums of the same properties the owner has. */
  count: Scalars['Int']['output'];
  /** Description for the stadium. */
  desc?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Location>;
  name: Scalars['String']['output'];
  owner: Owner;
  /** The number of players per team including the goal keeper. */
  size?: Maybe<Scalars['Int']['output']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type UserAuthPayload = {
  __typename?: 'UserAuthPayload';
  /** JWT used for later user authentication. */
  token: Scalars['String']['output'];
  user: User;
};

export type UserAuthResult = AuthError | UserAuthPayload;

export type CreateStadiumInput = {
  count?: InputMaybe<Scalars['Int']['input']>;
  desc?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Int']['input']>;
  longitude?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateStadiumResult = OwnerAuthorizationError | Stadium;

export type GetStadiumsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStadiumsQuery = { __typename?: 'Query', getStadiums: Array<{ __typename?: 'Stadium', id: string, name: string, count: number, desc?: string | null, size?: number | null, owner: { __typename?: 'Owner', id: string, email: string, username: string }, location?: { __typename?: 'Location', latitude: number, longitude: number } | null }> };


export const GetStadiumsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStadiums"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getStadiums"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"desc"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"latitude"}},{"kind":"Field","name":{"kind":"Name","value":"longitude"}}]}}]}}]}}]} as unknown as DocumentNode<GetStadiumsQuery, GetStadiumsQueryVariables>;