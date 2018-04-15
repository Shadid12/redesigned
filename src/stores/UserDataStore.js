import { observable } from 'mobx';

export class UserDataStore {
    @observable userObject = {
        name: '',
        img: '',
        translation_token: ''
    }

    @observable loggedin =  false;
} 

export default new UserDataStore();