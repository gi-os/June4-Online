

var Discordie = require("discordie");
var Events = Discordie.Events;
var client = new Discordie();

//version
var version = "v1.4.25";
//users name
var owner = "Giovanni Lupo";
var ownerwake = "gio"
var ownernick = "Gio"
var ownerusername = "@Gi-OS"
//company
var co = "Gi-OS"
//Bot's Name
var wake = "june";
var nick = "June";
var name = "June4";
//other vars are somewhere else in the code (sorry! it only works there!)
client.connect({
	token: "Mjg2Mjg4MjE0OTI5NTcxODQw.C5eiPg.-Q2fmuIV_34LLCt87KeMFI8uraQ"
});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
	console.log(client.User.username + "4 is now awake!");
	//game running
	client.User.setGame("Ask me for Help");
});
client.Dispatcher.on(Events.MESSAGE_CREATE, e => {

	//Hello
	if (e.message.content.toLowerCase() == wake + " hello") {
		e.message.channel.sendMessage("Hi, its good to see you!");

		//Status
	} else if (e.message.content.toLowerCase().startsWith(wake + " stat")) {
		e.message.channel.sendMessage("", false, {
			color: 0xf441c4,
			author: {

				name: wake + "4 Status Menu"
			},

			fields: [{
				name: wake + "4" + version,
				value: "Database: Connected \nServers: Running\nPersonality: Online\n"+ name +": Ready!"

			}],
			footer: {
				text: "Developed by "+co+" inc. "
			}
		});

		//about
	} else if (e.message.content.toLowerCase().startsWith(wake + " about")) {
		e.message.channel.sendMessage("", false, {
			color: 0x30bdff,
			author: {

				name: "About me:"
			},

			fields: [{
				name: "I'm "+ name +" " + version + ",",
				value: "Hi i'm "+ nick +", " + owner + "'s personal assistant, but I can still help you out!  Do you need any help today?'"

			}],
			footer: {
				text: "Developed by "+co+" inc "
			}
		});

		//Wake
	} else if (e.message.content.toLowerCase() == wake + " wake") {
		e.message.channel.sendMessage("I'm awake!");

		//Boot
	} else if (e.message.content.toLowerCase() == wake + " boot") {
		e.message.channel.sendMessage("", false, {
			color: 0x8ff442,
			author: {

				name: nick + "4 Boot Menu"
			},

			fields: [{
				name: "Good Morning!",
				value: "-Game Name set. \n-Functions ready. \n-Conection to "+owner+" found.\n-Personality Installed \n-" + version

			}],
			footer: {
				text: " - "+ name +" built by "+co+" ©2017 "
			}
		});

		//VARS---------------------------------------------------------------

		function allvar() {
			var note = e.message.content;
			var ownerid = client.Users.get("279447694240382977");
			var iambluid = client.Users.get("132960971231723520");
		}
		//VARS END(idk why it has to be here)-------------------------------------

		//tell owner
		allvar();
	} else if (e.message.content.toLowerCase().startsWith(wake + " tell "+ownerwake)) {
		authorID = e.message.member;

		e.message.channel.sendMessage("OK, I have notified "+ownernick, false, {
			color: 0x30bdff,
			author: {

				name: ""
			},

			fields: [{
				name: "Message Attached Below",
				value: e.message.content
			}],
			footer: {
				text: " - It seemed important, "+ nick
			}
		});

		client.Users.get("279447694240382977").openDM().then(function(dm) {
			dm.sendMessage("<@" + e.message.member + ">" + " has sent you a message.", false, {
				color: 0x30bdff,
				author: {

					name: ""
				},

				fields: [{
					name: e.message.content,
					value: "⠀"
				}],
				footer: {
					text: " - It seemed important, "+ nick
				}

			});
		});

		//note
	} else if (e.message.content.toLowerCase().startsWith(wake + " note")) {
		e.message.channel.sendMessage("", false, {
			color: 0xf4aa42,
			author: {

				name: " "
			},

			fields: [{
				name: "A note has been made!",
				value: "⠀"
			}],
			footer: {
				text: " - I sent it to you, "+ nick
			}
		});

		//open notes
	} else if (e.message.content.toLowerCase().startsWith(wake + " check note")) {

		e.message.channel.sendMessage("", false, {
			color: 0x30bdff,
			author: {

				name: "Looking Up notes..."
			},

			fields: [{
				name: "Please Wait",
				value: "It will take a few moments."
			}],
			footer: {
				text: " - I'm looking it up for you, "+ nick
			}
		});

		//thanks
	} else if (e.message.content.toLowerCase().includes("thank")) {
		if (e.message.content.toLowerCase().includes(wake + "")) {
			e.message.channel.sendMessage("Anytime!");
		} else {}

		//help menu
	} else if (e.message.content.includes(wake + " help")) {
		e.message.channel.sendMessage("", false, {
			color: 0x30bdff,
			author: {

				name: name + " Help Menu"
			},

			fields: [{
				name: "Commands",
				value: "-June Help\t\"Opens Help Menu\" \n-"+ nick+" Status\t\""+nick+" gives status on systems\" \n-"+nick+" Boot\t\"Opens Boot Menu\"\n-"+nick+" Tell "+ownernick+" (XXX)\t\""+nick+" sends message to "+ownerusername+"\"\n-"+nick+" note (XXX)\t\""+nick+" sends you a note.\"\n-"+nick+" Terminate\t\"Force shut down of "+nick+" (only owner can use this)\"\n-"+ nick
				+ " Reboot\t\"reboots "+ nick+ " incase of errors (only owner can use this)\"\n-June Disconnect\t\"Disconnects "+nick+" from database (only owner can use this)\""

			}],
			footer: {
				text: "Extras: "+nick+" hello/"+nick+" wake/Thanks "+nick
			}
		});

		//test
	} else if (e.message.content.toLowerCase().includes(wake + " test")) {
		client.Dispatcher.on("PRESENCE_UPDATE", e => {
		    console.log("Something!");
		});

		//alarm users
	} else if (e.message.content.toLowerCase().includes(wake + " alarm")) {

		//TERMINATE COMMANDS
	} else if (e.message.content.toLowerCase().startsWith(wake + " disconnect")) {
		if (e.message.author == client.Users.get("279447694240382977")) {
			e.message.channel.sendMessage("", false, {
				color: 0xf44242,
				author: {

					name: name +" is now disconnecting"
				},

				fields: [{

					value: "I enjoyed our conversation!",
					name: "Goodbye"
				}],
				footer: {
					text: " - "+ name +" built by "+co+" ©2017 "
				}
			});
			console.log(client.User.username + "4 is now being disconnected.");
			setTimeout(function() {
				client.disconnect({
					token: "Mjg2Mjg4MjE0OTI5NTcxODQw.C5eiPg.-Q2fmuIV_34LLCt87KeMFI8uraQ"
				});

			}, 500);
			setTimeout(function() {
				console.log(client.User.username + "4 is now disconnected.");
			}, 1000);

		} else {
			e.message.channel.sendMessage("", false, {
				color: 0xf44242,
				author: {

					name: "You do not have permission to run this command"
				},

				fields: [{

					value: "The process will not continue",
					name: "I\'Only "+ownerusername+" can use this command."
				}],
				footer: {
					text: " - "+ name +" built by "+co+" ©2017 "
				}
			});
		}
	} else if (e.message.content.toLowerCase().startsWith(wake + " reboot")) {
		if (e.message.author == client.Users.get("279447694240382977")) {
			e.message.channel.sendMessage("", false, {
				color: 0xf44242,
				author: {

					name: name +" is now rebooting."
				},

				fields: [{

					value: "The reboot process will take a few seconds.",
					name: "I\'ll see you soon!"
				}],
				footer: {
					text: " - "+ name +" built by "+co+" ©2017 "
				}
			});
			console.log(client.User.username + "4 is now rebooting.");
			setTimeout(function() {

				client.disconnect({
					token: "Mjg2Mjg4MjE0OTI5NTcxODQw.C5eiPg.-Q2fmuIV_34LLCt87KeMFI8uraQ"
				});

			}, 500);
			setTimeout(function() {
				client.connect({
					token: "Mjg2Mjg4MjE0OTI5NTcxODQw.C5eiPg.-Q2fmuIV_34LLCt87KeMFI8uraQ"
				});
				e.message.channel.sendMessage("", false, {
					color: 0x8ff442,
					author: {

						name: name +" Boot Menu"
					},

					fields: [{
						name: "Good Morning!",
						value: "-Game Name set. \n-Functions ready. \n-Conection to "+owner+" found.\n-Personality Installed\n-" + version

					}],
					footer: {
						text: " - "+ name +" built by "+co+" ©2017 "
					}
				});
			}, 10000);

		} else {
			e.message.channel.sendMessage("", false, {
				color: 0xf44242,
				author: {

					name: "You do not have permission to run this command"
				},

				fields: [{

					value: "The process will not continue",
					name: "Only "+ownerusername+" can use this command."
				}],
				footer: {
					text: " - "+ name +" built by "+co+" ©2017 "
				}
			});
		}
	} else if (e.message.content.toLowerCase().startsWith(wake + " terminate")) {
		if (e.message.author == client.Users.get("279447694240382977")) {
			e.message.channel.sendMessage("", false, {
				color: 0xf44242,
				author: {

					name: ""+ name +" is now force closing"
				},

				fields: [{

					value: "Will I Dream?",
					name: "Goodnight"
				}],
				footer: {
					text: " - "+ name +" built by "+co+" ©2017 "
				}
			});
			console.log(client.User.username + "4 is now closing.");
			setTimeout(function() {
				killswitch();
			}, 500);

		} else {
			e.message.channel.sendMessage("", false, {
				color: 0xf44242,
				author: {

					name: "You do not have permission to run this command"
				},

				fields: [{

					value: "The process will not continue",
					name: "Only "+ownerusername+" can use this command."
				}],
				footer: {
					text: " - "+name+" built by "+co+" ©2017 "
				}
			});
		}

	} else {

	}
});
client.login(process.env.Mjg2Mjg4MjE0OTI5NTcxODQw.C5eiPg.-Q2fmuIV_34LLCt87KeMFI8uraQ);
