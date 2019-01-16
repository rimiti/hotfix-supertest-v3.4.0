const test = require('ava');
const express = require('express');
const request = require('supertest');

test('Should success.', async t => {
    const app = express();
    await request(app)
        .post("/api/someurl")
        .send({data: "something invalid"})
        .expect("Content-type", /html/)
        .expect(404);
    t.is(true, true);
});
