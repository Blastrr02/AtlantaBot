module.exports = {
	/* The token of your Discord Bot */
	token: "XXXXXXXXXXX",
	/* For the support server */
	support: {
		id: "765410402334670858", // The ID of the support server
		logs: "784424664377327657", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "XXXXXXXXXXX", // Your discord client secret
		baseURL: "https://dashboard.axiosbot.xyz", // The base URl of the dashboard
		logs: "784424664377327657", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "https://axiosbot.xyz" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb://localhost:27017/AxiosBot", // The URl of the mongodb database
	prefix: "$", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Axios made with ❤ by Blastrr" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "403839270432800769", // The ID of the bot's owner
		name: "Blastrr#6823" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "777781858477408257" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "9hmQSUrayDusYrLry-gN6jOPCwUrJvzTj1P3lwUFRgM0CCAdzb-_5RV_9AP8gepF",
		
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "cad71050-f7ca-45ee-a77b-59d13afa547a",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "9df7c78a0e33ad994c9b17bfc2cde6a83a0265e2ce21ebfcc07fe97a9f5b78dc2ebf36039c3a9cf607575435891932c72968d014036ebf066608bfc4bed938a6",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: "98c453dfbc7e466db8b7ee9dc4d55ad9b809e110f1124914b3b55225816052bd"
	},
	/* The others utils links */
	others: {
		github: "https://github.com/Blastrr02", // Founder's github account
		donate: "https://patreon.com/blastrr02" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "@Axios help on {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "my website : axios.xyz",
			type: "PLAYING"
		}
	],
	/* Language configuration */
	languages: [
		{
			name: "en-US",
			nativeName: "English",
			moment: "en",
			defaultMomentFormat: "MMMM Do YYYY",
			default: true,
			aliases: [
				"English",
				"en",
				"en-us",
				"en_us",
				"en_US"
			]
		},
		{
			name: "fr-FR",
			nativeName: "Français",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "fr",
			default: false,
			aliases: [
				"French",
				"français",
				"francais",
				"fr",
				"fr_fr"
			]
		},
		{
			name: "es-ES",
			nativeName: "Español",
			defaultMomentFormat: "MMM Do, YYYY",
			moment: "es",
			default: false,
			aliases: [
				"Spanish",
				"es",
				"es_es"
			]
		},
		{
			name: "it-IT",
			nativeName: "Italiano",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "it",
			default: false,
			aliases: [
				"Italian",
				"it",
				"it_it"
			]
		},
		{
			name: "nl-NL",
			nativeName: "Nederlands",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "nl",
			default: false,
			aliases: [
				"Dutch",
				"nl",
				"nl_nl"
			]
		},
		{
			name: "pt-PT",
			nativeName: "Português",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "pt",
			default: false,
			aliases: [
				"Portuguese",
				"pt",
				"pt_pt"
			]
		}
	]
};
