const chai = require('chai'); // Importer Chai
const chaiHttp = require('chai-http'); // Importer Chai HTTP
const server = require('../server'); // Importer le serveur principal

chai.use(chaiHttp); // Appliquer chai-http à chai
const expect = chai.expect; // Définir l'assertion

// Tests pour les routes API
describe('API Articles', () => {
    it('GET /api/articles - devrait retourner un tableau', (done) => {
        chai.request(server)
            .get('/api/articles')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done(); // Terminer le test
            });
    });
});
