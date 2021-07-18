import { Actor, HttpAgent } from "@dfinity/agent";
import {
  idlFactory as dfinity_vue_idl,
  canisterId as dfinity_vue_id,
} from "dfx-generated/dfinity_vue";

const agent = new HttpAgent();
export const dfinity_vue = Actor.createActor(dfinity_vue_idl, {
  agent,
  canisterId: dfinity_vue_id,
});
