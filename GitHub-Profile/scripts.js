// Trying out some jQuery tips from @arigonzo

$.ajax ({
      type: 'GET',
      url: 'https://api.github.com/users/xdonze',
      success: function(objects){
        $('#name').html(objects.name);
      }
    });
