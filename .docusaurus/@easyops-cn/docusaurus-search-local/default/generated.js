import lunr from "C:\\Users\\skywalkerch\\myblog\\node_modules\\lunr\\lunr.js";
require("C:\\Users\\skywalkerch\\myblog\\node_modules\\lunr-languages\\lunr.stemmer.support.js")(lunr);
require("@easyops-cn/docusaurus-search-local/dist/client/shared/lunrLanguageZh").lunrLanguageZh(lunr);
require("C:\\Users\\skywalkerch\\myblog\\node_modules\\lunr-languages\\lunr.multi.js")(lunr);
export const language = ["en","zh"];
export const removeDefaultStopWordFilter = false;
export const removeDefaultStemmer = false;
export const Mark = null;
export const indexHash = "e481f247";
export const searchResultLimits = 8;
export const searchResultContextMaxLength = 50;
export const explicitSearchResultPath = false;