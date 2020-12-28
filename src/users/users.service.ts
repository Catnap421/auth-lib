import { Injectable } from '@nestjs/common';

export type User = any;

// Todo: password bcrypt

@Injectable()
export class UsersService {
    private readonly users = [
        {
            userId: 1,
            username: 'catnap',
            password: 'catnap'
        },
        {
            userId: 2,
            username: 'wh',
            password: 'gusdn'
        }
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
