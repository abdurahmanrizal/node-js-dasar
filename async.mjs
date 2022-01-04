function samplePromise() {
    return Promise.resolve('Abdurahman')
}

const name = await samplePromise();
console.info(name)