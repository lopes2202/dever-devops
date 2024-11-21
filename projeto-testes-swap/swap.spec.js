const request = require('supertest');

test('Deve visualizar informações de cadastro, quando buscar por uma pessoa existente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/people/1')
    expect(resposta.status).toBe(200)
    expect(resposta.body.films).toBeDefined()
    expect(resposta.body.vehicles.length).toBeGreaterThan(0)
    expect(resposta.body.name).toBe('Luke Skywalker')

    console.log(resposta.status)
    console.log(resposta.body)
})

test('Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente', async() => {
    const resposta = await request('https://swapi.dev').get('/people/9999')
    console.log(resposta.status)
    console.log(resposta.body)

});


it('Deve recuperar o planeta de ID 1', async () => {
    const resposta = await request('https://swapi.dev').get('/api/planets/1');
    console.log(resposta.status);
    console.log(resposta.body);
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('Tatooine');
});


it('Deve listar todos os planetas', async () => {
    const resposta = await request('https://swapi.dev').get('/api/planets');
    console.log(resposta.status);
    console.log(resposta.body);
    expect(resposta.status).toBe(200);
    expect(resposta.body.results.length).toBeGreaterThan(0);  
});

it('Deve recuperar a nave de ID 2', async () => {
    const resposta = await request('https://swapi.dev').get('/api/starships/2');
    console.log(resposta.status);
    console.log(resposta.body);
    expect(resposta.status).toBe(200);
    expect(resposta.body.name).toBe('CR90 corvette');
});


it('Deve listar todas as naves', async () => {
    const resposta = await request('https://swapi.dev').get('/api/starships');
    console.log(resposta.status);
    console.log(resposta.body);
    expect(resposta.status).toBe(200);
    expect(resposta.body.results.length).toBeGreaterThan(0);  
});

it('Deve recuperar o filme de ID 1', async () => {
    const resposta = await request('https://swapi.dev').get('/api/films/1');
    console.log(resposta.status);
    console.log(resposta.body);
    expect(resposta.status).toBe(200);
    expect(resposta.body.title).toBe('A New Hope');
});


it('Deve listar todos os filmes', async () => {
    const resposta = await request('https://swapi.dev').get('/api/films');
    console.log(resposta.status);
    console.log(resposta.body);
    expect(resposta.status).toBe(200);
    expect(resposta.body.results.length).toBeGreaterThan(0);  
});


it('Deve retornar erro 404 para a rota inexistente "heroes"', async () => {
    const resposta = await request('https://swapi.dev').get('/api/heroes');
    console.log(resposta.status);
    expect(resposta.status).toBe(404);
});


it('Deve recuperar o elenco do filme de ID 1 (A New Hope)', async () => {
    const resposta = await request('https://swapi.dev').get('/api/films/1');
    console.log(resposta.status);
    console.log(resposta.body.characters);
    expect(resposta.status).toBe(200);
    expect(resposta.body.characters.length).toBeGreaterThan(0);  
});
