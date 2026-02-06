import { Injectable, Logger } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { UserDocument } from "./models/user.schema"
import type { Model } from "mongoose"
import { AbstractRepository } from "@app/common"

@Injectable()
export class UsersRepository extends AbstractRepository<UserDocument> {
  protected logger = new Logger(UsersRepository.name)
  
  constructor(
    @InjectModel(UserDocument.name) userModel : Model<UserDocument>
  ) {
    super(userModel)
  }

}