const fs = require('fs');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('lab-ll-scraper routes', () => {
  // beforeEach(() => {
  //   return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'))
  // });
  it('should be very very true', () => {
    expect(true).toEqual(true);
  });
});
