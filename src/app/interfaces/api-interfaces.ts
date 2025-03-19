export interface IProduct {
    id?: number;
    productId: number
    name: string;
    price: number;
    photosUrls?: string[]
    categoryId: number;
}

export interface ICategory {
    id?: number;
    categoryId: number;
    name: string;
    subCategories?: ICategory[];
}


// export interface IUser {
//     id?: number;
//     userId: number;
//     name: string;
//     surname: string;
//     balance: number;
// }
// export interface IAdmin {
//     id?: number;
//     adminId: number;
//     name: string;
//     surname: string;
//     password?: string;
// }