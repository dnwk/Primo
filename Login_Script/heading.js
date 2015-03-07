function loginscreen(){
	$.magnificPopup.open({
		items: {
		  src: '<div class="white-popup"><div class="logostage"><img src="http://www.whitman.edu/penrose/library/images/PenroseLibraryLogo.png" alt="library logo" style="width:50%" /></div><div class="contentstage"><p><a href="http://'+window.location.hostname+'/primo_library/libweb/action/login.do?loginFn=signin&vid=WHITC&targetURL='+document.location+'&fromLogin=true">Whitman College students, faculty, and staff</a><br/><span class="popup-description">Log in for expanded access to electronic materials and Summit/ILL request options.</span></p><p><a href="https://alliance-primo.hosted.exlibrisgroup.com/pds?func=load-login&amp;calling_system=primo&amp;institute=01ALLIANCE_WHITC&amp;PDS_HANDLE=&amp;url=http://'+window.location.hostname+'/primo_library/libweb/action/login.do?targetURL='+document.location+'">Other registered patrons</a><br/><span class="popup-description">Including retired faculty/staff, alumni, and community borrowers</span></p><p><a href="#" onclick="$.magnificPopup.close()">Continue as guest</a></p><p><span class="popup-description">For assistance, contact the Penrose Library Circulation Desk (509-527-5192). &nbsp; </span></p></div>',
		  type: 'inline',
		  closeBtnInside: true
		},
		callbacks: {
			close: function() {
				$.cookie(jQuery.PRIMO.session.user.id, 'ignored' , { expires:1 });
				//optional
				$('#exlidMainMenuTile').notify("Login to access more content.",{ elementPosition:"bottom right" , autoHide:false, arrowShow: false});
			}
		}//callback
	});
	
}
$(document).ready(function() {

if($.PRIMO.session.user.isLoggedIn()==false&&$.cookie(jQuery.PRIMO.session.user.id)!='ignored'){
		loginscreen();
}//if
		
//optional		
if(jQuery.PRIMO.session.user.isLoggedIn()==false&&$.cookie(jQuery.PRIMO.session.user.id)=='ignored'){
		$('#exlidMainMenuTile').notify("Login to access more content.",{ elementPosition:"bottom right" , autoHide:false, arrowShow: false});
}

//Customize Login on the upper right
$('#exlidSignIn').html('<a onclick="loginscreen();">Sign in</a>');
//overrite login buttons
$('#exlidSignIn').html('<a href=\'#\' onclick="loginscreen();">Sign in</a>');
$( document ).ajaxComplete(function() {
	$('em.EXLTabHeaderContentAdditionalDataLineSignIn').html('<a  href=\'#\' onclick="loginscreen();">Sign-in for more options</a>');
});
});
