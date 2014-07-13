var commandBox = function(custom_options){
  var commands = [];
  var command_options = {
    konami_command: {
      command: "38,38,40,40,37,39,37,39",
      action:
        function(){
          $('p.js-doumae').animate({zIndex:1},{duration:1000,
            step:function(now){
              $(this).css({transform:'rotate(' + (now * 1080) + 'deg)'});
            },
            complete:function(){
              $('p.js-doumae').css('zIndex', 0);
            }
          });
        }
    }
  };
  $.extend(command_options, custom_options);
  return {
    input: function(command){
      this.store(command);
      this.action();
    },
    store: function(command){
      commands.push(command);
    },
    action: function(){
      var commands_str = commands.join();
      for ( var command_option in command_options) {
        if(commands_str.match(command_options[command_option]['command'])){
          $(command_options[command_option]['action']);
          commands.length = 0;
        }
      }
    }
  };_
};

