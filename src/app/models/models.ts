export interface Movie {
    id: string,
    title: string,
    description: string,
    actors: string[],
    director: string,
    stock: number,
    img?: string
}

export interface Reserva {
    userId: string,
    movieId: string
}

export interface UserSignIn {
    email: string,
    password: string
}

export interface UserRegister {
    id: string,
    name: string,
    lastname: string,
    email: string,
    phone: string,
    address: string,
    password: string
}