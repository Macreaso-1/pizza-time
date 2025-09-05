browserEvents.D.onEvent(browserEvents.KeyEvent.Pressed, function () {
    player2.vx = 10
    player2.setImage(assets.image`miImagen3`)
})
browserEvents.A.onEvent(browserEvents.KeyEvent.Pressed, function () {
    player2.vx = -10
    player2.setImage(assets.image`miImagen1`)
})
browserEvents.S.onEvent(browserEvents.KeyEvent.Pressed, function () {
    player2.vy = -10
    player2.setImage(assets.image`miImagen`)
})
browserEvents.S.onEvent(browserEvents.KeyEvent.Released, function () {
    player2.vy = 10
    player2.setImage(assets.image`miImagen2`)
})
browserEvents.D.onEvent(browserEvents.KeyEvent.Released, function () {
    player2.vx = 0
})
browserEvents.A.onEvent(browserEvents.KeyEvent.Released, function () {
    player2.vx = 0
})
browserEvents.W.onEvent(browserEvents.KeyEvent.Pressed, function () {
    player2.vy = 0
})
let player2: Sprite = null
player2 = sprites.create(assets.image`miImagen`, SpriteKind.Player)
scene.cameraFollowSprite(player2)
tiles.setCurrentTilemap(tilemap`nivel1`)
