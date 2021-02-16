const assert = require('assert');
const user = require('./user');


describe('create', () => {
    describe('when input contains valid email and zip', () => {
        it('returns user object', () => {
            const input = {
                email: 'test@example.com',
                zipCode: '40202'
            };
            const output = user.create(input);
            assert.deepStrictEqual(output, { id:1, email: 'test@example.com', zipCode: '40202' });
        });
    });
    describe('when there is no input', () => {
        it('throws an error', () => {
            
        });
    });
    describe('when input contains no email', () => {
        it('throws an error', () => {
            
        });
    });
    describe('when input contains zip code and is invalid', () => {
        it('and the input is false it throws an error', () => {
            
        });
        it('and the input is a word it throws an error', () => {
            const input = {
                email: 'test@example.com',
                zipCode: 'placeholder'
            };
        });
    });
});

describe('read', () => {
});