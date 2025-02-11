export class CrudRepository{
    constructor(private readonly model:any){}

    async create(data : Record<string, any>){
        return await this.model.create(data);
    }


}