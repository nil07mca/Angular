export class UserService {
    activeUsers = ['John', 'Smith', 'Paul'];
    inActiveUsers = ['Mark', 'Ian', 'Jack'];

    setToActive(index: number) {
        this.activeUsers.push(this.inActiveUsers[index]);
        this.inActiveUsers.splice(index, 1);
    }

    setToInactive(index: number) {
        this.inActiveUsers.push(this.activeUsers[index]);
        this.activeUsers.splice(index, 1);
    }
}

