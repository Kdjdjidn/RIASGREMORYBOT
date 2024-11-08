//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kevinowoeye17@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Kevinowoeye17/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/F4VEfG5kf0nCAMB4qDA65S";
global.website = process.env.GURL || "https://chat.whatsapp.com/F4VEfG5kf0nCAMB4qDA65S";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c21ae479aab857b4f8006.jpg";
global.devs = "2349125096374";
global.sudo = process.env.SUDO || "2349162084022";
global.owner = process.env.OWNER_NUMBER || "2349125096374";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/84a935261759d92084744.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib01hMkw3aEFWZmJodWZLQTZFbzNEdllKR01vZUo4QzdHeEJ1blF0MTZHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnVDNGNMTFJnUzR3RDk0V29VR0N4YkdzYUk2TUppdStKNU9qZUs5RTJXVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRkZPV3JYRDVZRDMrdE4vM21Kc1Q3SkdhS1MwSFVXcjFGQlhGQThxTW5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmeTF1VVRPOVE3WjJKV3pueUQ2RUZnSWpOMTF5NElaUDZuNDhlc2Jia1FjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOVjE1TzdVV1VkVGpGNXVjVWRNRnFWMnBKM0k0UDBuMTA1M0dYN0tlVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcrbUZPZHFObjJUeksvUmNta2RmNHBPMkgwdThVU0dnK3RDa3YxNlA1U2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUFlMit3aFZxcGpxVnBoTXVUd2FkV2JGSGlvS0M5d3lxS3h5UkRQRURWQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS29MRW9jTVJTMU0rYVdzR0ZFbkdIc1ljN21aTnB2RlpLZktTVStyUVpFTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkN6bnl5dWJzTVdtMmFtTG1reTBLVXRYT1czREVoc2xNOFVscmhrQldSRUdrZHF4WWZ3aEpOeHlQYmVKS2dVUWlQaDJwZ29vNGtDa1RrSEpNTUhnRmh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OCwiYWR2U2VjcmV0S2V5IjoiTnpFd2ZvalM0RU9NOHdFUDkyb1pwUjJmcFFUbVlocWhzbDNRdmRyNDdNaz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSWd0dl96VDBSUjZ2UExzUjh0Q0RBUSIsInBob25lSWQiOiI4Zjg2Y2EzNS01ZDA5LTQ0ZDgtYjdjOS1hYTZjNzYzODI4YzUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTh6aEZlZ3pXY2FFbXBuY1lqZ2g0dVpPVWJFPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFoVUcvUk1GcGE0WFJMWHBSQ0hBdXcwWnhBWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJUMVk4QkQ4QyIsIm1lIjp7ImlkIjoiMjM0OTE2MjA4NDAyMjoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImRhbXp5MjE1In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNYVJub2dERUtPWnVya0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJmd2Z1MGE3ZlBCOVpvd2ZyRHlacVBjb3JNbE5uS1RzWU5IeFZhOFhJSVUwPSIsImFjY291bnRTaWduYXR1cmUiOiJqMUdEbGpMc3B2SzFSaEZ2dUg3Ukg4UEc0MG1kOEZZQ0p2WGxKUkNUL2JRcHYyYUZDUTFtU2tNV21Rbi9ONjN5dkRVcU53RUNRQ2w3aGUxT3NJN3JBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNmVRWnY2RjJVekVBSW5tZWZDRTRTNVpEQ1ZGL3ZBT1l5b2t1a05TbU5MQXhPRDhkMWNYR1UzN3llQXZkNW1YT2RyU3g4YVl4bGRFVmg4UzB4dnNaZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTYyMDg0MDIyOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDhIN3RHdTN6d2ZXYU1INnc4bWFqM0tLekpUWnlrN0dEUjhWV3ZGeUNGTiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTEwMzkyMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGVG8ifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 GREAT DEALS",
  author: process.env.PACK_AUTHER || "Great Deals",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "GREAT DEALS",
  ownername: process.env.OWNER_NAME || "Great Deals",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "kevinowoeye17",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
