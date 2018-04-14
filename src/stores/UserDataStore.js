import { observable } from 'mobx';

export class UserDataStore {
    @observable userObject = {
        name: '',
        img: ''
    }

    @observable loggedin =  false;
} 

export default new UserDataStore();