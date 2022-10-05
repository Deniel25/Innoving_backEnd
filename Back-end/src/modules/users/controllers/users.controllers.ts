import { Request, Response } from 'express';
import { User } from '../../../entities/user';
import UserRepository from './../../../persistence/repositories/user.repository';

class UserController {


    public searchUsers(request: Request, response: Response) {
        console.log('search');
        UserRepository.searchUsers(<string> request.query.text).then(user => {
            response.status(200).json({status: true, data: user});
        }, error => {
            response.status(404).json({status: false});
        });
    }

    public getUser(request: Request, response: Response) {

        UserRepository.findUser(+request.params.id).then(user => {
            response.status(200).json({status: true, data: user});
        }, error => {
            response.status(404).json({status: false});
        });
    }

    public getUsers(request: Request, response: Response) {

        UserRepository.findUsers().then(users => {
            response.status(200).json({status: true, data: users});
        }, error => {
            response.status(404).json({status: false});
        });
    }

    public addUser(request: Request, response: Response) {

        if (request.body.lastName == "" || request.body.lastName == null || request.body.lastName == undefined) {
            
            response.status(400).json({status: false, message: 'El primer nombre es requerido'});
        }

        let user = new User(request.body.firstName, request.body.lastName);

        UserRepository.newUser(user).then(users => {
            response.status(201).json({status: true, data: users});
        }, error => {
            response.status(400).json({status: false});
        });
    }
}

export default new UserController();