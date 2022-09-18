export const IDL:any={
  "version": "0.1.0",
  "name": "staking_manager",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakingManagerProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingManagerProgramData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "upgradeAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakingManagerPdaAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "manager_authority"
              }
            ]
          }
        },
        {
          "name": "stakePoolProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakePoolState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_pool"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "stake_pool_program"
            }
          }
        },
        {
          "name": "stakePoolProgramData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakePoolVault",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_pool_vault"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "stake_pool_program"
            }
          }
        },
        {
          "name": "stakePoolVaultAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_vault_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "stake_pool_program"
            }
          }
        },
        {
          "name": "mintAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistAccountStakePool",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "stake_pool_program"
            }
          }
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingDatabaseProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingDatabaseState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_database_state"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "stakingDatabasePool",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_database_pool"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "whitelistAccountStakingDatabase",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        }
      ],
      "args": [
        {
          "name": "mint",
          "type": "publicKey"
        },
        {
          "name": "database",
          "type": "publicKey"
        },
        {
          "name": "rebaseEngine",
          "type": "publicKey"
        },
        {
          "name": "networkDemand",
          "type": "publicKey"
        },
        {
          "name": "distributionPool",
          "type": "publicKey"
        },
        {
          "name": "stakingPool",
          "type": "publicKey"
        },
        {
          "name": "minimumStakeTime",
          "type": "i64"
        },
        {
          "name": "minimumStakeAmount",
          "type": "u128"
        },
        {
          "name": "maxDafi",
          "type": "u128"
        },
        {
          "name": "rewardFee",
          "type": "u8"
        },
        {
          "name": "durationInSeconds",
          "type": "i64"
        },
        {
          "name": "owner",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "createUserStakeAccount",
      "accounts": [
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payerAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakingManagerState",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "stakingDatabaseProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingManagerPdaAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "manager_authority"
              }
            ]
          }
        },
        {
          "name": "whitelistAccountStakingDatabase",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "stakingUserAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "user_stake"
              },
              {
                "kind": "arg",
                "type": "publicKey",
                "path": "_user_add"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userAdd",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "addUserStake",
      "accounts": [
        {
          "name": "funder",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "stakingManagerState",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingUserTokenAccountAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingDatabaseProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingDatabaseState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_database_state"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "stakingDatabasePool",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_database_pool"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "stakingUserAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "user_stake"
              },
              {
                "kind": "arg",
                "type": "publicKey",
                "path": "user_add"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "stakingManagerPdaAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "manager_authority"
              }
            ]
          }
        },
        {
          "name": "whitelistAccountStakingDatabase",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "stakePoolProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakePoolVault",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_pool_vault"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "stake_pool_program"
            }
          }
        },
        {
          "name": "stakePoolVaultAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_vault_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "stake_pool_program"
            }
          }
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "userAdd",
          "type": "publicKey"
        },
        {
          "name": "amount",
          "type": "u128"
        }
      ]
    },
    {
      "name": "removeUserStake",
      "accounts": [
        {
          "name": "dafiNetworkDemandProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "networkDemandState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "network_demand"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "dafi_network_demand_program"
            }
          }
        },
        {
          "name": "stakingManagerState",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakePoolProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakePoolVault",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_pool_vault"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "stake_pool_program"
            }
          }
        },
        {
          "name": "stakingDatabaseProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingDatabasePool",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_database_pool"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "stakingDatabaseState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_database_state"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "stakingUserAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "user_stake"
              },
              {
                "kind": "arg",
                "type": "publicKey",
                "path": "user_add"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingManagerPdaAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "manager_authority"
              }
            ]
          }
        },
        {
          "name": "whitelistAccountStakingDatabase",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "distributionPoolProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistAccountDistributionPool",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "distribution_pool_program"
            }
          }
        },
        {
          "name": "distributionPoolVault",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "distribution_pool_vault"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "distribution_pool_program"
            }
          }
        },
        {
          "name": "distributionPoolVaultAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "vault_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "distribution_pool_program"
            }
          }
        },
        {
          "name": "distributionPoolState",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "distribution_pool"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "distribution_pool_program"
            }
          }
        },
        {
          "name": "whitelistAccountStakePool",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "stake_pool_program"
            }
          }
        },
        {
          "name": "stakePoolState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_pool"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "stake_pool_program"
            }
          }
        },
        {
          "name": "stakePoolVaultAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_vault_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "stake_pool_program"
            }
          }
        }
      ],
      "args": [
        {
          "name": "userAdd",
          "type": "publicKey"
        },
        {
          "name": "amount",
          "type": "u128"
        }
      ],
      "returns": "u128"
    },
    {
      "name": "claimReward",
      "accounts": [
        {
          "name": "dafiNetworkDemandProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "networkDemandState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "network_demand"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "dafi_network_demand_program"
            }
          }
        },
        {
          "name": "stakingManagerState",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "instructionSysvarAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingUserTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingDatabaseProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingDatabasePool",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_database_pool"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "stakingDatabaseState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_database_state"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "stakingUserAccount",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "user_stake"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "user_address"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "userAddress",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakingManagerPdaAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "manager_authority"
              }
            ]
          }
        },
        {
          "name": "whitelistAccountStakingDatabase",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "distributionPoolProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "whitelistAccountDistributionPool",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "distribution_pool_program"
            }
          }
        },
        {
          "name": "distributionPoolVault",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "distribution_pool_vault"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "distribution_pool_program"
            }
          }
        },
        {
          "name": "distributionPoolVaultAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "vault_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "distribution_pool_program"
            }
          }
        },
        {
          "name": "distributionPoolState",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "distribution_pool"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "distribution_pool_program"
            }
          }
        }
      ],
      "args": [
        {
          "name": "userAdd",
          "type": "publicKey"
        },
        {
          "name": "partialClaim",
          "type": "bool"
        },
        {
          "name": "amount",
          "type": "u128"
        }
      ],
      "returns": "u128"
    },
    {
      "name": "enableStaking",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "disableStaking",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "enableUnstaking",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "disableUnstaking",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "updateMinimumStakingPeriod",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakingDatabaseProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingManagerPdaAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "manager_authority"
              }
            ]
          }
        },
        {
          "name": "stakingDatabaseState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_database_state"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "whitelistAccountStakingDatabase",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        }
      ],
      "args": [
        {
          "name": "minStakingPeriod",
          "type": "i64"
        }
      ]
    },
    {
      "name": "updateMinimumStakingAmount",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakingDatabaseProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingManagerPdaAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "manager_authority"
              }
            ]
          }
        },
        {
          "name": "stakingDatabaseState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_database_state"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "whitelistAccountStakingDatabase",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        }
      ],
      "args": [
        {
          "name": "minStakingAmount",
          "type": "u128"
        }
      ]
    },
    {
      "name": "updateProgramDuration",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakingDatabaseProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingManagerPdaAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "manager_authority"
              }
            ]
          }
        },
        {
          "name": "stakingDatabaseState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_database_state"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "whitelistAccountStakingDatabase",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        }
      ],
      "args": [
        {
          "name": "newDuration",
          "type": "i64"
        }
      ]
    },
    {
      "name": "extendProgram",
      "accounts": [
        {
          "name": "stakingDatabaseProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "stakingDatabasePool",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "stake_database_pool"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakingManagerPdaAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "manager_authority"
              }
            ]
          }
        },
        {
          "name": "stakingDatabaseState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_database_state"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "whitelistAccountStakingDatabase",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "rebaseEngineProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rebaseEngineState",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "rebase_engine_state"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "rebase_engine_program"
            }
          }
        },
        {
          "name": "whitelistAccountRebaseEngine",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "rebase_engine_program"
            }
          }
        },
        {
          "name": "rebaseAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "rebase_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "rebase_engine_program"
            }
          }
        }
      ],
      "args": [
        {
          "name": "newProgramDuration",
          "type": "i64"
        },
        {
          "name": "newMaxDafi",
          "type": "u128"
        }
      ]
    },
    {
      "name": "updateRewardFees",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakingDatabaseProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingManagerPdaAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "manager_authority"
              }
            ]
          }
        },
        {
          "name": "stakingDatabaseState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_database_state"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "whitelistAccountStakingDatabase",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        }
      ],
      "args": [
        {
          "name": "newReward",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updateMaxDafi",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakingDatabaseProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingManagerPdaAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "manager_authority"
              }
            ]
          }
        },
        {
          "name": "stakingDatabaseState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_database_state"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "whitelistAccountStakingDatabase",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        }
      ],
      "args": [
        {
          "name": "newMaxDafi",
          "type": "u128"
        }
      ]
    },
    {
      "name": "endProgram",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakingDatabaseProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "stakingManagerPdaAuthority",
          "isMut": false,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "manager_authority"
              }
            ]
          }
        },
        {
          "name": "stakingDatabaseState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_database_state"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        },
        {
          "name": "whitelistAccountStakingDatabase",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "whitelist"
              },
              {
                "kind": "account",
                "type": "publicKey",
                "path": "staking_manager_pda_authority"
              }
            ],
            "programId": {
              "kind": "account",
              "type": "publicKey",
              "path": "staking_database_program"
            }
          }
        }
      ],
      "args": []
    },
    {
      "name": "updateNetworkDemand",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newNetworkDemand",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateRebaseEngine",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newRebaseEngine",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateDistributionPool",
      "accounts": [
        {
          "name": "stakingManagerState",
          "isMut": true,
          "isSigner": false,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "type": "string",
                "value": "staking_manager_state"
              }
            ]
          }
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newDistributionPool",
          "type": "publicKey"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "stakingManagerState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "stakingTokenMint",
            "type": "publicKey"
          },
          {
            "name": "database",
            "type": "publicKey"
          },
          {
            "name": "rebaseEngine",
            "type": "publicKey"
          },
          {
            "name": "networkDemand",
            "type": "publicKey"
          },
          {
            "name": "stakingPool",
            "type": "publicKey"
          },
          {
            "name": "distributionPool",
            "type": "publicKey"
          },
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "stakingOn",
            "type": "bool"
          },
          {
            "name": "unstakingOn",
            "type": "bool"
          },
          {
            "name": "initialized",
            "type": "bool"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "Unstaked",
      "fields": [
        {
          "name": "userAdd",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u128",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        },
        {
          "name": "stakeAmount",
          "type": "u128",
          "index": false
        },
        {
          "name": "lastStakingAccumulatedWeight",
          "type": "u128",
          "index": false
        },
        {
          "name": "totalUnclaimed",
          "type": "u128",
          "index": false
        },
        {
          "name": "lastAccumulatedFeeWeight",
          "type": "u128",
          "index": false
        },
        {
          "name": "feeBalance",
          "type": "u128",
          "index": false
        }
      ]
    },
    {
      "name": "RewardDisbursed",
      "fields": [
        {
          "name": "userAdd",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "rewardDisbursed",
          "type": "u128",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        },
        {
          "name": "stakeAmount",
          "type": "u128",
          "index": false
        },
        {
          "name": "lastStakingAccumulatedWeight",
          "type": "u128",
          "index": false
        },
        {
          "name": "totalUnclaimed",
          "type": "u128",
          "index": false
        },
        {
          "name": "lastAccumulatedFeeWeight",
          "type": "u128",
          "index": false
        }
      ]
    },
    {
      "name": "Staked",
      "fields": [
        {
          "name": "userAdd",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "amount",
          "type": "u128",
          "index": false
        },
        {
          "name": "time",
          "type": "i64",
          "index": false
        },
        {
          "name": "stakeAmount",
          "type": "u128",
          "index": false
        },
        {
          "name": "lastStakingAccumulatedWeight",
          "type": "u128",
          "index": false
        },
        {
          "name": "totalUnclaimed",
          "type": "u128",
          "index": false
        },
        {
          "name": "lastAccumulatedFeeWeight",
          "type": "u128",
          "index": false
        },
        {
          "name": "feeBalance",
          "type": "u128",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyInitialized",
      "msg": "Already Initialized"
    },
    {
      "code": 6001,
      "name": "InvalidDiscriminator",
      "msg": "invalid instruction discriminator"
    },
    {
      "code": 6002,
      "name": "InvalidUserAdd",
      "msg": "Different User add in prior instruction"
    },
    {
      "code": 6003,
      "name": "InvalidAmount",
      "msg": "Invalid Amount"
    },
    {
      "code": 6004,
      "name": "InvalidRewardFee",
      "msg": "Invalid Reward Fees"
    },
    {
      "code": 6005,
      "name": "ProgramAlreadyEnded",
      "msg": "ProgramEnded"
    },
    {
      "code": 6006,
      "name": "StakingNotOn",
      "msg": "Staking Not Allowed"
    },
    {
      "code": 6007,
      "name": "InsufficientStakeAmount",
      "msg": "InsufficientStakeAmount"
    },
    {
      "code": 6008,
      "name": "UnstakingOff",
      "msg": "Unstaking Off"
    },
    {
      "code": 6009,
      "name": "InsufficientStakePeriod",
      "msg": "Insufficient Stake Period"
    },
    {
      "code": 6010,
      "name": "InsufficientReward",
      "msg": "Insufficient Reward"
    },
    {
      "code": 6011,
      "name": "NotOwner",
      "msg": "Not an owner"
    },
    {
      "code": 6012,
      "name": "NeverStaked",
      "msg": "Never called add_stake only initialized account"
    },
    {
      "code": 6013,
      "name": "InvalidInstruction",
      "msg": "InvalidInstruction"
    },
    {
      "code": 6014,
      "name": "USERADDMISMATCH",
      "msg": "Initialize UserAddress and subsequent add stake user address not matching"
    },
    {
      "code": 6015,
      "name": "Test2",
      "msg": "Test2"
    },
    {
      "code": 6016,
      "name": "BnConversionError",
      "msg": "Conversion to u128/u64 failed with an overflow or underflow"
    },
    {
      "code": 6017,
      "name": "NumberCastError",
      "msg": "Unable to cast number into BigInt"
    },
    {
      "code": 6018,
      "name": "NumberDownCastError",
      "msg": "Unable to down cast number"
    }
  ]
}
    