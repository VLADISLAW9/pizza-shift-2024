import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type BaseResponse = {
  readonly __typename?: 'BaseResponse';
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type CalculateDeliveryPackageDto = {
  readonly height: Scalars['Float']['input'];
  readonly length: Scalars['Float']['input'];
  readonly weight: Scalars['Float']['input'];
  readonly width: Scalars['Float']['input'];
};

export type CalculateDeliveryPointDto = {
  readonly latitude: Scalars['Float']['input'];
  readonly longitude: Scalars['Float']['input'];
};

export type CalculateDeliveryResponse = {
  readonly __typename?: 'CalculateDeliveryResponse';
  readonly options: ReadonlyArray<DeliveryOption>;
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type CinemaOrder = {
  readonly __typename?: 'CinemaOrder';
  readonly _id: Scalars['String']['output'];
  readonly filmName: Scalars['String']['output'];
  readonly orderNumber: Scalars['Float']['output'];
  readonly phone: Scalars['String']['output'];
  readonly status: CinemaOrderStatus;
  readonly tickets: ReadonlyArray<Ticket>;
};

export type CinemaOrderInput = {
  readonly _id: Scalars['String']['input'];
  readonly filmName: Scalars['String']['input'];
  readonly orderNumber: Scalars['Float']['input'];
  readonly phone: Scalars['String']['input'];
  readonly status: CinemaOrderStatus;
  readonly tickets: ReadonlyArray<TicketInput>;
};

export enum CinemaOrderStatus {
  Canceled = 'CANCELED',
  Payed = 'PAYED'
}

export type CinemaPersonInput = {
  readonly fullName: Scalars['String']['input'];
  readonly id: Scalars['String']['input'];
  readonly professions: ReadonlyArray<Profession>;
};

export type Country = {
  readonly __typename?: 'Country';
  readonly code: Scalars['String']['output'];
  readonly code2: Scalars['String']['output'];
  readonly id: Scalars['Float']['output'];
  readonly name: Scalars['String']['output'];
};

export type CountryInput = {
  readonly code: Scalars['String']['input'];
  readonly code2: Scalars['String']['input'];
  readonly id: Scalars['Float']['input'];
  readonly name: Scalars['String']['input'];
};

export type CreateDeliveryOrderAddressDto = {
  readonly apartment: Scalars['String']['input'];
  readonly comment: InputMaybe<Scalars['String']['input']>;
  readonly house: Scalars['String']['input'];
  readonly street: Scalars['String']['input'];
};

export type CreateDeliveryOrderDeliveryOptionDto = {
  readonly days: Scalars['Float']['input'];
  readonly id: Scalars['String']['input'];
  readonly name: Scalars['String']['input'];
  readonly price: Scalars['Float']['input'];
  readonly type: DeliveryOptionType;
};

export type CreateDeliveryOrderPersonDto = {
  readonly firstname: Scalars['String']['input'];
  readonly lastname: Scalars['String']['input'];
  readonly middlename: InputMaybe<Scalars['String']['input']>;
  readonly phone: Scalars['String']['input'];
};

export type CreateDeliveryOrderPointDto = {
  readonly id: Scalars['String']['input'];
  readonly latitude: Scalars['Float']['input'];
  readonly longitude: Scalars['Float']['input'];
  readonly name: Scalars['String']['input'];
};

export type CreatePaymentDebitCardDto = {
  readonly cvv: Scalars['String']['input'];
  readonly expireDate: Scalars['String']['input'];
  readonly pan: Scalars['String']['input'];
};

export type CreatePaymentPersonDto = {
  readonly firstname: Scalars['String']['input'];
  readonly lastname: Scalars['String']['input'];
  readonly middlename: InputMaybe<Scalars['String']['input']>;
  readonly phone: Scalars['String']['input'];
};

export type CreatePaymentSeanceDto = {
  readonly date: Scalars['String']['input'];
  readonly time: Scalars['String']['input'];
};

export type CreatePaymentTicketsDto = {
  readonly column: Scalars['Float']['input'];
  readonly row: Scalars['Float']['input'];
};

export type CreatePizzaPaymentAddressDto = {
  readonly apartment: Scalars['String']['input'];
  readonly comment: InputMaybe<Scalars['String']['input']>;
  readonly house: Scalars['String']['input'];
  readonly street: Scalars['String']['input'];
};

export type CreatePizzaPaymentDebitCardDto = {
  readonly cvv: Scalars['String']['input'];
  readonly expireDate: Scalars['String']['input'];
  readonly pan: Scalars['String']['input'];
};

export type CreatePizzaPaymentPersonDto = {
  readonly firstname: Scalars['String']['input'];
  readonly lastname: Scalars['String']['input'];
  readonly middlename: InputMaybe<Scalars['String']['input']>;
  readonly phone: Scalars['String']['input'];
};

export type CreatePizzaPaymentPizzaDto = {
  readonly description: Scalars['String']['input'];
  readonly doughs: PizzaDoughInput;
  readonly id: Scalars['String']['input'];
  readonly name: Scalars['String']['input'];
  readonly size: ReadonlyArray<PizzaSizeInput>;
  readonly toppings: ReadonlyArray<PizzaIngredientInput>;
};

export type DeliverResponse = {
  readonly __typename?: 'DeliverResponse';
  readonly order: DeliveryOrder;
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type DeliveryAddress = {
  readonly __typename?: 'DeliveryAddress';
  readonly apartment: Scalars['String']['output'];
  readonly comment: Maybe<Scalars['String']['output']>;
  readonly house: Scalars['String']['output'];
  readonly street: Scalars['String']['output'];
};

export type DeliveryAddressInput = {
  readonly apartment: Scalars['String']['input'];
  readonly comment: InputMaybe<Scalars['String']['input']>;
  readonly house: Scalars['String']['input'];
  readonly street: Scalars['String']['input'];
};

export type DeliveryOption = {
  readonly __typename?: 'DeliveryOption';
  readonly days: Scalars['Float']['output'];
  readonly id: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly price: Scalars['Float']['output'];
  readonly type: DeliveryOptionType;
};

export enum DeliveryOptionType {
  Default = 'DEFAULT',
  Express = 'EXPRESS'
}

export type DeliveryOpttionInput = {
  readonly days: Scalars['Float']['input'];
  readonly id: Scalars['String']['input'];
  readonly name: Scalars['String']['input'];
  readonly price: Scalars['Float']['input'];
  readonly type: DeliveryOptionType;
};

export type DeliveryOrder = {
  readonly __typename?: 'DeliveryOrder';
  readonly _id: Scalars['String']['output'];
  readonly cancellable: Scalars['Boolean']['output'];
  readonly payer: Payer;
  readonly receiver: DeliveryPerson;
  readonly receiverAddress: DeliveryAddress;
  readonly receiverPoint: DeliveryPoint;
  readonly sender: DeliveryPerson;
  readonly senderAddress: DeliveryAddress;
  readonly senderPoint: DeliveryPoint;
  readonly status: DeliveryStatus;
};

export type DeliveryOrderInput = {
  readonly _id: Scalars['String']['input'];
  readonly cancellable: Scalars['Boolean']['input'];
  readonly payer: Payer;
  readonly receiver: DeliveryPersonInput;
  readonly receiverAddress: DeliveryAddressInput;
  readonly receiverPoint: DeliveryPointInput;
  readonly sender: DeliveryPersonInput;
  readonly senderAddress: DeliveryAddressInput;
  readonly senderPoint: DeliveryPointInput;
  readonly status: DeliveryStatus;
};

export type DeliveryOrderResponse = {
  readonly __typename?: 'DeliveryOrderResponse';
  readonly order: DeliveryOrder;
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type DeliveryOrdersResponse = {
  readonly __typename?: 'DeliveryOrdersResponse';
  readonly orders: ReadonlyArray<DeliveryOrder>;
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type DeliveryPackageType = {
  readonly __typename?: 'DeliveryPackageType';
  readonly height: Scalars['Float']['output'];
  readonly id: Scalars['String']['output'];
  readonly length: Scalars['Float']['output'];
  readonly name: Scalars['String']['output'];
  readonly weight: Scalars['Float']['output'];
  readonly width: Scalars['Float']['output'];
};

export type DeliveryPackageTypeInput = {
  readonly height: Scalars['Float']['input'];
  readonly id: Scalars['String']['input'];
  readonly length: Scalars['Float']['input'];
  readonly name: Scalars['String']['input'];
  readonly weight: Scalars['Float']['input'];
  readonly width: Scalars['Float']['input'];
};

export type DeliveryPackageTypesResponse = {
  readonly __typename?: 'DeliveryPackageTypesResponse';
  readonly packages: ReadonlyArray<DeliveryPackageType>;
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type DeliveryPerson = {
  readonly __typename?: 'DeliveryPerson';
  readonly firstname: Scalars['String']['output'];
  readonly lastname: Scalars['String']['output'];
  readonly middlename: Maybe<Scalars['String']['output']>;
  readonly phone: Scalars['String']['output'];
};

export type DeliveryPersonInput = {
  readonly firstname: Scalars['String']['input'];
  readonly lastname: Scalars['String']['input'];
  readonly middlename: InputMaybe<Scalars['String']['input']>;
  readonly phone: Scalars['String']['input'];
};

export type DeliveryPoint = {
  readonly __typename?: 'DeliveryPoint';
  readonly id: Scalars['String']['output'];
  readonly latitude: Scalars['Float']['output'];
  readonly longitude: Scalars['Float']['output'];
  readonly name: Scalars['String']['output'];
};

export type DeliveryPointInput = {
  readonly id: Scalars['String']['input'];
  readonly latitude: Scalars['Float']['input'];
  readonly longitude: Scalars['Float']['input'];
  readonly name: Scalars['String']['input'];
};

export type DeliveryPointsResponse = {
  readonly __typename?: 'DeliveryPointsResponse';
  readonly points: ReadonlyArray<DeliveryPoint>;
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export enum DeliveryStatus {
  Canceled = 'CANCELED',
  InProcessing = 'IN_PROCESSING',
  OnMyWay = 'ON_MY_WAY',
  Success = 'SUCCESS',
  WaitingCourier = 'WAITING_COURIER'
}

export enum Dough {
  Thick = 'THICK',
  Thin = 'THIN'
}

export type Film = {
  readonly __typename?: 'Film';
  readonly actors: ReadonlyArray<FilmPerson>;
  readonly ageRating: Rating;
  readonly country: Maybe<Country>;
  readonly description: Scalars['String']['output'];
  readonly directors: ReadonlyArray<FilmPerson>;
  readonly genres: ReadonlyArray<Scalars['String']['output']>;
  readonly id: Scalars['String']['output'];
  readonly img: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly originalName: Scalars['String']['output'];
  readonly releaseDate: Scalars['String']['output'];
  readonly runtime: Scalars['Float']['output'];
  readonly userRatings: FilmUserRaiting;
};

export type FilmHall = {
  readonly __typename?: 'FilmHall';
  readonly name: Scalars['String']['output'];
  readonly places: ReadonlyArray<ReadonlyArray<FilmHallCell>>;
};

export type FilmHallCell = {
  readonly __typename?: 'FilmHallCell';
  readonly price: Scalars['Float']['output'];
  readonly type: FilmHallCellType;
};

export type FilmHallCellInput = {
  readonly price: Scalars['Float']['input'];
  readonly type: FilmHallCellType;
};

export enum FilmHallCellType {
  Blocked = 'BLOCKED',
  Comfort = 'COMFORT',
  Econom = 'ECONOM'
}

export type FilmHallInput = {
  readonly name: Scalars['String']['input'];
  readonly places: ReadonlyArray<ReadonlyArray<FilmHallCellInput>>;
};

export type FilmInput = {
  readonly actors: ReadonlyArray<CinemaPersonInput>;
  readonly ageRating: Rating;
  readonly country: InputMaybe<CountryInput>;
  readonly description: Scalars['String']['input'];
  readonly directors: ReadonlyArray<CinemaPersonInput>;
  readonly genres: ReadonlyArray<Scalars['String']['input']>;
  readonly id: Scalars['String']['input'];
  readonly img: Scalars['String']['input'];
  readonly name: Scalars['String']['input'];
  readonly originalName: Scalars['String']['input'];
  readonly releaseDate: Scalars['String']['input'];
  readonly runtime: Scalars['Float']['input'];
  readonly userRatings: FilmUserRaitingInput;
};

export type FilmPerson = {
  readonly __typename?: 'FilmPerson';
  readonly fullName: Scalars['String']['output'];
  readonly id: Scalars['String']['output'];
  readonly professions: ReadonlyArray<Profession>;
};

export type FilmResponse = {
  readonly __typename?: 'FilmResponse';
  readonly film: Film;
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type FilmTicketSeance = {
  readonly __typename?: 'FilmTicketSeance';
  readonly date: Scalars['String']['output'];
  readonly time: Scalars['String']['output'];
};

export type FilmTicketSeanceInput = {
  readonly date: Scalars['String']['input'];
  readonly time: Scalars['String']['input'];
};

export type FilmUserRaiting = {
  readonly __typename?: 'FilmUserRaiting';
  readonly imdb: Scalars['String']['output'];
  readonly kinopoisk: Scalars['String']['output'];
};

export type FilmUserRaitingInput = {
  readonly imdb: Scalars['String']['input'];
  readonly kinopoisk: Scalars['String']['input'];
};

export type FilmsResponse = {
  readonly __typename?: 'FilmsResponse';
  readonly films: ReadonlyArray<Film>;
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export enum Ingredient {
  Bacon = 'BACON',
  Basil = 'BASIL',
  Cheddar = 'CHEDDAR',
  ChickenFillet = 'CHICKEN_FILLET',
  Chile = 'CHILE',
  Feta = 'FETA',
  GreenPepper = 'GREEN_PEPPER',
  Ham = 'HAM',
  Meatballs = 'MEATBALLS',
  Mozzarella = 'MOZZARELLA',
  Mushrooms = 'MUSHROOMS',
  Onion = 'ONION',
  Parmesan = 'PARMESAN',
  Peperoni = 'PEPERONI',
  Pickle = 'PICKLE',
  Pineapple = 'PINEAPPLE',
  Shrimps = 'SHRIMPS',
  Tomato = 'TOMATO'
}

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly calculateDelivery: CalculateDeliveryResponse;
  readonly cancelCinemaOrder: BaseResponse;
  readonly cancelDeliveryOrder: BaseResponse;
  readonly cancelPizzaOrder: BaseResponse;
  readonly createCinemaPayment: PaymentResponse;
  readonly createDeliveryOrder: DeliverResponse;
  readonly createOtp: OtpResponse;
  readonly createPizzaPayment: PizzaPaymentResponse;
  readonly signin: SignInResponse;
  readonly updateProfile: UpdateProfileResponse;
};


export type MutationCalculateDeliveryArgs = {
  package: CalculateDeliveryPackageDto;
  receiverPoint: CalculateDeliveryPointDto;
  senderPoint: CalculateDeliveryPointDto;
};


export type MutationCancelCinemaOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationCancelDeliveryOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationCancelPizzaOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type MutationCreateCinemaPaymentArgs = {
  debitCard: CreatePaymentDebitCardDto;
  filmId: Scalars['String']['input'];
  person: CreatePaymentPersonDto;
  seance: CreatePaymentSeanceDto;
  tickets: ReadonlyArray<CreatePaymentTicketsDto>;
};


export type MutationCreateDeliveryOrderArgs = {
  option: CreateDeliveryOrderDeliveryOptionDto;
  payer: Payer;
  receiver: CreateDeliveryOrderPersonDto;
  receiverAddress: CreateDeliveryOrderAddressDto;
  receiverPoint: CreateDeliveryOrderPointDto;
  sender: CreateDeliveryOrderPersonDto;
  senderAddress: CreateDeliveryOrderAddressDto;
  senderPoint: CreateDeliveryOrderPointDto;
};


export type MutationCreateOtpArgs = {
  phone: Scalars['String']['input'];
};


export type MutationCreatePizzaPaymentArgs = {
  debitCard: CreatePizzaPaymentDebitCardDto;
  person: CreatePizzaPaymentPersonDto;
  pizzas: ReadonlyArray<CreatePizzaPaymentPizzaDto>;
  receiverAddress: CreatePizzaPaymentAddressDto;
};


export type MutationSigninArgs = {
  code: Scalars['Float']['input'];
  phone: Scalars['String']['input'];
};


export type MutationUpdateProfileArgs = {
  phone: Scalars['String']['input'];
  profile: UpdateProfileProfileDto;
};

export type Otp = {
  readonly __typename?: 'Otp';
  readonly _id: Scalars['String']['output'];
  readonly code: Scalars['Float']['output'];
  readonly created: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly retryDelay: Scalars['Float']['output'];
};

export type OtpInput = {
  readonly _id: Scalars['String']['input'];
  readonly code: Scalars['Float']['input'];
  readonly created: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly retryDelay: Scalars['Float']['input'];
};

export type OtpResponse = {
  readonly __typename?: 'OtpResponse';
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly retryDelay: Scalars['Float']['output'];
  readonly success: Scalars['Boolean']['output'];
};

export enum Payer {
  Receiver = 'RECEIVER',
  Sender = 'SENDER'
}

export type PaymentResponse = {
  readonly __typename?: 'PaymentResponse';
  readonly order: Scalars['String']['output'];
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type Pizza = {
  readonly __typename?: 'Pizza';
  readonly allergens: ReadonlyArray<Scalars['String']['output']>;
  readonly calories: Scalars['Float']['output'];
  readonly carbohydrates: Scalars['String']['output'];
  readonly description: Scalars['String']['output'];
  readonly doughs: ReadonlyArray<PizzaDough>;
  readonly id: Scalars['String']['output'];
  readonly img: Scalars['String']['output'];
  readonly ingredients: ReadonlyArray<PizzaIngredient>;
  readonly isGlutenFree: Scalars['Boolean']['output'];
  readonly isHit: Scalars['Boolean']['output'];
  readonly isNew: Scalars['Boolean']['output'];
  readonly isVegetarian: Scalars['Boolean']['output'];
  readonly name: Scalars['String']['output'];
  readonly protein: Scalars['String']['output'];
  readonly sizes: ReadonlyArray<PizzaSize>;
  readonly sodium: Scalars['String']['output'];
  readonly toppings: ReadonlyArray<PizzaIngredient>;
  readonly totalFat: Scalars['String']['output'];
};

export type PizzaAddress = {
  readonly __typename?: 'PizzaAddress';
  readonly apartment: Scalars['String']['output'];
  readonly comment: Maybe<Scalars['String']['output']>;
  readonly house: Scalars['String']['output'];
  readonly street: Scalars['String']['output'];
};

export type PizzaAddressInput = {
  readonly apartment: Scalars['String']['input'];
  readonly comment: InputMaybe<Scalars['String']['input']>;
  readonly house: Scalars['String']['input'];
  readonly street: Scalars['String']['input'];
};

export type PizzaDough = {
  readonly __typename?: 'PizzaDough';
  readonly name: Dough;
  readonly price: Scalars['Float']['output'];
};

export type PizzaDoughInput = {
  readonly name: Dough;
  readonly price: Scalars['Float']['input'];
};

export type PizzaIngredient = {
  readonly __typename?: 'PizzaIngredient';
  readonly cost: Scalars['Float']['output'];
  readonly img: Scalars['String']['output'];
  readonly name: Ingredient;
};

export type PizzaIngredientInput = {
  readonly cost: Scalars['Float']['input'];
  readonly img: Scalars['String']['input'];
  readonly name: Ingredient;
};

export type PizzaInput = {
  readonly allergens: ReadonlyArray<Scalars['String']['input']>;
  readonly calories: Scalars['Float']['input'];
  readonly carbohydrates: Scalars['String']['input'];
  readonly description: Scalars['String']['input'];
  readonly doughs: ReadonlyArray<PizzaDoughInput>;
  readonly id: Scalars['String']['input'];
  readonly img: Scalars['String']['input'];
  readonly ingredients: ReadonlyArray<PizzaIngredientInput>;
  readonly isGlutenFree: Scalars['Boolean']['input'];
  readonly isHit: Scalars['Boolean']['input'];
  readonly isNew: Scalars['Boolean']['input'];
  readonly isVegetarian: Scalars['Boolean']['input'];
  readonly name: Scalars['String']['input'];
  readonly protein: Scalars['String']['input'];
  readonly sizes: ReadonlyArray<PizzaSizeInput>;
  readonly sodium: Scalars['String']['input'];
  readonly toppings: ReadonlyArray<PizzaIngredientInput>;
  readonly totalFat: Scalars['String']['input'];
};

export type PizzaOrder = {
  readonly __typename?: 'PizzaOrder';
  readonly _id: Scalars['String']['output'];
  readonly cancellable: Scalars['Boolean']['output'];
  readonly person: PizzaPerson;
  readonly receiverAddress: PizzaAddress;
  readonly status: PizzaStatus;
};

export type PizzaOrderInput = {
  readonly _id: Scalars['String']['input'];
  readonly cancellable: Scalars['Boolean']['input'];
  readonly person: PizzaPersonInput;
  readonly receiverAddress: PizzaAddressInput;
  readonly status: PizzaStatus;
};

export type PizzaOrderResponse = {
  readonly __typename?: 'PizzaOrderResponse';
  readonly order: PizzaOrder;
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type PizzaOrdersResponse = {
  readonly __typename?: 'PizzaOrdersResponse';
  readonly orders: ReadonlyArray<PizzaOrder>;
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type PizzaPaymentResponse = {
  readonly __typename?: 'PizzaPaymentResponse';
  readonly order: PizzaOrder;
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export type PizzaPerson = {
  readonly __typename?: 'PizzaPerson';
  readonly firstname: Scalars['String']['output'];
  readonly lastname: Scalars['String']['output'];
  readonly middlename: Maybe<Scalars['String']['output']>;
  readonly phone: Scalars['String']['output'];
};

export type PizzaPersonInput = {
  readonly firstname: Scalars['String']['input'];
  readonly lastname: Scalars['String']['input'];
  readonly middlename: InputMaybe<Scalars['String']['input']>;
  readonly phone: Scalars['String']['input'];
};

export type PizzaSize = {
  readonly __typename?: 'PizzaSize';
  readonly name: Size;
  readonly price: Scalars['Float']['output'];
};

export type PizzaSizeInput = {
  readonly name: Size;
  readonly price: Scalars['Float']['input'];
};

export enum PizzaStatus {
  Canceled = 'CANCELED',
  InProcessing = 'IN_PROCESSING',
  OnMyWay = 'ON_MY_WAY',
  Success = 'SUCCESS',
  WaitingCourier = 'WAITING_COURIER'
}

export type PizzasResponse = {
  readonly __typename?: 'PizzasResponse';
  readonly catalog: ReadonlyArray<Pizza>;
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
};

export enum Profession {
  Actor = 'ACTOR',
  Director = 'DIRECTOR'
}

export type Query = {
  readonly __typename?: 'Query';
  readonly getCinemaOrders: TicketsResponse;
  readonly getCinemaToday: FilmsResponse;
  readonly getDeliveryOrder: DeliveryOrderResponse;
  readonly getDeliveryOrders: DeliveryOrdersResponse;
  readonly getDeliveryPackageTypes: DeliveryPackageTypesResponse;
  readonly getDeliveryPoints: DeliveryPointsResponse;
  readonly getFilm: FilmResponse;
  readonly getFilmSchedule: ScheduleResponse;
  readonly getPizzaOrder: PizzaOrderResponse;
  readonly getPizzaOrders: PizzaOrdersResponse;
  readonly getPizzasCatalog: PizzasResponse;
  readonly session: SessionResponse;
};


export type QueryGetDeliveryOrderArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryGetFilmArgs = {
  filmId: Scalars['String']['input'];
};


export type QueryGetFilmScheduleArgs = {
  filmId: Scalars['String']['input'];
};


export type QueryGetPizzaOrderArgs = {
  orderId: Scalars['String']['input'];
};

export enum Rating {
  G = 'G',
  Nc17 = 'NC17',
  Pg = 'PG',
  Pg13 = 'PG13',
  R = 'R'
}

export type Schedule = {
  readonly __typename?: 'Schedule';
  readonly date: Scalars['String']['output'];
  readonly seances: ReadonlyArray<ScheduleSeance>;
};

export type ScheduleResponse = {
  readonly __typename?: 'ScheduleResponse';
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly schedules: ReadonlyArray<Schedule>;
  readonly success: Scalars['Boolean']['output'];
};

export type ScheduleSeance = {
  readonly __typename?: 'ScheduleSeance';
  readonly hall: FilmHall;
  readonly payedTickets: ReadonlyArray<Ticket>;
  readonly time: Scalars['String']['output'];
};

export type SessionResponse = {
  readonly __typename?: 'SessionResponse';
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
  readonly user: User;
};

export type SignInResponse = {
  readonly __typename?: 'SignInResponse';
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
  readonly token: Scalars['String']['output'];
  readonly user: User;
};

export enum Size {
  Large = 'LARGE',
  Medium = 'MEDIUM',
  Small = 'SMALL'
}

export type Ticket = {
  readonly __typename?: 'Ticket';
  readonly _id: Scalars['String']['output'];
  readonly column: Scalars['Float']['output'];
  readonly filmId: Scalars['String']['output'];
  readonly phone: Scalars['String']['output'];
  readonly row: Scalars['Float']['output'];
  readonly seance: FilmTicketSeance;
};

export type TicketInput = {
  readonly _id: Scalars['String']['input'];
  readonly column: Scalars['Float']['input'];
  readonly filmId: Scalars['String']['input'];
  readonly phone: Scalars['String']['input'];
  readonly row: Scalars['Float']['input'];
  readonly seance: FilmTicketSeanceInput;
};

export type TicketsResponse = {
  readonly __typename?: 'TicketsResponse';
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
  readonly tickets: ReadonlyArray<Ticket>;
};

export type UpdateProfileProfileDto = {
  readonly city: Scalars['String']['input'];
  readonly email: Scalars['String']['input'];
  readonly firstname: Scalars['String']['input'];
  readonly lastname: Scalars['String']['input'];
  readonly middlename: Scalars['String']['input'];
};

export type UpdateProfileResponse = {
  readonly __typename?: 'UpdateProfileResponse';
  readonly reason: Maybe<Scalars['String']['output']>;
  readonly success: Scalars['Boolean']['output'];
  readonly user: User;
};

export type User = {
  readonly __typename?: 'User';
  readonly _id: Scalars['String']['output'];
  readonly city: Maybe<Scalars['String']['output']>;
  readonly email: Maybe<Scalars['String']['output']>;
  readonly firstname: Maybe<Scalars['String']['output']>;
  readonly lastname: Maybe<Scalars['String']['output']>;
  readonly middlename: Maybe<Scalars['String']['output']>;
  readonly phone: Scalars['String']['output'];
};

export type UserInput = {
  readonly _id: Scalars['String']['input'];
  readonly city: InputMaybe<Scalars['String']['input']>;
  readonly email: InputMaybe<Scalars['String']['input']>;
  readonly firstname: InputMaybe<Scalars['String']['input']>;
  readonly lastname: InputMaybe<Scalars['String']['input']>;
  readonly middlename: InputMaybe<Scalars['String']['input']>;
  readonly phone: Scalars['String']['input'];
};

export type OtpResponseFragmentFragment = { readonly __typename?: 'OtpResponse', readonly retryDelay: number, readonly success: boolean, readonly reason: string };

export type PizzasCatalogResponseFragmentFragment = { readonly __typename?: 'PizzasResponse', readonly reason: string, readonly success: boolean, readonly catalog: ReadonlyArray<{ readonly __typename?: 'Pizza', readonly description: string, readonly id: string, readonly name: string, readonly img: string, readonly sizes: ReadonlyArray<{ readonly __typename?: 'PizzaSize', readonly price: number }> }> };

export type SessionResponseFragmentFragment = { readonly __typename?: 'SessionResponse', readonly reason: string, readonly success: boolean, readonly user: { readonly __typename?: 'User', readonly phone: string, readonly middlename: string, readonly lastname: string, readonly city: string, readonly firstname: string, readonly email: string } };

export type SignInResponseFragmentFragment = { readonly __typename?: 'SignInResponse', readonly token: string, readonly success: boolean, readonly reason: string, readonly user: { readonly __typename?: 'User', readonly phone: string, readonly middlename: string, readonly lastname: string, readonly city: string, readonly firstname: string, readonly email: string } };

export type UserFragmentFragment = { readonly __typename?: 'User', readonly phone: string, readonly middlename: string, readonly lastname: string, readonly city: string, readonly firstname: string, readonly email: string };

export type CreateOtpMutationVariables = Exact<{
  phone: Scalars['String']['input'];
}>;


export type CreateOtpMutation = { readonly __typename?: 'Mutation', readonly createOtp: { readonly __typename?: 'OtpResponse', readonly retryDelay: number, readonly success: boolean, readonly reason: string } };

export type SignInMutationVariables = Exact<{
  phone: Scalars['String']['input'];
  code: Scalars['Float']['input'];
}>;


export type SignInMutation = { readonly __typename?: 'Mutation', readonly signin: { readonly __typename?: 'SignInResponse', readonly token: string, readonly success: boolean, readonly reason: string, readonly user: { readonly __typename?: 'User', readonly phone: string, readonly middlename: string, readonly lastname: string, readonly city: string, readonly firstname: string, readonly email: string } } };

export type GetPizzasCatalogQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPizzasCatalogQuery = { readonly __typename?: 'Query', readonly getPizzasCatalog: { readonly __typename?: 'PizzasResponse', readonly reason: string, readonly success: boolean, readonly catalog: ReadonlyArray<{ readonly __typename?: 'Pizza', readonly description: string, readonly id: string, readonly name: string, readonly img: string, readonly sizes: ReadonlyArray<{ readonly __typename?: 'PizzaSize', readonly price: number }> }> } };

export type GetSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSessionQuery = { readonly __typename?: 'Query', readonly session: { readonly __typename?: 'SessionResponse', readonly reason: string, readonly success: boolean, readonly user: { readonly __typename?: 'User', readonly phone: string, readonly middlename: string, readonly lastname: string, readonly city: string, readonly firstname: string, readonly email: string } } };

export const OtpResponseFragmentFragmentDoc = gql`
    fragment OtpResponseFragment on OtpResponse {
  retryDelay
  success
  reason
}
    `;
export const PizzasCatalogResponseFragmentFragmentDoc = gql`
    fragment PizzasCatalogResponseFragment on PizzasResponse {
  reason
  success
  catalog {
    description
    id
    name
    img
    sizes {
      price
    }
  }
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  phone
  middlename
  lastname
  city
  firstname
  email
}
    `;
export const SessionResponseFragmentFragmentDoc = gql`
    fragment SessionResponseFragment on SessionResponse {
  user {
    ...UserFragment
  }
  reason
  success
}
    ${UserFragmentFragmentDoc}`;
export const SignInResponseFragmentFragmentDoc = gql`
    fragment SignInResponseFragment on SignInResponse {
  user {
    ...UserFragment
  }
  token
  success
  reason
}
    ${UserFragmentFragmentDoc}`;
export const CreateOtpDocument = gql`
    mutation createOtp($phone: String!) {
  createOtp(phone: $phone) {
    ...OtpResponseFragment
  }
}
    ${OtpResponseFragmentFragmentDoc}`;
export type CreateOtpMutationFn = Apollo.MutationFunction<CreateOtpMutation, CreateOtpMutationVariables>;

/**
 * __useCreateOtpMutation__
 *
 * To run a mutation, you first call `useCreateOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOtpMutation, { data, loading, error }] = useCreateOtpMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *   },
 * });
 */
export function useCreateOtpMutation(baseOptions?: Apollo.MutationHookOptions<CreateOtpMutation, CreateOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOtpMutation, CreateOtpMutationVariables>(CreateOtpDocument, options);
      }
export type CreateOtpMutationHookResult = ReturnType<typeof useCreateOtpMutation>;
export type CreateOtpMutationResult = Apollo.MutationResult<CreateOtpMutation>;
export type CreateOtpMutationOptions = Apollo.BaseMutationOptions<CreateOtpMutation, CreateOtpMutationVariables>;
export const SignInDocument = gql`
    mutation signIn($phone: String!, $code: Float!) {
  signin(phone: $phone, code: $code) {
    ...SignInResponseFragment
  }
}
    ${SignInResponseFragmentFragmentDoc}`;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const GetPizzasCatalogDocument = gql`
    query getPizzasCatalog {
  getPizzasCatalog {
    ...PizzasCatalogResponseFragment
  }
}
    ${PizzasCatalogResponseFragmentFragmentDoc}`;

/**
 * __useGetPizzasCatalogQuery__
 *
 * To run a query within a React component, call `useGetPizzasCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPizzasCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPizzasCatalogQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPizzasCatalogQuery(baseOptions?: Apollo.QueryHookOptions<GetPizzasCatalogQuery, GetPizzasCatalogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPizzasCatalogQuery, GetPizzasCatalogQueryVariables>(GetPizzasCatalogDocument, options);
      }
export function useGetPizzasCatalogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPizzasCatalogQuery, GetPizzasCatalogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPizzasCatalogQuery, GetPizzasCatalogQueryVariables>(GetPizzasCatalogDocument, options);
        }
export function useGetPizzasCatalogSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPizzasCatalogQuery, GetPizzasCatalogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPizzasCatalogQuery, GetPizzasCatalogQueryVariables>(GetPizzasCatalogDocument, options);
        }
export type GetPizzasCatalogQueryHookResult = ReturnType<typeof useGetPizzasCatalogQuery>;
export type GetPizzasCatalogLazyQueryHookResult = ReturnType<typeof useGetPizzasCatalogLazyQuery>;
export type GetPizzasCatalogSuspenseQueryHookResult = ReturnType<typeof useGetPizzasCatalogSuspenseQuery>;
export type GetPizzasCatalogQueryResult = Apollo.QueryResult<GetPizzasCatalogQuery, GetPizzasCatalogQueryVariables>;
export const GetSessionDocument = gql`
    query getSession {
  session {
    ...SessionResponseFragment
  }
}
    ${SessionResponseFragmentFragmentDoc}`;

/**
 * __useGetSessionQuery__
 *
 * To run a query within a React component, call `useGetSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSessionQuery(baseOptions?: Apollo.QueryHookOptions<GetSessionQuery, GetSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSessionQuery, GetSessionQueryVariables>(GetSessionDocument, options);
      }
export function useGetSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSessionQuery, GetSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSessionQuery, GetSessionQueryVariables>(GetSessionDocument, options);
        }
export function useGetSessionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSessionQuery, GetSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSessionQuery, GetSessionQueryVariables>(GetSessionDocument, options);
        }
export type GetSessionQueryHookResult = ReturnType<typeof useGetSessionQuery>;
export type GetSessionLazyQueryHookResult = ReturnType<typeof useGetSessionLazyQuery>;
export type GetSessionSuspenseQueryHookResult = ReturnType<typeof useGetSessionSuspenseQuery>;
export type GetSessionQueryResult = Apollo.QueryResult<GetSessionQuery, GetSessionQueryVariables>;