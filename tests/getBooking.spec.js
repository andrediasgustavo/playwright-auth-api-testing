const { test, expect } = require('@playwright/test');

const payload = require('../fixtures/booking.json'); 

test.describe('Get Booking', () => {

    let bookingid = '';

    test.beforeEach('Create Booking', async ({ request }) => {
        const response = await request.post('booking', {
            headers: {
                'Content-Type': 'application/json'
            },
            data: payload.createPayload
        });

        expect(response.status()).toBe(200);
        const body = await response.json();
        bookingid = body.bookingid;
    });

    test('should get booking details successfully by id', async ({ request }) => {
        const response = await request.get(`booking/${bookingid}`, {
            headers: {
                'Accept': 'application/json'
            }
        });

        expect(response.status()).toBe(200);
        const body = await response.json();

        expect(body).toMatchObject(payload.createPayload);
        
        expect(body).toHaveProperty('firstname');
        expect(body).toHaveProperty('lastname');
        expect(body).toHaveProperty('totalprice');
        expect(body).toHaveProperty('depositpaid');
        expect(body).toHaveProperty('bookingdates');
        expect(body).toHaveProperty('additionalneeds');
    });

    test('should return 404 when trying to get a non-existent booking', async ({ request }) => {
        const response = await request.get('booking/99999999', {
            headers: {
                'Accept': 'application/json'
            }
        });

        expect(response.status()).toBe(404);
    });

    test('should return 418 when Accept header is incorrectly set', async ({ request }) => {
        const response = await request.get(`booking/${bookingid}`, {
            headers: {
                'Accept': 'text/plain'
            }
        });

        expect(response.status()).toBe(418);
    });

});