
  import { Schema,Prop, SchemaFactory } from "@nestjs/mongoose";
  @Schema({versionKey:false})
  export class Sol {
    @Prop({
      type: String,
      required: true,
      enum: ['Unstaked','RewardDisbursed','Staked',]
    })
    event:string
  
    @Prop()
    userAdd:string
        
    @Prop()
    amount:string
        
    @Prop()
    time:string
        
    @Prop()
    stakeAmount:string
        
    @Prop()
    lastStakingAccumulatedWeight:string
        
    @Prop()
    totalUnclaimed:string
        
    @Prop()
    lastAccumulatedFeeWeight:string
        
    @Prop()
    feeBalance:string
        
    @Prop()
    rewardDisbursed:string
        
    @Prop()
    tx_hash:string
    }
export const SolSchema = SchemaFactory.createForClass(Sol);
    