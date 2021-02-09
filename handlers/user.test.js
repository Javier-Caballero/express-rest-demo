const assert = require('assert');
const user = require('./user');


describe('create', () => {
    describe('when input contains valid email and zip', () => {
        it('returns user object', () => {
            const input = {
                email: 'test@example.com',
                zipcode: '40202'
            };
            const output = user.create(input);
            assert.deepEqual(output, { id:1, email: 'test@example.com', zipcode: '40202' });
        });
    });
    describe('when input contains no email', () => {
        it('throws an error', () => {
            
        });
    });
    describe('when input contains zip code and is invalid', () => {
        it('throws an error', () => {
            
        });
    });
});

describe('read', () => {
});