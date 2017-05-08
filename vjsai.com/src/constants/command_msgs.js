/**
 * Created by vijay on 21/3/17.
 */
import * as constants from './actionTypes';
let command_map =   {};
command_map[constants.SHOW_HELP] = [
  "help - this help text",
  "github - view my github profile",
  "source - View Source code of this app",
  "intro - To see my profile",
  "linkedin - To view my LinkedIn profile",
  "clear - clear command line",
  "ls - to list all available files",
  "cat - to view contents of file"
];
command_map[constants.LIST_FILES] =["README.md intro.txt dummy.txt"];
command_map[constants.SHOW_WELCOME_MESSAGE] = ["Hi my name is vijay Sai.","I am a passionate web developer and a geek.","Please checkout my github profile"];
export default command_map;
