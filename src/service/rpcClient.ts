// // launchpad, sender, phaseIndex
// {"method": "launchpad_mintingStatus", "jsonrpc": "2.0", "params": ["0xBAAA321875ce2ce01155fF917E5aF2d0F0baD9b1", "0xDA63c4A9fEB5D2B3191607b21669D0788A465B33", 1], "id": 1}
// //lauchpad, sender, collection
// {"method": "launchpad_getOwnedERC721", "jsonrpc": "2.0", "params": ["0xDA63c4A9fEB5D2B3191607b21669D0788A465B33", "0xcEa87336973D357EdD32cde2cE71b31e13BB1b91"], "id": 1}
// // uoHash
// {"method": "eth_getUserOperationReceipt", "jsonrpc": "2.0", "params": ["0xf500f072123af42682a6eae49c3231f52cf1f2155ce71477c5fea03d2d2771f5"], "id": 1}

import { RPC_URL } from "@/utils";
import { JSONRPCClient } from "json-rpc-2.0";

export const rpcClient: JSONRPCClient = new JSONRPCClient((jsonRPCRequest) =>
  fetch(RPC_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(jsonRPCRequest),
  }).then((response) => {
    if (response.status === 200) {
      return response
        .json()
        .then((jsonRPCResponse) => rpcClient.receive(jsonRPCResponse));
    } else if (jsonRPCRequest.id !== undefined) {
      return Promise.reject(new Error(response.statusText));
    }
  })
);
