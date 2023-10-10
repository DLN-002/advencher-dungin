namespace SpriteKind {
    export const StatusBar = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    info.changeScoreBy(1000)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setFlag(SpriteFlag.Invisible, true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.setLife(30)
    tiles.setCurrentTilemap(tilemap`level42`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 2))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    info.setLife(0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setFlag(SpriteFlag.Invisible, false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level31`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenEast, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level40`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 1))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    info.setLife(3)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 27))
    tiles.setCurrentTilemap(tilemap`level55`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function (sprite, location) {
    info.setLife(0)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast2, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2g`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.setLife(25)
    tiles.setCurrentTilemap(tilemap`level2b`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedSouth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setWallAt(tiles.getTileLocation(18, 47), true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardSpike, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level44`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 2))
    info.setLife(10)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
info.onLifeZero(function () {
    mySprite.destroy(effects.rings, 500)
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark5, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level37`)
    info.setLife(30)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level32`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenWest, function (sprite, location) {
    info.setLife(30)
    tiles.setCurrentTilemap(tilemap`level38`)
    tiles.placeOnRandomTile(mySprite, sprites.castle.tileDarkGrass3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    info.setLife(25)
    tiles.setCurrentTilemap(tilemap`level0`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterWest2, function (sprite, location) {
    info.setLife(30)
    tiles.setCurrentTilemap(tilemap`level26`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level46`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(7, 7))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    tiles.setTileAt(location, sprites.castle.tileGrass3)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    info.setLife(20)
    tiles.setCurrentTilemap(tilemap`level2b0`)
})
let mySprite: Sprite = null
scene.setBackgroundColor(5)
game.splash("Go")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f 5 5 f . . . . . . . . . . 
    . . 5 5 5 5 . . . . . . . . . . 
    . . f 5 5 f . . . . . . . . . . 
    . . f f f f . . . . . . . . . . 
    8 8 8 8 8 8 8 8 . . . . . . . . 
    8 8 8 8 8 8 8 8 . . . . . . . . 
    5 5 8 8 8 8 5 5 . . . . . . . . 
    5 5 8 8 8 8 5 5 . . . . . . . . 
    . . 8 8 8 8 . . . . . . . . . . 
    . . 5 5 5 5 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setScore(0)
info.setLife(15)
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`level1`)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
mySprite.setBounceOnWall(true)
mySprite.setFlag(SpriteFlag.Ghost, true)
mySprite.setFlag(SpriteFlag.GhostThroughTiles, false)
mySprite.setFlag(SpriteFlag.GhostThroughWalls, false)
mySprite.setStayInScreen(true)
