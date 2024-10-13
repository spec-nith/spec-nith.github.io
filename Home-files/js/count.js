const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/specnith.com/rathi/?amount=1')
	.then(res => res.json())
	.then(res => {
        // document.getElementById('count').setAttribute("data-to", res.value);
        // $(countEl).attr('data-to',res.value);
        document.getElementById('count').innerHTML=res.value;
	})
}