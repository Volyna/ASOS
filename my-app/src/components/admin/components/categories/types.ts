export interface ICategoryCreate {
    name: string,
    imageBase64: string | null
}

export interface ICategoryUpdate {
    id: number;
    name: string;
    newImage: string | null;
} 

export interface ICategoryItem {
    id: number,
    name: string,
    image: string
}