export class Follow {
    id: number;
    userId: number;
    followId: number;

    constructor(userId, followId){
        this.userId = userId;
        this.followId = followId;
    }
}