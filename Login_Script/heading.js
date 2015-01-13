
function msieversion() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))    {
           return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
		}else{            
           return false;
		}
   return false;
}
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}
//login

$(document).ready(function() {
	//workaround for IE
if(msieversion()!= false && getURLParameter('fromLogin')=='true'&&$.PRIMO.session.user.isLoggedIn()==false) location.reload();

if($.PRIMO.session.user.isLoggedIn()==false&&$.cookie(jQuery.PRIMO.session.user.id)!='ignored'){
		$.magnificPopup.open({
		items: {
		  src: '<div class="white-popup"><div class="logostage"><img src="http://www.whitman.edu/penrose/library/images/PenroseLibraryLogo.png" alt="library logo" style="width:50%" /></div><div class="contentstage"><p><a href="http://'+window.location.hostname+'/primo_library/libweb/action/login.do?loginFn=signin&vid=WHITC&targetURL='+document.location+'&fromLogin=true">Whitman College students, faculty, and staff</a><br/><span class="popup-description">Log in for expanded access to electronic materials and Summit/ILL request options.</span></p><p><a href="https://'+window.location.hostname+'/pds?func=load-login&amp;calling_system=primo&amp;institute=01ALLIANCE_WHITC&amp;PDS_HANDLE=&amp;url=http://'+window.location.hostname+'/primo_library/libweb/action/login.do?targetURL='+document.location+'">Registered visiting patrons</a></p><p><a href="#" onclick="$.magnificPopup.close()">Continue as guest</a></p><p><span class="popup-description">For assistance, contact the Penrose Library Circulation Desk (509-527-5192). &nbsp; </span></p></div>',
		  type: 'inline',
		  closeBtnInside: true
		},
		callbacks: {
			close: function() {
				$('#exlidMainMenuTile').notify("Login to access more content.",{ elementPosition:"bottom right" , autoHide:false, arrowShow: false});
				$.cookie(jQuery.PRIMO.session.user.id, 'ignored' , { expires:1 });
		}
	  }//callback
	});
}//if
		
if(jQuery.PRIMO.session.user.isLoggedIn()==false&&$.cookie(jQuery.PRIMO.session.user.id)=='ignored'){
		$('#exlidMainMenuTile').notify("Login to access more content.",{ elementPosition:"bottom right" , autoHide:false, arrowShow: false});
}
//"ask us" trigger FreshDesk		
$('a.EXLMainMenuITEMask_us').click(function(){
			FreshWidget.show();
	})
//FreshDesk
FreshWidget.init("", {"queryString": "&widgetType=popup&formTitle=Ask+Us+&attachFile=no&searchArea=no", "widgetType": "popup", "buttonType": "text", "buttonText": "Ask Us", "buttonColor": "white", "buttonBg": "#0075b0", "alignment": "2", "offset": "250px", "formHeight": "320px", "url": "https://penroselibrary.freshdesk.com"} );
