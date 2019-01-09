import {template} from 'meteor/templating';

import Items from '../api/item.js';

import './body.html';

Template.body.helpers({
    items(){
        return Items.find({});
    }
});

Template.body.events({
    'click .test':(event) => {
        console.log('Hola papu');
    }
});