import { atom } from "recoil";

export const currentAddressState = atom({
  key: "address",
  default: null,
});

export const currentConnected = atom({
  key: "connected",
  default: false,
});

export const currentChainId = atom({
  key: "chainId",
  default: null,
});

export const currentNetworkId = atom({
  key: "networkId",
  default: null,
});

export const openModalState = atom({
  key: "openModal",
  default: 0,
});

export const currentLoadingState = atom({
  key: "loading",
  default: true,
});
