//user data model
export class User {
    constructor(
        public id?: number,
        public name?: string,
        public age? : number,
        public image? : string,
        public preferences? : { 
            color? : string,
            food? : string, 
        }
    ){}
}