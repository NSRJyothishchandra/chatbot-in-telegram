var TelegramBot = require('node-telegram-bot-api'); //importing the package
var token = 'your api key token';
var bot = new TelegramBot(token, {polling: true});
 bot.on('message',function(msg){
 bot.onText(/\/start/, (msg) => {
 bot.sendMessage(msg.chat.id, "Welcome"+msg.chat.first_name);
console.log(msg.chat.first_name)
 });
var sendpic ="telegram logo"
if(msg.text.indexOf(sendpic)===0){
	bot.sendPhoto(msg.chat.id,"https://egoodwater.com/egoodwater/wp-content/uploads/2018/08/telegram-logo.png",{caption : "Here we go ! \nThis is the Telegram application logo "} );    
}

var contact="contact number";
if(msg.text.indexOf(contact)===0){
	bot.sendContact(msg.chat.id,your number,msg.chat.first_name)
}
  var location = "facebook";
    if (msg.text.indexOf(location) === 0) {
        bot.sendLocation(msg.chat.id,"https://www.facebook.com/");
 }
 var location = "location";
    if (msg.text.indexOf(location) === 0) {
        bot.sendLocation(msg.chat.id,44.97108, -104.27719);
 }



 if((msg.text).toLowerCase()=="youtube"){
 bot.sendMessage(msg.chat.id,'The below link is the official link of youtube platform: https://www.youtube.com');

 }

else if((msg.text).toLowerCase()=="facebook")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of facebook: https://www.facebook.com');

else if((msg.text).toLowerCase()=="internshala")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of internshala website: https://www.internshala.com');

else if((msg.text).toLowerCase()=="codinza")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of codinza platform: https://codinza.com');

else if((msg.text).toLowerCase()=="instagram")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of instagram: https://www.instagram.com/');

else if((msg.text).toLowerCase()=="gmail")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of gmail: https://www.google.com/gmail');

else if((msg.text).toLowerCase()=="blogger")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of blogger website: http://www.blogger.com/');

else if((msg.text).toLowerCase()=="apple")
	bot.sendMessage(msg.chat.id,'The below link is the official link of apple: http://apple.com/');

else if((msg.text).toLowerCase()=="microsoft")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of microsoft: http://microsoft.com/');

else if((msg.text).toLowerCase()=="amazon")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of amazon: http://amazon.com/');

else if((msg.text).toLowerCase()=="slideshare")
	bot.sendMessage(msg.chat.id,'The below link is the official link of slideshare: http://slideshare.net/');

else if((msg.text).toLowerCase()=="livejournal")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of livejournal: http://www.livejournal.com/');

else if((msg.text).toLowerCase()=="newsweek")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of newsweek: http://newsweek.com/');

else if((msg.text).toLowerCase()=="academia")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of academia:http://academia.edu/');

else if((msg.text).toLowerCase()=="quora")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of quora: http://quora.com/');

else if((msg.text).toLowerCase()=="gamespot")
  	bot.sendMessage(msg.chat.id,'The below link is the official link of gamespot:  http://gamespot.com/'); 

 else
  {

  	if (msg.text.toString().toLowerCase()=="thank you") 
             bot.sendMessage(msg.chat.id, "you are always welcome");

     
    if (msg.text.toString().toLowerCase()=="bye!") 
            bot.sendMessage(msg.chat.id, "hope to see you soon :)");


 	if((msg.text).toLowerCase()=="hi")
  	{
	bot.sendMessage(msg.chat.id, 'Hello!'+msg.chat.first_name);
	bot.sendMessage(msg.chat.id, 'How can I help you?', {
       "reply_markup": 
       {
                   "keyboard": [["want some official links"],["Telegram logo","facebook"],["contact number","location"]]
        }   });
    }

    else if((msg.text).toLowerCase()=="want some official links")
    {
    	bot.sendMessage(msg.chat.id, 'Yaah, Sure...');
    bot.sendMessage(msg.chat.id, 'please enter the website name you want link for..');
    }
  }

 })

