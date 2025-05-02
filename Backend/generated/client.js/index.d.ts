
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Lecture
 * 
 */
export type Lecture = $Result.DefaultSelection<Prisma.$LecturePayload>
/**
 * Model CoursePurchase
 * 
 */
export type CoursePurchase = $Result.DefaultSelection<Prisma.$CoursePurchasePayload>
/**
 * Model CourseProgress
 * 
 */
export type CourseProgress = $Result.DefaultSelection<Prisma.$CourseProgressPayload>
/**
 * Model LectureProgress
 * 
 */
export type LectureProgress = $Result.DefaultSelection<Prisma.$LectureProgressPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lecture`: Exposes CRUD operations for the **Lecture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lectures
    * const lectures = await prisma.lecture.findMany()
    * ```
    */
  get lecture(): Prisma.LectureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.coursePurchase`: Exposes CRUD operations for the **CoursePurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoursePurchases
    * const coursePurchases = await prisma.coursePurchase.findMany()
    * ```
    */
  get coursePurchase(): Prisma.CoursePurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseProgress`: Exposes CRUD operations for the **CourseProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseProgresses
    * const courseProgresses = await prisma.courseProgress.findMany()
    * ```
    */
  get courseProgress(): Prisma.CourseProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lectureProgress`: Exposes CRUD operations for the **LectureProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LectureProgresses
    * const lectureProgresses = await prisma.lectureProgress.findMany()
    * ```
    */
  get lectureProgress(): Prisma.LectureProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Course: 'Course',
    Lecture: 'Lecture',
    CoursePurchase: 'CoursePurchase',
    CourseProgress: 'CourseProgress',
    LectureProgress: 'LectureProgress',
    Session: 'Session',
    Enrollment: 'Enrollment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "course" | "lecture" | "coursePurchase" | "courseProgress" | "lectureProgress" | "session" | "enrollment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Lecture: {
        payload: Prisma.$LecturePayload<ExtArgs>
        fields: Prisma.LectureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LectureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LectureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          findFirst: {
            args: Prisma.LectureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LectureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          findMany: {
            args: Prisma.LectureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>[]
          }
          create: {
            args: Prisma.LectureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          createMany: {
            args: Prisma.LectureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LectureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>[]
          }
          delete: {
            args: Prisma.LectureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          update: {
            args: Prisma.LectureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          deleteMany: {
            args: Prisma.LectureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LectureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LectureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>[]
          }
          upsert: {
            args: Prisma.LectureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LecturePayload>
          }
          aggregate: {
            args: Prisma.LectureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLecture>
          }
          groupBy: {
            args: Prisma.LectureGroupByArgs<ExtArgs>
            result: $Utils.Optional<LectureGroupByOutputType>[]
          }
          count: {
            args: Prisma.LectureCountArgs<ExtArgs>
            result: $Utils.Optional<LectureCountAggregateOutputType> | number
          }
        }
      }
      CoursePurchase: {
        payload: Prisma.$CoursePurchasePayload<ExtArgs>
        fields: Prisma.CoursePurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoursePurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoursePurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>
          }
          findFirst: {
            args: Prisma.CoursePurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoursePurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>
          }
          findMany: {
            args: Prisma.CoursePurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>[]
          }
          create: {
            args: Prisma.CoursePurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>
          }
          createMany: {
            args: Prisma.CoursePurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoursePurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>[]
          }
          delete: {
            args: Prisma.CoursePurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>
          }
          update: {
            args: Prisma.CoursePurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>
          }
          deleteMany: {
            args: Prisma.CoursePurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoursePurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoursePurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>[]
          }
          upsert: {
            args: Prisma.CoursePurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePurchasePayload>
          }
          aggregate: {
            args: Prisma.CoursePurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoursePurchase>
          }
          groupBy: {
            args: Prisma.CoursePurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoursePurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoursePurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<CoursePurchaseCountAggregateOutputType> | number
          }
        }
      }
      CourseProgress: {
        payload: Prisma.$CourseProgressPayload<ExtArgs>
        fields: Prisma.CourseProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          findFirst: {
            args: Prisma.CourseProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          findMany: {
            args: Prisma.CourseProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>[]
          }
          create: {
            args: Prisma.CourseProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          createMany: {
            args: Prisma.CourseProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>[]
          }
          delete: {
            args: Prisma.CourseProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          update: {
            args: Prisma.CourseProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          deleteMany: {
            args: Prisma.CourseProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>[]
          }
          upsert: {
            args: Prisma.CourseProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseProgressPayload>
          }
          aggregate: {
            args: Prisma.CourseProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseProgress>
          }
          groupBy: {
            args: Prisma.CourseProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseProgressCountArgs<ExtArgs>
            result: $Utils.Optional<CourseProgressCountAggregateOutputType> | number
          }
        }
      }
      LectureProgress: {
        payload: Prisma.$LectureProgressPayload<ExtArgs>
        fields: Prisma.LectureProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LectureProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LectureProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureProgressPayload>
          }
          findFirst: {
            args: Prisma.LectureProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LectureProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureProgressPayload>
          }
          findMany: {
            args: Prisma.LectureProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureProgressPayload>[]
          }
          create: {
            args: Prisma.LectureProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureProgressPayload>
          }
          createMany: {
            args: Prisma.LectureProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LectureProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureProgressPayload>[]
          }
          delete: {
            args: Prisma.LectureProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureProgressPayload>
          }
          update: {
            args: Prisma.LectureProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureProgressPayload>
          }
          deleteMany: {
            args: Prisma.LectureProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LectureProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LectureProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureProgressPayload>[]
          }
          upsert: {
            args: Prisma.LectureProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LectureProgressPayload>
          }
          aggregate: {
            args: Prisma.LectureProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLectureProgress>
          }
          groupBy: {
            args: Prisma.LectureProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<LectureProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.LectureProgressCountArgs<ExtArgs>
            result: $Utils.Optional<LectureProgressCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    course?: CourseOmit
    lecture?: LectureOmit
    coursePurchase?: CoursePurchaseOmit
    courseProgress?: CourseProgressOmit
    lectureProgress?: LectureProgressOmit
    session?: SessionOmit
    enrollment?: EnrollmentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    enrolledCourses: number
    coursesCreated: number
    coursePurchases: number
    courseProgress: number
    enrollments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledCourses?: boolean | UserCountOutputTypeCountEnrolledCoursesArgs
    coursesCreated?: boolean | UserCountOutputTypeCountCoursesCreatedArgs
    coursePurchases?: boolean | UserCountOutputTypeCountCoursePurchasesArgs
    courseProgress?: boolean | UserCountOutputTypeCountCourseProgressArgs
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrolledCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCoursePurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCourseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    enrolledStudents: number
    lectures: number
    coursePurchases: number
    courseProgress: number
    sessions: number
    enrollments: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledStudents?: boolean | CourseCountOutputTypeCountEnrolledStudentsArgs
    lectures?: boolean | CourseCountOutputTypeCountLecturesArgs
    coursePurchases?: boolean | CourseCountOutputTypeCountCoursePurchasesArgs
    courseProgress?: boolean | CourseCountOutputTypeCountCourseProgressArgs
    sessions?: boolean | CourseCountOutputTypeCountSessionsArgs
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrolledStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountLecturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCoursePurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePurchaseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseProgressWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type CourseProgressCountOutputType
   */

  export type CourseProgressCountOutputType = {
    lectureProgress: number
  }

  export type CourseProgressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lectureProgress?: boolean | CourseProgressCountOutputTypeCountLectureProgressArgs
  }

  // Custom InputTypes
  /**
   * CourseProgressCountOutputType without action
   */
  export type CourseProgressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgressCountOutputType
     */
    select?: CourseProgressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseProgressCountOutputType without action
   */
  export type CourseProgressCountOutputTypeCountLectureProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    photoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    photoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    photoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    photoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string
    photoUrl: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enrolledCourses?: boolean | User$enrolledCoursesArgs<ExtArgs>
    coursesCreated?: boolean | User$coursesCreatedArgs<ExtArgs>
    coursePurchases?: boolean | User$coursePurchasesArgs<ExtArgs>
    courseProgress?: boolean | User$courseProgressArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    photoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "photoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledCourses?: boolean | User$enrolledCoursesArgs<ExtArgs>
    coursesCreated?: boolean | User$coursesCreatedArgs<ExtArgs>
    coursePurchases?: boolean | User$coursePurchasesArgs<ExtArgs>
    courseProgress?: boolean | User$courseProgressArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      enrolledCourses: Prisma.$CoursePayload<ExtArgs>[]
      coursesCreated: Prisma.$CoursePayload<ExtArgs>[]
      coursePurchases: Prisma.$CoursePurchasePayload<ExtArgs>[]
      courseProgress: Prisma.$CourseProgressPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string
      photoUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrolledCourses<T extends User$enrolledCoursesArgs<ExtArgs> = {}>(args?: Subset<T, User$enrolledCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coursesCreated<T extends User$coursesCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$coursesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    coursePurchases<T extends User$coursePurchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$coursePurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseProgress<T extends User$courseProgressArgs<ExtArgs> = {}>(args?: Subset<T, User$courseProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly photoUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.enrolledCourses
   */
  export type User$enrolledCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.coursesCreated
   */
  export type User$coursesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * User.coursePurchases
   */
  export type User$coursePurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    where?: CoursePurchaseWhereInput
    orderBy?: CoursePurchaseOrderByWithRelationInput | CoursePurchaseOrderByWithRelationInput[]
    cursor?: CoursePurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursePurchaseScalarFieldEnum | CoursePurchaseScalarFieldEnum[]
  }

  /**
   * User.courseProgress
   */
  export type User$courseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    where?: CourseProgressWhereInput
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    cursor?: CourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    coursePrice: number | null
    creatorId: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    coursePrice: number | null
    creatorId: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    courseTitle: string | null
    subTitle: string | null
    description: string | null
    category: string | null
    courseLevel: string | null
    coursePrice: number | null
    courseThumbnail: string | null
    creatorId: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    courseTitle: string | null
    subTitle: string | null
    description: string | null
    category: string | null
    courseLevel: string | null
    coursePrice: number | null
    courseThumbnail: string | null
    creatorId: number | null
    isPublished: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    courseTitle: number
    subTitle: number
    description: number
    category: number
    courseLevel: number
    coursePrice: number
    courseThumbnail: number
    creatorId: number
    isPublished: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    coursePrice?: true
    creatorId?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    coursePrice?: true
    creatorId?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    courseTitle?: true
    subTitle?: true
    description?: true
    category?: true
    courseLevel?: true
    coursePrice?: true
    courseThumbnail?: true
    creatorId?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    courseTitle?: true
    subTitle?: true
    description?: true
    category?: true
    courseLevel?: true
    coursePrice?: true
    courseThumbnail?: true
    creatorId?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    courseTitle?: true
    subTitle?: true
    description?: true
    category?: true
    courseLevel?: true
    coursePrice?: true
    courseThumbnail?: true
    creatorId?: true
    isPublished?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    courseTitle: string
    subTitle: string | null
    description: string | null
    category: string
    courseLevel: string | null
    coursePrice: number | null
    courseThumbnail: string | null
    creatorId: number
    isPublished: boolean
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseTitle?: boolean
    subTitle?: boolean
    description?: boolean
    category?: boolean
    courseLevel?: boolean
    coursePrice?: boolean
    courseThumbnail?: boolean
    creatorId?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    enrolledStudents?: boolean | Course$enrolledStudentsArgs<ExtArgs>
    lectures?: boolean | Course$lecturesArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    coursePurchases?: boolean | Course$coursePurchasesArgs<ExtArgs>
    courseProgress?: boolean | Course$courseProgressArgs<ExtArgs>
    sessions?: boolean | Course$sessionsArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseTitle?: boolean
    subTitle?: boolean
    description?: boolean
    category?: boolean
    courseLevel?: boolean
    coursePrice?: boolean
    courseThumbnail?: boolean
    creatorId?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseTitle?: boolean
    subTitle?: boolean
    description?: boolean
    category?: boolean
    courseLevel?: boolean
    coursePrice?: boolean
    courseThumbnail?: boolean
    creatorId?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    courseTitle?: boolean
    subTitle?: boolean
    description?: boolean
    category?: boolean
    courseLevel?: boolean
    coursePrice?: boolean
    courseThumbnail?: boolean
    creatorId?: boolean
    isPublished?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseTitle" | "subTitle" | "description" | "category" | "courseLevel" | "coursePrice" | "courseThumbnail" | "creatorId" | "isPublished" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrolledStudents?: boolean | Course$enrolledStudentsArgs<ExtArgs>
    lectures?: boolean | Course$lecturesArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    coursePurchases?: boolean | Course$coursePurchasesArgs<ExtArgs>
    courseProgress?: boolean | Course$courseProgressArgs<ExtArgs>
    sessions?: boolean | Course$sessionsArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      enrolledStudents: Prisma.$UserPayload<ExtArgs>[]
      lectures: Prisma.$LecturePayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs>
      coursePurchases: Prisma.$CoursePurchasePayload<ExtArgs>[]
      courseProgress: Prisma.$CourseProgressPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseTitle: string
      subTitle: string | null
      description: string | null
      category: string
      courseLevel: string | null
      coursePrice: number | null
      courseThumbnail: string | null
      creatorId: number
      isPublished: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enrolledStudents<T extends Course$enrolledStudentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrolledStudentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lectures<T extends Course$lecturesArgs<ExtArgs> = {}>(args?: Subset<T, Course$lecturesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    coursePurchases<T extends Course$coursePurchasesArgs<ExtArgs> = {}>(args?: Subset<T, Course$coursePurchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courseProgress<T extends Course$courseProgressArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Course$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Course$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends Course$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly courseTitle: FieldRef<"Course", 'String'>
    readonly subTitle: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly category: FieldRef<"Course", 'String'>
    readonly courseLevel: FieldRef<"Course", 'String'>
    readonly coursePrice: FieldRef<"Course", 'Float'>
    readonly courseThumbnail: FieldRef<"Course", 'String'>
    readonly creatorId: FieldRef<"Course", 'Int'>
    readonly isPublished: FieldRef<"Course", 'Boolean'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.enrolledStudents
   */
  export type Course$enrolledStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Course.lectures
   */
  export type Course$lecturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    where?: LectureWhereInput
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    cursor?: LectureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Course.coursePurchases
   */
  export type Course$coursePurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    where?: CoursePurchaseWhereInput
    orderBy?: CoursePurchaseOrderByWithRelationInput | CoursePurchaseOrderByWithRelationInput[]
    cursor?: CoursePurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoursePurchaseScalarFieldEnum | CoursePurchaseScalarFieldEnum[]
  }

  /**
   * Course.courseProgress
   */
  export type Course$courseProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    where?: CourseProgressWhereInput
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    cursor?: CourseProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * Course.sessions
   */
  export type Course$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Course.enrollments
   */
  export type Course$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Lecture
   */

  export type AggregateLecture = {
    _count: LectureCountAggregateOutputType | null
    _avg: LectureAvgAggregateOutputType | null
    _sum: LectureSumAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  export type LectureAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type LectureSumAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type LectureMinAggregateOutputType = {
    id: number | null
    lectureTitle: string | null
    videoUrl: string | null
    publicId: string | null
    isPreviewFree: boolean | null
    courseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LectureMaxAggregateOutputType = {
    id: number | null
    lectureTitle: string | null
    videoUrl: string | null
    publicId: string | null
    isPreviewFree: boolean | null
    courseId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LectureCountAggregateOutputType = {
    id: number
    lectureTitle: number
    videoUrl: number
    publicId: number
    isPreviewFree: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LectureAvgAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type LectureSumAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type LectureMinAggregateInputType = {
    id?: true
    lectureTitle?: true
    videoUrl?: true
    publicId?: true
    isPreviewFree?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LectureMaxAggregateInputType = {
    id?: true
    lectureTitle?: true
    videoUrl?: true
    publicId?: true
    isPreviewFree?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LectureCountAggregateInputType = {
    id?: true
    lectureTitle?: true
    videoUrl?: true
    publicId?: true
    isPreviewFree?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LectureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lecture to aggregate.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lectures
    **/
    _count?: true | LectureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LectureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LectureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LectureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LectureMaxAggregateInputType
  }

  export type GetLectureAggregateType<T extends LectureAggregateArgs> = {
        [P in keyof T & keyof AggregateLecture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLecture[P]>
      : GetScalarType<T[P], AggregateLecture[P]>
  }




  export type LectureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureWhereInput
    orderBy?: LectureOrderByWithAggregationInput | LectureOrderByWithAggregationInput[]
    by: LectureScalarFieldEnum[] | LectureScalarFieldEnum
    having?: LectureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LectureCountAggregateInputType | true
    _avg?: LectureAvgAggregateInputType
    _sum?: LectureSumAggregateInputType
    _min?: LectureMinAggregateInputType
    _max?: LectureMaxAggregateInputType
  }

  export type LectureGroupByOutputType = {
    id: number
    lectureTitle: string
    videoUrl: string | null
    publicId: string | null
    isPreviewFree: boolean
    courseId: number | null
    createdAt: Date
    updatedAt: Date
    _count: LectureCountAggregateOutputType | null
    _avg: LectureAvgAggregateOutputType | null
    _sum: LectureSumAggregateOutputType | null
    _min: LectureMinAggregateOutputType | null
    _max: LectureMaxAggregateOutputType | null
  }

  type GetLectureGroupByPayload<T extends LectureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LectureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LectureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LectureGroupByOutputType[P]>
            : GetScalarType<T[P], LectureGroupByOutputType[P]>
        }
      >
    >


  export type LectureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lectureTitle?: boolean
    videoUrl?: boolean
    publicId?: boolean
    isPreviewFree?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | Lecture$courseArgs<ExtArgs>
  }, ExtArgs["result"]["lecture"]>

  export type LectureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lectureTitle?: boolean
    videoUrl?: boolean
    publicId?: boolean
    isPreviewFree?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | Lecture$courseArgs<ExtArgs>
  }, ExtArgs["result"]["lecture"]>

  export type LectureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lectureTitle?: boolean
    videoUrl?: boolean
    publicId?: boolean
    isPreviewFree?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | Lecture$courseArgs<ExtArgs>
  }, ExtArgs["result"]["lecture"]>

  export type LectureSelectScalar = {
    id?: boolean
    lectureTitle?: boolean
    videoUrl?: boolean
    publicId?: boolean
    isPreviewFree?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LectureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lectureTitle" | "videoUrl" | "publicId" | "isPreviewFree" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["lecture"]>
  export type LectureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Lecture$courseArgs<ExtArgs>
  }
  export type LectureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Lecture$courseArgs<ExtArgs>
  }
  export type LectureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Lecture$courseArgs<ExtArgs>
  }

  export type $LecturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lecture"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lectureTitle: string
      videoUrl: string | null
      publicId: string | null
      isPreviewFree: boolean
      courseId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lecture"]>
    composites: {}
  }

  type LectureGetPayload<S extends boolean | null | undefined | LectureDefaultArgs> = $Result.GetResult<Prisma.$LecturePayload, S>

  type LectureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LectureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LectureCountAggregateInputType | true
    }

  export interface LectureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lecture'], meta: { name: 'Lecture' } }
    /**
     * Find zero or one Lecture that matches the filter.
     * @param {LectureFindUniqueArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LectureFindUniqueArgs>(args: SelectSubset<T, LectureFindUniqueArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lecture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LectureFindUniqueOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LectureFindUniqueOrThrowArgs>(args: SelectSubset<T, LectureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureFindFirstArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LectureFindFirstArgs>(args?: SelectSubset<T, LectureFindFirstArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lecture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureFindFirstOrThrowArgs} args - Arguments to find a Lecture
     * @example
     * // Get one Lecture
     * const lecture = await prisma.lecture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LectureFindFirstOrThrowArgs>(args?: SelectSubset<T, LectureFindFirstOrThrowArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lectures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lectures
     * const lectures = await prisma.lecture.findMany()
     * 
     * // Get first 10 Lectures
     * const lectures = await prisma.lecture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lectureWithIdOnly = await prisma.lecture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LectureFindManyArgs>(args?: SelectSubset<T, LectureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lecture.
     * @param {LectureCreateArgs} args - Arguments to create a Lecture.
     * @example
     * // Create one Lecture
     * const Lecture = await prisma.lecture.create({
     *   data: {
     *     // ... data to create a Lecture
     *   }
     * })
     * 
     */
    create<T extends LectureCreateArgs>(args: SelectSubset<T, LectureCreateArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lectures.
     * @param {LectureCreateManyArgs} args - Arguments to create many Lectures.
     * @example
     * // Create many Lectures
     * const lecture = await prisma.lecture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LectureCreateManyArgs>(args?: SelectSubset<T, LectureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lectures and returns the data saved in the database.
     * @param {LectureCreateManyAndReturnArgs} args - Arguments to create many Lectures.
     * @example
     * // Create many Lectures
     * const lecture = await prisma.lecture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lectures and only return the `id`
     * const lectureWithIdOnly = await prisma.lecture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LectureCreateManyAndReturnArgs>(args?: SelectSubset<T, LectureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lecture.
     * @param {LectureDeleteArgs} args - Arguments to delete one Lecture.
     * @example
     * // Delete one Lecture
     * const Lecture = await prisma.lecture.delete({
     *   where: {
     *     // ... filter to delete one Lecture
     *   }
     * })
     * 
     */
    delete<T extends LectureDeleteArgs>(args: SelectSubset<T, LectureDeleteArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lecture.
     * @param {LectureUpdateArgs} args - Arguments to update one Lecture.
     * @example
     * // Update one Lecture
     * const lecture = await prisma.lecture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LectureUpdateArgs>(args: SelectSubset<T, LectureUpdateArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lectures.
     * @param {LectureDeleteManyArgs} args - Arguments to filter Lectures to delete.
     * @example
     * // Delete a few Lectures
     * const { count } = await prisma.lecture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LectureDeleteManyArgs>(args?: SelectSubset<T, LectureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lectures
     * const lecture = await prisma.lecture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LectureUpdateManyArgs>(args: SelectSubset<T, LectureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lectures and returns the data updated in the database.
     * @param {LectureUpdateManyAndReturnArgs} args - Arguments to update many Lectures.
     * @example
     * // Update many Lectures
     * const lecture = await prisma.lecture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lectures and only return the `id`
     * const lectureWithIdOnly = await prisma.lecture.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LectureUpdateManyAndReturnArgs>(args: SelectSubset<T, LectureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lecture.
     * @param {LectureUpsertArgs} args - Arguments to update or create a Lecture.
     * @example
     * // Update or create a Lecture
     * const lecture = await prisma.lecture.upsert({
     *   create: {
     *     // ... data to create a Lecture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lecture we want to update
     *   }
     * })
     */
    upsert<T extends LectureUpsertArgs>(args: SelectSubset<T, LectureUpsertArgs<ExtArgs>>): Prisma__LectureClient<$Result.GetResult<Prisma.$LecturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lectures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureCountArgs} args - Arguments to filter Lectures to count.
     * @example
     * // Count the number of Lectures
     * const count = await prisma.lecture.count({
     *   where: {
     *     // ... the filter for the Lectures we want to count
     *   }
     * })
    **/
    count<T extends LectureCountArgs>(
      args?: Subset<T, LectureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LectureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LectureAggregateArgs>(args: Subset<T, LectureAggregateArgs>): Prisma.PrismaPromise<GetLectureAggregateType<T>>

    /**
     * Group by Lecture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LectureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LectureGroupByArgs['orderBy'] }
        : { orderBy?: LectureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LectureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLectureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lecture model
   */
  readonly fields: LectureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lecture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LectureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends Lecture$courseArgs<ExtArgs> = {}>(args?: Subset<T, Lecture$courseArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lecture model
   */
  interface LectureFieldRefs {
    readonly id: FieldRef<"Lecture", 'Int'>
    readonly lectureTitle: FieldRef<"Lecture", 'String'>
    readonly videoUrl: FieldRef<"Lecture", 'String'>
    readonly publicId: FieldRef<"Lecture", 'String'>
    readonly isPreviewFree: FieldRef<"Lecture", 'Boolean'>
    readonly courseId: FieldRef<"Lecture", 'Int'>
    readonly createdAt: FieldRef<"Lecture", 'DateTime'>
    readonly updatedAt: FieldRef<"Lecture", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lecture findUnique
   */
  export type LectureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture findUniqueOrThrow
   */
  export type LectureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture findFirst
   */
  export type LectureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lectures.
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Lecture findFirstOrThrow
   */
  export type LectureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lecture to fetch.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lectures.
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lectures.
     */
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Lecture findMany
   */
  export type LectureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter, which Lectures to fetch.
     */
    where?: LectureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lectures to fetch.
     */
    orderBy?: LectureOrderByWithRelationInput | LectureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lectures.
     */
    cursor?: LectureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lectures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lectures.
     */
    skip?: number
    distinct?: LectureScalarFieldEnum | LectureScalarFieldEnum[]
  }

  /**
   * Lecture create
   */
  export type LectureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * The data needed to create a Lecture.
     */
    data: XOR<LectureCreateInput, LectureUncheckedCreateInput>
  }

  /**
   * Lecture createMany
   */
  export type LectureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lectures.
     */
    data: LectureCreateManyInput | LectureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lecture createManyAndReturn
   */
  export type LectureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * The data used to create many Lectures.
     */
    data: LectureCreateManyInput | LectureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lecture update
   */
  export type LectureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * The data needed to update a Lecture.
     */
    data: XOR<LectureUpdateInput, LectureUncheckedUpdateInput>
    /**
     * Choose, which Lecture to update.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture updateMany
   */
  export type LectureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lectures.
     */
    data: XOR<LectureUpdateManyMutationInput, LectureUncheckedUpdateManyInput>
    /**
     * Filter which Lectures to update
     */
    where?: LectureWhereInput
    /**
     * Limit how many Lectures to update.
     */
    limit?: number
  }

  /**
   * Lecture updateManyAndReturn
   */
  export type LectureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * The data used to update Lectures.
     */
    data: XOR<LectureUpdateManyMutationInput, LectureUncheckedUpdateManyInput>
    /**
     * Filter which Lectures to update
     */
    where?: LectureWhereInput
    /**
     * Limit how many Lectures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lecture upsert
   */
  export type LectureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * The filter to search for the Lecture to update in case it exists.
     */
    where: LectureWhereUniqueInput
    /**
     * In case the Lecture found by the `where` argument doesn't exist, create a new Lecture with this data.
     */
    create: XOR<LectureCreateInput, LectureUncheckedCreateInput>
    /**
     * In case the Lecture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LectureUpdateInput, LectureUncheckedUpdateInput>
  }

  /**
   * Lecture delete
   */
  export type LectureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
    /**
     * Filter which Lecture to delete.
     */
    where: LectureWhereUniqueInput
  }

  /**
   * Lecture deleteMany
   */
  export type LectureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lectures to delete
     */
    where?: LectureWhereInput
    /**
     * Limit how many Lectures to delete.
     */
    limit?: number
  }

  /**
   * Lecture.course
   */
  export type Lecture$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
  }

  /**
   * Lecture without action
   */
  export type LectureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lecture
     */
    select?: LectureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lecture
     */
    omit?: LectureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureInclude<ExtArgs> | null
  }


  /**
   * Model CoursePurchase
   */

  export type AggregateCoursePurchase = {
    _count: CoursePurchaseCountAggregateOutputType | null
    _avg: CoursePurchaseAvgAggregateOutputType | null
    _sum: CoursePurchaseSumAggregateOutputType | null
    _min: CoursePurchaseMinAggregateOutputType | null
    _max: CoursePurchaseMaxAggregateOutputType | null
  }

  export type CoursePurchaseAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    userId: number | null
    amount: number | null
  }

  export type CoursePurchaseSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    userId: number | null
    amount: number | null
  }

  export type CoursePurchaseMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    userId: number | null
    amount: number | null
    status: string | null
    paymentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoursePurchaseMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    userId: number | null
    amount: number | null
    status: string | null
    paymentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoursePurchaseCountAggregateOutputType = {
    id: number
    courseId: number
    userId: number
    amount: number
    status: number
    paymentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoursePurchaseAvgAggregateInputType = {
    id?: true
    courseId?: true
    userId?: true
    amount?: true
  }

  export type CoursePurchaseSumAggregateInputType = {
    id?: true
    courseId?: true
    userId?: true
    amount?: true
  }

  export type CoursePurchaseMinAggregateInputType = {
    id?: true
    courseId?: true
    userId?: true
    amount?: true
    status?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoursePurchaseMaxAggregateInputType = {
    id?: true
    courseId?: true
    userId?: true
    amount?: true
    status?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoursePurchaseCountAggregateInputType = {
    id?: true
    courseId?: true
    userId?: true
    amount?: true
    status?: true
    paymentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoursePurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursePurchase to aggregate.
     */
    where?: CoursePurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePurchases to fetch.
     */
    orderBy?: CoursePurchaseOrderByWithRelationInput | CoursePurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoursePurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoursePurchases
    **/
    _count?: true | CoursePurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoursePurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoursePurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoursePurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoursePurchaseMaxAggregateInputType
  }

  export type GetCoursePurchaseAggregateType<T extends CoursePurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateCoursePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoursePurchase[P]>
      : GetScalarType<T[P], AggregateCoursePurchase[P]>
  }




  export type CoursePurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoursePurchaseWhereInput
    orderBy?: CoursePurchaseOrderByWithAggregationInput | CoursePurchaseOrderByWithAggregationInput[]
    by: CoursePurchaseScalarFieldEnum[] | CoursePurchaseScalarFieldEnum
    having?: CoursePurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoursePurchaseCountAggregateInputType | true
    _avg?: CoursePurchaseAvgAggregateInputType
    _sum?: CoursePurchaseSumAggregateInputType
    _min?: CoursePurchaseMinAggregateInputType
    _max?: CoursePurchaseMaxAggregateInputType
  }

  export type CoursePurchaseGroupByOutputType = {
    id: number
    courseId: number
    userId: number
    amount: number
    status: string
    paymentId: string
    createdAt: Date
    updatedAt: Date
    _count: CoursePurchaseCountAggregateOutputType | null
    _avg: CoursePurchaseAvgAggregateOutputType | null
    _sum: CoursePurchaseSumAggregateOutputType | null
    _min: CoursePurchaseMinAggregateOutputType | null
    _max: CoursePurchaseMaxAggregateOutputType | null
  }

  type GetCoursePurchaseGroupByPayload<T extends CoursePurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoursePurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoursePurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoursePurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], CoursePurchaseGroupByOutputType[P]>
        }
      >
    >


  export type CoursePurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursePurchase"]>

  export type CoursePurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursePurchase"]>

  export type CoursePurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coursePurchase"]>

  export type CoursePurchaseSelectScalar = {
    id?: boolean
    courseId?: boolean
    userId?: boolean
    amount?: boolean
    status?: boolean
    paymentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoursePurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "userId" | "amount" | "status" | "paymentId" | "createdAt" | "updatedAt", ExtArgs["result"]["coursePurchase"]>
  export type CoursePurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoursePurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CoursePurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CoursePurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoursePurchase"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      userId: number
      amount: number
      status: string
      paymentId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coursePurchase"]>
    composites: {}
  }

  type CoursePurchaseGetPayload<S extends boolean | null | undefined | CoursePurchaseDefaultArgs> = $Result.GetResult<Prisma.$CoursePurchasePayload, S>

  type CoursePurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoursePurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoursePurchaseCountAggregateInputType | true
    }

  export interface CoursePurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoursePurchase'], meta: { name: 'CoursePurchase' } }
    /**
     * Find zero or one CoursePurchase that matches the filter.
     * @param {CoursePurchaseFindUniqueArgs} args - Arguments to find a CoursePurchase
     * @example
     * // Get one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoursePurchaseFindUniqueArgs>(args: SelectSubset<T, CoursePurchaseFindUniqueArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CoursePurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoursePurchaseFindUniqueOrThrowArgs} args - Arguments to find a CoursePurchase
     * @example
     * // Get one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoursePurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, CoursePurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoursePurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseFindFirstArgs} args - Arguments to find a CoursePurchase
     * @example
     * // Get one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoursePurchaseFindFirstArgs>(args?: SelectSubset<T, CoursePurchaseFindFirstArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CoursePurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseFindFirstOrThrowArgs} args - Arguments to find a CoursePurchase
     * @example
     * // Get one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoursePurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, CoursePurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CoursePurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoursePurchases
     * const coursePurchases = await prisma.coursePurchase.findMany()
     * 
     * // Get first 10 CoursePurchases
     * const coursePurchases = await prisma.coursePurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coursePurchaseWithIdOnly = await prisma.coursePurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoursePurchaseFindManyArgs>(args?: SelectSubset<T, CoursePurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CoursePurchase.
     * @param {CoursePurchaseCreateArgs} args - Arguments to create a CoursePurchase.
     * @example
     * // Create one CoursePurchase
     * const CoursePurchase = await prisma.coursePurchase.create({
     *   data: {
     *     // ... data to create a CoursePurchase
     *   }
     * })
     * 
     */
    create<T extends CoursePurchaseCreateArgs>(args: SelectSubset<T, CoursePurchaseCreateArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CoursePurchases.
     * @param {CoursePurchaseCreateManyArgs} args - Arguments to create many CoursePurchases.
     * @example
     * // Create many CoursePurchases
     * const coursePurchase = await prisma.coursePurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoursePurchaseCreateManyArgs>(args?: SelectSubset<T, CoursePurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoursePurchases and returns the data saved in the database.
     * @param {CoursePurchaseCreateManyAndReturnArgs} args - Arguments to create many CoursePurchases.
     * @example
     * // Create many CoursePurchases
     * const coursePurchase = await prisma.coursePurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoursePurchases and only return the `id`
     * const coursePurchaseWithIdOnly = await prisma.coursePurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoursePurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, CoursePurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CoursePurchase.
     * @param {CoursePurchaseDeleteArgs} args - Arguments to delete one CoursePurchase.
     * @example
     * // Delete one CoursePurchase
     * const CoursePurchase = await prisma.coursePurchase.delete({
     *   where: {
     *     // ... filter to delete one CoursePurchase
     *   }
     * })
     * 
     */
    delete<T extends CoursePurchaseDeleteArgs>(args: SelectSubset<T, CoursePurchaseDeleteArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CoursePurchase.
     * @param {CoursePurchaseUpdateArgs} args - Arguments to update one CoursePurchase.
     * @example
     * // Update one CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoursePurchaseUpdateArgs>(args: SelectSubset<T, CoursePurchaseUpdateArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CoursePurchases.
     * @param {CoursePurchaseDeleteManyArgs} args - Arguments to filter CoursePurchases to delete.
     * @example
     * // Delete a few CoursePurchases
     * const { count } = await prisma.coursePurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoursePurchaseDeleteManyArgs>(args?: SelectSubset<T, CoursePurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoursePurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoursePurchases
     * const coursePurchase = await prisma.coursePurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoursePurchaseUpdateManyArgs>(args: SelectSubset<T, CoursePurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoursePurchases and returns the data updated in the database.
     * @param {CoursePurchaseUpdateManyAndReturnArgs} args - Arguments to update many CoursePurchases.
     * @example
     * // Update many CoursePurchases
     * const coursePurchase = await prisma.coursePurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CoursePurchases and only return the `id`
     * const coursePurchaseWithIdOnly = await prisma.coursePurchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CoursePurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, CoursePurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CoursePurchase.
     * @param {CoursePurchaseUpsertArgs} args - Arguments to update or create a CoursePurchase.
     * @example
     * // Update or create a CoursePurchase
     * const coursePurchase = await prisma.coursePurchase.upsert({
     *   create: {
     *     // ... data to create a CoursePurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoursePurchase we want to update
     *   }
     * })
     */
    upsert<T extends CoursePurchaseUpsertArgs>(args: SelectSubset<T, CoursePurchaseUpsertArgs<ExtArgs>>): Prisma__CoursePurchaseClient<$Result.GetResult<Prisma.$CoursePurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CoursePurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseCountArgs} args - Arguments to filter CoursePurchases to count.
     * @example
     * // Count the number of CoursePurchases
     * const count = await prisma.coursePurchase.count({
     *   where: {
     *     // ... the filter for the CoursePurchases we want to count
     *   }
     * })
    **/
    count<T extends CoursePurchaseCountArgs>(
      args?: Subset<T, CoursePurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoursePurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoursePurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoursePurchaseAggregateArgs>(args: Subset<T, CoursePurchaseAggregateArgs>): Prisma.PrismaPromise<GetCoursePurchaseAggregateType<T>>

    /**
     * Group by CoursePurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoursePurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoursePurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoursePurchaseGroupByArgs['orderBy'] }
        : { orderBy?: CoursePurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoursePurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoursePurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoursePurchase model
   */
  readonly fields: CoursePurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoursePurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoursePurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CoursePurchase model
   */
  interface CoursePurchaseFieldRefs {
    readonly id: FieldRef<"CoursePurchase", 'Int'>
    readonly courseId: FieldRef<"CoursePurchase", 'Int'>
    readonly userId: FieldRef<"CoursePurchase", 'Int'>
    readonly amount: FieldRef<"CoursePurchase", 'Float'>
    readonly status: FieldRef<"CoursePurchase", 'String'>
    readonly paymentId: FieldRef<"CoursePurchase", 'String'>
    readonly createdAt: FieldRef<"CoursePurchase", 'DateTime'>
    readonly updatedAt: FieldRef<"CoursePurchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoursePurchase findUnique
   */
  export type CoursePurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoursePurchase to fetch.
     */
    where: CoursePurchaseWhereUniqueInput
  }

  /**
   * CoursePurchase findUniqueOrThrow
   */
  export type CoursePurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoursePurchase to fetch.
     */
    where: CoursePurchaseWhereUniqueInput
  }

  /**
   * CoursePurchase findFirst
   */
  export type CoursePurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoursePurchase to fetch.
     */
    where?: CoursePurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePurchases to fetch.
     */
    orderBy?: CoursePurchaseOrderByWithRelationInput | CoursePurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursePurchases.
     */
    cursor?: CoursePurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursePurchases.
     */
    distinct?: CoursePurchaseScalarFieldEnum | CoursePurchaseScalarFieldEnum[]
  }

  /**
   * CoursePurchase findFirstOrThrow
   */
  export type CoursePurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoursePurchase to fetch.
     */
    where?: CoursePurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePurchases to fetch.
     */
    orderBy?: CoursePurchaseOrderByWithRelationInput | CoursePurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoursePurchases.
     */
    cursor?: CoursePurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoursePurchases.
     */
    distinct?: CoursePurchaseScalarFieldEnum | CoursePurchaseScalarFieldEnum[]
  }

  /**
   * CoursePurchase findMany
   */
  export type CoursePurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * Filter, which CoursePurchases to fetch.
     */
    where?: CoursePurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoursePurchases to fetch.
     */
    orderBy?: CoursePurchaseOrderByWithRelationInput | CoursePurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoursePurchases.
     */
    cursor?: CoursePurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoursePurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoursePurchases.
     */
    skip?: number
    distinct?: CoursePurchaseScalarFieldEnum | CoursePurchaseScalarFieldEnum[]
  }

  /**
   * CoursePurchase create
   */
  export type CoursePurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a CoursePurchase.
     */
    data: XOR<CoursePurchaseCreateInput, CoursePurchaseUncheckedCreateInput>
  }

  /**
   * CoursePurchase createMany
   */
  export type CoursePurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoursePurchases.
     */
    data: CoursePurchaseCreateManyInput | CoursePurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoursePurchase createManyAndReturn
   */
  export type CoursePurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many CoursePurchases.
     */
    data: CoursePurchaseCreateManyInput | CoursePurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoursePurchase update
   */
  export type CoursePurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a CoursePurchase.
     */
    data: XOR<CoursePurchaseUpdateInput, CoursePurchaseUncheckedUpdateInput>
    /**
     * Choose, which CoursePurchase to update.
     */
    where: CoursePurchaseWhereUniqueInput
  }

  /**
   * CoursePurchase updateMany
   */
  export type CoursePurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoursePurchases.
     */
    data: XOR<CoursePurchaseUpdateManyMutationInput, CoursePurchaseUncheckedUpdateManyInput>
    /**
     * Filter which CoursePurchases to update
     */
    where?: CoursePurchaseWhereInput
    /**
     * Limit how many CoursePurchases to update.
     */
    limit?: number
  }

  /**
   * CoursePurchase updateManyAndReturn
   */
  export type CoursePurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * The data used to update CoursePurchases.
     */
    data: XOR<CoursePurchaseUpdateManyMutationInput, CoursePurchaseUncheckedUpdateManyInput>
    /**
     * Filter which CoursePurchases to update
     */
    where?: CoursePurchaseWhereInput
    /**
     * Limit how many CoursePurchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoursePurchase upsert
   */
  export type CoursePurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the CoursePurchase to update in case it exists.
     */
    where: CoursePurchaseWhereUniqueInput
    /**
     * In case the CoursePurchase found by the `where` argument doesn't exist, create a new CoursePurchase with this data.
     */
    create: XOR<CoursePurchaseCreateInput, CoursePurchaseUncheckedCreateInput>
    /**
     * In case the CoursePurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoursePurchaseUpdateInput, CoursePurchaseUncheckedUpdateInput>
  }

  /**
   * CoursePurchase delete
   */
  export type CoursePurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
    /**
     * Filter which CoursePurchase to delete.
     */
    where: CoursePurchaseWhereUniqueInput
  }

  /**
   * CoursePurchase deleteMany
   */
  export type CoursePurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoursePurchases to delete
     */
    where?: CoursePurchaseWhereInput
    /**
     * Limit how many CoursePurchases to delete.
     */
    limit?: number
  }

  /**
   * CoursePurchase without action
   */
  export type CoursePurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoursePurchase
     */
    select?: CoursePurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CoursePurchase
     */
    omit?: CoursePurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoursePurchaseInclude<ExtArgs> | null
  }


  /**
   * Model CourseProgress
   */

  export type AggregateCourseProgress = {
    _count: CourseProgressCountAggregateOutputType | null
    _avg: CourseProgressAvgAggregateOutputType | null
    _sum: CourseProgressSumAggregateOutputType | null
    _min: CourseProgressMinAggregateOutputType | null
    _max: CourseProgressMaxAggregateOutputType | null
  }

  export type CourseProgressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
  }

  export type CourseProgressSumAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
  }

  export type CourseProgressMinAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
    completed: boolean | null
  }

  export type CourseProgressMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
    completed: boolean | null
  }

  export type CourseProgressCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    completed: number
    _all: number
  }


  export type CourseProgressAvgAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
  }

  export type CourseProgressSumAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
  }

  export type CourseProgressMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    completed?: true
  }

  export type CourseProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    completed?: true
  }

  export type CourseProgressCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    completed?: true
    _all?: true
  }

  export type CourseProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseProgress to aggregate.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseProgresses
    **/
    _count?: true | CourseProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseProgressMaxAggregateInputType
  }

  export type GetCourseProgressAggregateType<T extends CourseProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseProgress[P]>
      : GetScalarType<T[P], AggregateCourseProgress[P]>
  }




  export type CourseProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseProgressWhereInput
    orderBy?: CourseProgressOrderByWithAggregationInput | CourseProgressOrderByWithAggregationInput[]
    by: CourseProgressScalarFieldEnum[] | CourseProgressScalarFieldEnum
    having?: CourseProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseProgressCountAggregateInputType | true
    _avg?: CourseProgressAvgAggregateInputType
    _sum?: CourseProgressSumAggregateInputType
    _min?: CourseProgressMinAggregateInputType
    _max?: CourseProgressMaxAggregateInputType
  }

  export type CourseProgressGroupByOutputType = {
    id: number
    userId: number
    courseId: number
    completed: boolean
    _count: CourseProgressCountAggregateOutputType | null
    _avg: CourseProgressAvgAggregateOutputType | null
    _sum: CourseProgressSumAggregateOutputType | null
    _min: CourseProgressMinAggregateOutputType | null
    _max: CourseProgressMaxAggregateOutputType | null
  }

  type GetCourseProgressGroupByPayload<T extends CourseProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseProgressGroupByOutputType[P]>
            : GetScalarType<T[P], CourseProgressGroupByOutputType[P]>
        }
      >
    >


  export type CourseProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lectureProgress?: boolean | CourseProgress$lectureProgressArgs<ExtArgs>
    _count?: boolean | CourseProgressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProgress"]>

  export type CourseProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProgress"]>

  export type CourseProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    completed?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseProgress"]>

  export type CourseProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    completed?: boolean
  }

  export type CourseProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "completed", ExtArgs["result"]["courseProgress"]>
  export type CourseProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lectureProgress?: boolean | CourseProgress$lectureProgressArgs<ExtArgs>
    _count?: boolean | CourseProgressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CourseProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CourseProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
      lectureProgress: Prisma.$LectureProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      courseId: number
      completed: boolean
    }, ExtArgs["result"]["courseProgress"]>
    composites: {}
  }

  type CourseProgressGetPayload<S extends boolean | null | undefined | CourseProgressDefaultArgs> = $Result.GetResult<Prisma.$CourseProgressPayload, S>

  type CourseProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseProgressCountAggregateInputType | true
    }

  export interface CourseProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseProgress'], meta: { name: 'CourseProgress' } }
    /**
     * Find zero or one CourseProgress that matches the filter.
     * @param {CourseProgressFindUniqueArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseProgressFindUniqueArgs>(args: SelectSubset<T, CourseProgressFindUniqueArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseProgressFindUniqueOrThrowArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressFindFirstArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseProgressFindFirstArgs>(args?: SelectSubset<T, CourseProgressFindFirstArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressFindFirstOrThrowArgs} args - Arguments to find a CourseProgress
     * @example
     * // Get one CourseProgress
     * const courseProgress = await prisma.courseProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseProgresses
     * const courseProgresses = await prisma.courseProgress.findMany()
     * 
     * // Get first 10 CourseProgresses
     * const courseProgresses = await prisma.courseProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseProgressWithIdOnly = await prisma.courseProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseProgressFindManyArgs>(args?: SelectSubset<T, CourseProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseProgress.
     * @param {CourseProgressCreateArgs} args - Arguments to create a CourseProgress.
     * @example
     * // Create one CourseProgress
     * const CourseProgress = await prisma.courseProgress.create({
     *   data: {
     *     // ... data to create a CourseProgress
     *   }
     * })
     * 
     */
    create<T extends CourseProgressCreateArgs>(args: SelectSubset<T, CourseProgressCreateArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseProgresses.
     * @param {CourseProgressCreateManyArgs} args - Arguments to create many CourseProgresses.
     * @example
     * // Create many CourseProgresses
     * const courseProgress = await prisma.courseProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseProgressCreateManyArgs>(args?: SelectSubset<T, CourseProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseProgresses and returns the data saved in the database.
     * @param {CourseProgressCreateManyAndReturnArgs} args - Arguments to create many CourseProgresses.
     * @example
     * // Create many CourseProgresses
     * const courseProgress = await prisma.courseProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseProgresses and only return the `id`
     * const courseProgressWithIdOnly = await prisma.courseProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseProgress.
     * @param {CourseProgressDeleteArgs} args - Arguments to delete one CourseProgress.
     * @example
     * // Delete one CourseProgress
     * const CourseProgress = await prisma.courseProgress.delete({
     *   where: {
     *     // ... filter to delete one CourseProgress
     *   }
     * })
     * 
     */
    delete<T extends CourseProgressDeleteArgs>(args: SelectSubset<T, CourseProgressDeleteArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseProgress.
     * @param {CourseProgressUpdateArgs} args - Arguments to update one CourseProgress.
     * @example
     * // Update one CourseProgress
     * const courseProgress = await prisma.courseProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseProgressUpdateArgs>(args: SelectSubset<T, CourseProgressUpdateArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseProgresses.
     * @param {CourseProgressDeleteManyArgs} args - Arguments to filter CourseProgresses to delete.
     * @example
     * // Delete a few CourseProgresses
     * const { count } = await prisma.courseProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseProgressDeleteManyArgs>(args?: SelectSubset<T, CourseProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseProgresses
     * const courseProgress = await prisma.courseProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseProgressUpdateManyArgs>(args: SelectSubset<T, CourseProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseProgresses and returns the data updated in the database.
     * @param {CourseProgressUpdateManyAndReturnArgs} args - Arguments to update many CourseProgresses.
     * @example
     * // Update many CourseProgresses
     * const courseProgress = await prisma.courseProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseProgresses and only return the `id`
     * const courseProgressWithIdOnly = await prisma.courseProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseProgress.
     * @param {CourseProgressUpsertArgs} args - Arguments to update or create a CourseProgress.
     * @example
     * // Update or create a CourseProgress
     * const courseProgress = await prisma.courseProgress.upsert({
     *   create: {
     *     // ... data to create a CourseProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseProgress we want to update
     *   }
     * })
     */
    upsert<T extends CourseProgressUpsertArgs>(args: SelectSubset<T, CourseProgressUpsertArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressCountArgs} args - Arguments to filter CourseProgresses to count.
     * @example
     * // Count the number of CourseProgresses
     * const count = await prisma.courseProgress.count({
     *   where: {
     *     // ... the filter for the CourseProgresses we want to count
     *   }
     * })
    **/
    count<T extends CourseProgressCountArgs>(
      args?: Subset<T, CourseProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseProgressAggregateArgs>(args: Subset<T, CourseProgressAggregateArgs>): Prisma.PrismaPromise<GetCourseProgressAggregateType<T>>

    /**
     * Group by CourseProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseProgressGroupByArgs['orderBy'] }
        : { orderBy?: CourseProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseProgress model
   */
  readonly fields: CourseProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lectureProgress<T extends CourseProgress$lectureProgressArgs<ExtArgs> = {}>(args?: Subset<T, CourseProgress$lectureProgressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseProgress model
   */
  interface CourseProgressFieldRefs {
    readonly id: FieldRef<"CourseProgress", 'Int'>
    readonly userId: FieldRef<"CourseProgress", 'Int'>
    readonly courseId: FieldRef<"CourseProgress", 'Int'>
    readonly completed: FieldRef<"CourseProgress", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * CourseProgress findUnique
   */
  export type CourseProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress findUniqueOrThrow
   */
  export type CourseProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress findFirst
   */
  export type CourseProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseProgresses.
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseProgresses.
     */
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress findFirstOrThrow
   */
  export type CourseProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgress to fetch.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseProgresses.
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseProgresses.
     */
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress findMany
   */
  export type CourseProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter, which CourseProgresses to fetch.
     */
    where?: CourseProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseProgresses to fetch.
     */
    orderBy?: CourseProgressOrderByWithRelationInput | CourseProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseProgresses.
     */
    cursor?: CourseProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseProgresses.
     */
    skip?: number
    distinct?: CourseProgressScalarFieldEnum | CourseProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress create
   */
  export type CourseProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseProgress.
     */
    data: XOR<CourseProgressCreateInput, CourseProgressUncheckedCreateInput>
  }

  /**
   * CourseProgress createMany
   */
  export type CourseProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseProgresses.
     */
    data: CourseProgressCreateManyInput | CourseProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseProgress createManyAndReturn
   */
  export type CourseProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * The data used to create many CourseProgresses.
     */
    data: CourseProgressCreateManyInput | CourseProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseProgress update
   */
  export type CourseProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseProgress.
     */
    data: XOR<CourseProgressUpdateInput, CourseProgressUncheckedUpdateInput>
    /**
     * Choose, which CourseProgress to update.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress updateMany
   */
  export type CourseProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseProgresses.
     */
    data: XOR<CourseProgressUpdateManyMutationInput, CourseProgressUncheckedUpdateManyInput>
    /**
     * Filter which CourseProgresses to update
     */
    where?: CourseProgressWhereInput
    /**
     * Limit how many CourseProgresses to update.
     */
    limit?: number
  }

  /**
   * CourseProgress updateManyAndReturn
   */
  export type CourseProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * The data used to update CourseProgresses.
     */
    data: XOR<CourseProgressUpdateManyMutationInput, CourseProgressUncheckedUpdateManyInput>
    /**
     * Filter which CourseProgresses to update
     */
    where?: CourseProgressWhereInput
    /**
     * Limit how many CourseProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseProgress upsert
   */
  export type CourseProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseProgress to update in case it exists.
     */
    where: CourseProgressWhereUniqueInput
    /**
     * In case the CourseProgress found by the `where` argument doesn't exist, create a new CourseProgress with this data.
     */
    create: XOR<CourseProgressCreateInput, CourseProgressUncheckedCreateInput>
    /**
     * In case the CourseProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseProgressUpdateInput, CourseProgressUncheckedUpdateInput>
  }

  /**
   * CourseProgress delete
   */
  export type CourseProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
    /**
     * Filter which CourseProgress to delete.
     */
    where: CourseProgressWhereUniqueInput
  }

  /**
   * CourseProgress deleteMany
   */
  export type CourseProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseProgresses to delete
     */
    where?: CourseProgressWhereInput
    /**
     * Limit how many CourseProgresses to delete.
     */
    limit?: number
  }

  /**
   * CourseProgress.lectureProgress
   */
  export type CourseProgress$lectureProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressInclude<ExtArgs> | null
    where?: LectureProgressWhereInput
    orderBy?: LectureProgressOrderByWithRelationInput | LectureProgressOrderByWithRelationInput[]
    cursor?: LectureProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LectureProgressScalarFieldEnum | LectureProgressScalarFieldEnum[]
  }

  /**
   * CourseProgress without action
   */
  export type CourseProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseProgress
     */
    select?: CourseProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseProgress
     */
    omit?: CourseProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseProgressInclude<ExtArgs> | null
  }


  /**
   * Model LectureProgress
   */

  export type AggregateLectureProgress = {
    _count: LectureProgressCountAggregateOutputType | null
    _avg: LectureProgressAvgAggregateOutputType | null
    _sum: LectureProgressSumAggregateOutputType | null
    _min: LectureProgressMinAggregateOutputType | null
    _max: LectureProgressMaxAggregateOutputType | null
  }

  export type LectureProgressAvgAggregateOutputType = {
    id: number | null
    lectureId: number | null
    progressId: number | null
  }

  export type LectureProgressSumAggregateOutputType = {
    id: number | null
    lectureId: number | null
    progressId: number | null
  }

  export type LectureProgressMinAggregateOutputType = {
    id: number | null
    lectureId: number | null
    viewed: boolean | null
    progressId: number | null
  }

  export type LectureProgressMaxAggregateOutputType = {
    id: number | null
    lectureId: number | null
    viewed: boolean | null
    progressId: number | null
  }

  export type LectureProgressCountAggregateOutputType = {
    id: number
    lectureId: number
    viewed: number
    progressId: number
    _all: number
  }


  export type LectureProgressAvgAggregateInputType = {
    id?: true
    lectureId?: true
    progressId?: true
  }

  export type LectureProgressSumAggregateInputType = {
    id?: true
    lectureId?: true
    progressId?: true
  }

  export type LectureProgressMinAggregateInputType = {
    id?: true
    lectureId?: true
    viewed?: true
    progressId?: true
  }

  export type LectureProgressMaxAggregateInputType = {
    id?: true
    lectureId?: true
    viewed?: true
    progressId?: true
  }

  export type LectureProgressCountAggregateInputType = {
    id?: true
    lectureId?: true
    viewed?: true
    progressId?: true
    _all?: true
  }

  export type LectureProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LectureProgress to aggregate.
     */
    where?: LectureProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureProgresses to fetch.
     */
    orderBy?: LectureProgressOrderByWithRelationInput | LectureProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LectureProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LectureProgresses
    **/
    _count?: true | LectureProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LectureProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LectureProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LectureProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LectureProgressMaxAggregateInputType
  }

  export type GetLectureProgressAggregateType<T extends LectureProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateLectureProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLectureProgress[P]>
      : GetScalarType<T[P], AggregateLectureProgress[P]>
  }




  export type LectureProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LectureProgressWhereInput
    orderBy?: LectureProgressOrderByWithAggregationInput | LectureProgressOrderByWithAggregationInput[]
    by: LectureProgressScalarFieldEnum[] | LectureProgressScalarFieldEnum
    having?: LectureProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LectureProgressCountAggregateInputType | true
    _avg?: LectureProgressAvgAggregateInputType
    _sum?: LectureProgressSumAggregateInputType
    _min?: LectureProgressMinAggregateInputType
    _max?: LectureProgressMaxAggregateInputType
  }

  export type LectureProgressGroupByOutputType = {
    id: number
    lectureId: number
    viewed: boolean
    progressId: number
    _count: LectureProgressCountAggregateOutputType | null
    _avg: LectureProgressAvgAggregateOutputType | null
    _sum: LectureProgressSumAggregateOutputType | null
    _min: LectureProgressMinAggregateOutputType | null
    _max: LectureProgressMaxAggregateOutputType | null
  }

  type GetLectureProgressGroupByPayload<T extends LectureProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LectureProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LectureProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LectureProgressGroupByOutputType[P]>
            : GetScalarType<T[P], LectureProgressGroupByOutputType[P]>
        }
      >
    >


  export type LectureProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lectureId?: boolean
    viewed?: boolean
    progressId?: boolean
    progress?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lectureProgress"]>

  export type LectureProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lectureId?: boolean
    viewed?: boolean
    progressId?: boolean
    progress?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lectureProgress"]>

  export type LectureProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lectureId?: boolean
    viewed?: boolean
    progressId?: boolean
    progress?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lectureProgress"]>

  export type LectureProgressSelectScalar = {
    id?: boolean
    lectureId?: boolean
    viewed?: boolean
    progressId?: boolean
  }

  export type LectureProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lectureId" | "viewed" | "progressId", ExtArgs["result"]["lectureProgress"]>
  export type LectureProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }
  export type LectureProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }
  export type LectureProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | CourseProgressDefaultArgs<ExtArgs>
  }

  export type $LectureProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LectureProgress"
    objects: {
      progress: Prisma.$CourseProgressPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lectureId: number
      viewed: boolean
      progressId: number
    }, ExtArgs["result"]["lectureProgress"]>
    composites: {}
  }

  type LectureProgressGetPayload<S extends boolean | null | undefined | LectureProgressDefaultArgs> = $Result.GetResult<Prisma.$LectureProgressPayload, S>

  type LectureProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LectureProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LectureProgressCountAggregateInputType | true
    }

  export interface LectureProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LectureProgress'], meta: { name: 'LectureProgress' } }
    /**
     * Find zero or one LectureProgress that matches the filter.
     * @param {LectureProgressFindUniqueArgs} args - Arguments to find a LectureProgress
     * @example
     * // Get one LectureProgress
     * const lectureProgress = await prisma.lectureProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LectureProgressFindUniqueArgs>(args: SelectSubset<T, LectureProgressFindUniqueArgs<ExtArgs>>): Prisma__LectureProgressClient<$Result.GetResult<Prisma.$LectureProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LectureProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LectureProgressFindUniqueOrThrowArgs} args - Arguments to find a LectureProgress
     * @example
     * // Get one LectureProgress
     * const lectureProgress = await prisma.lectureProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LectureProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, LectureProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LectureProgressClient<$Result.GetResult<Prisma.$LectureProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LectureProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureProgressFindFirstArgs} args - Arguments to find a LectureProgress
     * @example
     * // Get one LectureProgress
     * const lectureProgress = await prisma.lectureProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LectureProgressFindFirstArgs>(args?: SelectSubset<T, LectureProgressFindFirstArgs<ExtArgs>>): Prisma__LectureProgressClient<$Result.GetResult<Prisma.$LectureProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LectureProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureProgressFindFirstOrThrowArgs} args - Arguments to find a LectureProgress
     * @example
     * // Get one LectureProgress
     * const lectureProgress = await prisma.lectureProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LectureProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, LectureProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__LectureProgressClient<$Result.GetResult<Prisma.$LectureProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LectureProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LectureProgresses
     * const lectureProgresses = await prisma.lectureProgress.findMany()
     * 
     * // Get first 10 LectureProgresses
     * const lectureProgresses = await prisma.lectureProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lectureProgressWithIdOnly = await prisma.lectureProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LectureProgressFindManyArgs>(args?: SelectSubset<T, LectureProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LectureProgress.
     * @param {LectureProgressCreateArgs} args - Arguments to create a LectureProgress.
     * @example
     * // Create one LectureProgress
     * const LectureProgress = await prisma.lectureProgress.create({
     *   data: {
     *     // ... data to create a LectureProgress
     *   }
     * })
     * 
     */
    create<T extends LectureProgressCreateArgs>(args: SelectSubset<T, LectureProgressCreateArgs<ExtArgs>>): Prisma__LectureProgressClient<$Result.GetResult<Prisma.$LectureProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LectureProgresses.
     * @param {LectureProgressCreateManyArgs} args - Arguments to create many LectureProgresses.
     * @example
     * // Create many LectureProgresses
     * const lectureProgress = await prisma.lectureProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LectureProgressCreateManyArgs>(args?: SelectSubset<T, LectureProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LectureProgresses and returns the data saved in the database.
     * @param {LectureProgressCreateManyAndReturnArgs} args - Arguments to create many LectureProgresses.
     * @example
     * // Create many LectureProgresses
     * const lectureProgress = await prisma.lectureProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LectureProgresses and only return the `id`
     * const lectureProgressWithIdOnly = await prisma.lectureProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LectureProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, LectureProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LectureProgress.
     * @param {LectureProgressDeleteArgs} args - Arguments to delete one LectureProgress.
     * @example
     * // Delete one LectureProgress
     * const LectureProgress = await prisma.lectureProgress.delete({
     *   where: {
     *     // ... filter to delete one LectureProgress
     *   }
     * })
     * 
     */
    delete<T extends LectureProgressDeleteArgs>(args: SelectSubset<T, LectureProgressDeleteArgs<ExtArgs>>): Prisma__LectureProgressClient<$Result.GetResult<Prisma.$LectureProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LectureProgress.
     * @param {LectureProgressUpdateArgs} args - Arguments to update one LectureProgress.
     * @example
     * // Update one LectureProgress
     * const lectureProgress = await prisma.lectureProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LectureProgressUpdateArgs>(args: SelectSubset<T, LectureProgressUpdateArgs<ExtArgs>>): Prisma__LectureProgressClient<$Result.GetResult<Prisma.$LectureProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LectureProgresses.
     * @param {LectureProgressDeleteManyArgs} args - Arguments to filter LectureProgresses to delete.
     * @example
     * // Delete a few LectureProgresses
     * const { count } = await prisma.lectureProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LectureProgressDeleteManyArgs>(args?: SelectSubset<T, LectureProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LectureProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LectureProgresses
     * const lectureProgress = await prisma.lectureProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LectureProgressUpdateManyArgs>(args: SelectSubset<T, LectureProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LectureProgresses and returns the data updated in the database.
     * @param {LectureProgressUpdateManyAndReturnArgs} args - Arguments to update many LectureProgresses.
     * @example
     * // Update many LectureProgresses
     * const lectureProgress = await prisma.lectureProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LectureProgresses and only return the `id`
     * const lectureProgressWithIdOnly = await prisma.lectureProgress.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LectureProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, LectureProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LectureProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LectureProgress.
     * @param {LectureProgressUpsertArgs} args - Arguments to update or create a LectureProgress.
     * @example
     * // Update or create a LectureProgress
     * const lectureProgress = await prisma.lectureProgress.upsert({
     *   create: {
     *     // ... data to create a LectureProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LectureProgress we want to update
     *   }
     * })
     */
    upsert<T extends LectureProgressUpsertArgs>(args: SelectSubset<T, LectureProgressUpsertArgs<ExtArgs>>): Prisma__LectureProgressClient<$Result.GetResult<Prisma.$LectureProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LectureProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureProgressCountArgs} args - Arguments to filter LectureProgresses to count.
     * @example
     * // Count the number of LectureProgresses
     * const count = await prisma.lectureProgress.count({
     *   where: {
     *     // ... the filter for the LectureProgresses we want to count
     *   }
     * })
    **/
    count<T extends LectureProgressCountArgs>(
      args?: Subset<T, LectureProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LectureProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LectureProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LectureProgressAggregateArgs>(args: Subset<T, LectureProgressAggregateArgs>): Prisma.PrismaPromise<GetLectureProgressAggregateType<T>>

    /**
     * Group by LectureProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LectureProgressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LectureProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LectureProgressGroupByArgs['orderBy'] }
        : { orderBy?: LectureProgressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LectureProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLectureProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LectureProgress model
   */
  readonly fields: LectureProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LectureProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LectureProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progress<T extends CourseProgressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseProgressDefaultArgs<ExtArgs>>): Prisma__CourseProgressClient<$Result.GetResult<Prisma.$CourseProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LectureProgress model
   */
  interface LectureProgressFieldRefs {
    readonly id: FieldRef<"LectureProgress", 'Int'>
    readonly lectureId: FieldRef<"LectureProgress", 'Int'>
    readonly viewed: FieldRef<"LectureProgress", 'Boolean'>
    readonly progressId: FieldRef<"LectureProgress", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LectureProgress findUnique
   */
  export type LectureProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressInclude<ExtArgs> | null
    /**
     * Filter, which LectureProgress to fetch.
     */
    where: LectureProgressWhereUniqueInput
  }

  /**
   * LectureProgress findUniqueOrThrow
   */
  export type LectureProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressInclude<ExtArgs> | null
    /**
     * Filter, which LectureProgress to fetch.
     */
    where: LectureProgressWhereUniqueInput
  }

  /**
   * LectureProgress findFirst
   */
  export type LectureProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressInclude<ExtArgs> | null
    /**
     * Filter, which LectureProgress to fetch.
     */
    where?: LectureProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureProgresses to fetch.
     */
    orderBy?: LectureProgressOrderByWithRelationInput | LectureProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LectureProgresses.
     */
    cursor?: LectureProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LectureProgresses.
     */
    distinct?: LectureProgressScalarFieldEnum | LectureProgressScalarFieldEnum[]
  }

  /**
   * LectureProgress findFirstOrThrow
   */
  export type LectureProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressInclude<ExtArgs> | null
    /**
     * Filter, which LectureProgress to fetch.
     */
    where?: LectureProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureProgresses to fetch.
     */
    orderBy?: LectureProgressOrderByWithRelationInput | LectureProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LectureProgresses.
     */
    cursor?: LectureProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LectureProgresses.
     */
    distinct?: LectureProgressScalarFieldEnum | LectureProgressScalarFieldEnum[]
  }

  /**
   * LectureProgress findMany
   */
  export type LectureProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressInclude<ExtArgs> | null
    /**
     * Filter, which LectureProgresses to fetch.
     */
    where?: LectureProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LectureProgresses to fetch.
     */
    orderBy?: LectureProgressOrderByWithRelationInput | LectureProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LectureProgresses.
     */
    cursor?: LectureProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LectureProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LectureProgresses.
     */
    skip?: number
    distinct?: LectureProgressScalarFieldEnum | LectureProgressScalarFieldEnum[]
  }

  /**
   * LectureProgress create
   */
  export type LectureProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a LectureProgress.
     */
    data: XOR<LectureProgressCreateInput, LectureProgressUncheckedCreateInput>
  }

  /**
   * LectureProgress createMany
   */
  export type LectureProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LectureProgresses.
     */
    data: LectureProgressCreateManyInput | LectureProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LectureProgress createManyAndReturn
   */
  export type LectureProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * The data used to create many LectureProgresses.
     */
    data: LectureProgressCreateManyInput | LectureProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LectureProgress update
   */
  export type LectureProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a LectureProgress.
     */
    data: XOR<LectureProgressUpdateInput, LectureProgressUncheckedUpdateInput>
    /**
     * Choose, which LectureProgress to update.
     */
    where: LectureProgressWhereUniqueInput
  }

  /**
   * LectureProgress updateMany
   */
  export type LectureProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LectureProgresses.
     */
    data: XOR<LectureProgressUpdateManyMutationInput, LectureProgressUncheckedUpdateManyInput>
    /**
     * Filter which LectureProgresses to update
     */
    where?: LectureProgressWhereInput
    /**
     * Limit how many LectureProgresses to update.
     */
    limit?: number
  }

  /**
   * LectureProgress updateManyAndReturn
   */
  export type LectureProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * The data used to update LectureProgresses.
     */
    data: XOR<LectureProgressUpdateManyMutationInput, LectureProgressUncheckedUpdateManyInput>
    /**
     * Filter which LectureProgresses to update
     */
    where?: LectureProgressWhereInput
    /**
     * Limit how many LectureProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LectureProgress upsert
   */
  export type LectureProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the LectureProgress to update in case it exists.
     */
    where: LectureProgressWhereUniqueInput
    /**
     * In case the LectureProgress found by the `where` argument doesn't exist, create a new LectureProgress with this data.
     */
    create: XOR<LectureProgressCreateInput, LectureProgressUncheckedCreateInput>
    /**
     * In case the LectureProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LectureProgressUpdateInput, LectureProgressUncheckedUpdateInput>
  }

  /**
   * LectureProgress delete
   */
  export type LectureProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressInclude<ExtArgs> | null
    /**
     * Filter which LectureProgress to delete.
     */
    where: LectureProgressWhereUniqueInput
  }

  /**
   * LectureProgress deleteMany
   */
  export type LectureProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LectureProgresses to delete
     */
    where?: LectureProgressWhereInput
    /**
     * Limit how many LectureProgresses to delete.
     */
    limit?: number
  }

  /**
   * LectureProgress without action
   */
  export type LectureProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LectureProgress
     */
    select?: LectureProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LectureProgress
     */
    omit?: LectureProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LectureProgressInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    courseId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    title: string | null
    videoUrl: string | null
    richText: string | null
    courseId: number | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    videoUrl: string | null
    richText: string | null
    courseId: number | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    title: number
    videoUrl: number
    richText: number
    courseId: number
    createdAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    courseId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    title?: true
    videoUrl?: true
    richText?: true
    courseId?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    title?: true
    videoUrl?: true
    richText?: true
    courseId?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    title?: true
    videoUrl?: true
    richText?: true
    courseId?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    title: string
    videoUrl: string | null
    richText: string
    courseId: number
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    videoUrl?: boolean
    richText?: boolean
    courseId?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    videoUrl?: boolean
    richText?: boolean
    courseId?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    videoUrl?: boolean
    richText?: boolean
    courseId?: boolean
    createdAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    title?: boolean
    videoUrl?: boolean
    richText?: boolean
    courseId?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "videoUrl" | "richText" | "courseId" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      videoUrl: string | null
      richText: string
      courseId: number
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly title: FieldRef<"Session", 'String'>
    readonly videoUrl: FieldRef<"Session", 'String'>
    readonly richText: FieldRef<"Session", 'String'>
    readonly courseId: FieldRef<"Session", 'Int'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
    createdAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    courseId: number | null
    createdAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    userId: number
    courseId: number
    createdAt: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
  }

  export type EnrollmentSumAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    createdAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    createdAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    userId?: true
    courseId?: true
    createdAt?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: number
    userId: number
    courseId: number
    createdAt: Date
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "courseId" | "createdAt", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      courseId: number
      createdAt: Date
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'Int'>
    readonly userId: FieldRef<"Enrollment", 'Int'>
    readonly courseId: FieldRef<"Enrollment", 'Int'>
    readonly createdAt: FieldRef<"Enrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    photoUrl: 'photoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    courseTitle: 'courseTitle',
    subTitle: 'subTitle',
    description: 'description',
    category: 'category',
    courseLevel: 'courseLevel',
    coursePrice: 'coursePrice',
    courseThumbnail: 'courseThumbnail',
    creatorId: 'creatorId',
    isPublished: 'isPublished',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const LectureScalarFieldEnum: {
    id: 'id',
    lectureTitle: 'lectureTitle',
    videoUrl: 'videoUrl',
    publicId: 'publicId',
    isPreviewFree: 'isPreviewFree',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LectureScalarFieldEnum = (typeof LectureScalarFieldEnum)[keyof typeof LectureScalarFieldEnum]


  export const CoursePurchaseScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    userId: 'userId',
    amount: 'amount',
    status: 'status',
    paymentId: 'paymentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoursePurchaseScalarFieldEnum = (typeof CoursePurchaseScalarFieldEnum)[keyof typeof CoursePurchaseScalarFieldEnum]


  export const CourseProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    completed: 'completed'
  };

  export type CourseProgressScalarFieldEnum = (typeof CourseProgressScalarFieldEnum)[keyof typeof CourseProgressScalarFieldEnum]


  export const LectureProgressScalarFieldEnum: {
    id: 'id',
    lectureId: 'lectureId',
    viewed: 'viewed',
    progressId: 'progressId'
  };

  export type LectureProgressScalarFieldEnum = (typeof LectureProgressScalarFieldEnum)[keyof typeof LectureProgressScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    videoUrl: 'videoUrl',
    richText: 'richText',
    courseId: 'courseId',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    courseId: 'courseId',
    createdAt: 'createdAt'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    photoUrl?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    enrolledCourses?: CourseListRelationFilter
    coursesCreated?: CourseListRelationFilter
    coursePurchases?: CoursePurchaseListRelationFilter
    courseProgress?: CourseProgressListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enrolledCourses?: CourseOrderByRelationAggregateInput
    coursesCreated?: CourseOrderByRelationAggregateInput
    coursePurchases?: CoursePurchaseOrderByRelationAggregateInput
    courseProgress?: CourseProgressOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    photoUrl?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    enrolledCourses?: CourseListRelationFilter
    coursesCreated?: CourseListRelationFilter
    coursePurchases?: CoursePurchaseListRelationFilter
    courseProgress?: CourseProgressListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    photoUrl?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    courseTitle?: StringFilter<"Course"> | string
    subTitle?: StringNullableFilter<"Course"> | string | null
    description?: StringNullableFilter<"Course"> | string | null
    category?: StringFilter<"Course"> | string
    courseLevel?: StringNullableFilter<"Course"> | string | null
    coursePrice?: FloatNullableFilter<"Course"> | number | null
    courseThumbnail?: StringNullableFilter<"Course"> | string | null
    creatorId?: IntFilter<"Course"> | number
    isPublished?: BoolFilter<"Course"> | boolean
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    enrolledStudents?: UserListRelationFilter
    lectures?: LectureListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    coursePurchases?: CoursePurchaseListRelationFilter
    courseProgress?: CourseProgressListRelationFilter
    sessions?: SessionListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    courseTitle?: SortOrder
    subTitle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    courseLevel?: SortOrderInput | SortOrder
    coursePrice?: SortOrderInput | SortOrder
    courseThumbnail?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    enrolledStudents?: UserOrderByRelationAggregateInput
    lectures?: LectureOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
    coursePurchases?: CoursePurchaseOrderByRelationAggregateInput
    courseProgress?: CourseProgressOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    courseTitle?: StringFilter<"Course"> | string
    subTitle?: StringNullableFilter<"Course"> | string | null
    description?: StringNullableFilter<"Course"> | string | null
    category?: StringFilter<"Course"> | string
    courseLevel?: StringNullableFilter<"Course"> | string | null
    coursePrice?: FloatNullableFilter<"Course"> | number | null
    courseThumbnail?: StringNullableFilter<"Course"> | string | null
    creatorId?: IntFilter<"Course"> | number
    isPublished?: BoolFilter<"Course"> | boolean
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    enrolledStudents?: UserListRelationFilter
    lectures?: LectureListRelationFilter
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    coursePurchases?: CoursePurchaseListRelationFilter
    courseProgress?: CourseProgressListRelationFilter
    sessions?: SessionListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    courseTitle?: SortOrder
    subTitle?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    courseLevel?: SortOrderInput | SortOrder
    coursePrice?: SortOrderInput | SortOrder
    courseThumbnail?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    courseTitle?: StringWithAggregatesFilter<"Course"> | string
    subTitle?: StringNullableWithAggregatesFilter<"Course"> | string | null
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    category?: StringWithAggregatesFilter<"Course"> | string
    courseLevel?: StringNullableWithAggregatesFilter<"Course"> | string | null
    coursePrice?: FloatNullableWithAggregatesFilter<"Course"> | number | null
    courseThumbnail?: StringNullableWithAggregatesFilter<"Course"> | string | null
    creatorId?: IntWithAggregatesFilter<"Course"> | number
    isPublished?: BoolWithAggregatesFilter<"Course"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type LectureWhereInput = {
    AND?: LectureWhereInput | LectureWhereInput[]
    OR?: LectureWhereInput[]
    NOT?: LectureWhereInput | LectureWhereInput[]
    id?: IntFilter<"Lecture"> | number
    lectureTitle?: StringFilter<"Lecture"> | string
    videoUrl?: StringNullableFilter<"Lecture"> | string | null
    publicId?: StringNullableFilter<"Lecture"> | string | null
    isPreviewFree?: BoolFilter<"Lecture"> | boolean
    courseId?: IntNullableFilter<"Lecture"> | number | null
    createdAt?: DateTimeFilter<"Lecture"> | Date | string
    updatedAt?: DateTimeFilter<"Lecture"> | Date | string
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
  }

  export type LectureOrderByWithRelationInput = {
    id?: SortOrder
    lectureTitle?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    publicId?: SortOrderInput | SortOrder
    isPreviewFree?: SortOrder
    courseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type LectureWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LectureWhereInput | LectureWhereInput[]
    OR?: LectureWhereInput[]
    NOT?: LectureWhereInput | LectureWhereInput[]
    lectureTitle?: StringFilter<"Lecture"> | string
    videoUrl?: StringNullableFilter<"Lecture"> | string | null
    publicId?: StringNullableFilter<"Lecture"> | string | null
    isPreviewFree?: BoolFilter<"Lecture"> | boolean
    courseId?: IntNullableFilter<"Lecture"> | number | null
    createdAt?: DateTimeFilter<"Lecture"> | Date | string
    updatedAt?: DateTimeFilter<"Lecture"> | Date | string
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
  }, "id">

  export type LectureOrderByWithAggregationInput = {
    id?: SortOrder
    lectureTitle?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    publicId?: SortOrderInput | SortOrder
    isPreviewFree?: SortOrder
    courseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LectureCountOrderByAggregateInput
    _avg?: LectureAvgOrderByAggregateInput
    _max?: LectureMaxOrderByAggregateInput
    _min?: LectureMinOrderByAggregateInput
    _sum?: LectureSumOrderByAggregateInput
  }

  export type LectureScalarWhereWithAggregatesInput = {
    AND?: LectureScalarWhereWithAggregatesInput | LectureScalarWhereWithAggregatesInput[]
    OR?: LectureScalarWhereWithAggregatesInput[]
    NOT?: LectureScalarWhereWithAggregatesInput | LectureScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lecture"> | number
    lectureTitle?: StringWithAggregatesFilter<"Lecture"> | string
    videoUrl?: StringNullableWithAggregatesFilter<"Lecture"> | string | null
    publicId?: StringNullableWithAggregatesFilter<"Lecture"> | string | null
    isPreviewFree?: BoolWithAggregatesFilter<"Lecture"> | boolean
    courseId?: IntNullableWithAggregatesFilter<"Lecture"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Lecture"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lecture"> | Date | string
  }

  export type CoursePurchaseWhereInput = {
    AND?: CoursePurchaseWhereInput | CoursePurchaseWhereInput[]
    OR?: CoursePurchaseWhereInput[]
    NOT?: CoursePurchaseWhereInput | CoursePurchaseWhereInput[]
    id?: IntFilter<"CoursePurchase"> | number
    courseId?: IntFilter<"CoursePurchase"> | number
    userId?: IntFilter<"CoursePurchase"> | number
    amount?: FloatFilter<"CoursePurchase"> | number
    status?: StringFilter<"CoursePurchase"> | string
    paymentId?: StringFilter<"CoursePurchase"> | string
    createdAt?: DateTimeFilter<"CoursePurchase"> | Date | string
    updatedAt?: DateTimeFilter<"CoursePurchase"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CoursePurchaseOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CoursePurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CoursePurchaseWhereInput | CoursePurchaseWhereInput[]
    OR?: CoursePurchaseWhereInput[]
    NOT?: CoursePurchaseWhereInput | CoursePurchaseWhereInput[]
    courseId?: IntFilter<"CoursePurchase"> | number
    userId?: IntFilter<"CoursePurchase"> | number
    amount?: FloatFilter<"CoursePurchase"> | number
    status?: StringFilter<"CoursePurchase"> | string
    paymentId?: StringFilter<"CoursePurchase"> | string
    createdAt?: DateTimeFilter<"CoursePurchase"> | Date | string
    updatedAt?: DateTimeFilter<"CoursePurchase"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CoursePurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoursePurchaseCountOrderByAggregateInput
    _avg?: CoursePurchaseAvgOrderByAggregateInput
    _max?: CoursePurchaseMaxOrderByAggregateInput
    _min?: CoursePurchaseMinOrderByAggregateInput
    _sum?: CoursePurchaseSumOrderByAggregateInput
  }

  export type CoursePurchaseScalarWhereWithAggregatesInput = {
    AND?: CoursePurchaseScalarWhereWithAggregatesInput | CoursePurchaseScalarWhereWithAggregatesInput[]
    OR?: CoursePurchaseScalarWhereWithAggregatesInput[]
    NOT?: CoursePurchaseScalarWhereWithAggregatesInput | CoursePurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CoursePurchase"> | number
    courseId?: IntWithAggregatesFilter<"CoursePurchase"> | number
    userId?: IntWithAggregatesFilter<"CoursePurchase"> | number
    amount?: FloatWithAggregatesFilter<"CoursePurchase"> | number
    status?: StringWithAggregatesFilter<"CoursePurchase"> | string
    paymentId?: StringWithAggregatesFilter<"CoursePurchase"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CoursePurchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoursePurchase"> | Date | string
  }

  export type CourseProgressWhereInput = {
    AND?: CourseProgressWhereInput | CourseProgressWhereInput[]
    OR?: CourseProgressWhereInput[]
    NOT?: CourseProgressWhereInput | CourseProgressWhereInput[]
    id?: IntFilter<"CourseProgress"> | number
    userId?: IntFilter<"CourseProgress"> | number
    courseId?: IntFilter<"CourseProgress"> | number
    completed?: BoolFilter<"CourseProgress"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lectureProgress?: LectureProgressListRelationFilter
  }

  export type CourseProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    completed?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    lectureProgress?: LectureProgressOrderByRelationAggregateInput
  }

  export type CourseProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseProgressWhereInput | CourseProgressWhereInput[]
    OR?: CourseProgressWhereInput[]
    NOT?: CourseProgressWhereInput | CourseProgressWhereInput[]
    userId?: IntFilter<"CourseProgress"> | number
    courseId?: IntFilter<"CourseProgress"> | number
    completed?: BoolFilter<"CourseProgress"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lectureProgress?: LectureProgressListRelationFilter
  }, "id">

  export type CourseProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    completed?: SortOrder
    _count?: CourseProgressCountOrderByAggregateInput
    _avg?: CourseProgressAvgOrderByAggregateInput
    _max?: CourseProgressMaxOrderByAggregateInput
    _min?: CourseProgressMinOrderByAggregateInput
    _sum?: CourseProgressSumOrderByAggregateInput
  }

  export type CourseProgressScalarWhereWithAggregatesInput = {
    AND?: CourseProgressScalarWhereWithAggregatesInput | CourseProgressScalarWhereWithAggregatesInput[]
    OR?: CourseProgressScalarWhereWithAggregatesInput[]
    NOT?: CourseProgressScalarWhereWithAggregatesInput | CourseProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CourseProgress"> | number
    userId?: IntWithAggregatesFilter<"CourseProgress"> | number
    courseId?: IntWithAggregatesFilter<"CourseProgress"> | number
    completed?: BoolWithAggregatesFilter<"CourseProgress"> | boolean
  }

  export type LectureProgressWhereInput = {
    AND?: LectureProgressWhereInput | LectureProgressWhereInput[]
    OR?: LectureProgressWhereInput[]
    NOT?: LectureProgressWhereInput | LectureProgressWhereInput[]
    id?: IntFilter<"LectureProgress"> | number
    lectureId?: IntFilter<"LectureProgress"> | number
    viewed?: BoolFilter<"LectureProgress"> | boolean
    progressId?: IntFilter<"LectureProgress"> | number
    progress?: XOR<CourseProgressScalarRelationFilter, CourseProgressWhereInput>
  }

  export type LectureProgressOrderByWithRelationInput = {
    id?: SortOrder
    lectureId?: SortOrder
    viewed?: SortOrder
    progressId?: SortOrder
    progress?: CourseProgressOrderByWithRelationInput
  }

  export type LectureProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LectureProgressWhereInput | LectureProgressWhereInput[]
    OR?: LectureProgressWhereInput[]
    NOT?: LectureProgressWhereInput | LectureProgressWhereInput[]
    lectureId?: IntFilter<"LectureProgress"> | number
    viewed?: BoolFilter<"LectureProgress"> | boolean
    progressId?: IntFilter<"LectureProgress"> | number
    progress?: XOR<CourseProgressScalarRelationFilter, CourseProgressWhereInput>
  }, "id">

  export type LectureProgressOrderByWithAggregationInput = {
    id?: SortOrder
    lectureId?: SortOrder
    viewed?: SortOrder
    progressId?: SortOrder
    _count?: LectureProgressCountOrderByAggregateInput
    _avg?: LectureProgressAvgOrderByAggregateInput
    _max?: LectureProgressMaxOrderByAggregateInput
    _min?: LectureProgressMinOrderByAggregateInput
    _sum?: LectureProgressSumOrderByAggregateInput
  }

  export type LectureProgressScalarWhereWithAggregatesInput = {
    AND?: LectureProgressScalarWhereWithAggregatesInput | LectureProgressScalarWhereWithAggregatesInput[]
    OR?: LectureProgressScalarWhereWithAggregatesInput[]
    NOT?: LectureProgressScalarWhereWithAggregatesInput | LectureProgressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LectureProgress"> | number
    lectureId?: IntWithAggregatesFilter<"LectureProgress"> | number
    viewed?: BoolWithAggregatesFilter<"LectureProgress"> | boolean
    progressId?: IntWithAggregatesFilter<"LectureProgress"> | number
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    title?: StringFilter<"Session"> | string
    videoUrl?: StringNullableFilter<"Session"> | string | null
    richText?: StringFilter<"Session"> | string
    courseId?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    richText?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    course?: CourseOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    title?: StringFilter<"Session"> | string
    videoUrl?: StringNullableFilter<"Session"> | string | null
    richText?: StringFilter<"Session"> | string
    courseId?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrderInput | SortOrder
    richText?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    title?: StringWithAggregatesFilter<"Session"> | string
    videoUrl?: StringNullableWithAggregatesFilter<"Session"> | string | null
    richText?: StringWithAggregatesFilter<"Session"> | string
    courseId?: IntWithAggregatesFilter<"Session"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    userId?: IntFilter<"Enrollment"> | number
    courseId?: IntFilter<"Enrollment"> | number
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    userId?: IntFilter<"Enrollment"> | number
    courseId?: IntFilter<"Enrollment"> | number
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enrollment"> | number
    userId?: IntWithAggregatesFilter<"Enrollment"> | number
    courseId?: IntWithAggregatesFilter<"Enrollment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: CourseCreateNestedManyWithoutEnrolledStudentsInput
    coursesCreated?: CourseCreateNestedManyWithoutCreatorInput
    coursePurchases?: CoursePurchaseCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: CourseUncheckedCreateNestedManyWithoutEnrolledStudentsInput
    coursesCreated?: CourseUncheckedCreateNestedManyWithoutCreatorInput
    coursePurchases?: CoursePurchaseUncheckedCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: CourseUpdateManyWithoutEnrolledStudentsNestedInput
    coursesCreated?: CourseUpdateManyWithoutCreatorNestedInput
    coursePurchases?: CoursePurchaseUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: CourseUncheckedUpdateManyWithoutEnrolledStudentsNestedInput
    coursesCreated?: CourseUncheckedUpdateManyWithoutCreatorNestedInput
    coursePurchases?: CoursePurchaseUncheckedUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserCreateNestedManyWithoutEnrolledCoursesInput
    lectures?: LectureCreateNestedManyWithoutCourseInput
    creator: UserCreateNestedOneWithoutCoursesCreatedInput
    coursePurchases?: CoursePurchaseCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    sessions?: SessionCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    creatorId: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserUncheckedCreateNestedManyWithoutEnrolledCoursesInput
    lectures?: LectureUncheckedCreateNestedManyWithoutCourseInput
    coursePurchases?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUpdateManyWithoutEnrolledCoursesNestedInput
    lectures?: LectureUpdateManyWithoutCourseNestedInput
    creator?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    coursePurchases?: CoursePurchaseUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    sessions?: SessionUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUncheckedUpdateManyWithoutEnrolledCoursesNestedInput
    lectures?: LectureUncheckedUpdateManyWithoutCourseNestedInput
    coursePurchases?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    creatorId: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureCreateInput = {
    lectureTitle: string
    videoUrl?: string | null
    publicId?: string | null
    isPreviewFree: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    course?: CourseCreateNestedOneWithoutLecturesInput
  }

  export type LectureUncheckedCreateInput = {
    id?: number
    lectureTitle: string
    videoUrl?: string | null
    publicId?: string | null
    isPreviewFree: boolean
    courseId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LectureUpdateInput = {
    lectureTitle?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    isPreviewFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneWithoutLecturesNestedInput
  }

  export type LectureUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lectureTitle?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    isPreviewFree?: BoolFieldUpdateOperationsInput | boolean
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureCreateManyInput = {
    id?: number
    lectureTitle: string
    videoUrl?: string | null
    publicId?: string | null
    isPreviewFree: boolean
    courseId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LectureUpdateManyMutationInput = {
    lectureTitle?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    isPreviewFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lectureTitle?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    isPreviewFree?: BoolFieldUpdateOperationsInput | boolean
    courseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseCreateInput = {
    amount: number
    status?: string
    paymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCoursePurchasesInput
    user: UserCreateNestedOneWithoutCoursePurchasesInput
  }

  export type CoursePurchaseUncheckedCreateInput = {
    id?: number
    courseId: number
    userId: number
    amount: number
    status?: string
    paymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursePurchaseUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCoursePurchasesNestedInput
    user?: UserUpdateOneRequiredWithoutCoursePurchasesNestedInput
  }

  export type CoursePurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseCreateManyInput = {
    id?: number
    courseId: number
    userId: number
    amount: number
    status?: string
    paymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursePurchaseUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProgressCreateInput = {
    completed: boolean
    user: UserCreateNestedOneWithoutCourseProgressInput
    course: CourseCreateNestedOneWithoutCourseProgressInput
    lectureProgress?: LectureProgressCreateNestedManyWithoutProgressInput
  }

  export type CourseProgressUncheckedCreateInput = {
    id?: number
    userId: number
    courseId: number
    completed: boolean
    lectureProgress?: LectureProgressUncheckedCreateNestedManyWithoutProgressInput
  }

  export type CourseProgressUpdateInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCourseProgressNestedInput
    course?: CourseUpdateOneRequiredWithoutCourseProgressNestedInput
    lectureProgress?: LectureProgressUpdateManyWithoutProgressNestedInput
  }

  export type CourseProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    lectureProgress?: LectureProgressUncheckedUpdateManyWithoutProgressNestedInput
  }

  export type CourseProgressCreateManyInput = {
    id?: number
    userId: number
    courseId: number
    completed: boolean
  }

  export type CourseProgressUpdateManyMutationInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LectureProgressCreateInput = {
    lectureId: number
    viewed: boolean
    progress: CourseProgressCreateNestedOneWithoutLectureProgressInput
  }

  export type LectureProgressUncheckedCreateInput = {
    id?: number
    lectureId: number
    viewed: boolean
    progressId: number
  }

  export type LectureProgressUpdateInput = {
    lectureId?: IntFieldUpdateOperationsInput | number
    viewed?: BoolFieldUpdateOperationsInput | boolean
    progress?: CourseProgressUpdateOneRequiredWithoutLectureProgressNestedInput
  }

  export type LectureProgressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
    viewed?: BoolFieldUpdateOperationsInput | boolean
    progressId?: IntFieldUpdateOperationsInput | number
  }

  export type LectureProgressCreateManyInput = {
    id?: number
    lectureId: number
    viewed: boolean
    progressId: number
  }

  export type LectureProgressUpdateManyMutationInput = {
    lectureId?: IntFieldUpdateOperationsInput | number
    viewed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LectureProgressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
    viewed?: BoolFieldUpdateOperationsInput | boolean
    progressId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateInput = {
    title: string
    videoUrl?: string | null
    richText: string
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    title: string
    videoUrl?: string | null
    richText: string
    courseId: number
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    richText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    richText?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: number
    title: string
    videoUrl?: string | null
    richText: string
    courseId: number
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    richText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    richText?: StringFieldUpdateOperationsInput | string
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: number
    userId: number
    courseId: number
    createdAt?: Date | string
  }

  export type EnrollmentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyInput = {
    id?: number
    userId: number
    courseId: number
    createdAt?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CoursePurchaseListRelationFilter = {
    every?: CoursePurchaseWhereInput
    some?: CoursePurchaseWhereInput
    none?: CoursePurchaseWhereInput
  }

  export type CourseProgressListRelationFilter = {
    every?: CourseProgressWhereInput
    some?: CourseProgressWhereInput
    none?: CourseProgressWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoursePurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    photoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type LectureListRelationFilter = {
    every?: LectureWhereInput
    some?: LectureWhereInput
    none?: LectureWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LectureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    courseTitle?: SortOrder
    subTitle?: SortOrder
    description?: SortOrder
    category?: SortOrder
    courseLevel?: SortOrder
    coursePrice?: SortOrder
    courseThumbnail?: SortOrder
    creatorId?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    coursePrice?: SortOrder
    creatorId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseTitle?: SortOrder
    subTitle?: SortOrder
    description?: SortOrder
    category?: SortOrder
    courseLevel?: SortOrder
    coursePrice?: SortOrder
    courseThumbnail?: SortOrder
    creatorId?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    courseTitle?: SortOrder
    subTitle?: SortOrder
    description?: SortOrder
    category?: SortOrder
    courseLevel?: SortOrder
    coursePrice?: SortOrder
    courseThumbnail?: SortOrder
    creatorId?: SortOrder
    isPublished?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    coursePrice?: SortOrder
    creatorId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CourseNullableScalarRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type LectureCountOrderByAggregateInput = {
    id?: SortOrder
    lectureTitle?: SortOrder
    videoUrl?: SortOrder
    publicId?: SortOrder
    isPreviewFree?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LectureAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type LectureMaxOrderByAggregateInput = {
    id?: SortOrder
    lectureTitle?: SortOrder
    videoUrl?: SortOrder
    publicId?: SortOrder
    isPreviewFree?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LectureMinOrderByAggregateInput = {
    id?: SortOrder
    lectureTitle?: SortOrder
    videoUrl?: SortOrder
    publicId?: SortOrder
    isPreviewFree?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LectureSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CoursePurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursePurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type CoursePurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursePurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paymentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoursePurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type LectureProgressListRelationFilter = {
    every?: LectureProgressWhereInput
    some?: LectureProgressWhereInput
    none?: LectureProgressWhereInput
  }

  export type LectureProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    completed?: SortOrder
  }

  export type CourseProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type CourseProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    completed?: SortOrder
  }

  export type CourseProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    completed?: SortOrder
  }

  export type CourseProgressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type CourseProgressScalarRelationFilter = {
    is?: CourseProgressWhereInput
    isNot?: CourseProgressWhereInput
  }

  export type LectureProgressCountOrderByAggregateInput = {
    id?: SortOrder
    lectureId?: SortOrder
    viewed?: SortOrder
    progressId?: SortOrder
  }

  export type LectureProgressAvgOrderByAggregateInput = {
    id?: SortOrder
    lectureId?: SortOrder
    progressId?: SortOrder
  }

  export type LectureProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    lectureId?: SortOrder
    viewed?: SortOrder
    progressId?: SortOrder
  }

  export type LectureProgressMinOrderByAggregateInput = {
    id?: SortOrder
    lectureId?: SortOrder
    viewed?: SortOrder
    progressId?: SortOrder
  }

  export type LectureProgressSumOrderByAggregateInput = {
    id?: SortOrder
    lectureId?: SortOrder
    progressId?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    richText?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    richText?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    videoUrl?: SortOrder
    richText?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type CourseCreateNestedManyWithoutEnrolledStudentsInput = {
    create?: XOR<CourseCreateWithoutEnrolledStudentsInput, CourseUncheckedCreateWithoutEnrolledStudentsInput> | CourseCreateWithoutEnrolledStudentsInput[] | CourseUncheckedCreateWithoutEnrolledStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolledStudentsInput | CourseCreateOrConnectWithoutEnrolledStudentsInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CourseCreateWithoutCreatorInput, CourseUncheckedCreateWithoutCreatorInput> | CourseCreateWithoutCreatorInput[] | CourseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatorInput | CourseCreateOrConnectWithoutCreatorInput[]
    createMany?: CourseCreateManyCreatorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CoursePurchaseCreateNestedManyWithoutUserInput = {
    create?: XOR<CoursePurchaseCreateWithoutUserInput, CoursePurchaseUncheckedCreateWithoutUserInput> | CoursePurchaseCreateWithoutUserInput[] | CoursePurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutUserInput | CoursePurchaseCreateOrConnectWithoutUserInput[]
    createMany?: CoursePurchaseCreateManyUserInputEnvelope
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
  }

  export type CourseProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseProgressCreateWithoutUserInput, CourseProgressUncheckedCreateWithoutUserInput> | CourseProgressCreateWithoutUserInput[] | CourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutUserInput | CourseProgressCreateOrConnectWithoutUserInput[]
    createMany?: CourseProgressCreateManyUserInputEnvelope
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutEnrolledStudentsInput = {
    create?: XOR<CourseCreateWithoutEnrolledStudentsInput, CourseUncheckedCreateWithoutEnrolledStudentsInput> | CourseCreateWithoutEnrolledStudentsInput[] | CourseUncheckedCreateWithoutEnrolledStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolledStudentsInput | CourseCreateOrConnectWithoutEnrolledStudentsInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<CourseCreateWithoutCreatorInput, CourseUncheckedCreateWithoutCreatorInput> | CourseCreateWithoutCreatorInput[] | CourseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatorInput | CourseCreateOrConnectWithoutCreatorInput[]
    createMany?: CourseCreateManyCreatorInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CoursePurchaseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CoursePurchaseCreateWithoutUserInput, CoursePurchaseUncheckedCreateWithoutUserInput> | CoursePurchaseCreateWithoutUserInput[] | CoursePurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutUserInput | CoursePurchaseCreateOrConnectWithoutUserInput[]
    createMany?: CoursePurchaseCreateManyUserInputEnvelope
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
  }

  export type CourseProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CourseProgressCreateWithoutUserInput, CourseProgressUncheckedCreateWithoutUserInput> | CourseProgressCreateWithoutUserInput[] | CourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutUserInput | CourseProgressCreateOrConnectWithoutUserInput[]
    createMany?: CourseProgressCreateManyUserInputEnvelope
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CourseUpdateManyWithoutEnrolledStudentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrolledStudentsInput, CourseUncheckedCreateWithoutEnrolledStudentsInput> | CourseCreateWithoutEnrolledStudentsInput[] | CourseUncheckedCreateWithoutEnrolledStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolledStudentsInput | CourseCreateOrConnectWithoutEnrolledStudentsInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutEnrolledStudentsInput | CourseUpsertWithWhereUniqueWithoutEnrolledStudentsInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutEnrolledStudentsInput | CourseUpdateWithWhereUniqueWithoutEnrolledStudentsInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutEnrolledStudentsInput | CourseUpdateManyWithWhereWithoutEnrolledStudentsInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CourseCreateWithoutCreatorInput, CourseUncheckedCreateWithoutCreatorInput> | CourseCreateWithoutCreatorInput[] | CourseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatorInput | CourseCreateOrConnectWithoutCreatorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCreatorInput | CourseUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CourseCreateManyCreatorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCreatorInput | CourseUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCreatorInput | CourseUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CoursePurchaseUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoursePurchaseCreateWithoutUserInput, CoursePurchaseUncheckedCreateWithoutUserInput> | CoursePurchaseCreateWithoutUserInput[] | CoursePurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutUserInput | CoursePurchaseCreateOrConnectWithoutUserInput[]
    upsert?: CoursePurchaseUpsertWithWhereUniqueWithoutUserInput | CoursePurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoursePurchaseCreateManyUserInputEnvelope
    set?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    disconnect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    delete?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    update?: CoursePurchaseUpdateWithWhereUniqueWithoutUserInput | CoursePurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoursePurchaseUpdateManyWithWhereWithoutUserInput | CoursePurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoursePurchaseScalarWhereInput | CoursePurchaseScalarWhereInput[]
  }

  export type CourseProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseProgressCreateWithoutUserInput, CourseProgressUncheckedCreateWithoutUserInput> | CourseProgressCreateWithoutUserInput[] | CourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutUserInput | CourseProgressCreateOrConnectWithoutUserInput[]
    upsert?: CourseProgressUpsertWithWhereUniqueWithoutUserInput | CourseProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseProgressCreateManyUserInputEnvelope
    set?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    disconnect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    delete?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    update?: CourseProgressUpdateWithWhereUniqueWithoutUserInput | CourseProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseProgressUpdateManyWithWhereWithoutUserInput | CourseProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUncheckedUpdateManyWithoutEnrolledStudentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrolledStudentsInput, CourseUncheckedCreateWithoutEnrolledStudentsInput> | CourseCreateWithoutEnrolledStudentsInput[] | CourseUncheckedCreateWithoutEnrolledStudentsInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutEnrolledStudentsInput | CourseCreateOrConnectWithoutEnrolledStudentsInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutEnrolledStudentsInput | CourseUpsertWithWhereUniqueWithoutEnrolledStudentsInput[]
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutEnrolledStudentsInput | CourseUpdateWithWhereUniqueWithoutEnrolledStudentsInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutEnrolledStudentsInput | CourseUpdateManyWithWhereWithoutEnrolledStudentsInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<CourseCreateWithoutCreatorInput, CourseUncheckedCreateWithoutCreatorInput> | CourseCreateWithoutCreatorInput[] | CourseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutCreatorInput | CourseCreateOrConnectWithoutCreatorInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutCreatorInput | CourseUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: CourseCreateManyCreatorInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutCreatorInput | CourseUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutCreatorInput | CourseUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CoursePurchaseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CoursePurchaseCreateWithoutUserInput, CoursePurchaseUncheckedCreateWithoutUserInput> | CoursePurchaseCreateWithoutUserInput[] | CoursePurchaseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutUserInput | CoursePurchaseCreateOrConnectWithoutUserInput[]
    upsert?: CoursePurchaseUpsertWithWhereUniqueWithoutUserInput | CoursePurchaseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CoursePurchaseCreateManyUserInputEnvelope
    set?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    disconnect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    delete?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    update?: CoursePurchaseUpdateWithWhereUniqueWithoutUserInput | CoursePurchaseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CoursePurchaseUpdateManyWithWhereWithoutUserInput | CoursePurchaseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CoursePurchaseScalarWhereInput | CoursePurchaseScalarWhereInput[]
  }

  export type CourseProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CourseProgressCreateWithoutUserInput, CourseProgressUncheckedCreateWithoutUserInput> | CourseProgressCreateWithoutUserInput[] | CourseProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutUserInput | CourseProgressCreateOrConnectWithoutUserInput[]
    upsert?: CourseProgressUpsertWithWhereUniqueWithoutUserInput | CourseProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CourseProgressCreateManyUserInputEnvelope
    set?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    disconnect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    delete?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    update?: CourseProgressUpdateWithWhereUniqueWithoutUserInput | CourseProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CourseProgressUpdateManyWithWhereWithoutUserInput | CourseProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutEnrolledCoursesInput = {
    create?: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput> | UserCreateWithoutEnrolledCoursesInput[] | UserUncheckedCreateWithoutEnrolledCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEnrolledCoursesInput | UserCreateOrConnectWithoutEnrolledCoursesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LectureCreateNestedManyWithoutCourseInput = {
    create?: XOR<LectureCreateWithoutCourseInput, LectureUncheckedCreateWithoutCourseInput> | LectureCreateWithoutCourseInput[] | LectureUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LectureCreateOrConnectWithoutCourseInput | LectureCreateOrConnectWithoutCourseInput[]
    createMany?: LectureCreateManyCourseInputEnvelope
    connect?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCoursesCreatedInput = {
    create?: XOR<UserCreateWithoutCoursesCreatedInput, UserUncheckedCreateWithoutCoursesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type CoursePurchaseCreateNestedManyWithoutCourseInput = {
    create?: XOR<CoursePurchaseCreateWithoutCourseInput, CoursePurchaseUncheckedCreateWithoutCourseInput> | CoursePurchaseCreateWithoutCourseInput[] | CoursePurchaseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutCourseInput | CoursePurchaseCreateOrConnectWithoutCourseInput[]
    createMany?: CoursePurchaseCreateManyCourseInputEnvelope
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
  }

  export type CourseProgressCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseProgressCreateWithoutCourseInput, CourseProgressUncheckedCreateWithoutCourseInput> | CourseProgressCreateWithoutCourseInput[] | CourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutCourseInput | CourseProgressCreateOrConnectWithoutCourseInput[]
    createMany?: CourseProgressCreateManyCourseInputEnvelope
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutCourseInput = {
    create?: XOR<SessionCreateWithoutCourseInput, SessionUncheckedCreateWithoutCourseInput> | SessionCreateWithoutCourseInput[] | SessionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCourseInput | SessionCreateOrConnectWithoutCourseInput[]
    createMany?: SessionCreateManyCourseInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutEnrolledCoursesInput = {
    create?: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput> | UserCreateWithoutEnrolledCoursesInput[] | UserUncheckedCreateWithoutEnrolledCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEnrolledCoursesInput | UserCreateOrConnectWithoutEnrolledCoursesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type LectureUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<LectureCreateWithoutCourseInput, LectureUncheckedCreateWithoutCourseInput> | LectureCreateWithoutCourseInput[] | LectureUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LectureCreateOrConnectWithoutCourseInput | LectureCreateOrConnectWithoutCourseInput[]
    createMany?: LectureCreateManyCourseInputEnvelope
    connect?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
  }

  export type CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CoursePurchaseCreateWithoutCourseInput, CoursePurchaseUncheckedCreateWithoutCourseInput> | CoursePurchaseCreateWithoutCourseInput[] | CoursePurchaseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutCourseInput | CoursePurchaseCreateOrConnectWithoutCourseInput[]
    createMany?: CoursePurchaseCreateManyCourseInputEnvelope
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
  }

  export type CourseProgressUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseProgressCreateWithoutCourseInput, CourseProgressUncheckedCreateWithoutCourseInput> | CourseProgressCreateWithoutCourseInput[] | CourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutCourseInput | CourseProgressCreateOrConnectWithoutCourseInput[]
    createMany?: CourseProgressCreateManyCourseInputEnvelope
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<SessionCreateWithoutCourseInput, SessionUncheckedCreateWithoutCourseInput> | SessionCreateWithoutCourseInput[] | SessionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCourseInput | SessionCreateOrConnectWithoutCourseInput[]
    createMany?: SessionCreateManyCourseInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateManyWithoutEnrolledCoursesNestedInput = {
    create?: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput> | UserCreateWithoutEnrolledCoursesInput[] | UserUncheckedCreateWithoutEnrolledCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEnrolledCoursesInput | UserCreateOrConnectWithoutEnrolledCoursesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEnrolledCoursesInput | UserUpsertWithWhereUniqueWithoutEnrolledCoursesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEnrolledCoursesInput | UserUpdateWithWhereUniqueWithoutEnrolledCoursesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEnrolledCoursesInput | UserUpdateManyWithWhereWithoutEnrolledCoursesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LectureUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LectureCreateWithoutCourseInput, LectureUncheckedCreateWithoutCourseInput> | LectureCreateWithoutCourseInput[] | LectureUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LectureCreateOrConnectWithoutCourseInput | LectureCreateOrConnectWithoutCourseInput[]
    upsert?: LectureUpsertWithWhereUniqueWithoutCourseInput | LectureUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LectureCreateManyCourseInputEnvelope
    set?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    disconnect?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    delete?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    connect?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    update?: LectureUpdateWithWhereUniqueWithoutCourseInput | LectureUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LectureUpdateManyWithWhereWithoutCourseInput | LectureUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LectureScalarWhereInput | LectureScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCoursesCreatedNestedInput = {
    create?: XOR<UserCreateWithoutCoursesCreatedInput, UserUncheckedCreateWithoutCoursesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursesCreatedInput
    upsert?: UserUpsertWithoutCoursesCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursesCreatedInput, UserUpdateWithoutCoursesCreatedInput>, UserUncheckedUpdateWithoutCoursesCreatedInput>
  }

  export type CoursePurchaseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CoursePurchaseCreateWithoutCourseInput, CoursePurchaseUncheckedCreateWithoutCourseInput> | CoursePurchaseCreateWithoutCourseInput[] | CoursePurchaseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutCourseInput | CoursePurchaseCreateOrConnectWithoutCourseInput[]
    upsert?: CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput | CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CoursePurchaseCreateManyCourseInputEnvelope
    set?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    disconnect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    delete?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    update?: CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput | CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CoursePurchaseUpdateManyWithWhereWithoutCourseInput | CoursePurchaseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CoursePurchaseScalarWhereInput | CoursePurchaseScalarWhereInput[]
  }

  export type CourseProgressUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseProgressCreateWithoutCourseInput, CourseProgressUncheckedCreateWithoutCourseInput> | CourseProgressCreateWithoutCourseInput[] | CourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutCourseInput | CourseProgressCreateOrConnectWithoutCourseInput[]
    upsert?: CourseProgressUpsertWithWhereUniqueWithoutCourseInput | CourseProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseProgressCreateManyCourseInputEnvelope
    set?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    disconnect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    delete?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    update?: CourseProgressUpdateWithWhereUniqueWithoutCourseInput | CourseProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseProgressUpdateManyWithWhereWithoutCourseInput | CourseProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SessionCreateWithoutCourseInput, SessionUncheckedCreateWithoutCourseInput> | SessionCreateWithoutCourseInput[] | SessionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCourseInput | SessionCreateOrConnectWithoutCourseInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutCourseInput | SessionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SessionCreateManyCourseInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutCourseInput | SessionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutCourseInput | SessionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutEnrolledCoursesNestedInput = {
    create?: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput> | UserCreateWithoutEnrolledCoursesInput[] | UserUncheckedCreateWithoutEnrolledCoursesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEnrolledCoursesInput | UserCreateOrConnectWithoutEnrolledCoursesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEnrolledCoursesInput | UserUpsertWithWhereUniqueWithoutEnrolledCoursesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEnrolledCoursesInput | UserUpdateWithWhereUniqueWithoutEnrolledCoursesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEnrolledCoursesInput | UserUpdateManyWithWhereWithoutEnrolledCoursesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type LectureUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<LectureCreateWithoutCourseInput, LectureUncheckedCreateWithoutCourseInput> | LectureCreateWithoutCourseInput[] | LectureUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: LectureCreateOrConnectWithoutCourseInput | LectureCreateOrConnectWithoutCourseInput[]
    upsert?: LectureUpsertWithWhereUniqueWithoutCourseInput | LectureUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: LectureCreateManyCourseInputEnvelope
    set?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    disconnect?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    delete?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    connect?: LectureWhereUniqueInput | LectureWhereUniqueInput[]
    update?: LectureUpdateWithWhereUniqueWithoutCourseInput | LectureUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: LectureUpdateManyWithWhereWithoutCourseInput | LectureUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: LectureScalarWhereInput | LectureScalarWhereInput[]
  }

  export type CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CoursePurchaseCreateWithoutCourseInput, CoursePurchaseUncheckedCreateWithoutCourseInput> | CoursePurchaseCreateWithoutCourseInput[] | CoursePurchaseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CoursePurchaseCreateOrConnectWithoutCourseInput | CoursePurchaseCreateOrConnectWithoutCourseInput[]
    upsert?: CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput | CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CoursePurchaseCreateManyCourseInputEnvelope
    set?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    disconnect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    delete?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    connect?: CoursePurchaseWhereUniqueInput | CoursePurchaseWhereUniqueInput[]
    update?: CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput | CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CoursePurchaseUpdateManyWithWhereWithoutCourseInput | CoursePurchaseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CoursePurchaseScalarWhereInput | CoursePurchaseScalarWhereInput[]
  }

  export type CourseProgressUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseProgressCreateWithoutCourseInput, CourseProgressUncheckedCreateWithoutCourseInput> | CourseProgressCreateWithoutCourseInput[] | CourseProgressUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseProgressCreateOrConnectWithoutCourseInput | CourseProgressCreateOrConnectWithoutCourseInput[]
    upsert?: CourseProgressUpsertWithWhereUniqueWithoutCourseInput | CourseProgressUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseProgressCreateManyCourseInputEnvelope
    set?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    disconnect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    delete?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    connect?: CourseProgressWhereUniqueInput | CourseProgressWhereUniqueInput[]
    update?: CourseProgressUpdateWithWhereUniqueWithoutCourseInput | CourseProgressUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseProgressUpdateManyWithWhereWithoutCourseInput | CourseProgressUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<SessionCreateWithoutCourseInput, SessionUncheckedCreateWithoutCourseInput> | SessionCreateWithoutCourseInput[] | SessionUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCourseInput | SessionCreateOrConnectWithoutCourseInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutCourseInput | SessionUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: SessionCreateManyCourseInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutCourseInput | SessionUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutCourseInput | SessionUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutLecturesInput = {
    create?: XOR<CourseCreateWithoutLecturesInput, CourseUncheckedCreateWithoutLecturesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLecturesInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneWithoutLecturesNestedInput = {
    create?: XOR<CourseCreateWithoutLecturesInput, CourseUncheckedCreateWithoutLecturesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutLecturesInput
    upsert?: CourseUpsertWithoutLecturesInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutLecturesInput, CourseUpdateWithoutLecturesInput>, CourseUncheckedUpdateWithoutLecturesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseCreateNestedOneWithoutCoursePurchasesInput = {
    create?: XOR<CourseCreateWithoutCoursePurchasesInput, CourseUncheckedCreateWithoutCoursePurchasesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCoursePurchasesInput
    connect?: CourseWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCoursePurchasesInput = {
    create?: XOR<UserCreateWithoutCoursePurchasesInput, UserUncheckedCreateWithoutCoursePurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursePurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseUpdateOneRequiredWithoutCoursePurchasesNestedInput = {
    create?: XOR<CourseCreateWithoutCoursePurchasesInput, CourseUncheckedCreateWithoutCoursePurchasesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCoursePurchasesInput
    upsert?: CourseUpsertWithoutCoursePurchasesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCoursePurchasesInput, CourseUpdateWithoutCoursePurchasesInput>, CourseUncheckedUpdateWithoutCoursePurchasesInput>
  }

  export type UserUpdateOneRequiredWithoutCoursePurchasesNestedInput = {
    create?: XOR<UserCreateWithoutCoursePurchasesInput, UserUncheckedCreateWithoutCoursePurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCoursePurchasesInput
    upsert?: UserUpsertWithoutCoursePurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCoursePurchasesInput, UserUpdateWithoutCoursePurchasesInput>, UserUncheckedUpdateWithoutCoursePurchasesInput>
  }

  export type UserCreateNestedOneWithoutCourseProgressInput = {
    create?: XOR<UserCreateWithoutCourseProgressInput, UserUncheckedCreateWithoutCourseProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseProgressInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutCourseProgressInput = {
    create?: XOR<CourseCreateWithoutCourseProgressInput, CourseUncheckedCreateWithoutCourseProgressInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseProgressInput
    connect?: CourseWhereUniqueInput
  }

  export type LectureProgressCreateNestedManyWithoutProgressInput = {
    create?: XOR<LectureProgressCreateWithoutProgressInput, LectureProgressUncheckedCreateWithoutProgressInput> | LectureProgressCreateWithoutProgressInput[] | LectureProgressUncheckedCreateWithoutProgressInput[]
    connectOrCreate?: LectureProgressCreateOrConnectWithoutProgressInput | LectureProgressCreateOrConnectWithoutProgressInput[]
    createMany?: LectureProgressCreateManyProgressInputEnvelope
    connect?: LectureProgressWhereUniqueInput | LectureProgressWhereUniqueInput[]
  }

  export type LectureProgressUncheckedCreateNestedManyWithoutProgressInput = {
    create?: XOR<LectureProgressCreateWithoutProgressInput, LectureProgressUncheckedCreateWithoutProgressInput> | LectureProgressCreateWithoutProgressInput[] | LectureProgressUncheckedCreateWithoutProgressInput[]
    connectOrCreate?: LectureProgressCreateOrConnectWithoutProgressInput | LectureProgressCreateOrConnectWithoutProgressInput[]
    createMany?: LectureProgressCreateManyProgressInputEnvelope
    connect?: LectureProgressWhereUniqueInput | LectureProgressWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCourseProgressNestedInput = {
    create?: XOR<UserCreateWithoutCourseProgressInput, UserUncheckedCreateWithoutCourseProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutCourseProgressInput
    upsert?: UserUpsertWithoutCourseProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCourseProgressInput, UserUpdateWithoutCourseProgressInput>, UserUncheckedUpdateWithoutCourseProgressInput>
  }

  export type CourseUpdateOneRequiredWithoutCourseProgressNestedInput = {
    create?: XOR<CourseCreateWithoutCourseProgressInput, CourseUncheckedCreateWithoutCourseProgressInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseProgressInput
    upsert?: CourseUpsertWithoutCourseProgressInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseProgressInput, CourseUpdateWithoutCourseProgressInput>, CourseUncheckedUpdateWithoutCourseProgressInput>
  }

  export type LectureProgressUpdateManyWithoutProgressNestedInput = {
    create?: XOR<LectureProgressCreateWithoutProgressInput, LectureProgressUncheckedCreateWithoutProgressInput> | LectureProgressCreateWithoutProgressInput[] | LectureProgressUncheckedCreateWithoutProgressInput[]
    connectOrCreate?: LectureProgressCreateOrConnectWithoutProgressInput | LectureProgressCreateOrConnectWithoutProgressInput[]
    upsert?: LectureProgressUpsertWithWhereUniqueWithoutProgressInput | LectureProgressUpsertWithWhereUniqueWithoutProgressInput[]
    createMany?: LectureProgressCreateManyProgressInputEnvelope
    set?: LectureProgressWhereUniqueInput | LectureProgressWhereUniqueInput[]
    disconnect?: LectureProgressWhereUniqueInput | LectureProgressWhereUniqueInput[]
    delete?: LectureProgressWhereUniqueInput | LectureProgressWhereUniqueInput[]
    connect?: LectureProgressWhereUniqueInput | LectureProgressWhereUniqueInput[]
    update?: LectureProgressUpdateWithWhereUniqueWithoutProgressInput | LectureProgressUpdateWithWhereUniqueWithoutProgressInput[]
    updateMany?: LectureProgressUpdateManyWithWhereWithoutProgressInput | LectureProgressUpdateManyWithWhereWithoutProgressInput[]
    deleteMany?: LectureProgressScalarWhereInput | LectureProgressScalarWhereInput[]
  }

  export type LectureProgressUncheckedUpdateManyWithoutProgressNestedInput = {
    create?: XOR<LectureProgressCreateWithoutProgressInput, LectureProgressUncheckedCreateWithoutProgressInput> | LectureProgressCreateWithoutProgressInput[] | LectureProgressUncheckedCreateWithoutProgressInput[]
    connectOrCreate?: LectureProgressCreateOrConnectWithoutProgressInput | LectureProgressCreateOrConnectWithoutProgressInput[]
    upsert?: LectureProgressUpsertWithWhereUniqueWithoutProgressInput | LectureProgressUpsertWithWhereUniqueWithoutProgressInput[]
    createMany?: LectureProgressCreateManyProgressInputEnvelope
    set?: LectureProgressWhereUniqueInput | LectureProgressWhereUniqueInput[]
    disconnect?: LectureProgressWhereUniqueInput | LectureProgressWhereUniqueInput[]
    delete?: LectureProgressWhereUniqueInput | LectureProgressWhereUniqueInput[]
    connect?: LectureProgressWhereUniqueInput | LectureProgressWhereUniqueInput[]
    update?: LectureProgressUpdateWithWhereUniqueWithoutProgressInput | LectureProgressUpdateWithWhereUniqueWithoutProgressInput[]
    updateMany?: LectureProgressUpdateManyWithWhereWithoutProgressInput | LectureProgressUpdateManyWithWhereWithoutProgressInput[]
    deleteMany?: LectureProgressScalarWhereInput | LectureProgressScalarWhereInput[]
  }

  export type CourseProgressCreateNestedOneWithoutLectureProgressInput = {
    create?: XOR<CourseProgressCreateWithoutLectureProgressInput, CourseProgressUncheckedCreateWithoutLectureProgressInput>
    connectOrCreate?: CourseProgressCreateOrConnectWithoutLectureProgressInput
    connect?: CourseProgressWhereUniqueInput
  }

  export type CourseProgressUpdateOneRequiredWithoutLectureProgressNestedInput = {
    create?: XOR<CourseProgressCreateWithoutLectureProgressInput, CourseProgressUncheckedCreateWithoutLectureProgressInput>
    connectOrCreate?: CourseProgressCreateOrConnectWithoutLectureProgressInput
    upsert?: CourseProgressUpsertWithoutLectureProgressInput
    connect?: CourseProgressWhereUniqueInput
    update?: XOR<XOR<CourseProgressUpdateToOneWithWhereWithoutLectureProgressInput, CourseProgressUpdateWithoutLectureProgressInput>, CourseProgressUncheckedUpdateWithoutLectureProgressInput>
  }

  export type CourseCreateNestedOneWithoutSessionsInput = {
    create?: XOR<CourseCreateWithoutSessionsInput, CourseUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSessionsInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<CourseCreateWithoutSessionsInput, CourseUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutSessionsInput
    upsert?: CourseUpsertWithoutSessionsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutSessionsInput, CourseUpdateWithoutSessionsInput>, CourseUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentsInput, UserUpdateWithoutEnrollmentsInput>, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    upsert?: CourseUpsertWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrollmentsInput, CourseUpdateWithoutEnrollmentsInput>, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CourseCreateWithoutEnrolledStudentsInput = {
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lectures?: LectureCreateNestedManyWithoutCourseInput
    creator: UserCreateNestedOneWithoutCoursesCreatedInput
    coursePurchases?: CoursePurchaseCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    sessions?: SessionCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrolledStudentsInput = {
    id?: number
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    creatorId: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lectures?: LectureUncheckedCreateNestedManyWithoutCourseInput
    coursePurchases?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrolledStudentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrolledStudentsInput, CourseUncheckedCreateWithoutEnrolledStudentsInput>
  }

  export type CourseCreateWithoutCreatorInput = {
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserCreateNestedManyWithoutEnrolledCoursesInput
    lectures?: LectureCreateNestedManyWithoutCourseInput
    coursePurchases?: CoursePurchaseCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    sessions?: SessionCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCreatorInput = {
    id?: number
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserUncheckedCreateNestedManyWithoutEnrolledCoursesInput
    lectures?: LectureUncheckedCreateNestedManyWithoutCourseInput
    coursePurchases?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCreatorInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCreatorInput, CourseUncheckedCreateWithoutCreatorInput>
  }

  export type CourseCreateManyCreatorInputEnvelope = {
    data: CourseCreateManyCreatorInput | CourseCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CoursePurchaseCreateWithoutUserInput = {
    amount: number
    status?: string
    paymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutCoursePurchasesInput
  }

  export type CoursePurchaseUncheckedCreateWithoutUserInput = {
    id?: number
    courseId: number
    amount: number
    status?: string
    paymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursePurchaseCreateOrConnectWithoutUserInput = {
    where: CoursePurchaseWhereUniqueInput
    create: XOR<CoursePurchaseCreateWithoutUserInput, CoursePurchaseUncheckedCreateWithoutUserInput>
  }

  export type CoursePurchaseCreateManyUserInputEnvelope = {
    data: CoursePurchaseCreateManyUserInput | CoursePurchaseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseProgressCreateWithoutUserInput = {
    completed: boolean
    course: CourseCreateNestedOneWithoutCourseProgressInput
    lectureProgress?: LectureProgressCreateNestedManyWithoutProgressInput
  }

  export type CourseProgressUncheckedCreateWithoutUserInput = {
    id?: number
    courseId: number
    completed: boolean
    lectureProgress?: LectureProgressUncheckedCreateNestedManyWithoutProgressInput
  }

  export type CourseProgressCreateOrConnectWithoutUserInput = {
    where: CourseProgressWhereUniqueInput
    create: XOR<CourseProgressCreateWithoutUserInput, CourseProgressUncheckedCreateWithoutUserInput>
  }

  export type CourseProgressCreateManyUserInputEnvelope = {
    data: CourseProgressCreateManyUserInput | CourseProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutUserInput = {
    createdAt?: Date | string
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    id?: number
    courseId: number
    createdAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: EnrollmentCreateManyUserInput | EnrollmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutEnrolledStudentsInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutEnrolledStudentsInput, CourseUncheckedUpdateWithoutEnrolledStudentsInput>
    create: XOR<CourseCreateWithoutEnrolledStudentsInput, CourseUncheckedCreateWithoutEnrolledStudentsInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutEnrolledStudentsInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutEnrolledStudentsInput, CourseUncheckedUpdateWithoutEnrolledStudentsInput>
  }

  export type CourseUpdateManyWithWhereWithoutEnrolledStudentsInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutEnrolledStudentsInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: IntFilter<"Course"> | number
    courseTitle?: StringFilter<"Course"> | string
    subTitle?: StringNullableFilter<"Course"> | string | null
    description?: StringNullableFilter<"Course"> | string | null
    category?: StringFilter<"Course"> | string
    courseLevel?: StringNullableFilter<"Course"> | string | null
    coursePrice?: FloatNullableFilter<"Course"> | number | null
    courseThumbnail?: StringNullableFilter<"Course"> | string | null
    creatorId?: IntFilter<"Course"> | number
    isPublished?: BoolFilter<"Course"> | boolean
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type CourseUpsertWithWhereUniqueWithoutCreatorInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutCreatorInput, CourseUncheckedUpdateWithoutCreatorInput>
    create: XOR<CourseCreateWithoutCreatorInput, CourseUncheckedCreateWithoutCreatorInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutCreatorInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutCreatorInput, CourseUncheckedUpdateWithoutCreatorInput>
  }

  export type CourseUpdateManyWithWhereWithoutCreatorInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutCreatorInput>
  }

  export type CoursePurchaseUpsertWithWhereUniqueWithoutUserInput = {
    where: CoursePurchaseWhereUniqueInput
    update: XOR<CoursePurchaseUpdateWithoutUserInput, CoursePurchaseUncheckedUpdateWithoutUserInput>
    create: XOR<CoursePurchaseCreateWithoutUserInput, CoursePurchaseUncheckedCreateWithoutUserInput>
  }

  export type CoursePurchaseUpdateWithWhereUniqueWithoutUserInput = {
    where: CoursePurchaseWhereUniqueInput
    data: XOR<CoursePurchaseUpdateWithoutUserInput, CoursePurchaseUncheckedUpdateWithoutUserInput>
  }

  export type CoursePurchaseUpdateManyWithWhereWithoutUserInput = {
    where: CoursePurchaseScalarWhereInput
    data: XOR<CoursePurchaseUpdateManyMutationInput, CoursePurchaseUncheckedUpdateManyWithoutUserInput>
  }

  export type CoursePurchaseScalarWhereInput = {
    AND?: CoursePurchaseScalarWhereInput | CoursePurchaseScalarWhereInput[]
    OR?: CoursePurchaseScalarWhereInput[]
    NOT?: CoursePurchaseScalarWhereInput | CoursePurchaseScalarWhereInput[]
    id?: IntFilter<"CoursePurchase"> | number
    courseId?: IntFilter<"CoursePurchase"> | number
    userId?: IntFilter<"CoursePurchase"> | number
    amount?: FloatFilter<"CoursePurchase"> | number
    status?: StringFilter<"CoursePurchase"> | string
    paymentId?: StringFilter<"CoursePurchase"> | string
    createdAt?: DateTimeFilter<"CoursePurchase"> | Date | string
    updatedAt?: DateTimeFilter<"CoursePurchase"> | Date | string
  }

  export type CourseProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: CourseProgressWhereUniqueInput
    update: XOR<CourseProgressUpdateWithoutUserInput, CourseProgressUncheckedUpdateWithoutUserInput>
    create: XOR<CourseProgressCreateWithoutUserInput, CourseProgressUncheckedCreateWithoutUserInput>
  }

  export type CourseProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: CourseProgressWhereUniqueInput
    data: XOR<CourseProgressUpdateWithoutUserInput, CourseProgressUncheckedUpdateWithoutUserInput>
  }

  export type CourseProgressUpdateManyWithWhereWithoutUserInput = {
    where: CourseProgressScalarWhereInput
    data: XOR<CourseProgressUpdateManyMutationInput, CourseProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type CourseProgressScalarWhereInput = {
    AND?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
    OR?: CourseProgressScalarWhereInput[]
    NOT?: CourseProgressScalarWhereInput | CourseProgressScalarWhereInput[]
    id?: IntFilter<"CourseProgress"> | number
    userId?: IntFilter<"CourseProgress"> | number
    courseId?: IntFilter<"CourseProgress"> | number
    completed?: BoolFilter<"CourseProgress"> | boolean
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    userId?: IntFilter<"Enrollment"> | number
    courseId?: IntFilter<"Enrollment"> | number
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
  }

  export type UserCreateWithoutEnrolledCoursesInput = {
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    coursesCreated?: CourseCreateNestedManyWithoutCreatorInput
    coursePurchases?: CoursePurchaseCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrolledCoursesInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    coursesCreated?: CourseUncheckedCreateNestedManyWithoutCreatorInput
    coursePurchases?: CoursePurchaseUncheckedCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrolledCoursesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput>
  }

  export type LectureCreateWithoutCourseInput = {
    lectureTitle: string
    videoUrl?: string | null
    publicId?: string | null
    isPreviewFree: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LectureUncheckedCreateWithoutCourseInput = {
    id?: number
    lectureTitle: string
    videoUrl?: string | null
    publicId?: string | null
    isPreviewFree: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LectureCreateOrConnectWithoutCourseInput = {
    where: LectureWhereUniqueInput
    create: XOR<LectureCreateWithoutCourseInput, LectureUncheckedCreateWithoutCourseInput>
  }

  export type LectureCreateManyCourseInputEnvelope = {
    data: LectureCreateManyCourseInput | LectureCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCoursesCreatedInput = {
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: CourseCreateNestedManyWithoutEnrolledStudentsInput
    coursePurchases?: CoursePurchaseCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoursesCreatedInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: CourseUncheckedCreateNestedManyWithoutEnrolledStudentsInput
    coursePurchases?: CoursePurchaseUncheckedCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoursesCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursesCreatedInput, UserUncheckedCreateWithoutCoursesCreatedInput>
  }

  export type CoursePurchaseCreateWithoutCourseInput = {
    amount: number
    status?: string
    paymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCoursePurchasesInput
  }

  export type CoursePurchaseUncheckedCreateWithoutCourseInput = {
    id?: number
    userId: number
    amount: number
    status?: string
    paymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursePurchaseCreateOrConnectWithoutCourseInput = {
    where: CoursePurchaseWhereUniqueInput
    create: XOR<CoursePurchaseCreateWithoutCourseInput, CoursePurchaseUncheckedCreateWithoutCourseInput>
  }

  export type CoursePurchaseCreateManyCourseInputEnvelope = {
    data: CoursePurchaseCreateManyCourseInput | CoursePurchaseCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseProgressCreateWithoutCourseInput = {
    completed: boolean
    user: UserCreateNestedOneWithoutCourseProgressInput
    lectureProgress?: LectureProgressCreateNestedManyWithoutProgressInput
  }

  export type CourseProgressUncheckedCreateWithoutCourseInput = {
    id?: number
    userId: number
    completed: boolean
    lectureProgress?: LectureProgressUncheckedCreateNestedManyWithoutProgressInput
  }

  export type CourseProgressCreateOrConnectWithoutCourseInput = {
    where: CourseProgressWhereUniqueInput
    create: XOR<CourseProgressCreateWithoutCourseInput, CourseProgressUncheckedCreateWithoutCourseInput>
  }

  export type CourseProgressCreateManyCourseInputEnvelope = {
    data: CourseProgressCreateManyCourseInput | CourseProgressCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutCourseInput = {
    title: string
    videoUrl?: string | null
    richText: string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutCourseInput = {
    id?: number
    title: string
    videoUrl?: string | null
    richText: string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutCourseInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutCourseInput, SessionUncheckedCreateWithoutCourseInput>
  }

  export type SessionCreateManyCourseInputEnvelope = {
    data: SessionCreateManyCourseInput | SessionCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutCourseInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: EnrollmentCreateManyCourseInput | EnrollmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutEnrolledCoursesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutEnrolledCoursesInput, UserUncheckedUpdateWithoutEnrolledCoursesInput>
    create: XOR<UserCreateWithoutEnrolledCoursesInput, UserUncheckedCreateWithoutEnrolledCoursesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutEnrolledCoursesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutEnrolledCoursesInput, UserUncheckedUpdateWithoutEnrolledCoursesInput>
  }

  export type UserUpdateManyWithWhereWithoutEnrolledCoursesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutEnrolledCoursesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    photoUrl?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type LectureUpsertWithWhereUniqueWithoutCourseInput = {
    where: LectureWhereUniqueInput
    update: XOR<LectureUpdateWithoutCourseInput, LectureUncheckedUpdateWithoutCourseInput>
    create: XOR<LectureCreateWithoutCourseInput, LectureUncheckedCreateWithoutCourseInput>
  }

  export type LectureUpdateWithWhereUniqueWithoutCourseInput = {
    where: LectureWhereUniqueInput
    data: XOR<LectureUpdateWithoutCourseInput, LectureUncheckedUpdateWithoutCourseInput>
  }

  export type LectureUpdateManyWithWhereWithoutCourseInput = {
    where: LectureScalarWhereInput
    data: XOR<LectureUpdateManyMutationInput, LectureUncheckedUpdateManyWithoutCourseInput>
  }

  export type LectureScalarWhereInput = {
    AND?: LectureScalarWhereInput | LectureScalarWhereInput[]
    OR?: LectureScalarWhereInput[]
    NOT?: LectureScalarWhereInput | LectureScalarWhereInput[]
    id?: IntFilter<"Lecture"> | number
    lectureTitle?: StringFilter<"Lecture"> | string
    videoUrl?: StringNullableFilter<"Lecture"> | string | null
    publicId?: StringNullableFilter<"Lecture"> | string | null
    isPreviewFree?: BoolFilter<"Lecture"> | boolean
    courseId?: IntNullableFilter<"Lecture"> | number | null
    createdAt?: DateTimeFilter<"Lecture"> | Date | string
    updatedAt?: DateTimeFilter<"Lecture"> | Date | string
  }

  export type UserUpsertWithoutCoursesCreatedInput = {
    update: XOR<UserUpdateWithoutCoursesCreatedInput, UserUncheckedUpdateWithoutCoursesCreatedInput>
    create: XOR<UserCreateWithoutCoursesCreatedInput, UserUncheckedCreateWithoutCoursesCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursesCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursesCreatedInput, UserUncheckedUpdateWithoutCoursesCreatedInput>
  }

  export type UserUpdateWithoutCoursesCreatedInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: CourseUpdateManyWithoutEnrolledStudentsNestedInput
    coursePurchases?: CoursePurchaseUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursesCreatedInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: CourseUncheckedUpdateManyWithoutEnrolledStudentsNestedInput
    coursePurchases?: CoursePurchaseUncheckedUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CoursePurchaseUpsertWithWhereUniqueWithoutCourseInput = {
    where: CoursePurchaseWhereUniqueInput
    update: XOR<CoursePurchaseUpdateWithoutCourseInput, CoursePurchaseUncheckedUpdateWithoutCourseInput>
    create: XOR<CoursePurchaseCreateWithoutCourseInput, CoursePurchaseUncheckedCreateWithoutCourseInput>
  }

  export type CoursePurchaseUpdateWithWhereUniqueWithoutCourseInput = {
    where: CoursePurchaseWhereUniqueInput
    data: XOR<CoursePurchaseUpdateWithoutCourseInput, CoursePurchaseUncheckedUpdateWithoutCourseInput>
  }

  export type CoursePurchaseUpdateManyWithWhereWithoutCourseInput = {
    where: CoursePurchaseScalarWhereInput
    data: XOR<CoursePurchaseUpdateManyMutationInput, CoursePurchaseUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseProgressUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseProgressWhereUniqueInput
    update: XOR<CourseProgressUpdateWithoutCourseInput, CourseProgressUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseProgressCreateWithoutCourseInput, CourseProgressUncheckedCreateWithoutCourseInput>
  }

  export type CourseProgressUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseProgressWhereUniqueInput
    data: XOR<CourseProgressUpdateWithoutCourseInput, CourseProgressUncheckedUpdateWithoutCourseInput>
  }

  export type CourseProgressUpdateManyWithWhereWithoutCourseInput = {
    where: CourseProgressScalarWhereInput
    data: XOR<CourseProgressUpdateManyMutationInput, CourseProgressUncheckedUpdateManyWithoutCourseInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutCourseInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutCourseInput, SessionUncheckedUpdateWithoutCourseInput>
    create: XOR<SessionCreateWithoutCourseInput, SessionUncheckedCreateWithoutCourseInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutCourseInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutCourseInput, SessionUncheckedUpdateWithoutCourseInput>
  }

  export type SessionUpdateManyWithWhereWithoutCourseInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutCourseInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: IntFilter<"Session"> | number
    title?: StringFilter<"Session"> | string
    videoUrl?: StringNullableFilter<"Session"> | string | null
    richText?: StringFilter<"Session"> | string
    courseId?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutLecturesInput = {
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserCreateNestedManyWithoutEnrolledCoursesInput
    creator: UserCreateNestedOneWithoutCoursesCreatedInput
    coursePurchases?: CoursePurchaseCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    sessions?: SessionCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutLecturesInput = {
    id?: number
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    creatorId: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserUncheckedCreateNestedManyWithoutEnrolledCoursesInput
    coursePurchases?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutLecturesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutLecturesInput, CourseUncheckedCreateWithoutLecturesInput>
  }

  export type CourseUpsertWithoutLecturesInput = {
    update: XOR<CourseUpdateWithoutLecturesInput, CourseUncheckedUpdateWithoutLecturesInput>
    create: XOR<CourseCreateWithoutLecturesInput, CourseUncheckedCreateWithoutLecturesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutLecturesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutLecturesInput, CourseUncheckedUpdateWithoutLecturesInput>
  }

  export type CourseUpdateWithoutLecturesInput = {
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUpdateManyWithoutEnrolledCoursesNestedInput
    creator?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    coursePurchases?: CoursePurchaseUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    sessions?: SessionUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutLecturesInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUncheckedUpdateManyWithoutEnrolledCoursesNestedInput
    coursePurchases?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateWithoutCoursePurchasesInput = {
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserCreateNestedManyWithoutEnrolledCoursesInput
    lectures?: LectureCreateNestedManyWithoutCourseInput
    creator: UserCreateNestedOneWithoutCoursesCreatedInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    sessions?: SessionCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCoursePurchasesInput = {
    id?: number
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    creatorId: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserUncheckedCreateNestedManyWithoutEnrolledCoursesInput
    lectures?: LectureUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCoursePurchasesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCoursePurchasesInput, CourseUncheckedCreateWithoutCoursePurchasesInput>
  }

  export type UserCreateWithoutCoursePurchasesInput = {
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: CourseCreateNestedManyWithoutEnrolledStudentsInput
    coursesCreated?: CourseCreateNestedManyWithoutCreatorInput
    courseProgress?: CourseProgressCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCoursePurchasesInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: CourseUncheckedCreateNestedManyWithoutEnrolledStudentsInput
    coursesCreated?: CourseUncheckedCreateNestedManyWithoutCreatorInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCoursePurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCoursePurchasesInput, UserUncheckedCreateWithoutCoursePurchasesInput>
  }

  export type CourseUpsertWithoutCoursePurchasesInput = {
    update: XOR<CourseUpdateWithoutCoursePurchasesInput, CourseUncheckedUpdateWithoutCoursePurchasesInput>
    create: XOR<CourseCreateWithoutCoursePurchasesInput, CourseUncheckedCreateWithoutCoursePurchasesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCoursePurchasesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCoursePurchasesInput, CourseUncheckedUpdateWithoutCoursePurchasesInput>
  }

  export type CourseUpdateWithoutCoursePurchasesInput = {
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUpdateManyWithoutEnrolledCoursesNestedInput
    lectures?: LectureUpdateManyWithoutCourseNestedInput
    creator?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    sessions?: SessionUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCoursePurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUncheckedUpdateManyWithoutEnrolledCoursesNestedInput
    lectures?: LectureUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserUpsertWithoutCoursePurchasesInput = {
    update: XOR<UserUpdateWithoutCoursePurchasesInput, UserUncheckedUpdateWithoutCoursePurchasesInput>
    create: XOR<UserCreateWithoutCoursePurchasesInput, UserUncheckedCreateWithoutCoursePurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCoursePurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCoursePurchasesInput, UserUncheckedUpdateWithoutCoursePurchasesInput>
  }

  export type UserUpdateWithoutCoursePurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: CourseUpdateManyWithoutEnrolledStudentsNestedInput
    coursesCreated?: CourseUpdateManyWithoutCreatorNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCoursePurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: CourseUncheckedUpdateManyWithoutEnrolledStudentsNestedInput
    coursesCreated?: CourseUncheckedUpdateManyWithoutCreatorNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCourseProgressInput = {
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: CourseCreateNestedManyWithoutEnrolledStudentsInput
    coursesCreated?: CourseCreateNestedManyWithoutCreatorInput
    coursePurchases?: CoursePurchaseCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCourseProgressInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: CourseUncheckedCreateNestedManyWithoutEnrolledStudentsInput
    coursesCreated?: CourseUncheckedCreateNestedManyWithoutCreatorInput
    coursePurchases?: CoursePurchaseUncheckedCreateNestedManyWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCourseProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCourseProgressInput, UserUncheckedCreateWithoutCourseProgressInput>
  }

  export type CourseCreateWithoutCourseProgressInput = {
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserCreateNestedManyWithoutEnrolledCoursesInput
    lectures?: LectureCreateNestedManyWithoutCourseInput
    creator: UserCreateNestedOneWithoutCoursesCreatedInput
    coursePurchases?: CoursePurchaseCreateNestedManyWithoutCourseInput
    sessions?: SessionCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCourseProgressInput = {
    id?: number
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    creatorId: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserUncheckedCreateNestedManyWithoutEnrolledCoursesInput
    lectures?: LectureUncheckedCreateNestedManyWithoutCourseInput
    coursePurchases?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCourseProgressInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseProgressInput, CourseUncheckedCreateWithoutCourseProgressInput>
  }

  export type LectureProgressCreateWithoutProgressInput = {
    lectureId: number
    viewed: boolean
  }

  export type LectureProgressUncheckedCreateWithoutProgressInput = {
    id?: number
    lectureId: number
    viewed: boolean
  }

  export type LectureProgressCreateOrConnectWithoutProgressInput = {
    where: LectureProgressWhereUniqueInput
    create: XOR<LectureProgressCreateWithoutProgressInput, LectureProgressUncheckedCreateWithoutProgressInput>
  }

  export type LectureProgressCreateManyProgressInputEnvelope = {
    data: LectureProgressCreateManyProgressInput | LectureProgressCreateManyProgressInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCourseProgressInput = {
    update: XOR<UserUpdateWithoutCourseProgressInput, UserUncheckedUpdateWithoutCourseProgressInput>
    create: XOR<UserCreateWithoutCourseProgressInput, UserUncheckedCreateWithoutCourseProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCourseProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCourseProgressInput, UserUncheckedUpdateWithoutCourseProgressInput>
  }

  export type UserUpdateWithoutCourseProgressInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: CourseUpdateManyWithoutEnrolledStudentsNestedInput
    coursesCreated?: CourseUpdateManyWithoutCreatorNestedInput
    coursePurchases?: CoursePurchaseUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCourseProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: CourseUncheckedUpdateManyWithoutEnrolledStudentsNestedInput
    coursesCreated?: CourseUncheckedUpdateManyWithoutCreatorNestedInput
    coursePurchases?: CoursePurchaseUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutCourseProgressInput = {
    update: XOR<CourseUpdateWithoutCourseProgressInput, CourseUncheckedUpdateWithoutCourseProgressInput>
    create: XOR<CourseCreateWithoutCourseProgressInput, CourseUncheckedCreateWithoutCourseProgressInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseProgressInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseProgressInput, CourseUncheckedUpdateWithoutCourseProgressInput>
  }

  export type CourseUpdateWithoutCourseProgressInput = {
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUpdateManyWithoutEnrolledCoursesNestedInput
    lectures?: LectureUpdateManyWithoutCourseNestedInput
    creator?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    coursePurchases?: CoursePurchaseUpdateManyWithoutCourseNestedInput
    sessions?: SessionUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCourseProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUncheckedUpdateManyWithoutEnrolledCoursesNestedInput
    lectures?: LectureUncheckedUpdateManyWithoutCourseNestedInput
    coursePurchases?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type LectureProgressUpsertWithWhereUniqueWithoutProgressInput = {
    where: LectureProgressWhereUniqueInput
    update: XOR<LectureProgressUpdateWithoutProgressInput, LectureProgressUncheckedUpdateWithoutProgressInput>
    create: XOR<LectureProgressCreateWithoutProgressInput, LectureProgressUncheckedCreateWithoutProgressInput>
  }

  export type LectureProgressUpdateWithWhereUniqueWithoutProgressInput = {
    where: LectureProgressWhereUniqueInput
    data: XOR<LectureProgressUpdateWithoutProgressInput, LectureProgressUncheckedUpdateWithoutProgressInput>
  }

  export type LectureProgressUpdateManyWithWhereWithoutProgressInput = {
    where: LectureProgressScalarWhereInput
    data: XOR<LectureProgressUpdateManyMutationInput, LectureProgressUncheckedUpdateManyWithoutProgressInput>
  }

  export type LectureProgressScalarWhereInput = {
    AND?: LectureProgressScalarWhereInput | LectureProgressScalarWhereInput[]
    OR?: LectureProgressScalarWhereInput[]
    NOT?: LectureProgressScalarWhereInput | LectureProgressScalarWhereInput[]
    id?: IntFilter<"LectureProgress"> | number
    lectureId?: IntFilter<"LectureProgress"> | number
    viewed?: BoolFilter<"LectureProgress"> | boolean
    progressId?: IntFilter<"LectureProgress"> | number
  }

  export type CourseProgressCreateWithoutLectureProgressInput = {
    completed: boolean
    user: UserCreateNestedOneWithoutCourseProgressInput
    course: CourseCreateNestedOneWithoutCourseProgressInput
  }

  export type CourseProgressUncheckedCreateWithoutLectureProgressInput = {
    id?: number
    userId: number
    courseId: number
    completed: boolean
  }

  export type CourseProgressCreateOrConnectWithoutLectureProgressInput = {
    where: CourseProgressWhereUniqueInput
    create: XOR<CourseProgressCreateWithoutLectureProgressInput, CourseProgressUncheckedCreateWithoutLectureProgressInput>
  }

  export type CourseProgressUpsertWithoutLectureProgressInput = {
    update: XOR<CourseProgressUpdateWithoutLectureProgressInput, CourseProgressUncheckedUpdateWithoutLectureProgressInput>
    create: XOR<CourseProgressCreateWithoutLectureProgressInput, CourseProgressUncheckedCreateWithoutLectureProgressInput>
    where?: CourseProgressWhereInput
  }

  export type CourseProgressUpdateToOneWithWhereWithoutLectureProgressInput = {
    where?: CourseProgressWhereInput
    data: XOR<CourseProgressUpdateWithoutLectureProgressInput, CourseProgressUncheckedUpdateWithoutLectureProgressInput>
  }

  export type CourseProgressUpdateWithoutLectureProgressInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCourseProgressNestedInput
    course?: CourseUpdateOneRequiredWithoutCourseProgressNestedInput
  }

  export type CourseProgressUncheckedUpdateWithoutLectureProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CourseCreateWithoutSessionsInput = {
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserCreateNestedManyWithoutEnrolledCoursesInput
    lectures?: LectureCreateNestedManyWithoutCourseInput
    creator: UserCreateNestedOneWithoutCoursesCreatedInput
    coursePurchases?: CoursePurchaseCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutSessionsInput = {
    id?: number
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    creatorId: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserUncheckedCreateNestedManyWithoutEnrolledCoursesInput
    lectures?: LectureUncheckedCreateNestedManyWithoutCourseInput
    coursePurchases?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutSessionsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutSessionsInput, CourseUncheckedCreateWithoutSessionsInput>
  }

  export type CourseUpsertWithoutSessionsInput = {
    update: XOR<CourseUpdateWithoutSessionsInput, CourseUncheckedUpdateWithoutSessionsInput>
    create: XOR<CourseCreateWithoutSessionsInput, CourseUncheckedCreateWithoutSessionsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutSessionsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutSessionsInput, CourseUncheckedUpdateWithoutSessionsInput>
  }

  export type CourseUpdateWithoutSessionsInput = {
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUpdateManyWithoutEnrolledCoursesNestedInput
    lectures?: LectureUpdateManyWithoutCourseNestedInput
    creator?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    coursePurchases?: CoursePurchaseUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUncheckedUpdateManyWithoutEnrolledCoursesNestedInput
    lectures?: LectureUncheckedUpdateManyWithoutCourseNestedInput
    coursePurchases?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutEnrollmentsInput = {
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: CourseCreateNestedManyWithoutEnrolledStudentsInput
    coursesCreated?: CourseCreateNestedManyWithoutCreatorInput
    coursePurchases?: CoursePurchaseCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string
    photoUrl?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledCourses?: CourseUncheckedCreateNestedManyWithoutEnrolledStudentsInput
    coursesCreated?: CourseUncheckedCreateNestedManyWithoutCreatorInput
    coursePurchases?: CoursePurchaseUncheckedCreateNestedManyWithoutUserInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseCreateWithoutEnrollmentsInput = {
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserCreateNestedManyWithoutEnrolledCoursesInput
    lectures?: LectureCreateNestedManyWithoutCourseInput
    creator: UserCreateNestedOneWithoutCoursesCreatedInput
    coursePurchases?: CoursePurchaseCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressCreateNestedManyWithoutCourseInput
    sessions?: SessionCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    creatorId: number
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    enrolledStudents?: UserUncheckedCreateNestedManyWithoutEnrolledCoursesInput
    lectures?: LectureUncheckedCreateNestedManyWithoutCourseInput
    coursePurchases?: CoursePurchaseUncheckedCreateNestedManyWithoutCourseInput
    courseProgress?: CourseProgressUncheckedCreateNestedManyWithoutCourseInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: CourseUpdateManyWithoutEnrolledStudentsNestedInput
    coursesCreated?: CourseUpdateManyWithoutCreatorNestedInput
    coursePurchases?: CoursePurchaseUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledCourses?: CourseUncheckedUpdateManyWithoutEnrolledStudentsNestedInput
    coursesCreated?: CourseUncheckedUpdateManyWithoutCreatorNestedInput
    coursePurchases?: CoursePurchaseUncheckedUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutEnrollmentsInput = {
    update: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateWithoutEnrollmentsInput = {
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUpdateManyWithoutEnrolledCoursesNestedInput
    lectures?: LectureUpdateManyWithoutCourseNestedInput
    creator?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    coursePurchases?: CoursePurchaseUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    sessions?: SessionUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUncheckedUpdateManyWithoutEnrolledCoursesNestedInput
    lectures?: LectureUncheckedUpdateManyWithoutCourseNestedInput
    coursePurchases?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyCreatorInput = {
    id?: number
    courseTitle: string
    subTitle?: string | null
    description?: string | null
    category: string
    courseLevel?: string | null
    coursePrice?: number | null
    courseThumbnail?: string | null
    isPublished?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursePurchaseCreateManyUserInput = {
    id?: number
    courseId: number
    amount: number
    status?: string
    paymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseProgressCreateManyUserInput = {
    id?: number
    courseId: number
    completed: boolean
  }

  export type EnrollmentCreateManyUserInput = {
    id?: number
    courseId: number
    createdAt?: Date | string
  }

  export type CourseUpdateWithoutEnrolledStudentsInput = {
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lectures?: LectureUpdateManyWithoutCourseNestedInput
    creator?: UserUpdateOneRequiredWithoutCoursesCreatedNestedInput
    coursePurchases?: CoursePurchaseUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    sessions?: SessionUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrolledStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lectures?: LectureUncheckedUpdateManyWithoutCourseNestedInput
    coursePurchases?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutEnrolledStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: IntFieldUpdateOperationsInput | number
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUpdateWithoutCreatorInput = {
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUpdateManyWithoutEnrolledCoursesNestedInput
    lectures?: LectureUpdateManyWithoutCourseNestedInput
    coursePurchases?: CoursePurchaseUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutCourseNestedInput
    sessions?: SessionUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrolledStudents?: UserUncheckedUpdateManyWithoutEnrolledCoursesNestedInput
    lectures?: LectureUncheckedUpdateManyWithoutCourseNestedInput
    coursePurchases?: CoursePurchaseUncheckedUpdateManyWithoutCourseNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutCourseNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTitle?: StringFieldUpdateOperationsInput | string
    subTitle?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    courseLevel?: NullableStringFieldUpdateOperationsInput | string | null
    coursePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    courseThumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutCoursePurchasesNestedInput
  }

  export type CoursePurchaseUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProgressUpdateWithoutUserInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    course?: CourseUpdateOneRequiredWithoutCourseProgressNestedInput
    lectureProgress?: LectureProgressUpdateManyWithoutProgressNestedInput
  }

  export type CourseProgressUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    lectureProgress?: LectureProgressUncheckedUpdateManyWithoutProgressNestedInput
  }

  export type CourseProgressUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EnrollmentUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureCreateManyCourseInput = {
    id?: number
    lectureTitle: string
    videoUrl?: string | null
    publicId?: string | null
    isPreviewFree: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoursePurchaseCreateManyCourseInput = {
    id?: number
    userId: number
    amount: number
    status?: string
    paymentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseProgressCreateManyCourseInput = {
    id?: number
    userId: number
    completed: boolean
  }

  export type SessionCreateManyCourseInput = {
    id?: number
    title: string
    videoUrl?: string | null
    richText: string
    createdAt?: Date | string
  }

  export type EnrollmentCreateManyCourseInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type UserUpdateWithoutEnrolledCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coursesCreated?: CourseUpdateManyWithoutCreatorNestedInput
    coursePurchases?: CoursePurchaseUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrolledCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coursesCreated?: CourseUncheckedUpdateManyWithoutCreatorNestedInput
    coursePurchases?: CoursePurchaseUncheckedUpdateManyWithoutUserNestedInput
    courseProgress?: CourseProgressUncheckedUpdateManyWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutEnrolledCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    photoUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureUpdateWithoutCourseInput = {
    lectureTitle?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    isPreviewFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    lectureTitle?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    isPreviewFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    lectureTitle?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publicId?: NullableStringFieldUpdateOperationsInput | string | null
    isPreviewFree?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseUpdateWithoutCourseInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCoursePurchasesNestedInput
  }

  export type CoursePurchaseUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoursePurchaseUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseProgressUpdateWithoutCourseInput = {
    completed?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCourseProgressNestedInput
    lectureProgress?: LectureProgressUpdateManyWithoutProgressNestedInput
  }

  export type CourseProgressUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    lectureProgress?: LectureProgressUncheckedUpdateManyWithoutProgressNestedInput
  }

  export type CourseProgressUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SessionUpdateWithoutCourseInput = {
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    richText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    richText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    richText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LectureProgressCreateManyProgressInput = {
    id?: number
    lectureId: number
    viewed: boolean
  }

  export type LectureProgressUpdateWithoutProgressInput = {
    lectureId?: IntFieldUpdateOperationsInput | number
    viewed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LectureProgressUncheckedUpdateWithoutProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
    viewed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LectureProgressUncheckedUpdateManyWithoutProgressInput = {
    id?: IntFieldUpdateOperationsInput | number
    lectureId?: IntFieldUpdateOperationsInput | number
    viewed?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}