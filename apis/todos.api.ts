import { HTTPDataSource } from "apollo-datasource-http";

export class TodosAPI extends HTTPDataSource {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    getTodos() {
        return this.get('/todos').then((res: any) => {
            return res?.body ?? [];
        }).catch(err => {
            console.log(err);
        })
    }
}