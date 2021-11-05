import { IAccessMember } from "./accessMember";
import { IFileSystemElement } from "./fileSystemElement";

export interface IFile extends IFileSystemElement {
    accessMembers: IAccessMember[];
}