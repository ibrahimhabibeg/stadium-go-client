/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation UserLogin($email: String!, $password: String!) {\n    userLogin(email: $email, password: $password) {\n      ... on UserAuthPayload {\n        token\n        user {\n          id\n        }\n      }\n      ... on AuthError {\n        errorField\n        message\n      }\n    }\n  }\n": types.UserLoginDocument,
    "\n  mutation OwnerSignup($signupData: SignupInput!) {\n    ownerSignup(signupData: $signupData) {\n      ... on AuthError {\n        message\n        errorField\n      }\n      ... on OwnerAuthPayload {\n        token\n        owner {\n          id\n        }\n      }\n    }\n  }\n": types.OwnerSignupDocument,
    "\n  mutation UserSignup($signupData: SignupInput!) {\n    userSignup(signupData: $signupData) {\n      ... on UserAuthPayload {\n        token\n        user {\n          id\n        }\n      }\n      ... on AuthError {\n        message\n        errorField\n      }\n    }\n  }\n": types.UserSignupDocument,
    "\n  query GetStadiums {\n    getStadiums {\n      id\n      owner {\n        id\n        email\n        username\n      }\n      name\n      count\n      desc\n      size\n      location {\n        latitude\n        longitude\n      }\n    }\n  }\n": types.GetStadiumsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UserLogin($email: String!, $password: String!) {\n    userLogin(email: $email, password: $password) {\n      ... on UserAuthPayload {\n        token\n        user {\n          id\n        }\n      }\n      ... on AuthError {\n        errorField\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UserLogin($email: String!, $password: String!) {\n    userLogin(email: $email, password: $password) {\n      ... on UserAuthPayload {\n        token\n        user {\n          id\n        }\n      }\n      ... on AuthError {\n        errorField\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation OwnerSignup($signupData: SignupInput!) {\n    ownerSignup(signupData: $signupData) {\n      ... on AuthError {\n        message\n        errorField\n      }\n      ... on OwnerAuthPayload {\n        token\n        owner {\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation OwnerSignup($signupData: SignupInput!) {\n    ownerSignup(signupData: $signupData) {\n      ... on AuthError {\n        message\n        errorField\n      }\n      ... on OwnerAuthPayload {\n        token\n        owner {\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UserSignup($signupData: SignupInput!) {\n    userSignup(signupData: $signupData) {\n      ... on UserAuthPayload {\n        token\n        user {\n          id\n        }\n      }\n      ... on AuthError {\n        message\n        errorField\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UserSignup($signupData: SignupInput!) {\n    userSignup(signupData: $signupData) {\n      ... on UserAuthPayload {\n        token\n        user {\n          id\n        }\n      }\n      ... on AuthError {\n        message\n        errorField\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStadiums {\n    getStadiums {\n      id\n      owner {\n        id\n        email\n        username\n      }\n      name\n      count\n      desc\n      size\n      location {\n        latitude\n        longitude\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStadiums {\n    getStadiums {\n      id\n      owner {\n        id\n        email\n        username\n      }\n      name\n      count\n      desc\n      size\n      location {\n        latitude\n        longitude\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;