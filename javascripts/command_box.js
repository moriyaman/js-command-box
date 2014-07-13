var commandBox = function(custom_options){
  var commands = [];
  var command_options = {
    conami_command: {
      command: "38,38,40,40,37,39,37,39",
      action: function(){ console.log('hadouken'); }
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

