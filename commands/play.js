module.exports = {
    name: 'play',
    description: 'Play a song',
    execute(message, args, client, distube) {
        distube.play(message, args.join(' '))
    }
}
