export interface IUser {
          id: string
          firstName: string,
          lastName: string,
          email: string,
          roles: string [],
}

export interface IAddNewUser {
    firstName: string,
    lastName: string,
    email: string,
    roles: string [],
    password: string
}

export interface IRole{
        id: number,
        name: string,
        normalizedName: string,
        concurrencyStamp: string
}