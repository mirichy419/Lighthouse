//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO ||"2348142909904";
global.owner = process.env.OWNER_NUMBER || "2349043475795";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUc2bVIvZkIzeTQxek9QUnMvTU42QWtUS3hVRDFEQlBHOUZvb3pJMkQwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMW9QSHNJZUxxWXFVYkY5Ylg1QVdMUG1wU2t5MFF3TEQzZThmSk1XMkJCQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRXlvWFRWTjhPS0ZzMnNHSHN6eGxLUTd1SEpQa1lUMVEvZzExNGJ1OEdBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJENXZPeE1XUXA5Ni9QN3d6T2R4dmN1Wm5RYUdCd3VkelBmQmM4dnBUREEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEbTZPQWlzc1MyUWsxeGVzTjBYaGwzZmtLbnpKTGNhaWpIM2w5eEp3VUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh6R0NhbGZ0cldpTUhNT09od2xLMXZ6REZzMkFMUDNTQWo4RGplM1c0Z009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0RJSlpaSVowWmhUWGV4K0l5b1dUdm84Uk14ejJMTGZ6ai83dkxRRCtWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmFaOTlER242WmpSbWdLTmdGbndEZ05uRE9VcTVFb1NreTY5SFd6SldUTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRweG1pL1Mwb1l2eW5qMkVLMW5uQXVlT2s3M1BJaXpLU2wxWGd2MDZMeFZrKzl3ejhYK0FQWllvckRxUzUrUEgvRzN4YVNXTVNwRFdCYlM4eTM4T2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6Ilo4TUYwU2EvNVg3WkVpQUU1cEkzK2cvN2QyNE9OS2RaaHFUT3Q3RWRJck09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZUZnBlbEJ6UUQtb2lsTkg2N0VITHciLCJwaG9uZUlkIjoiZDZmOTNkMTItYWFhNy00YWQ0LTljYWUtZDVkMTNiODZkNzUxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLOWpGSldUb2pISWVJK0tMWFVoSE9DUXVZZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVWlY0SGlLTXB2NnNTU0RTYVRzQVVlMmwzU3M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMTdNNkdEM1kiLCJtZSI6eyJpZCI6IjIzNDkwNjk0NDUzNDc6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDb2FjaCBMaWdodCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG4ydE5BQ0VQT25zN29HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidnhpSDl6UmdyZW4wN2FmVmZVVzA5U1lLTUVXK296R2o4ZmZCQWMwWVUxbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibzhXZU5uTEhMZmE5K1QxOTd5cmFWaEI0YlR3enJaODNNcFdEVWhaV09OSFZxcGcyUUloWFJESzV6WWlXTDlScVI3V0czTU1ibHBpNnNuU2tSck5sRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IklBZytoN1Z2UGJTRFgvZWtzMnpmQktMNkxNZW1hWWVNazlUa2gzdGhKZjlWVC9zK29ZZUdXOEl2UndIb2l0R1pGelhoVmVrVllFcEswQkZPekNzT2pnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTA2OTQ0NTM0NzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmI4WWgvYzBZSzNwOU8ybjFYMUZ0UFVtQ2pCRnZxTXhvL0gzd1FITkdGTmEifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzMwODgyNTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTk95In0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "LIGHT-HOUSE🪡☑️",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
