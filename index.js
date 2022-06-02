const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  Intents.FLAGS.GUILD_MESSAGE_TYPING,
  Intents.FLAGS.DIRECT_MESSAGES,
  Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
  Intents.FLAGS.DIRECT_MESSAGE_TYPING,
  ],
  partials: [
      'CHANNEL', // Required to receive DMs
  ]
});

const MessageChannel = '866524012552388611'; //メッセージチャンネルIDを記載

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message=> {
  // Check if this message is from DM or not
  if (message.author.id != '969986704419221625'){ //botが送信したメッセージが判定
    if (message.channel.type === 'DM') { //メッセージがDMかどうか判定
      CheckMessage(message)
    }
  }
});

async function CheckMessage(msg){
  
  console.log(msg.content)
  let result = msg.content.indexOf("!question:");
  if(result != -1){
    let content = msg.content.replace("!question:", "質問 : ");
    msg.reply('質問を送信しました :)');
    client.channels.cache.get(MessageChannel).send(content)
  }
  else if (result = -1){
    msg.reply('メッセージコマンドが含まれていません\n 質問をするには `!question:` を先頭に付けてください :)');
  }
}




client.login(''); //pushするときは必ず消すこと