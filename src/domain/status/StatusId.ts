import { statusDefinitions } from "./definitions";

export type StatusId = (typeof statusDefinitions)[number]["id"];
