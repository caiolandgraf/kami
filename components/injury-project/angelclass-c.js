module.exports = async (client, Discord, message, args, db, config) => {
    let avatar = message.author.displayAvatarURL({ dynamic: true }).replace("webp", "png")
    let usuario1 = message.mentions.users.first();
    if (!usuario1) usuario1 = null;

    let msg = "";

    if (usuario1 !== null) {
        msg = `${message.author} ativou **ANGELCLASS C** em ${usuario1}`;
    } else {
        msg = `${message.author} usou **ANGELCLASS C**`;
    }

    let embed = new Discord.MessageEmbed()
        .setColor("303136")
        .setDescription(msg)
        .setImage("https://data.whicdn.com/images/151037525/original.gif")
        .setFooter(config.footer3, avatar)
        .setTimestamp()

    const m = await message.channel.send("Carregando...")
    m.edit(``, embed)
}