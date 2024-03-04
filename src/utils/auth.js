import { Local } from "./storage";

const UserId = 'Admin-UserId';

const TokenKey = 'Admin-Token';

const TenantKey = 'Admin-Tenantid';

const Rsapublickey = 'Admin-Rsapublickey';




export function getUserId() {
  return Local.get(UserId);
}

export function setUserId(uid) {
  return Local.set(UserId, uid);
}

export function removeUserId() {
  return Local.remove(UserId);
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
