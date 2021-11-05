import { IAccessMember } from "./accessMember";
import { IFile } from "./file";
import { IFileSystemElement } from "./fileSystemElement";

export interface IDirectory extends IFileSystemElement {
    directories: IDirectory[];
    files: IFile[];
    accessMembers: IAccessMember[];
}