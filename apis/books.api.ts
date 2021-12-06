import { HTTPDataSource } from "apollo-datasource-http";

export class BooksAPI extends HTTPDataSource {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    getBooks() {
        return this.get('/todos').then((res: any) => {
            return res?.body?.map(item => {
                return {
                    title: item.title ?? null,
                    author: 'Anh Quyen'

                }
            });
        }).catch(err => {
            console.log(err);
        })
    }
}