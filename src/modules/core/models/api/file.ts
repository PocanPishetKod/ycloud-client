import { IAccessMember } from "./accessMember";

export interface IFile {
    id: string;
    name: string;
    size: number;
    accessMembers: IAccessMember[];
}