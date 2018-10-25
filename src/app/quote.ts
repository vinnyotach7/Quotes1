export class Quote {
  length: any;
  splice: any;
    constructor(public id: number, public name: string, public description: string, public completeDate: Date) {
        this.showDescription = false;
    }
    public showDescription: boolean;
  push(quote: any): any {
    throw new Error('Method not implemented.');
  }
}
