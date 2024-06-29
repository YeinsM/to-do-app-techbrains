export interface Todo {
    id?: number;
    name: string;
    isCompleted: boolean;
    createdOn?: Date;
    updatedOn?: Date;
}