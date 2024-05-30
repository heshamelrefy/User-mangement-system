import { Roles } from "src/app/core/roles/roles";

export interface IUser 
{
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  string;
    phone:    string;
    website:  string;
    password?: string;
    role: Roles;
}


