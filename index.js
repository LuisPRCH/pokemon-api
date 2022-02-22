import catchInfoRes from "./CatchInfoRes.js";
import ApiProxy from "./ApiProxy.js";

catchInfoRes(await ApiProxy().type("2"));
