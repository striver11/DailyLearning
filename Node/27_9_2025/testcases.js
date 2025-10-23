function add(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

module.exports = { add, divide };



const { add, divide } = require('../src/math');

describe("Math functions", () => {
  test("adds two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});


const express = require('express');
const app = express();
app.use(express.json());

app.get('/sum', (req, res) => {
  const { a, b } = req.query;
  res.json({ result: Number(a) + Number(b) });
});

module.exports = app;



const request = require('supertest');
const app = require('../app');
const { mock } = require('node:test');
const { networkInterfaces } = require('os');

describe('GET /sum', () => {
  test('should return correct sum', async () => {
    const res = await request(app).get('/sum?a=2&b=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(5);
  });
});



npm install --save-dev jest

"scripts": {
  "test": "jest"
}

npm test


mock
nock 

