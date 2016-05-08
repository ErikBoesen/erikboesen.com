var page = {
    email: document.getElementById('email'),
    down: document.getElementById('down'),
    sections: {
        bwnt: document.getElementById('bwnt')
    },
    clock: document.getElementById('clock')
};

page.email.onclick = function() {
    window.open('mailto:me@erikboesen.com');
};

page.down.onclick = function() {
	var previousSection = window.innerHeight * Math.floor(document.body.scrollTop / window.innerHeight);
	animation = setInterval(function() {
		document.body.scrollTop += 8;
		if (window.innerHeight * Math.floor(document.body.scrollTop / window.innerHeight) - 1 >= previousSection || document.body.scrollTop % window.innerHeight === 0) {
			clearInterval(animation);
            document.body.scrollTop = previousSection + window.innerHeight;
		}
	}, 1);
};

m = 0;
h = 24;
// This section manages the clock portion of the pageview
setInterval(function() {
    m++;
    if (m === 60) {
        m = 0;
        h++;
        if (h === 25) {
            h = 1;
        }
    }
	if (h >= 6 && h <= 20) {
		page.sections.bwnt.className = 'light';
	} else {
		page.sections.bwnt.className = 'night';
	}
    var vh;
	if (h > 12) { vh = h - 12; }
    else { vh = h; }
	if (m < 10) { m = '0' + m; }
    page.clock.innerHTML = vh + ':' + m;
}, 10);
clockSection.onclick = function() {
    window.location.href = '';
};












if (document.location.protocol=='http:') {
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-44442416-1', 'auto');
      ga('send', 'pageview');
}
