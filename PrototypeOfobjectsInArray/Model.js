let myGamePiece;
let healthImg = new Image();
let myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 30);
    },
clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
};
let img;
let charHP = [
{HP:"https://cdn.discordapp.com/attachments/543474495210389507/687270799299575829/Health_Bar_Done_Minus_7.png"}, //[0]
{HP:"https://cdn.discordapp.com/attachments/543474495210389507/687270805218000902/Health_Bar_Done_Minus_6.png"}, //[1]
{HP:"https://cdn.discordapp.com/attachments/543474495210389507/687270808917377075/Health_Bar_Done_Minus_5.png"}, //[2]
{HP:"https://cdn.discordapp.com/attachments/543474495210389507/687270812772073512/Health_Bar_Done_Minus_4.png"}, //[3]
{HP:"https://cdn.discordapp.com/attachments/543474495210389507/687270817398128669/Health_Bar_Done_Minus_3.png"}, //[4]
{HP:"https://cdn.discordapp.com/attachments/543474495210389507/687270821474992149/Health_Bar_Done_Minus_2.png"}, //[5]
{HP:"https://cdn.discordapp.com/attachments/543474495210389507/687270823723008020/Health_Bar_Done_Minus_1.png"}, //[6]
{HP:"https://cdn.discordapp.com/attachments/543474495210389507/687270826768203790/Health_Bar_Done_Full.png"}     //[7]
]; 