const configs = {};

if (process.env.NODE_ENV === "local") {
  configs.SEMPRE_URL = "http://localhost:8400";
} else {
  configs.SEMPRE_URL = "http://jonsson.stanford.edu:8409";
}


configs.structsServer = "http://jonsson.stanford.edu:8410";
configs.loggerServer = "http://jonsson.stanford.edu:8410";
configs.loggerOn = true;

configs.debugMode = false;

configs.defaultSessionId = "deadbeef";

configs.emptyStruct = [{ x: 3, y: 3, z: 0, color: "Anchor", names: ["S"] }];
configs.defaultStruct = configs.emptyStruct;

configs.mainCanvas = "main_canvas";
configs.targetCanvas = "target_canvas";
configs.consoleElemId = "console";
configs.historyElemId = "command_history";
configs.statusElemId = "status";
configs.currentCmdElemId = "currentcmd";
configs.possStepsElemId = "possible_steps";
configs.maxStepsElemId = "max_steps";
configs.currStepsElemId = "curr_steps";
configs.reactionElemId = "reaction";
configs.defineElemId = "definetextarea";
configs.defineButton = "define_phrase_button";
configs.definePromptElemId = "show_define_status";
configs.randomElemId = "random";
configs.referenceElemId = "reference";

configs.elems = {
  helpMe: "helpme",
  keyboard: "keyboard_shortcuts",
  currSteps: "curr_steps",
  consoleGroup: "console_group",
  defineInterface: "define_interface",
  console: "console",
  defineConsole: "definetextarea",
  defineStatus: "define_status",
  defineHeader: "define_header",
  definePrompt: "define_prompt",
  structures: "structures",
  submitInterface: "submit_interface",
  submitConsole: "submittextarea",
  welcome: "welcome",
};

configs.buttons = {
  do: "dobutton",
  accept: "flyingaccept",
  prev: "prevbutton",
  next: "nextbutton",
  clear: "clearbutton",
  paraphrase: "paraphrase",
  define: "define_phrase_button",
  define_instead: "define_instead",
  skip: "skip_button",
  reset: "reset_all_progress",
  toggleDefine: "toggledefine",
  putBack: "putbackbutton",
  tryDefine: "try_define",
  rotateIcons: "rotate-icons",
  closeDefine: "close_define",
  submitButton: "submitbutton",
  submitStructure: "confirm_submit_structure",
  closeSubmit: "close_submit",
  start: "start_button",
  restartTutorial: "restart_tutorial",
};

configs.difficulty = 3;
configs.defaultSkips = 2;

/* eslint-disable */
// PILOT #1
// configs.targets = [
//   [10, [{ x: 0, y: 0, z: 0, color: "Red" }]],
//   [15, [{"x":3,"y":5,"z":0,"color":"Brown","names":[]},{"x":6,"y":6,"z":0,"color":"Brown","names":[]},{"x":4,"y":2,"z":2,"color":"Yellow","names":[]},{"x":4,"y":4,"z":0,"color":"Brown","names":[]},{"x":6,"y":1,"z":0,"color":"Green","names":[]},{"x":3,"y":6,"z":0,"color":"Brown","names":[]},{"x":6,"y":3,"z":1,"color":"Red","names":[]},{"x":5,"y":1,"z":2,"color":"Blue","names":[]},{"x":4,"y":3,"z":2,"color":"Red","names":[]},{"x":5,"y":3,"z":0,"color":"Brown","names":[]},{"x":4,"y":1,"z":1,"color":"Green","names":[]},{"x":4,"y":5,"z":0,"color":"Brown","names":[]},{"x":3,"y":3,"z":1,"color":"Red","names":[]},{"x":3,"y":1,"z":0,"color":"Green","names":[]},{"x":5,"y":2,"z":2,"color":"Yellow","names":[]},{"x":4,"y":6,"z":0,"color":"Brown","names":[]},{"x":5,"y":4,"z":0,"color":"Brown","names":[]},{"x":5,"y":3,"z":2,"color":"Red","names":[]},{"x":6,"y":1,"z":2,"color":"Blue","names":[]},{"x":5,"y":5,"z":0,"color":"Brown","names":[]},{"x":4,"y":3,"z":1,"color":"Red","names":[]},{"x":3,"y":1,"z":2,"color":"Blue","names":[]},{"x":6,"y":3,"z":0,"color":"Brown","names":[]},{"x":5,"y":1,"z":1,"color":"Green","names":[]},{"x":3,"y":3,"z":0,"color":"Brown","names":[]},{"x":6,"y":2,"z":2,"color":"Yellow","names":[]},{"x":4,"y":1,"z":0,"color":"Green","names":[]},{"x":6,"y":4,"z":0,"color":"Brown","names":[]},{"x":5,"y":6,"z":0,"color":"Brown","names":[]},{"x":3,"y":2,"z":2,"color":"Yellow","names":[]},{"x":3,"y":4,"z":0,"color":"Brown","names":[]},{"x":6,"y":3,"z":2,"color":"Red","names":[]},{"x":6,"y":1,"z":1,"color":"Green","names":[]},{"x":6,"y":5,"z":0,"color":"Brown","names":[]},{"x":5,"y":3,"z":1,"color":"Red","names":[]},{"x":4,"y":1,"z":2,"color":"Blue","names":[]},{"x":5,"y":1,"z":0,"color":"Green","names":[]},{"x":4,"y":3,"z":0,"color":"Brown","names":[]},{"x":3,"y":1,"z":1,"color":"Green","names":[]},{"x":3,"y":3,"z":2,"color":"Red","names":[]}]],
//   [16, [{"x":3,"y":4,"z":5,"color":"Green","names":[]},{"x":4,"y":2,"z":5,"color":"Green","names":[]},{"x":2,"y":4,"z":4,"color":"Green","names":[]},{"x":3,"y":2,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":1,"color":"Brown","names":[]},{"x":5,"y":5,"z":4,"color":"Green","names":[]},{"x":6,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":4,"z":0,"color":"Brown","names":[]},{"x":4,"y":5,"z":3,"color":"Brown","names":[]},{"x":5,"y":3,"z":3,"color":"Brown","names":[]},{"x":3,"y":5,"z":2,"color":"Brown","names":[]},{"x":5,"y":2,"z":5,"color":"Green","names":[]},{"x":4,"y":3,"z":2,"color":"Brown","names":[]},{"x":4,"y":4,"z":5,"color":"Green","names":[]},{"x":4,"y":2,"z":4,"color":"Green","names":[]},{"x":3,"y":3,"z":1,"color":"Brown","names":[]},{"x":3,"y":4,"z":4,"color":"Green","names":[]},{"x":3,"y":6,"z":5,"color":"Green","names":[]},{"x":6,"y":5,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":0,"color":"Brown","names":[]},{"x":2,"y":6,"z":4,"color":"Green","names":[]},{"x":5,"y":5,"z":3,"color":"Brown","names":[]},{"x":5,"y":3,"z":2,"color":"Brown","names":[]},{"x":4,"y":5,"z":2,"color":"Brown","names":[]},{"x":4,"y":3,"z":1,"color":"Brown","names":[]},{"x":3,"y":5,"z":1,"color":"Brown","names":[]},{"x":5,"y":2,"z":4,"color":"Green","names":[]},{"x":3,"y":3,"z":0,"color":"Brown","names":[]},{"x":5,"y":4,"z":5,"color":"Green","names":[]},{"x":4,"y":6,"z":5,"color":"Green","names":[]},{"x":4,"y":4,"z":4,"color":"Green","names":[]},{"x":3,"y":6,"z":4,"color":"Green","names":[]},{"x":3,"y":4,"z":3,"color":"Brown","names":[]},{"x":5,"y":3,"z":1,"color":"Brown","names":[]},{"x":3,"y":3,"z":5,"color":"Green","names":[]},{"x":5,"y":5,"z":2,"color":"Brown","names":[]},{"x":4,"y":3,"z":0,"color":"Brown","names":[]},{"x":5,"y":6,"z":5,"color":"Green","names":[]},{"x":2,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":5,"z":1,"color":"Brown","names":[]},{"x":6,"y":2,"z":4,"color":"Green","names":[]},{"x":4,"y":6,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":4,"color":"Green","names":[]},{"x":3,"y":5,"z":0,"color":"Brown","names":[]},{"x":4,"y":4,"z":3,"color":"Brown","names":[]},{"x":4,"y":3,"z":5,"color":"Green","names":[]},{"x":3,"y":4,"z":2,"color":"Brown","names":[]},{"x":3,"y":5,"z":5,"color":"Green","names":[]},{"x":3,"y":3,"z":4,"color":"Green","names":[]},{"x":2,"y":5,"z":4,"color":"Green","names":[]},{"x":6,"y":4,"z":4,"color":"Green","names":[]},{"x":5,"y":5,"z":1,"color":"Brown","names":[]},{"x":5,"y":3,"z":0,"color":"Brown","names":[]},{"x":5,"y":6,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":3,"color":"Brown","names":[]},{"x":4,"y":5,"z":0,"color":"Brown","names":[]},{"x":4,"y":4,"z":2,"color":"Brown","names":[]},{"x":5,"y":3,"z":5,"color":"Green","names":[]},{"x":3,"y":4,"z":1,"color":"Brown","names":[]},{"x":4,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":5,"z":5,"color":"Green","names":[]},{"x":3,"y":3,"z":3,"color":"Brown","names":[]},{"x":5,"y":5,"z":0,"color":"Brown","names":[]},{"x":3,"y":5,"z":4,"color":"Green","names":[]},{"x":6,"y":6,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":2,"color":"Brown","names":[]},{"x":3,"y":2,"z":5,"color":"Green","names":[]},{"x":4,"y":4,"z":1,"color":"Brown","names":[]},{"x":2,"y":2,"z":4,"color":"Green","names":[]},{"x":3,"y":4,"z":0,"color":"Brown","names":[]},{"x":5,"y":5,"z":5,"color":"Green","names":[]},{"x":5,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":5,"z":4,"color":"Green","names":[]},{"x":4,"y":3,"z":3,"color":"Brown","names":[]},{"x":3,"y":5,"z":3,"color":"Brown","names":[]},{"x":3,"y":3,"z":2,"color":"Brown","names":[]}]],
//   [8, [{"x":3,"y":1,"z":2,"color":"Green","names":[]},{"x":3,"y":6,"z":3,"color":"Green","names":[]},{"x":3,"y":0,"z":3,"color":"Green","names":[]},{"x":3,"y":3,"z":0,"color":"Red","names":[]},{"x":3,"y":4,"z":2,"color":"Green","names":[]},{"x":3,"y":0,"z":4,"color":"Green","names":[]},{"x":3,"y":2,"z":2,"color":"Green","names":[]},{"x":3,"y":5,"z":2,"color":"Green","names":[]},{"x":3,"y":6,"z":4,"color":"Green","names":[]},{"x":3,"y":0,"z":5,"color":"Green","names":[]},{"x":3,"y":3,"z":1,"color":"Red","names":[]},{"x":3,"y":6,"z":5,"color":"Green","names":[]},{"x":3,"y":6,"z":2,"color":"Green","names":[]},{"x":3,"y":0,"z":2,"color":"Green","names":[]},{"x":3,"y":3,"z":2,"color":"Red","names":[]}]],
//   [13, [{"x":2,"y":1,"z":0,"color":"Green","names":[]},{"x":2,"y":3,"z":1,"color":"Red","names":[]},{"x":0,"y":3,"z":2,"color":"Red","names":[]},{"x":1,"y":3,"z":0,"color":"Red","names":[]},{"x":3,"y":0,"z":0,"color":"Red","names":[]},{"x":3,"y":2,"z":1,"color":"Red","names":[]},{"x":2,"y":2,"z":0,"color":"Green","names":[]},{"x":0,"y":0,"z":0,"color":"Green","names":[]},{"x":1,"y":3,"z":2,"color":"Red","names":[]},{"x":3,"y":3,"z":1,"color":"Red","names":[]},{"x":3,"y":1,"z":0,"color":"Red","names":[]},{"x":0,"y":3,"z":1,"color":"Red","names":[]},{"x":2,"y":3,"z":0,"color":"Red","names":[]},{"x":3,"y":0,"z":2,"color":"Red","names":[]},{"x":0,"y":1,"z":0,"color":"Green","names":[]},{"x":3,"y":2,"z":0,"color":"Red","names":[]},{"x":3,"y":1,"z":2,"color":"Red","names":[]},{"x":1,"y":0,"z":0,"color":"Green","names":[]},{"x":0,"y":2,"z":0,"color":"Green","names":[]},{"x":2,"y":3,"z":2,"color":"Red","names":[]},{"x":3,"y":3,"z":0,"color":"Red","names":[]},{"x":1,"y":3,"z":1,"color":"Red","names":[]},{"x":1,"y":1,"z":0,"color":"Green","names":[]},{"x":0,"y":3,"z":0,"color":"Red","names":[]},{"x":3,"y":2,"z":2,"color":"Red","names":[]},{"x":3,"y":0,"z":1,"color":"Red","names":[]},{"x":2,"y":0,"z":0,"color":"Green","names":[]},{"x":1,"y":2,"z":0,"color":"Green","names":[]},{"x":3,"y":1,"z":1,"color":"Red","names":[]},{"x":3,"y":3,"z":2,"color":"Red","names":[]}]],
// ];

// PILOT #2
configs.targets = [
  [10, [{ x: 0, y: 0, z: 0, color: "Red" }]],
  [14, [{"x":0,"y":8,"z":0,"color":"Brown","names":[]},{"x":1,"y":8,"z":0,"color":"Brown","names":[]},{"x":2,"y":8,"z":0,"color":"Brown","names":[]},{"x":7,"y":8,"z":0,"color":"Green","names":[]},{"x":8,"y":8,"z":0,"color":"Green","names":[]},{"x":9,"y":8,"z":0,"color":"Green","names":[]},{"x":0,"y":8,"z":1,"color":"Brown","names":[]},{"x":1,"y":8,"z":1,"color":"Brown","names":[]},{"x":2,"y":8,"z":1,"color":"Brown","names":[]},{"x":7,"y":8,"z":1,"color":"Green","names":[]},{"x":8,"y":8,"z":1,"color":"Green","names":[]},{"x":9,"y":8,"z":1,"color":"Green","names":[]},{"x":0,"y":1,"z":0,"color":"Red","names":[]},{"x":1,"y":1,"z":0,"color":"Red","names":[]},{"x":2,"y":1,"z":0,"color":"Red","names":[]},{"x":0,"y":8,"z":2,"color":"Brown","names":[]},{"x":1,"y":8,"z":2,"color":"Brown","names":[]},{"x":7,"y":1,"z":0,"color":"Yellow","names":[]},{"x":2,"y":8,"z":2,"color":"Brown","names":[]},{"x":8,"y":1,"z":0,"color":"Yellow","names":[]},{"x":9,"y":1,"z":0,"color":"Yellow","names":[]},{"x":7,"y":8,"z":2,"color":"Green","names":[]},{"x":8,"y":8,"z":2,"color":"Green","names":[]},{"x":9,"y":8,"z":2,"color":"Green","names":[]},{"x":0,"y":1,"z":1,"color":"Red","names":[]},{"x":1,"y":1,"z":1,"color":"Red","names":[]},{"x":2,"y":1,"z":1,"color":"Red","names":[]},{"x":7,"y":1,"z":1,"color":"Yellow","names":[]},{"x":8,"y":1,"z":1,"color":"Yellow","names":[]},{"x":9,"y":1,"z":1,"color":"Yellow","names":[]},{"x":0,"y":1,"z":2,"color":"Red","names":[]},{"x":1,"y":1,"z":2,"color":"Red","names":[]},{"x":2,"y":1,"z":2,"color":"Red","names":[]},{"x":7,"y":1,"z":2,"color":"Yellow","names":[]},{"x":8,"y":1,"z":2,"color":"Yellow","names":[]},{"x":9,"y":1,"z":2,"color":"Yellow","names":[]},{"x":0,"y":9,"z":0,"color":"Brown","names":[]},{"x":1,"y":9,"z":0,"color":"Brown","names":[]},{"x":2,"y":9,"z":0,"color":"Brown","names":[]},{"x":7,"y":9,"z":0,"color":"Green","names":[]},{"x":8,"y":9,"z":0,"color":"Green","names":[]},{"x":9,"y":9,"z":0,"color":"Green","names":[]},{"x":0,"y":9,"z":1,"color":"Brown","names":[]},{"x":1,"y":9,"z":1,"color":"Brown","names":[]},{"x":2,"y":9,"z":1,"color":"Brown","names":[]},{"x":7,"y":9,"z":1,"color":"Green","names":[]},{"x":8,"y":9,"z":1,"color":"Green","names":[]},{"x":9,"y":9,"z":1,"color":"Green","names":[]},{"x":0,"y":2,"z":0,"color":"Red","names":[]},{"x":1,"y":2,"z":0,"color":"Red","names":[]},{"x":2,"y":2,"z":0,"color":"Red","names":[]},{"x":0,"y":9,"z":2,"color":"Brown","names":[]},{"x":1,"y":9,"z":2,"color":"Brown","names":[]},{"x":7,"y":2,"z":0,"color":"Yellow","names":[]},{"x":2,"y":9,"z":2,"color":"Brown","names":[]},{"x":8,"y":2,"z":0,"color":"Yellow","names":[]},{"x":9,"y":2,"z":0,"color":"Yellow","names":[]},{"x":7,"y":9,"z":2,"color":"Green","names":[]},{"x":0,"y":7,"z":0,"color":"Brown","names":[]},{"x":8,"y":9,"z":2,"color":"Green","names":[]},{"x":1,"y":7,"z":0,"color":"Brown","names":[]},{"x":9,"y":9,"z":2,"color":"Green","names":[]},{"x":2,"y":7,"z":0,"color":"Brown","names":[]},{"x":0,"y":2,"z":1,"color":"Red","names":[]},{"x":7,"y":7,"z":0,"color":"Green","names":[]},{"x":1,"y":2,"z":1,"color":"Red","names":[]},{"x":8,"y":7,"z":0,"color":"Green","names":[]},{"x":2,"y":2,"z":1,"color":"Red","names":[]},{"x":9,"y":7,"z":0,"color":"Green","names":[]},{"x":7,"y":2,"z":1,"color":"Yellow","names":[]},{"x":8,"y":2,"z":1,"color":"Yellow","names":[]},{"x":9,"y":2,"z":1,"color":"Yellow","names":[]},{"x":0,"y":7,"z":1,"color":"Brown","names":[]},{"x":1,"y":7,"z":1,"color":"Brown","names":[]},{"x":2,"y":7,"z":1,"color":"Brown","names":[]},{"x":0,"y":2,"z":2,"color":"Red","names":[]},{"x":7,"y":7,"z":1,"color":"Green","names":[]},{"x":1,"y":2,"z":2,"color":"Red","names":[]},{"x":8,"y":7,"z":1,"color":"Green","names":[]},{"x":2,"y":2,"z":2,"color":"Red","names":[]},{"x":9,"y":7,"z":1,"color":"Green","names":[]},{"x":7,"y":2,"z":2,"color":"Yellow","names":[]},{"x":0,"y":0,"z":0,"color":"Red","names":[]},{"x":8,"y":2,"z":2,"color":"Yellow","names":[]},{"x":1,"y":0,"z":0,"color":"Red","names":[]},{"x":9,"y":2,"z":2,"color":"Yellow","names":[]},{"x":2,"y":0,"z":0,"color":"Red","names":[]},{"x":0,"y":7,"z":2,"color":"Brown","names":[]},{"x":1,"y":7,"z":2,"color":"Brown","names":[]},{"x":7,"y":0,"z":0,"color":"Yellow","names":[]},{"x":2,"y":7,"z":2,"color":"Brown","names":[]},{"x":8,"y":0,"z":0,"color":"Yellow","names":[]},{"x":9,"y":0,"z":0,"color":"Yellow","names":[]},{"x":7,"y":7,"z":2,"color":"Green","names":[]},{"x":8,"y":7,"z":2,"color":"Green","names":[]},{"x":9,"y":7,"z":2,"color":"Green","names":[]},{"x":0,"y":0,"z":1,"color":"Red","names":[]},{"x":1,"y":0,"z":1,"color":"Red","names":[]},{"x":2,"y":0,"z":1,"color":"Red","names":[]},{"x":7,"y":0,"z":1,"color":"Yellow","names":[]},{"x":8,"y":0,"z":1,"color":"Yellow","names":[]},{"x":9,"y":0,"z":1,"color":"Yellow","names":[]},{"x":0,"y":0,"z":2,"color":"Red","names":[]},{"x":1,"y":0,"z":2,"color":"Red","names":[]},{"x":2,"y":0,"z":2,"color":"Red","names":[]},{"x":7,"y":0,"z":2,"color":"Yellow","names":[]},{"x":8,"y":0,"z":2,"color":"Yellow","names":[]},{"x":9,"y":0,"z":2,"color":"Yellow","names":[]}]],
  [16, [{"x":3,"y":4,"z":5,"color":"Green","names":[]},{"x":4,"y":2,"z":5,"color":"Green","names":[]},{"x":2,"y":4,"z":4,"color":"Green","names":[]},{"x":3,"y":2,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":1,"color":"Brown","names":[]},{"x":5,"y":5,"z":4,"color":"Green","names":[]},{"x":6,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":4,"z":0,"color":"Brown","names":[]},{"x":4,"y":5,"z":3,"color":"Brown","names":[]},{"x":5,"y":3,"z":3,"color":"Brown","names":[]},{"x":3,"y":5,"z":2,"color":"Brown","names":[]},{"x":5,"y":2,"z":5,"color":"Green","names":[]},{"x":4,"y":3,"z":2,"color":"Brown","names":[]},{"x":4,"y":4,"z":5,"color":"Green","names":[]},{"x":4,"y":2,"z":4,"color":"Green","names":[]},{"x":3,"y":3,"z":1,"color":"Brown","names":[]},{"x":3,"y":4,"z":4,"color":"Green","names":[]},{"x":3,"y":6,"z":5,"color":"Green","names":[]},{"x":6,"y":5,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":0,"color":"Brown","names":[]},{"x":2,"y":6,"z":4,"color":"Green","names":[]},{"x":5,"y":5,"z":3,"color":"Brown","names":[]},{"x":5,"y":3,"z":2,"color":"Brown","names":[]},{"x":4,"y":5,"z":2,"color":"Brown","names":[]},{"x":4,"y":3,"z":1,"color":"Brown","names":[]},{"x":3,"y":5,"z":1,"color":"Brown","names":[]},{"x":5,"y":2,"z":4,"color":"Green","names":[]},{"x":3,"y":3,"z":0,"color":"Brown","names":[]},{"x":5,"y":4,"z":5,"color":"Green","names":[]},{"x":4,"y":6,"z":5,"color":"Green","names":[]},{"x":4,"y":4,"z":4,"color":"Green","names":[]},{"x":3,"y":6,"z":4,"color":"Green","names":[]},{"x":3,"y":4,"z":3,"color":"Brown","names":[]},{"x":5,"y":3,"z":1,"color":"Brown","names":[]},{"x":3,"y":3,"z":5,"color":"Green","names":[]},{"x":5,"y":5,"z":2,"color":"Brown","names":[]},{"x":4,"y":3,"z":0,"color":"Brown","names":[]},{"x":5,"y":6,"z":5,"color":"Green","names":[]},{"x":2,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":5,"z":1,"color":"Brown","names":[]},{"x":6,"y":2,"z":4,"color":"Green","names":[]},{"x":4,"y":6,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":4,"color":"Green","names":[]},{"x":3,"y":5,"z":0,"color":"Brown","names":[]},{"x":4,"y":4,"z":3,"color":"Brown","names":[]},{"x":4,"y":3,"z":5,"color":"Green","names":[]},{"x":3,"y":4,"z":2,"color":"Brown","names":[]},{"x":3,"y":5,"z":5,"color":"Green","names":[]},{"x":3,"y":3,"z":4,"color":"Green","names":[]},{"x":2,"y":5,"z":4,"color":"Green","names":[]},{"x":6,"y":4,"z":4,"color":"Green","names":[]},{"x":5,"y":5,"z":1,"color":"Brown","names":[]},{"x":5,"y":3,"z":0,"color":"Brown","names":[]},{"x":5,"y":6,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":3,"color":"Brown","names":[]},{"x":4,"y":5,"z":0,"color":"Brown","names":[]},{"x":4,"y":4,"z":2,"color":"Brown","names":[]},{"x":5,"y":3,"z":5,"color":"Green","names":[]},{"x":3,"y":4,"z":1,"color":"Brown","names":[]},{"x":4,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":5,"z":5,"color":"Green","names":[]},{"x":3,"y":3,"z":3,"color":"Brown","names":[]},{"x":5,"y":5,"z":0,"color":"Brown","names":[]},{"x":3,"y":5,"z":4,"color":"Green","names":[]},{"x":6,"y":6,"z":4,"color":"Green","names":[]},{"x":5,"y":4,"z":2,"color":"Brown","names":[]},{"x":3,"y":2,"z":5,"color":"Green","names":[]},{"x":4,"y":4,"z":1,"color":"Brown","names":[]},{"x":2,"y":2,"z":4,"color":"Green","names":[]},{"x":3,"y":4,"z":0,"color":"Brown","names":[]},{"x":5,"y":5,"z":5,"color":"Green","names":[]},{"x":5,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":5,"z":4,"color":"Green","names":[]},{"x":4,"y":3,"z":3,"color":"Brown","names":[]},{"x":3,"y":5,"z":3,"color":"Brown","names":[]},{"x":3,"y":3,"z":2,"color":"Brown","names":[]}]],
  [13, [{"x":0,"y":3,"z":0,"color":"Yellow","names":[]},{"x":1,"y":3,"z":0,"color":"Yellow","names":[]},{"x":2,"y":3,"z":0,"color":"Yellow","names":[]},{"x":3,"y":3,"z":0,"color":"Yellow","names":[]},{"x":4,"y":3,"z":0,"color":"Yellow","names":[]},{"x":5,"y":3,"z":0,"color":"Yellow","names":[]},{"x":6,"y":3,"z":0,"color":"Yellow","names":[]},{"x":7,"y":3,"z":0,"color":"Yellow","names":[]},{"x":8,"y":3,"z":0,"color":"Yellow","names":[]},{"x":9,"y":3,"z":0,"color":"Yellow","names":[]},{"x":0,"y":5,"z":0,"color":"Blue","names":[]},{"x":0,"y":3,"z":1,"color":"Red","names":[]},{"x":2,"y":5,"z":0,"color":"Blue","names":[]},{"x":2,"y":3,"z":1,"color":"Red","names":[]},{"x":4,"y":5,"z":0,"color":"Blue","names":[]},{"x":0,"y":2,"z":0,"color":"Blue","names":[]},{"x":4,"y":3,"z":1,"color":"Red","names":[]},{"x":6,"y":5,"z":0,"color":"Blue","names":[]},{"x":2,"y":2,"z":0,"color":"Blue","names":[]},{"x":6,"y":3,"z":1,"color":"Red","names":[]},{"x":8,"y":5,"z":0,"color":"Blue","names":[]},{"x":4,"y":2,"z":0,"color":"Blue","names":[]},{"x":8,"y":3,"z":1,"color":"Red","names":[]},{"x":6,"y":2,"z":0,"color":"Blue","names":[]},{"x":8,"y":2,"z":0,"color":"Blue","names":[]},{"x":0,"y":3,"z":2,"color":"Red","names":[]},{"x":2,"y":3,"z":2,"color":"Red","names":[]},{"x":0,"y":4,"z":0,"color":"Blue","names":[]},{"x":4,"y":3,"z":2,"color":"Red","names":[]},{"x":2,"y":4,"z":0,"color":"Blue","names":[]},{"x":6,"y":3,"z":2,"color":"Red","names":[]},{"x":4,"y":4,"z":0,"color":"Blue","names":[]},{"x":0,"y":1,"z":0,"color":"Blue","names":[]},{"x":8,"y":3,"z":2,"color":"Red","names":[]},{"x":6,"y":4,"z":0,"color":"Blue","names":[]},{"x":2,"y":1,"z":0,"color":"Blue","names":[]},{"x":8,"y":4,"z":0,"color":"Blue","names":[]},{"x":4,"y":1,"z":0,"color":"Blue","names":[]},{"x":6,"y":1,"z":0,"color":"Blue","names":[]},{"x":8,"y":1,"z":0,"color":"Blue","names":[]}]],
  [13, [{"x":1,"y":3,"z":3,"color":"Green","names":[]},{"x":2,"y":3,"z":3,"color":"Green","names":[]},{"x":3,"y":3,"z":3,"color":"Green","names":[]},{"x":4,"y":3,"z":3,"color":"Green","names":[]},{"x":3,"y":1,"z":4,"color":"Green","names":[]},{"x":5,"y":3,"z":3,"color":"Green","names":[]},{"x":6,"y":3,"z":3,"color":"Green","names":[]},{"x":3,"y":0,"z":3,"color":"Green","names":[]},{"x":3,"y":3,"z":0,"color":"Brown","names":[]},{"x":3,"y":4,"z":5,"color":"Green","names":[]},{"x":1,"y":3,"z":4,"color":"Green","names":[]},{"x":3,"y":5,"z":3,"color":"Green","names":[]},{"x":2,"y":3,"z":4,"color":"Green","names":[]},{"x":3,"y":3,"z":4,"color":"Green","names":[]},{"x":4,"y":3,"z":4,"color":"Green","names":[]},{"x":5,"y":3,"z":4,"color":"Green","names":[]},{"x":3,"y":2,"z":3,"color":"Green","names":[]},{"x":3,"y":3,"z":1,"color":"Brown","names":[]},{"x":3,"y":5,"z":4,"color":"Green","names":[]},{"x":2,"y":3,"z":5,"color":"Green","names":[]},{"x":3,"y":3,"z":5,"color":"Green","names":[]},{"x":4,"y":3,"z":5,"color":"Green","names":[]},{"x":3,"y":4,"z":3,"color":"Green","names":[]},{"x":3,"y":2,"z":4,"color":"Green","names":[]},{"x":3,"y":3,"z":2,"color":"Brown","names":[]},{"x":3,"y":1,"z":3,"color":"Green","names":[]},{"x":3,"y":3,"z":6,"color":"Green","names":[]},{"x":3,"y":6,"z":3,"color":"Green","names":[]},{"x":3,"y":4,"z":4,"color":"Green","names":[]},{"x":0,"y":3,"z":3,"color":"Green","names":[]},{"x":3,"y":2,"z":5,"color":"Green","names":[]}]],
  [13, [{"x":2,"y":5,"z":2,"color":"Green","names":[]},{"x":3,"y":5,"z":2,"color":"Green","names":[]},{"x":4,"y":5,"z":2,"color":"Green","names":[]},{"x":5,"y":5,"z":2,"color":"Green","names":[]},{"x":6,"y":5,"z":2,"color":"Green","names":[]},{"x":7,"y":5,"z":2,"color":"Green","names":[]},{"x":0,"y":8,"z":0,"color":"Brown","names":[]},{"x":1,"y":8,"z":0,"color":"Brown","names":[]},{"x":3,"y":5,"z":3,"color":"Blue","names":[]},{"x":2,"y":8,"z":0,"color":"Brown","names":[]},{"x":4,"y":5,"z":3,"color":"Blue","names":[]},{"x":3,"y":8,"z":0,"color":"Brown","names":[]},{"x":5,"y":5,"z":3,"color":"Blue","names":[]},{"x":4,"y":8,"z":0,"color":"Brown","names":[]},{"x":6,"y":5,"z":3,"color":"Blue","names":[]},{"x":5,"y":8,"z":0,"color":"Brown","names":[]},{"x":6,"y":8,"z":0,"color":"Brown","names":[]},{"x":7,"y":8,"z":0,"color":"Brown","names":[]},{"x":8,"y":8,"z":0,"color":"Brown","names":[]},{"x":9,"y":8,"z":0,"color":"Brown","names":[]},{"x":1,"y":8,"z":1,"color":"Red","names":[]},{"x":2,"y":8,"z":1,"color":"Red","names":[]},{"x":4,"y":5,"z":4,"color":"Yellow","names":[]},{"x":3,"y":8,"z":1,"color":"Red","names":[]},{"x":5,"y":5,"z":4,"color":"Yellow","names":[]},{"x":4,"y":8,"z":1,"color":"Red","names":[]},{"x":5,"y":8,"z":1,"color":"Red","names":[]},{"x":6,"y":8,"z":1,"color":"Red","names":[]},{"x":7,"y":8,"z":1,"color":"Red","names":[]},{"x":8,"y":8,"z":1,"color":"Red","names":[]},{"x":0,"y":1,"z":0,"color":"Brown","names":[]},{"x":1,"y":1,"z":0,"color":"Brown","names":[]},{"x":2,"y":1,"z":0,"color":"Brown","names":[]},{"x":3,"y":1,"z":0,"color":"Brown","names":[]},{"x":4,"y":1,"z":0,"color":"Brown","names":[]},{"x":5,"y":1,"z":0,"color":"Brown","names":[]},{"x":6,"y":1,"z":0,"color":"Brown","names":[]},{"x":7,"y":1,"z":0,"color":"Brown","names":[]},{"x":8,"y":1,"z":0,"color":"Brown","names":[]},{"x":9,"y":1,"z":0,"color":"Brown","names":[]},{"x":1,"y":1,"z":1,"color":"Red","names":[]},{"x":2,"y":1,"z":1,"color":"Red","names":[]},{"x":3,"y":1,"z":1,"color":"Red","names":[]},{"x":4,"y":1,"z":1,"color":"Red","names":[]},{"x":5,"y":1,"z":1,"color":"Red","names":[]},{"x":6,"y":1,"z":1,"color":"Red","names":[]},{"x":7,"y":1,"z":1,"color":"Red","names":[]},{"x":8,"y":1,"z":1,"color":"Red","names":[]},{"x":0,"y":4,"z":0,"color":"Brown","names":[]},{"x":1,"y":4,"z":0,"color":"Brown","names":[]},{"x":2,"y":4,"z":0,"color":"Brown","names":[]},{"x":3,"y":4,"z":0,"color":"Brown","names":[]},{"x":4,"y":4,"z":0,"color":"Brown","names":[]},{"x":5,"y":4,"z":0,"color":"Brown","names":[]},{"x":6,"y":4,"z":0,"color":"Brown","names":[]},{"x":7,"y":4,"z":0,"color":"Brown","names":[]},{"x":8,"y":4,"z":0,"color":"Brown","names":[]},{"x":9,"y":4,"z":0,"color":"Brown","names":[]},{"x":1,"y":4,"z":1,"color":"Red","names":[]},{"x":2,"y":4,"z":1,"color":"Red","names":[]},{"x":3,"y":4,"z":1,"color":"Red","names":[]},{"x":4,"y":4,"z":1,"color":"Red","names":[]},{"x":5,"y":4,"z":1,"color":"Red","names":[]},{"x":6,"y":4,"z":1,"color":"Red","names":[]},{"x":7,"y":4,"z":1,"color":"Red","names":[]},{"x":8,"y":4,"z":1,"color":"Red","names":[]},{"x":2,"y":4,"z":2,"color":"Green","names":[]},{"x":3,"y":4,"z":2,"color":"Green","names":[]},{"x":4,"y":4,"z":2,"color":"Green","names":[]},{"x":5,"y":4,"z":2,"color":"Green","names":[]},{"x":6,"y":4,"z":2,"color":"Green","names":[]},{"x":7,"y":4,"z":2,"color":"Green","names":[]},{"x":0,"y":7,"z":0,"color":"Brown","names":[]},{"x":1,"y":7,"z":0,"color":"Brown","names":[]},{"x":3,"y":4,"z":3,"color":"Blue","names":[]},{"x":2,"y":7,"z":0,"color":"Brown","names":[]},{"x":4,"y":4,"z":3,"color":"Blue","names":[]},{"x":3,"y":7,"z":0,"color":"Brown","names":[]},{"x":5,"y":4,"z":3,"color":"Blue","names":[]},{"x":4,"y":7,"z":0,"color":"Brown","names":[]},{"x":6,"y":4,"z":3,"color":"Blue","names":[]},{"x":5,"y":7,"z":0,"color":"Brown","names":[]},{"x":6,"y":7,"z":0,"color":"Brown","names":[]},{"x":7,"y":7,"z":0,"color":"Brown","names":[]},{"x":8,"y":7,"z":0,"color":"Brown","names":[]},{"x":9,"y":7,"z":0,"color":"Brown","names":[]},{"x":1,"y":7,"z":1,"color":"Red","names":[]},{"x":2,"y":7,"z":1,"color":"Red","names":[]},{"x":4,"y":4,"z":4,"color":"Yellow","names":[]},{"x":3,"y":7,"z":1,"color":"Red","names":[]},{"x":5,"y":4,"z":4,"color":"Yellow","names":[]},{"x":4,"y":7,"z":1,"color":"Red","names":[]},{"x":5,"y":7,"z":1,"color":"Red","names":[]},{"x":6,"y":7,"z":1,"color":"Red","names":[]},{"x":7,"y":7,"z":1,"color":"Red","names":[]},{"x":8,"y":7,"z":1,"color":"Red","names":[]},{"x":0,"y":0,"z":0,"color":"Brown","names":[]},{"x":1,"y":0,"z":0,"color":"Brown","names":[]},{"x":2,"y":0,"z":0,"color":"Brown","names":[]},{"x":3,"y":0,"z":0,"color":"Brown","names":[]},{"x":4,"y":0,"z":0,"color":"Brown","names":[]},{"x":5,"y":0,"z":0,"color":"Brown","names":[]},{"x":6,"y":0,"z":0,"color":"Brown","names":[]},{"x":7,"y":0,"z":0,"color":"Brown","names":[]},{"x":2,"y":7,"z":2,"color":"Green","names":[]},{"x":8,"y":0,"z":0,"color":"Brown","names":[]},{"x":3,"y":7,"z":2,"color":"Green","names":[]},{"x":9,"y":0,"z":0,"color":"Brown","names":[]},{"x":4,"y":7,"z":2,"color":"Green","names":[]},{"x":5,"y":7,"z":2,"color":"Green","names":[]},{"x":6,"y":7,"z":2,"color":"Green","names":[]},{"x":7,"y":7,"z":2,"color":"Green","names":[]},{"x":0,"y":3,"z":0,"color":"Brown","names":[]},{"x":1,"y":3,"z":0,"color":"Brown","names":[]},{"x":2,"y":3,"z":0,"color":"Brown","names":[]},{"x":3,"y":3,"z":0,"color":"Brown","names":[]},{"x":4,"y":3,"z":0,"color":"Brown","names":[]},{"x":5,"y":3,"z":0,"color":"Brown","names":[]},{"x":6,"y":3,"z":0,"color":"Brown","names":[]},{"x":7,"y":3,"z":0,"color":"Brown","names":[]},{"x":8,"y":3,"z":0,"color":"Brown","names":[]},{"x":9,"y":3,"z":0,"color":"Brown","names":[]},{"x":1,"y":3,"z":1,"color":"Red","names":[]},{"x":2,"y":3,"z":1,"color":"Red","names":[]},{"x":3,"y":3,"z":1,"color":"Red","names":[]},{"x":4,"y":3,"z":1,"color":"Red","names":[]},{"x":5,"y":3,"z":1,"color":"Red","names":[]},{"x":6,"y":3,"z":1,"color":"Red","names":[]},{"x":7,"y":3,"z":1,"color":"Red","names":[]},{"x":8,"y":3,"z":1,"color":"Red","names":[]},{"x":2,"y":3,"z":2,"color":"Green","names":[]},{"x":3,"y":3,"z":2,"color":"Green","names":[]},{"x":4,"y":3,"z":2,"color":"Green","names":[]},{"x":5,"y":3,"z":2,"color":"Green","names":[]},{"x":6,"y":3,"z":2,"color":"Green","names":[]},{"x":7,"y":3,"z":2,"color":"Green","names":[]},{"x":0,"y":6,"z":0,"color":"Brown","names":[]},{"x":1,"y":6,"z":0,"color":"Brown","names":[]},{"x":3,"y":3,"z":3,"color":"Blue","names":[]},{"x":2,"y":6,"z":0,"color":"Brown","names":[]},{"x":4,"y":3,"z":3,"color":"Blue","names":[]},{"x":3,"y":6,"z":0,"color":"Brown","names":[]},{"x":5,"y":3,"z":3,"color":"Blue","names":[]},{"x":4,"y":6,"z":0,"color":"Brown","names":[]},{"x":6,"y":3,"z":3,"color":"Blue","names":[]},{"x":5,"y":6,"z":0,"color":"Brown","names":[]},{"x":6,"y":6,"z":0,"color":"Brown","names":[]},{"x":7,"y":6,"z":0,"color":"Brown","names":[]},{"x":8,"y":6,"z":0,"color":"Brown","names":[]},{"x":9,"y":6,"z":0,"color":"Brown","names":[]},{"x":1,"y":6,"z":1,"color":"Red","names":[]},{"x":2,"y":6,"z":1,"color":"Red","names":[]},{"x":3,"y":6,"z":1,"color":"Red","names":[]},{"x":4,"y":6,"z":1,"color":"Red","names":[]},{"x":5,"y":6,"z":1,"color":"Red","names":[]},{"x":6,"y":6,"z":1,"color":"Red","names":[]},{"x":7,"y":6,"z":1,"color":"Red","names":[]},{"x":8,"y":6,"z":1,"color":"Red","names":[]},{"x":2,"y":6,"z":2,"color":"Green","names":[]},{"x":3,"y":6,"z":2,"color":"Green","names":[]},{"x":4,"y":6,"z":2,"color":"Green","names":[]},{"x":5,"y":6,"z":2,"color":"Green","names":[]},{"x":6,"y":6,"z":2,"color":"Green","names":[]},{"x":7,"y":6,"z":2,"color":"Green","names":[]},{"x":0,"y":9,"z":0,"color":"Brown","names":[]},{"x":1,"y":9,"z":0,"color":"Brown","names":[]},{"x":3,"y":6,"z":3,"color":"Blue","names":[]},{"x":2,"y":9,"z":0,"color":"Brown","names":[]},{"x":4,"y":6,"z":3,"color":"Blue","names":[]},{"x":3,"y":9,"z":0,"color":"Brown","names":[]},{"x":5,"y":6,"z":3,"color":"Blue","names":[]},{"x":4,"y":9,"z":0,"color":"Brown","names":[]},{"x":6,"y":6,"z":3,"color":"Blue","names":[]},{"x":5,"y":9,"z":0,"color":"Brown","names":[]},{"x":6,"y":9,"z":0,"color":"Brown","names":[]},{"x":7,"y":9,"z":0,"color":"Brown","names":[]},{"x":8,"y":9,"z":0,"color":"Brown","names":[]},{"x":9,"y":9,"z":0,"color":"Brown","names":[]},{"x":0,"y":2,"z":0,"color":"Brown","names":[]},{"x":1,"y":2,"z":0,"color":"Brown","names":[]},{"x":2,"y":2,"z":0,"color":"Brown","names":[]},{"x":3,"y":2,"z":0,"color":"Brown","names":[]},{"x":4,"y":2,"z":0,"color":"Brown","names":[]},{"x":5,"y":2,"z":0,"color":"Brown","names":[]},{"x":6,"y":2,"z":0,"color":"Brown","names":[]},{"x":7,"y":2,"z":0,"color":"Brown","names":[]},{"x":8,"y":2,"z":0,"color":"Brown","names":[]},{"x":9,"y":2,"z":0,"color":"Brown","names":[]},{"x":1,"y":2,"z":1,"color":"Red","names":[]},{"x":2,"y":2,"z":1,"color":"Red","names":[]},{"x":3,"y":2,"z":1,"color":"Red","names":[]},{"x":4,"y":2,"z":1,"color":"Red","names":[]},{"x":5,"y":2,"z":1,"color":"Red","names":[]},{"x":6,"y":2,"z":1,"color":"Red","names":[]},{"x":7,"y":2,"z":1,"color":"Red","names":[]},{"x":8,"y":2,"z":1,"color":"Red","names":[]},{"x":2,"y":2,"z":2,"color":"Green","names":[]},{"x":3,"y":2,"z":2,"color":"Green","names":[]},{"x":4,"y":2,"z":2,"color":"Green","names":[]},{"x":5,"y":2,"z":2,"color":"Green","names":[]},{"x":6,"y":2,"z":2,"color":"Green","names":[]},{"x":7,"y":2,"z":2,"color":"Green","names":[]},{"x":0,"y":5,"z":0,"color":"Brown","names":[]},{"x":1,"y":5,"z":0,"color":"Brown","names":[]},{"x":2,"y":5,"z":0,"color":"Brown","names":[]},{"x":3,"y":5,"z":0,"color":"Brown","names":[]},{"x":4,"y":5,"z":0,"color":"Brown","names":[]},{"x":5,"y":5,"z":0,"color":"Brown","names":[]},{"x":6,"y":5,"z":0,"color":"Brown","names":[]},{"x":7,"y":5,"z":0,"color":"Brown","names":[]},{"x":8,"y":5,"z":0,"color":"Brown","names":[]},{"x":9,"y":5,"z":0,"color":"Brown","names":[]},{"x":1,"y":5,"z":1,"color":"Red","names":[]},{"x":2,"y":5,"z":1,"color":"Red","names":[]},{"x":3,"y":5,"z":1,"color":"Red","names":[]},{"x":4,"y":5,"z":1,"color":"Red","names":[]},{"x":5,"y":5,"z":1,"color":"Red","names":[]},{"x":6,"y":5,"z":1,"color":"Red","names":[]},{"x":7,"y":5,"z":1,"color":"Red","names":[]},{"x":8,"y":5,"z":1,"color":"Red","names":[]}]],
];

configs.store = sessionStorage;

/* http://www.colourlovers.com/palette/1473/Ocean_Five */
// configs.colorMap = {
//   Red: [204, 51, 63], /* Red */
//   Orange: [235, 104, 65], /* Orange */
//   Yellow: [237, 201, 81], /* Yellow */
//   Cyan: [0, 160, 176], /* Cyan */
//   Brown: [106, 74, 60], /* Brown */
// };

/* http://colrd.com/palette/23813/?download=css */
configs.colorMap = {
  Red: [209, 0, 0],
  Orange: [255, 102, 34],
  Yellow: [255, 218, 33],
  Green: [51, 221, 0],
  Blue: [17, 51, 204],
  Black: [10, 10, 10],
  White: [255, 255, 240],
  Pink: [255, 20, 147],
  Brown: [139, 69, 19],
  Anchor: [0, 160, 176],
  Gray: [144, 144, 144],
};

export default configs;
