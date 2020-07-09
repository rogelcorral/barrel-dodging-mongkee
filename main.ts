namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
    music.baDing.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
        music.jumpUp.play()
    }
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.brick,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths1,sprites.builtin.oceanDepths6,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.builtin.oceanDepths8,sprites.builtin.oceanDepths9,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.builtin.crowd1,sprites.castle.saplingOak,sprites.castle.tileDarkGrass2,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundSouthWest0],
            TileScale.Sixteen
        ))
mySprite = sprites.create(img`
. . . . . . . f f f f f . . . . 
. . . . . . f e e e e e f . . . 
. . . . . f e e e d d 3 d f . . 
. . . . f f e e d d f d d f . . 
. . . f d d e e d d f d d d c . 
. . . c d b e e d d d d e e d c 
. . . c d b e e d d c d d d d c 
. . . f c f e e d d d f f f f c 
. . . . f e e e e f f f b 1 f . 
. . . . f e e f f f e f 1 1 f . 
. f f . f f f e e e e f f f . . 
. f e . f f e e e e f e e f . . 
. f e f f f f f f f e e e f f . 
. f e f f f b b f e e f 1 b f . 
. f f f f b d d e e f f 1 1 f . 
. . f f f f f f f f f f f f f . 
`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
mySprite.ay = 500
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
d e e e e e e d 
e e e e e e e e 
d d d d d d d d 
e e e e e e e e 
e e e e e e e e 
d d d d d d d d 
e e e e e e e e 
d e e e e e e d 
`, Math.randomRange(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    info.changeScoreBy(1)
})
