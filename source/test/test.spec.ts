import { server } from './server';
import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';

chai.use(chaiHttp);

describe('First test', 
  () => { 
    it('should return 200', (done) => { 
      chai.request(server)
      .get('/characters')
      .end((err, res) => {
        chai.expect(res.status).to.eql(200)
        done();
      });
  }); 
});

describe('Second test', 
  () => { 
    it('should return 200', (done) => { 
      chai.request(server)
      .get('/characters/1011334')
      .end((err, res) => {
        chai.expect(res.status).to.eql(200)
        done();
      });
  }); 
});

describe('Thirth test', 
  () => { 
    it('should return 200', (done) => { 
      chai.request(server)
      .get('/comics')
      .end((err, res) => {
        chai.expect(res.status).to.eql(200)
        done();
      });
  }); 
});

describe('Fourth test', 
  () => { 
    it('should return 200', (done) => { 
      chai.request(server)
      .get('/comics/82967')
      .end((err, res) => {
        chai.expect(res.status).to.eql(200)
        done();
      });
  }); 
});

describe('Fifth test', 
  () => { 
    it('should return 200', (done) => { 
      chai.request(server)
      .get('/series')
      .end((err, res) => {
        chai.expect(res.status).to.eql(200)
        done();
      });
  }); 
});

describe('Sixth test', 
  () => { 
    it('should return 200', (done) => { 
      chai.request(server)
      .get('/series/31445')
      .end((err, res) => {
        chai.expect(res.status).to.eql(200)
        done();
      });
  }); 
});