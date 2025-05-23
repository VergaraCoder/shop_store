interface IUserErrors {
  NOT_FOUND: string;
  EMAIL_EXIST: string;
}

export const USER_ERRORS: IUserErrors = {
  NOT_FOUND: 'USER NOT FOUND',
  EMAIL_EXIST: 'THE EMAIL ALREADY EXIST',
};
