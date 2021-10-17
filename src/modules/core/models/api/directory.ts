import { IAccessMember } from "./accessMember";
import { IFile } from "./file";

export interface IDirectory {
    id: string;
    name: string;
    size: number;
    directories: IDirectory[];
    files: IFile[];
    accessMembers: IAccessMember[];
}