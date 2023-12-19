import { Document, Model, FilterQuery, UpdateQuery } from "mongoose";
import { IUserModal } from "../database/models/User";

class MainService<M> {
  constructor(protected modal: Model<Document>) {}

  load(): Promise<Document[]> {
    return this.modal.find();
  }

  async insert(obj: object): Promise<Document> {
    return await this.modal.create(obj);
  }

  async removeTo<T extends keyof M>(property: T, value: any): Promise<any> {
    const filter: FilterQuery<Document> = { [property]: value };
    return this.modal.deleteOne(filter);
  }

  async update(id: string, obj: UpdateQuery<Document>): Promise<any> {
    return this.modal.findByIdAndUpdate(id, obj);
  }

  async find(id: string): Promise<Document | null> {
    return this.modal.findById(id);
  }

  async findBy<T extends keyof M>(property: T, value: any): Promise<Document | null> {
    const filter: FilterQuery<Document> = { [property]: value };
    return this.modal.findOne(filter);
  }

  async delete(id: string): Promise<any> {
    return this.modal.findByIdAndDelete(id);
  }

  async query(obj: object): Promise<Document[]> {
    return this.modal.find(obj);
  }
}

export default MainService;
