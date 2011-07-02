// hide the left col (I don't care for it)
$(".a-b-la-T,.a-p-la-T,.a-St-R,.a-St-FK-L506cc").hide().css('width','0');

// hide the search bar, I've got keys!
$('.a-U-T').hide();

// keyboard nav
var keys = function(e) {
  var NAV = {
    49: '/stream'    // 1
    , 50: '/photos'  // 2
    , 51: '/me'      // 3
    , 52: '/circles' // 4
  }
  , UI = {
    70/*f*/: function() { // toggle find
      $('.a-U-T').slideToggle('fast');
    }
    , 71/*g*/: function() { // toggle google bar
      $("#gb").slideToggle('fast');
    }
  };
  if(!(/textarea|select/i.test(e.target.nodeName)
     || e.target.type === 'text'
     || $(e.target).attr('contenteditable'))) {
     if(path = NAV[e.which]) {
       // tricking click on the nav clicks does not work :/
       //$('.a-b-d2Q2jb a[href$="'+path+'"]').click();
       window.location.href = path;
     } else if(ui = UI[e.which]) {
         ui();
     }
   }
 };
$(document).bind('keydown', keys);

// add left border to stream posts as you hover over them (makes it easier
// to deliniate posts)
$("div[id|=update]").hover(
  function(){$(this).css({'background':'#FCFCFC','border-left':'1px solid #FF12A0'}); },
  function(){ $(this).css({'background':'#fff', 'border-left':'1px solid #eee'}); }
);