const text=baffle(".electrothontitle");
var motto=['|SEARCH|','|PLAN|','|ENGAGE|','|CREATE|','SEARCH | PLAN | ENGAGE | CREATE'];
var i=0;
function write(){
    document.getElementById("tagb").innerHTML=motto[i];
    i++;
}
text.set({
    characters: '>░█ ░▓░█░ ░░▒░▓ █░░ <██▓> ░░░▓ ▓░> <▒░█ █░░▓',
    speed: 390
})
text.start(4000);
text.reveal(7000);

const text2=baffle("#dates");
text2.set({
    characters: '123456789012345678901234567890',
    speed: 500
})
text2.start(4000);
text2.reveal(7000);

write();
setTimeout(write, 4000);

setTimeout(write, 5000);

setTimeout(write, 6000);
setTimeout(write, 7000);