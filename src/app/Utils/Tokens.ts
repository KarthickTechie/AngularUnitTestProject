import { HttpContextToken } from "@angular/common/http";

export const CACHE_ENABLED = new HttpContextToken<boolean>(()=>false);