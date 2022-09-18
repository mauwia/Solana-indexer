
  import {
    Connection,
    PublicKey,
    clusterApiUrl,
    ParsedAccountData,
  } from '@solana/web3.js';
  import {
    Program,
    AnchorProvider,
    web3,
    Wallet,
    utils,
    EventParser,
    BorshCoder,
    BN,
  } from '@project-serum/anchor';
      
export const Unstaked=(event)=>{
    return {
      userAdd:event.data.userAdd,
      amount:event.data.amount,
      time:event.data.time,
      stakeAmount:event.data.stakeAmount,
      lastStakingAccumulatedWeight:event.data.lastStakingAccumulatedWeight,
      totalUnclaimed:event.data.totalUnclaimed,
      lastAccumulatedFeeWeight:event.data.lastAccumulatedFeeWeight,
      feeBalance:event.data.feeBalance,
      event:"Unstaked",
      tx_hash:event.tx_hash
      }
    };
    
export const RewardDisbursed=(event)=>{
    return {
      userAdd:event.data.userAdd,
      rewardDisbursed:event.data.rewardDisbursed,
      time:event.data.time,
      stakeAmount:event.data.stakeAmount,
      lastStakingAccumulatedWeight:event.data.lastStakingAccumulatedWeight,
      totalUnclaimed:event.data.totalUnclaimed,
      lastAccumulatedFeeWeight:event.data.lastAccumulatedFeeWeight,
      event:"RewardDisbursed",
      tx_hash:event.tx_hash
      }
    };
    
export const Staked=(event)=>{
    return {
      userAdd:event.data.userAdd,
      amount:event.data.amount,
      time:event.data.time,
      stakeAmount:event.data.stakeAmount,
      lastStakingAccumulatedWeight:event.data.lastStakingAccumulatedWeight,
      totalUnclaimed:event.data.totalUnclaimed,
      lastAccumulatedFeeWeight:event.data.lastAccumulatedFeeWeight,
      feeBalance:event.data.feeBalance,
      event:"Staked",
      tx_hash:event.tx_hash
      }
    };
    