import { CustomHttpException } from 'src/common/errors/error.custom';

interface Error {
  data: null;
  error: CustomHttpException;
}

interface ResultSuccess<T> {
  data: T;
  error: null;
}

export type Result<T> = ResultSuccess<T> | Error;
