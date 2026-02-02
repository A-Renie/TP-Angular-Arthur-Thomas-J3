import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    // Propriété privée contenant les données de test
    private mockUsers: User[] = [
        { id: 1, name: 'Alice', email: 'alice@test.com', role: 'Admin' },
        { id: 2, name: 'Bob', email: 'bob@test.com', role: 'User' },
        { id: 3, name: 'Charlie', email: 'charlie@test.com', role: 'Guest' },
        { id: 4, name: 'Diana', email: 'diana@test.com', role: 'User' },
        { id: 4, name: 'Arthur', email: 'retur@test.com', role: 'User' }
    ];

    constructor() { }

    // Méthode qui retourne un Observable de User[]
    getUsers(): Observable<User[]> {
        return of(this.mockUsers);
    }
}