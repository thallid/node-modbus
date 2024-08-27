/** jsModbus is a node.js module that enables the developer to interact with modbus/tcp and modbus/rtu server (slaves)
 * or to create a modbus/tcp server (master).
 * @module jsmodbus
 *
 */

/** module:jsmodbus.client.TCP
 * @example <caption>Create new Modbus/TCP Client.</caption>
 * const Modbus = require('jsmodbus')
 * const net = require('net')
 * const socket = new new.Socket()
 * const client = new Modbus.client.TCP(socket, unitId)
 * const options = {
 *   'host' : host
 *   'port' : port
 *   }
 *
 *  socket.connect(options)
 */
import ModbusTCPClient from './modbus-tcp-client.js';

/** module:jsmodbus.client.RTU
 * @example <caption>Create new Modbus/RTU Client.</caption>
 * const Modbus = require('jsmodbus')
 * const SerialPort = require('serialport')
 * const socket = new SerialPort('/dev/tty/ttyUSB0', { baudRate: 57600 })
 * const client = new Modbus.client.TCP(socket, address)
 */

/** module:jsmodbus.server.TCP */
import ModbusTCPServer from './modbus-tcp-server.js';

import * as Codes from './codes';
import * as Errors from './errors';
import * as Requests from './request';
import * as Responses from './response';
import UserRequest from './user-request.js';

import { LIMITS } from './constants';

export const client = {
  TCP: ModbusTCPClient,
};

export const server = {
  TCP: ModbusTCPServer,
};

export const requests = {
  ...Requests,
  UserRequest,
};

export const responses = Responses;
export const codes = Codes;
export const errors = Errors;
export const limits = LIMITS;

export { default as ModbusAbstractRequest } from './abstract-request';
export { default as ModbusAbstractResponse } from './abstract-response';
export { default as MBClientRequestHandler } from './client-request-handler';
export { default as ModbusClientResponseHandler } from './client-response-handler';
export { default as ModbusClient } from './modbus-client';
export * from './request-response-map';
export { default as ModbusTCPRequest } from './tcp-request';
export { default as ModbusTCPResponse } from './tcp-response';
export { UserRequestError } from './user-request-error';
export {
  default as UserRequest,
  ModbusRequest,
  IUserRequestResolve as UserRequestResolve,
  PromiseUserRequest,
} from './user-request';
export { UserRequestMetrics } from './user-request-metrics';

export { ModbusTCPClient, ModbusTCPServer };
