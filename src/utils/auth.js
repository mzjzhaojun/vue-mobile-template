import { Local } from "./storage";

const TokenKey = 'Admin-Token';

const TenantKey = 'Admin-Tenantid';

const Rsapublickey = 'Admin-Rsapublickey';

export function setClear(){
  return Local.clear();
}

export function getToken() {
  return Local.get(TokenKey);
}

export function setToken(token) {
  return Local.set(TokenKey, token);
}

export function removeToken() {
  return Local.remove(TokenKey);
}

export function getTenantId() {
  return Local.get(TenantKey);
}

export function setTenantId(tenantId) {
  return Local.set(TenantKey, tenantId);
}

export function removeTenantId() {
  return Local.remove(TenantKey);
}

export function getRsapublickey() {
  return Local.get(Rsapublickey);
}

export function setRsapublickey(rsapublickey) {
  return Local.set(Rsapublickey, rsapublickey);
}

export function removeRsapublickey() {
  return Local.remove(Rsapublickey);
}
