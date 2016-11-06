var trackingId = 'UA-86107022-1';
var disableKey = 'ga-disable-' + trackingId;

// Disable tracking if the opt-out cookie exists.
if (document.cookie.indexOf(disableKey + '=true') > -1) {
  window[disableKey] = true;
}

function optOut() {
  document.cookie = disableKey + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
  window[disableKey] = true;
  alert("You have opted out of tracking on this site.");
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-86107022-1', 'auto');
ga('send', 'pageview');
