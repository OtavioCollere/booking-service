import { AbstractDocument } from "@app/common/database/abstract.schema";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ versionKey : false })
export class ReservationDocument extends AbstractDocument {
  
  @Prop({ required : true })
  userId : string

  @Prop({ required : true })
  placeId : string

  @Prop()
  invoiceId : string

  @Prop()
  startDate : Date
  
  @Prop()
  endDate : Date

  @Prop()
  timestamp : Date  
}

export const ReservationSchema = SchemaFactory.createForClass(ReservationDocument)