const text=baffle(".electrothontitle");
var motto=['|SEARCH|','|PLAN|','|ENGAGE|','|CREATE|','SEARCH | PLAN | ENGAGE | CREATE'];
var i=0;
function write(){
    document.getElementById("tagb").innerHTML=motto[i];
    i++;
}
text.set({
    characters: '>░█ ░▓░█░ ░░▒░▓ █░░ <██▓> ░░░▓ ▓░> <▒░█ █░░▓',
    speed: 250
})
text.start();
text.reveal(4000);

const text2=baffle("#dates");
text2.set({
    characters: '123456789012345678901234567890',
    speed: 500
})
text2.start();
text2.reveal(4000);

write();
setTimeout(write, 2000);

setTimeout(write, 3000);

setTimeout(write, 4000);
setTimeout(write, 5000);
