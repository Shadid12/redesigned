import { observable } from 'mobx';

export class UserDataStore {
    @observable userObject = {
        name: '',
        img: '',
        translation_token: ''
    }
    @observable current_room = 'RoomA';
    @observable loggedin =  false;
    @observable data = [];
} 

export default new UserDataStore();