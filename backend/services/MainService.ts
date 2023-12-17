import { Document, Model, FilterQuery, UpdateQuery } from "mongoose";
import { IUserModal } from "../database/models/User";


class MainService {
  constructor(protected model: Model<Document>) {}

  load(): Promise<Document[]> {
    return this.model.find().exec();
  }

  async insert(obj: object): Promise<Document> {
    return await this.model.create(obj);
  }

  async removeTo(property: string, value: any): Promise<any> {
    const filter: FilterQuery<Document> = { [property]: value };
    return this.model.deleteOne(filter);
  }

  async update(id: string, obj: UpdateQuery<Document>): Promise<any> {
    return this.model.findByIdAndUpdate(id, obj);
  }

  async find(id: string): Promise<Document | null> {
    return this.model.findById(id).exec();
  }

  async findBy<T extends keyof IUserModal>(property: T, value: IUserModal[T]): Promise<Document | null> {
    const filter: FilterQuery<Document> = { [property]: value };
    return this.model.findOne(filter).exec();
  }

  async delete(id: string): Promise<any> {
    return this.model.findByIdAndDelete(id);
  }

  async query(obj: object): Promise<Document[]> {
    return this.model.find(obj).exec();
  }
}

export default MainService;
