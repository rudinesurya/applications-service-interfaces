import { IApplication } from "./application.interface";

export interface IApplicationCreateResponse {
    status: number;
    system_message: string;
    application: IApplication | null;
    errors: { [key: string]: any } | null;
}