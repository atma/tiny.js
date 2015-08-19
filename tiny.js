import clone from './modules/clone';
import extend from './modules/extend';
import inherits from './modules/inherits';
import request from './modules/request';
import isPlainObject from './modules/isPlainObject';
import { support } from './modules/support';
import classList from './modules/classList';
import { cookies } from './modules/cookies';

let tiny = {
    clone,
    extend,
    inherits,
    request,
    isPlainObject,
    support,
    classList,
    cookies
};

let root = typeof self === 'object' && self.self === self && self ||
    typeof global === 'object' && global.global === global && global ||
    this;

root.tiny = tiny;

export default tiny;
