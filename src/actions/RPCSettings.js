export const SET_RPC_USERNAME = 'SET_RPC_USERNAME'
export const SET_RPC_PASSWORD = 'SET_RPC_PASSWORD'
export const SET_RPC_HOST = 'SET_RPC_HOST'
export const SET_RPC_PORT = 'SET_RPC_PORT'
export const SET_RPC_SETTINGS = 'SET_RPC_SETTINGS'

export function setRPCUsername (rpcUsername) {
  return {
    type: SET_RPC_USERNAME,
    rpcUsername
  }
}

export function setRPCPassword (rpcPassword) {
  return {
    type: SET_RPC_PASSWORD,
    rpcPassword
  }
}

export function setRPCHost (rpcHost) {
  return {
    type: SET_RPC_HOST,
    rpcHost
  }
}

export function setRPCPort (rpcPort) {
  // Always convert it to a string
  rpcPort = rpcPort.toString()  

  const intRpcPort = parseInt(rpcPort.replace('/\D/g', ''))
  return {
    type: SET_RPC_PORT,
    rpcPort: isNaN(intRpcPort) ? '' : intRpcPort
  }
}

export function setRPCSettings (rpcSettings) {
  return {
    type: SET_RPC_SETTINGS,
    rpcSettings
  }
}