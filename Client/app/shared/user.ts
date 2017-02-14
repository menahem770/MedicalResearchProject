
export class User{
    userID: number;
    username: string;
    fullName: string;
    emailAddress: string;
    contactInfo: string;
    authLevel: number;
    dateOfBirth: Date;

    fromJSON(json:Object) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    }
}