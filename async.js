function samplePromise() {
    return Promise.resolve('Abdurahman')
}

async function run() {
    const name = await samplePromise()
    console.info(name)
}

run()

