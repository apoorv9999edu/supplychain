//set clear message actionexport const REGISTER_SUCCESS = "REGISTER_SUCCESS";
import { HSET_MESSAGE,PSET_MESSAGE,MSET_MESSAGE, BSET_MESSAGE,CLEAR_MESSAGE } from "./types";
//manufacturer 
export const MsetMessage = (Mmessage) => ({
  type: MSET_MESSAGE,
  payload: Mmessage,
});

export const MclearMessage = () => ({
  type: CLEAR_MESSAGE,
});

//handler 
export const HsetMessage = (Hmessage) => ({
  type: HSET_MESSAGE,
  payload: Hmessage,
});

export const HclearMessage = () => ({
  type: CLEAR_MESSAGE,
});

//beneficiary
export const BsetMessage = (Bmessage) => ({
  type: BSET_MESSAGE,
  payload: Bmessage,
});

export const BclearMessage = () => ({
  type: CLEAR_MESSAGE,
});

//physician
export const PsetMessage = (Pmessage) => ({
  type: PSET_MESSAGE,
  payload: Pmessage,
});

export const PclearMessage = () => ({
  type: CLEAR_MESSAGE,
});
