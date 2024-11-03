import { Local } from "./storage";

const UserId = 'Admin-UserId';

const TokenKey = 'Admin-Token';

const TenantKey = 'Admin-Tenantid';

const Rsapublickey = 'Admin-Rsapublickey';

const UserName = 'Admin-UserName';

const Usertype = 'Admin-UserType';

export function getUserName() {
  return Local.get(UserName);
}

export function setUserName(uname) {
  return Local.set(UserName, uname);
}

export function removeUserName() {
  return Local.remove(UserName);
}


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


export function getUserType() {
  return Local.get(Usertype);
}

export function setUserType(utype) {
  return Local.set(Usertype, utype);
}

export function removeUserType() {
  return Local.remove(Usertype);
}