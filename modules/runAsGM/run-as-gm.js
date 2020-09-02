Hooks.once('init', () => {
  game.socket.on('module.run-as-gm', (data) => {
    const macro = game.macros.entities.find(macro => macro.name === data.macroName)
    macro.execute
  })
});
