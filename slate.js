S.log("START");
// Configs
S.cfga({
	"defaultToCurrentScreen" : true,
	"secondsBetweenRepeat" : 0.1,
	"checkDefaultsOnLoad" : true,
	"focusCheckWidthMax" : 3000,
	"orderScreensLeftToRight" : true
});

// Monitors
var monTbolt  = "2560x1600";
var monLaptop = "1920x1200";

// Operations
var lapFull = S.op("move", {
	"screen" : monLaptop,
	"x" : "screenOriginX",
	"y" : "screenOriginY",
	"width" : "screenSizeX",
	"height" : "screenSizeY"
});
var lapChat = S.op("corner", {
	"screen" : monLaptop,
	"direction" : "top-left",
	"width" : "screenSizeX/9",
	"height" : "screenSizeY"
});
var lapMain = lapChat.dup({ "direction" : "top-right", "width" : "8*screenSizeX/9" });
var tboltFull = S.op("move", {
	"screen" : monTbolt,
	"x" : "screenOriginX",
	"y" : "screenOriginY",
	"width" : "screenSizeX",
	"height" : "screenSizeY"
});
var tboltBig = S.op("move", {
	"screen" : monTbolt,
	"x" : "screenOriginX+screenSizeX/3",
	"y" : "screenOriginY",
	"width" : "screenSizeX*2/3",
	"height" : "screenSizeY",
});
var tboltLeft = tboltFull.dup({ "width" : "screenSizeX/3" });
var tboltMid = tboltLeft.dup({ "x" : "screenOriginX+screenSizeX/3" });
var tboltRight = tboltLeft.dup({ "x" : "screenOriginX+(screenSizeX*2/3)" });
var tboltLeftTop = tboltLeft.dup({ "height" : "screenSizeY/2" });
var tboltLeftBot = tboltLeftTop.dup({ "y" : "screenOriginY+screenSizeY/2" });
var tboltMidTop = tboltMid.dup({ "height" : "screenSizeY/2" });
var tboltMidBot = tboltMidTop.dup({ "y" : "screenOriginY+screenSizeY/2" });
var tboltRightTop = tboltRight.dup({ "height" : "screenSizeY/2" });
var tboltRightBot = tboltRightTop.dup({ "y" : "screenOriginY+screenSizeY/2" });

var halfLeft = tboltFull.dup({ "width" : "screenSizeX/2" });

var horizontalThird = tboltFull.dup({ "width" : "screenSizeX/3" });
var horizontalTwoThird = tboltFull.dup({ "width" : "screenSizeX/3*2" });

var horizontalQuarter = tboltFull.dup({ "width" : "screenSizeX/4" });
var horizontalThreeQuarter = tboltFull.dup({ "width" : "screenSizeX/4*3" });

var thirdHorizontalLeft = horizontalThird.dup({ "x" : "screenOriginX" });
var thirdHorizontalRight = horizontalTwoThird.dup({ "x" : "screenOriginX+(screenSizeX*1/3)" });

var thirdHorizontalTopLeft = horizontalThird.dup({ "height" : "screenSizeY/2", "x" : "screenOriginX" });
var thirdHorizontalTopRight = horizontalTwoThird.dup({ "height" : "screenSizeY/2", "x" : "screenOriginX+(screenSizeX*1/3)" });
var thirdHorizontalBotLeft = thirdHorizontalTopLeft.dup({ "y" : "screenOriginY+screenSizeY/2" });
var thirdHorizontalBotRight = thirdHorizontalTopRight.dup({ "y" : "screenOriginY+screenSizeY/2" });


var quarterHorizontalLeft = horizontalQuarter.dup({ "x" : "screenOriginX" });
var quarterHorizontalRight = horizontalThreeQuarter.dup({ "x" : "screenOriginX+(screenSizeX*1/4)" });

var quarterHorizontalTopLeft = horizontalQuarter.dup({ "height" : "screenSizeY/2", "x" : "screenOriginX" });
var quarterHorizontalTopRight = horizontalThreeQuarter.dup({ "height" : "screenSizeY/2", "x" : "screenOriginX+(screenSizeX*1/4)" });
var quarterHorizontalBotLeft = quarterHorizontalTopLeft.dup({ "y" : "screenOriginY+screenSizeY/2" });
var quarterHorizontalBotRight = quarterHorizontalTopRight.dup({ "y" : "screenOriginY+screenSizeY/2" });

var quarterHorizontalTopLeftTwo = horizontalQuarter.dup({ "height" : "screenSizeY/2", "x" : "screenOriginX+screenSizeX/4" });
var quarterHorizontalTopLeftThree = horizontalQuarter.dup({ "height" : "screenSizeY/2", "x" : "screenOriginX+screenSizeX/4+screenSizeX/4" });
var quarterHorizontalTopLeftFour = horizontalQuarter.dup({ "height" : "screenSizeY/2", "x" : "screenOriginX+screenSizeX/4+screenSizeX/4+screenSizeX/4" });

var quarterHorizontalBotLeftTwo = quarterHorizontalTopLeft.dup({ "y" : "screenOriginY+screenSizeY/2", "x" : "screenOriginX+screenSizeX/4" });
var quarterHorizontalBotLeftThree = quarterHorizontalTopLeft.dup({ "y" : "screenOriginY+screenSizeY/2", "x" : "screenOriginX+screenSizeX/4+screenSizeX/4" });
var quarterHorizontalBotLeftFour = quarterHorizontalTopLeft.dup({ "y" : "screenOriginY+screenSizeY/2", "x" : "screenOriginX+screenSizeX/4+screenSizeX/4+screenSizeX/4" });


var quarterLeft = halfLeft.dup({});
var quarterRight = quarterLeft.dup({ "x" : "screenOriginX+(screenSizeX*1/2)" });

var quarterTopLeft = halfLeft.dup({ "height" : "screenSizeY/2" });
var quarterTopRight = quarterTopLeft.dup({ "x" : "screenOriginX+(screenSizeX*1/2)" });
var quarterBottomLeft = quarterTopLeft.dup({ "y" : "screenOriginY+screenSizeY/2" });
var quarterBottomRight = quarterTopRight.dup({ "y" : "screenOriginY+screenSizeY/2" });

// Batch bind everything. Less typing.
S.bnda({

	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DONE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

	// FULL
	// Resize Screen AKA full screen
	// NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
	"up:shift;ctrl;alt;cmd" : S.op("push", { "direction" : "left", "style" : "bar-resize:screenSizeX/1" }),
	// Layout Bindings
	"padEnter:ctrl;alt" : tboltFull,

	// HALVES
	// Push Bindings AKA halves
	// NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
	"-:ctrl;alt;cmd" : quarterTopLeft,
	"=:ctrl;alt;cmd" : quarterTopRight,
	"[:ctrl;alt;cmd" : quarterBottomLeft,
	"]:ctrl;alt;cmd" : quarterBottomRight,
	".:ctrl;alt;cmd" : quarterLeft,
	"/:ctrl;alt;cmd" : quarterRight,

	"9:ctrl;alt;cmd" : thirdHorizontalTopLeft,
	"0:ctrl;alt;cmd" : thirdHorizontalTopRight,
	"o:ctrl;alt;cmd" : thirdHorizontalBotLeft,
	"p:ctrl;alt;cmd" : thirdHorizontalBotRight,
	"m:ctrl;alt;cmd" : thirdHorizontalLeft,
	",:ctrl;alt;cmd" : thirdHorizontalRight,

	"7:ctrl;alt;cmd" : quarterHorizontalTopLeft,
	"8:ctrl;alt;cmd" : quarterHorizontalTopRight,
	"u:ctrl;alt;cmd" : quarterHorizontalBotLeft,
	"i:ctrl;alt;cmd" : quarterHorizontalBotRight,
	"b:ctrl;alt;cmd" : quarterHorizontalLeft,
	"n:ctrl;alt;cmd" : quarterHorizontalRight,

	"1:ctrl;alt;cmd" : quarterHorizontalTopLeft,
	"2:ctrl;alt;cmd" : quarterHorizontalTopLeftTwo,
	"3:ctrl;alt;cmd" : quarterHorizontalTopLeftThree,
	"4:ctrl;alt;cmd" : quarterHorizontalTopLeftFour,

	"q:ctrl;alt;cmd" : quarterHorizontalBotLeft,
	"w:ctrl;alt;cmd" : quarterHorizontalBotLeftTwo,
	"e:ctrl;alt;cmd" : quarterHorizontalBotLeftThree,
	"r:ctrl;alt;cmd" : quarterHorizontalBotLeftFour,

	"right:ctrl;alt;cmd" : S.op("push", { "direction" : "right", "style" : "bar-resize:screenSizeX/2" }),
	"left:ctrl;alt;cmd" : S.op("push", { "direction" : "left", "style" : "bar-resize:screenSizeX/2" }),
	"up:ctrl;alt;cmd" : S.op("push", { "direction" : "up", "style" : "bar-resize:screenSizeY/2" }),
	"down:ctrl;alt;cmd" : S.op("push", { "direction" : "down", "style" : "bar-resize:screenSizeY/2" }),

	// THIRDS KEYBOARD
	"8:ctrl;alt" : tboltLeft,
	"9:ctrl;alt" : tboltMid,
	"0:ctrl;alt" : tboltRight,

	// THIRDS PADS
	"pad7:ctrl;alt" : tboltLeft,
	"pad8:ctrl;alt" : tboltMid,
	"pad9:ctrl;alt" : tboltRight,

	// GRID 3x2 SELECTOR KEYBOARD
	"k:ctrl;alt" : tboltLeftBot,
	"l:ctrl;alt" : tboltMidBot,
	";:ctrl;alt" : tboltRightBot,
	"i:ctrl;alt" : tboltLeftTop,
	"o:ctrl;alt" : tboltMidTop,
	"p:ctrl;alt" : tboltRightTop,


	// GRID 3x2 SELECTOR PAD
	"pad1:ctrl;alt" : tboltLeftBot,
	"pad2:ctrl;alt" : tboltMidBot,
	"pad3:ctrl;alt" : tboltRightBot,
	"pad4:ctrl;alt" : tboltLeftTop,
	"pad5:ctrl;alt" : tboltMidTop,
	"pad6:ctrl;alt" : tboltRightTop,

	// CHAT VERSION KEYBOARD
	// Basic Location Bindings
	"-:ctrl;alt" : lapChat,
	"=:ctrl;alt" : lapMain,

	// CHAT VERSION PAD
	// Basic Location Bindings
	"pad0:ctrl;alt" : lapChat,
	"pad.:ctrl;alt" : lapMain,

	// Grid AKA draw grid
	"esc:ctrl" : S.op("grid"),

	// Resize Bindings
	// NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
	"right:shift;alt" : S.op("resize", { "width" : "+10%", "height" : "+0" }),
	"left:shift;alt" : S.op("resize", { "width" : "-10%", "height" : "+0" }),
	"up:shift;alt" : S.op("resize", { "width" : "+0", "height" : "-10%" }),
	"down:shift;alt" : S.op("resize", { "width" : "+0", "height" : "+10%" }),

	"right:shift;ctrl" : S.op("resize", { "width" : "-10%", "height" : "+0", "anchor" : "bottom-right" }),
	"left:shift;ctrl" : S.op("resize", { "width" : "+10%", "height" : "+0", "anchor" : "bottom-right" }),
	"up:shift;ctrl" : S.op("resize", { "width" : "+0", "height" : "+10%", "anchor" : "bottom-right" }),
	"down:shift;ctrl" : S.op("resize", { "width" : "+0", "height" : "-10%", "anchor" : "bottom-right" }),

	// MOVE WINDOW
	// Nudge Bindings AKA move around
	// NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
	"right:alt" : S.op("nudge", { "x" : "+10%", "y" : "+0" }),
	"left:alt" : S.op("nudge", { "x" : "-10%", "y" : "+0" }),
	"up:alt" : S.op("nudge", { "x" : "+0", "y" : "-10%" }),
	"down:alt" : S.op("nudge", { "x" : "+0", "y" : "+10%" }),

	// MOVE TO SCREEN
	// Throw Bindings AKA send selection to direction screen
	// NOTE: some of these may *not* work if you have not removed the expose/spaces/mission control bindings
	"right:ctrl;alt" : S.op("throw", { "screen" : "right", "width" : "screenSizeX", "height" : "screenSizeY" }),
	"left:ctrl;alt" : S.op("throw", { "screen" : "left", "width" : "screenSizeX", "height" : "screenSizeY" }),
	"up:ctrl;alt" : S.op("throw", { "screen" : "up", "width" : "screenSizeX", "height" : "screenSizeY" }),
	"down:ctrl;alt" : S.op("throw", { "screen" : "down", "width" : "screenSizeX", "height" : "screenSizeY" })

});

S.log("END")
