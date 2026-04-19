import { statusDefinitions } from "../StatusDefinitions";

export type StatusId = (typeof statusDefinitions)[number]["id"];
