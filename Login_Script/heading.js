
$(document).ready(function() {
//use jQuery.Primo to determine if user has logedin. And use jQuery.Cookie to check if user had already ignore the splash screen
if(jQuery.PRIMO.session.user.isLoggedIn()==false&&$.cookie(jQuery.PRIMO.session.user.id)!='ignored'){
	$.magnificPopup.open({
		items: {
		//src is basic the HTML code to display in the splash window. Put in whatever content you want.
		  src: '<div class="white-popup"><div class="logostage"><img src="http://www.whitman.edu/penrose/library/images/PenroseLibraryLogo.png" alt="library logo" style="width:50%" /></div><div class="contentstage"><p><a href="http://alliance-primo.hosted.exlibrisgroup.com/primo_library/libweb/action/login.do?loginFn=signin&vid=WHITC&targetURL='+document.location+'&fromLogin=true">Whitman College students, faculty, and staff</a><br/><span class="popup-description">Log in for expanded access to electronic materials and Summit/ILL request options.</span></p><p><a href="https://alliance-primo.hosted.exlibrisgroup.com/pds?func=load-login&amp;calling_system=primo&amp;institute=01ALLIANCE_WHITC&amp;PDS_HANDLE=&amp;url=http://alliance-primo.hosted.exlibrisgroup.com/primo_library/libweb/action/login.do?targetURL='+document.location+'">Registered visiting patrons</a></p><p><a href="#" onclick="$.magnificPopup.close()">Continue as guest</a></p><p><span class="popup-description">For assistance, contact the Penrose Library Circulation Desk (509-527-5192). &nbsp; </span></p></div>',
		  type: 'inline',
		  closeBtnInside: true
		},
		callbacks: {
			close: function() {
			//Add some sticky notice (optional)
				$('#exlidMainMenuTile').notify("Login to access more content.",{ elementPosition:"bottom right" , autoHide:false, arrowShow: false});
			//Set a cookie so that we know user has already ignored thus will not prompt again in this session	
				$.cookie(jQuery.PRIMO.session.user.id, 'ignored' , { expires:1 });
			}
		}
	});	
}
//When we find out that there is a ignore cookie, put a sticky notice on upper right corner (optional)	
	if(jQuery.PRIMO.session.user.isLoggedIn()==false&&$.cookie(jQuery.PRIMO.session.user.id)=='ignored'){
		$('#exlidMainMenuTile').notify("Login to access more content.",{ elementPosition:"bottom right" , autoHide:false, arrowShow: false});
		}
});