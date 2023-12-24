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
    "\n  mutation OwnerLogin($email: String!, $password: String!) {\n    ownerLogin(email: $email, password: $password) {\n      ... on OwnerAuthPayload {\n        token\n        owner {\n          id\n        }\n      }\n      ... on AuthError {\n        errorField\n        message\n      }\n    }\n  }\n": types.OwnerLoginDocument,
    "\n  mutation OwnerSignup($signupData: SignupInput!) {\n    ownerSignup(signupData: $signupData) {\n      ... on AuthError {\n        message\n        errorField\n      }\n      ... on OwnerAuthPayload {\n        token\n        owner {\n          id\n        }\n      }\n    }\n  }\n": types.OwnerSignupDocument,
    "\n  mutation UserSignup($signupData: SignupInput!) {\n    userSignup(signupData: $signupData) {\n      ... on UserAuthPayload {\n        token\n        user {\n          id\n        }\n      }\n      ... on AuthError {\n        message\n        errorField\n      }\n    }\n  }\n": types.UserSignupDocument,
    "\n  query GetBookings {\n    verifyUser {\n      ... on User {\n        previousTimeslots {\n          id\n          endTime\n          price\n          stadium {\n            id\n            name\n            owner {\n              username\n            }\n            city {\n              name\n            }\n          }\n          startTime\n        }\n        currentTimeslots {\n          id\n          endTime\n          price\n          stadium {\n            id\n            name\n            owner {\n              username\n            }\n            city {\n              name\n            }\n          }\n          startTime\n        }\n        upcomingTimeslots {\n          id\n          endTime\n          price\n          stadium {\n            id\n            name\n            owner {\n              username\n            }\n            city {\n              name\n            }\n          }\n          startTime\n        }\n      }\n    }\n  }\n": types.GetBookingsDocument,
    "\n  query GetOwnerProfileData($cursor: ID, $take: Int) {\n    verifyOwner {\n      ... on Owner {\n        email\n        username\n        stadiums(cursor: $cursor, take: $take) {\n          id\n          name\n          size\n          location {\n            latitude\n            longitude\n          }\n          owner {\n            username\n          }\n          city {\n            name\n          }\n        }\n      }\n      ... on OwnerAuthorizationError {\n        message\n      }\n    }\n  }\n": types.GetOwnerProfileDataDocument,
    "\n  query GetUserProfileDataQuery {\n    verifyUser {\n      ... on User {\n        username\n        email\n      }\n      ... on UserAuthorizationError {\n        message\n      }\n    }\n  }\n": types.GetUserProfileDataQueryDocument,
    "\n  mutation AddTimeslotMutation($timeslotData: addTimeslotInput!) {\n    addTimeslot(timeslotData: $timeslotData) {\n      ... on OwnerAuthorizationError {\n        message\n      }\n      ... on InvalidTimeslotDataError {\n        message\n      }\n      ... on Timeslot {\n        id\n      }\n    }\n  }\n": types.AddTimeslotMutationDocument,
    "\n  query GetStadiums($cursor: ID, $take: Int, $filter: String) {\n    getStadiums(cursor: $cursor, take: $take, filter: $filter) {\n      id\n      owner {\n        id\n        email\n        username\n      }\n      name\n      count\n      size\n      location {\n        latitude\n        longitude\n      }\n      city {\n        name\n      }\n    }\n  }\n": types.GetStadiumsDocument,
    "\n  query GetStadiumForOwner($stadiumId: ID!) {\n    getStadium(stadiumId: $stadiumId) {\n      bookedTimeslots {\n        price\n        endTime\n        startTime\n        bookedBy {\n          username\n        }\n        id\n      }\n      avillableTimeslots {\n        endTime\n        price\n        startTime\n        id\n      }\n      oldTimeslots {\n        startTime\n        endTime\n        price\n        bookedBy {\n          username\n        }\n        id\n      }\n      city {\n        name\n      }\n      desc\n      id\n      location {\n        latitude\n        longitude\n      }\n      name\n      size\n      owner {\n        username\n        id\n      }\n    }\n  }\n": types.GetStadiumForOwnerDocument,
    "\n  mutation BookTimeslot($timeslotId: ID!) {\n    bookTimeslot(timeslotId: $timeslotId) {\n      ... on Timeslot {\n        id\n      }\n      ... on UserAuthorizationError {\n        message\n      }\n      ... on BookTimeslotError {\n        message\n      }\n    }\n  }\n": types.BookTimeslotDocument,
    "\n  query GetStadium($stadiumId: ID!) {\n    getStadium(stadiumId: $stadiumId) {\n      avillableTimeslots {\n        id\n        endTime\n        startTime\n        price\n      }\n      city {\n        name\n      }\n      desc\n      id\n      location {\n        latitude\n        longitude\n      }\n      name\n      size\n      owner {\n        username\n        id\n      }\n    }\n  }\n": types.GetStadiumDocument,
    "\n  mutation Mutation($stadiumData: createStadiumInput!) {\n    createStadium(stadiumData: $stadiumData) {\n      ... on Stadium {\n        id\n      }\n    }\n  }\n": types.MutationDocument,
    "\n  query GetCities {\n    cities {\n      id\n      name\n    }\n  }\n": types.GetCitiesDocument,
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
export function graphql(source: "\n  mutation OwnerLogin($email: String!, $password: String!) {\n    ownerLogin(email: $email, password: $password) {\n      ... on OwnerAuthPayload {\n        token\n        owner {\n          id\n        }\n      }\n      ... on AuthError {\n        errorField\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation OwnerLogin($email: String!, $password: String!) {\n    ownerLogin(email: $email, password: $password) {\n      ... on OwnerAuthPayload {\n        token\n        owner {\n          id\n        }\n      }\n      ... on AuthError {\n        errorField\n        message\n      }\n    }\n  }\n"];
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
export function graphql(source: "\n  query GetBookings {\n    verifyUser {\n      ... on User {\n        previousTimeslots {\n          id\n          endTime\n          price\n          stadium {\n            id\n            name\n            owner {\n              username\n            }\n            city {\n              name\n            }\n          }\n          startTime\n        }\n        currentTimeslots {\n          id\n          endTime\n          price\n          stadium {\n            id\n            name\n            owner {\n              username\n            }\n            city {\n              name\n            }\n          }\n          startTime\n        }\n        upcomingTimeslots {\n          id\n          endTime\n          price\n          stadium {\n            id\n            name\n            owner {\n              username\n            }\n            city {\n              name\n            }\n          }\n          startTime\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBookings {\n    verifyUser {\n      ... on User {\n        previousTimeslots {\n          id\n          endTime\n          price\n          stadium {\n            id\n            name\n            owner {\n              username\n            }\n            city {\n              name\n            }\n          }\n          startTime\n        }\n        currentTimeslots {\n          id\n          endTime\n          price\n          stadium {\n            id\n            name\n            owner {\n              username\n            }\n            city {\n              name\n            }\n          }\n          startTime\n        }\n        upcomingTimeslots {\n          id\n          endTime\n          price\n          stadium {\n            id\n            name\n            owner {\n              username\n            }\n            city {\n              name\n            }\n          }\n          startTime\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetOwnerProfileData($cursor: ID, $take: Int) {\n    verifyOwner {\n      ... on Owner {\n        email\n        username\n        stadiums(cursor: $cursor, take: $take) {\n          id\n          name\n          size\n          location {\n            latitude\n            longitude\n          }\n          owner {\n            username\n          }\n          city {\n            name\n          }\n        }\n      }\n      ... on OwnerAuthorizationError {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOwnerProfileData($cursor: ID, $take: Int) {\n    verifyOwner {\n      ... on Owner {\n        email\n        username\n        stadiums(cursor: $cursor, take: $take) {\n          id\n          name\n          size\n          location {\n            latitude\n            longitude\n          }\n          owner {\n            username\n          }\n          city {\n            name\n          }\n        }\n      }\n      ... on OwnerAuthorizationError {\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetUserProfileDataQuery {\n    verifyUser {\n      ... on User {\n        username\n        email\n      }\n      ... on UserAuthorizationError {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetUserProfileDataQuery {\n    verifyUser {\n      ... on User {\n        username\n        email\n      }\n      ... on UserAuthorizationError {\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddTimeslotMutation($timeslotData: addTimeslotInput!) {\n    addTimeslot(timeslotData: $timeslotData) {\n      ... on OwnerAuthorizationError {\n        message\n      }\n      ... on InvalidTimeslotDataError {\n        message\n      }\n      ... on Timeslot {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddTimeslotMutation($timeslotData: addTimeslotInput!) {\n    addTimeslot(timeslotData: $timeslotData) {\n      ... on OwnerAuthorizationError {\n        message\n      }\n      ... on InvalidTimeslotDataError {\n        message\n      }\n      ... on Timeslot {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStadiums($cursor: ID, $take: Int, $filter: String) {\n    getStadiums(cursor: $cursor, take: $take, filter: $filter) {\n      id\n      owner {\n        id\n        email\n        username\n      }\n      name\n      count\n      size\n      location {\n        latitude\n        longitude\n      }\n      city {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStadiums($cursor: ID, $take: Int, $filter: String) {\n    getStadiums(cursor: $cursor, take: $take, filter: $filter) {\n      id\n      owner {\n        id\n        email\n        username\n      }\n      name\n      count\n      size\n      location {\n        latitude\n        longitude\n      }\n      city {\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStadiumForOwner($stadiumId: ID!) {\n    getStadium(stadiumId: $stadiumId) {\n      bookedTimeslots {\n        price\n        endTime\n        startTime\n        bookedBy {\n          username\n        }\n        id\n      }\n      avillableTimeslots {\n        endTime\n        price\n        startTime\n        id\n      }\n      oldTimeslots {\n        startTime\n        endTime\n        price\n        bookedBy {\n          username\n        }\n        id\n      }\n      city {\n        name\n      }\n      desc\n      id\n      location {\n        latitude\n        longitude\n      }\n      name\n      size\n      owner {\n        username\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStadiumForOwner($stadiumId: ID!) {\n    getStadium(stadiumId: $stadiumId) {\n      bookedTimeslots {\n        price\n        endTime\n        startTime\n        bookedBy {\n          username\n        }\n        id\n      }\n      avillableTimeslots {\n        endTime\n        price\n        startTime\n        id\n      }\n      oldTimeslots {\n        startTime\n        endTime\n        price\n        bookedBy {\n          username\n        }\n        id\n      }\n      city {\n        name\n      }\n      desc\n      id\n      location {\n        latitude\n        longitude\n      }\n      name\n      size\n      owner {\n        username\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation BookTimeslot($timeslotId: ID!) {\n    bookTimeslot(timeslotId: $timeslotId) {\n      ... on Timeslot {\n        id\n      }\n      ... on UserAuthorizationError {\n        message\n      }\n      ... on BookTimeslotError {\n        message\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation BookTimeslot($timeslotId: ID!) {\n    bookTimeslot(timeslotId: $timeslotId) {\n      ... on Timeslot {\n        id\n      }\n      ... on UserAuthorizationError {\n        message\n      }\n      ... on BookTimeslotError {\n        message\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetStadium($stadiumId: ID!) {\n    getStadium(stadiumId: $stadiumId) {\n      avillableTimeslots {\n        id\n        endTime\n        startTime\n        price\n      }\n      city {\n        name\n      }\n      desc\n      id\n      location {\n        latitude\n        longitude\n      }\n      name\n      size\n      owner {\n        username\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetStadium($stadiumId: ID!) {\n    getStadium(stadiumId: $stadiumId) {\n      avillableTimeslots {\n        id\n        endTime\n        startTime\n        price\n      }\n      city {\n        name\n      }\n      desc\n      id\n      location {\n        latitude\n        longitude\n      }\n      name\n      size\n      owner {\n        username\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation Mutation($stadiumData: createStadiumInput!) {\n    createStadium(stadiumData: $stadiumData) {\n      ... on Stadium {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation Mutation($stadiumData: createStadiumInput!) {\n    createStadium(stadiumData: $stadiumData) {\n      ... on Stadium {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCities {\n    cities {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query GetCities {\n    cities {\n      id\n      name\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;