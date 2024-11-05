import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { STAKING_CONTRACT_ABI } from "./stakingContractABI";

// neo
// const stakeTokenContractAddress = "0xda2FA8c5Db515293F252Ffa367a6c593F2b97867";
// const rewardTokenContractAddress = "0xbC144A53BdC615e58cE5ce07FC78A60Cc26025d4";
// const stakingContractAddress = "0x12a883f4778DC14Fdfee934EdccD04ABDcEFC992";
//aia
const stakeTokenContractAddress = "0xE98e8c098555804C1CDb5D6772F73F4D07AaC8Db";
const rewardTokenContractAddress = "0x70D9573690927eFeE645A470a64A12c68ec63342";
const stakingContractAddress = "0xAE835d53606E17f02636d95fFac6e3b61A8C0c0b";

export const STAKE_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakeTokenContractAddress,
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress,
});


export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: STAKING_CONTRACT_ABI
});