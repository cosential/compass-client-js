import { Personnel } from "../personnel";
import { CallLogRole } from "./call-log";

export interface CallLogPersonnel {
    Personnel: Personnel;
    role: CallLogRole;
}