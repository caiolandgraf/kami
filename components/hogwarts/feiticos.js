module.exports = async (client, Discord, message, args, db, config) => {
    let usuario = message.author;
    let avatar = usuario.displayAvatarURL({ dynamic: true }).replace("webp", "png")


    let init = new Discord.MessageEmbed()
        .setTitle("**ðâ¯âãMÃGIAS E BRUXARIASãââ®ð**")
        .setDescription(`
> â **accio**
> â **aguamenti**
> â **alarte-ascendare**
> â **alohomora**
> â **aparatar**
> â **aplaudir**
> â **appare-vestigium**
> â **arania-exumai**
> â **arresto-momentum**
> â **ascendio**
> â **avada-kedavra**
> â **bombarda**
> â **cabeca-de-bolha**
> â **colloportus**
> â **confringo**
> â **confundus**
> â **cruciatus**
> â **danger-balls**
> â **diminuendo**
> â **energy-explosion**
> â **engordio**
> â **episkey**
> â **estupefaca**
> â **expecto-patronum**
> â **expelliarmus**
`)
        .setImage("https://i.pinimg.com/originals/30/d8/99/30d899232dfe254a407a954880f424e4.gif")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(config.footer2, avatar)
        .setColor("303136")
        .setTimestamp()

    message.channel.send(init).then(msg => {
        msg.react('1ï¸â£').then(r => {
            msg.react('2ï¸â£').then(r => {
                msg.react('3ï¸â£').then(r => {
                    })
                })
            })

        const OneFilter = (reaction, user) => reaction.emoji.name === '1ï¸â£' && user.id === message.author.id;
        const TwoFilter = (reaction, user) => reaction.emoji.name === '2ï¸â£' && user.id === message.author.id;
        const ThreeFilter = (reaction, user) => reaction.emoji.name === '3ï¸â£' && user.id === message.author.id;

        const One = msg.createReactionCollector(OneFilter);
        const Two = msg.createReactionCollector(TwoFilter);
        const Three = msg.createReactionCollector(ThreeFilter);

        One.on('collect', r2 => {
            r2.users.remove(message.author.id)
            msg.edit(init) 
        })

        Two.on('collect', r2 => {
            r2.users.remove(message.author.id)
            let embed = new Discord.MessageEmbed()
        .setTitle("**ðâ¯âãMÃGIAS E BRUXARIASãââ®ð**")
        .setDescription(`
> â **expulso**             
> â **feiticos**            
> â **finestra**            
> â **finite-incantatem**   
> â **flower-explosion**    
> â **flower-protection**   
> â **fogomaldito**         
> â **gemino**              
> â **ghosting**            
> â **hablawale**           
> â **immobilus**           
> â **imperius**            
> â **incarcerous**         
> â **infiri**              
> â **lumos**               
> â **lumos-maxima**        
> â **lumos-solem**         
> â **morsmordre**          
> â **nightmare-mutation**  
> â **nox**                
> â **obliviate**           
> â **oppugno**             
> â **partis-temporus**     
> â **patronus-maxima**
> â **periculum**
`)
        .setImage("https://i.pinimg.com/originals/53/4a/4f/534a4fcf7f12b6e3b1fcfeb46395f776.gif")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(config.footer2, avatar)
        .setColor("303136")
        .setTimestamp()
        msg.edit(embed)
        })

        Three.on('collect', r2 => {
            r2.users.remove(message.author.id)
            let embed = new Discord.MessageEmbed()

        .setTitle("**ðâ¯âãMÃGIAS E BRUXARIASãââ®ð**")
        .setDescription(`
> â **petrificus-totalus**
> â **piertotum-locomotor**
> â **pirraca**
> â **protego-diabolica**
> â **protego**
> â **protego-maxima**
> â **purple-moon**
> â **reducto**
> â **relashio**
> â **rennervate**
> â **reparus**
> â **revelio**
> â **rictusempra**
> â **ridikullus**
> â **sectumsempra**
> â **senpersortia**
> â **taca-das-casas**
> â **take-books**
> â **time-pull**
> â **ventus**
> â **veraverto**
> â **vipera-evanesca**
> â **vulnera-sanetur**
> â **wingardium-leviosa**
`)
        .setImage("https://media1.tenor.com/images/dd597aa560e237f1af7d92c1b1d2a366/tenor.gif")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter(config.footer2, avatar)
        .setTimestamp()
        .setColor("303136")
        msg.edit(embed)
    })

    })
}