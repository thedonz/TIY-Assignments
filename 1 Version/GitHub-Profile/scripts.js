// Trying out some jQuery tips from @arigonzo

$.ajax ({
      type: 'GET',
      url: 'https://api.github.com/users/xdonze',
      success: function(objects){
        $('#name').html(objects.name);
        $('#user').html(objects.login);
        $('#avatar').attr('src', objects.avatar_url);
        $('#company').html(objects.company);
        $('#location').html(objects.location);
        $('#link').html(objects.blog).attr('href', objects.blog);
        $('#email').html(objects.email).attr('href', objects.email);
  }
});


    function drop(id) {
          var navID = ['contrib','repos','activity'];
          var dropDown = document.getElementById(id);
          navID.forEach(function(value,index){
            var dropMenu = value + 'menu';
              if(value==id){
                  dropDown.style.display = 'block';
                  document.getElementById(dropMenu).style.borderColor = 'lightgray'
                  document.getElementById(dropMenu).style.borderBottomColor = 'white'
              }else{
                  document.getElementById(value).style.display = 'none';
                  document.getElementById(dropMenu).style.borderColor = 'transparent'
              };
          });
        };
