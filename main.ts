namespace SpriteKind {
    export const cat = SpriteKind.create()
    export const LISA = SpriteKind.create()
    export const fish = SpriteKind.create()
    export const home = SpriteKind.create()
    export const lllisa = SpriteKind.create()
}
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
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.home, function (sprite, otherSprite) {
    mySprite8 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . f f f f . . . f f f . . . . 
. f 3 3 3 f . . f 3 3 3 f . . . 
f 3 3 3 3 f f f d 3 3 3 3 f . . 
f 3 3 3 d d d d d d 3 3 3 f . . 
f 3 3 d d d d d d d d 3 3 f . . 
. f d d d d d d d d d d f . . . 
. . f d f d d d d f d f . . . . 
. . f f d d 4 4 d d d f . f f . 
. . . f d d d d d d d f f d f . 
. . . f d d d d d d d d d d f . 
. . . f d d d d d d d d d f f . 
. . . . f d d d f d d d f . . . 
. . . . . f d d f d d f . . . . 
`, SpriteKind.lllisa)
    game.showLongText("вы думали я съел мышь? нет! я довёз её да дому! ты прошёл игру поздравляю!!отойди от дома и высади  мышь", DialogLayout.Bottom)
    mySprite8.setPosition(143, 57)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fish, function (sprite, otherSprite) {
    music.magicWand.play()
    game.showLongText("level complete", DialogLayout.Bottom)
    mySprite6.destroy(effects.halo, 200)
    scene.cameraShake(4, 100)
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000040a0a0a0a0a0a0a0a0a0a0a0a0a0a06030f0f0f0f0f0f0f0d100d0f0f0f0f09030f0f0f0f0f0d0d0d100d0f0f0f0f09030f0f0f0f0f0d1010100d0f0f0f0f09030f0f0f0f0f0d100d0d0d0f0f0f0f09030f0f0f0f0f0d100d0f0f0f0f0f0f09030f0f0f0f0f0d100d0f0f0f0f0f0f09030f0f0f0f0f0d100d0f0f0f0f0f0f09030f0f0f0f0f0d100d0f0f0f0f0f0f09030f0f0f0f0f0d100d0f0f0f0f0f0f09030f0f0f0f0f0d100d0f0f0f0f0f0f09030f0f0f0f0f0d100d0f0f0f0f0f0f09030f0f0f0f0f0d100d0f0f0f0f0f0f09030d0d0d0d0d0d100d0f0f0f0f0f0f0903101010101010100d0f0f0f0f0f0f0905080808080808080808080808080807`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . 2 . 2 . . . . 2 
2 . . . . . 2 2 2 . 2 . . . . 2 
2 . . . . . 2 . . . 2 . . . . 2 
2 . . . . . 2 . 2 2 2 . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 2 2 2 2 2 2 . 2 . . . . . . 2 
2 . . . . . . . 2 . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tileGrass3,sprites.castle.tilePath5,sprites.castle.tileGrass2,sprites.castle.saplingOak,sprites.castle.shrub,sprites.dungeon.darkGroundCenter],
            TileScale.Sixteen
        ))
    mySprite.setPosition(21, 231)
    mySprite7 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . 8 a 8 a a 8 a 8 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . a a a 8 8 8 a a 8 a 8 a a a . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . a a a 8 a a 8 a 8 a a 8 8 8 a a 8 a a a . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 . . . . . . . . . . . 
. . . . . . . . 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 . . . . . . . . 
. . . . . a a a 8 a a 8 a a 8 8 8 8 a a 8 a 8 a a 8 a 8 a a 8 8 8 8 a a 8 a a 8 a a a . . . . . 
. . . a a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a a . . . 
d c c a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a c c d 
b c b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b c b 
d b b a a 8 a a 8 8 8 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 8 8 8 a a 8 a a b b d 
d b b a a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a 8 a a 8 a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a a b b d 
d c c a a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a a c c d 
b c b a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a b c b 
d b b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b b d 
d b b a a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a a b b d 
d c c a a 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 a a c c d 
b c b a a 8 8 8 8 a a 8 a a 8 8 8 8 a a 8 8 8 a a 8 8 8 a a 8 8 8 8 a a 8 a a 8 8 8 8 a a b c b 
d b b a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a b b d 
d b b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b b d 
d c c a a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a a c c d 
b c b a a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a a b c b 
d b b a a 8 8 8 8 a a 8 a a 8 a a 8 8 8 c c b b b b c c 8 8 8 a a 8 a a 8 a a 8 8 8 8 a a b b d 
d b b a a 8 a a 8 a a 8 a a 8 8 8 c c b b b b b b b b b b c c 8 8 8 a a 8 a a 8 a a 8 a a b b d 
d c c 8 8 8 a a 8 a a 8 8 8 c c b b b b b c c c c c c b b b b b c c 8 8 8 a a 8 a a 8 8 8 c c d 
b c b a a 8 a a 8 8 8 c c b b b b b c c b d d d d d d b c c b b b b b c c 8 8 8 a a 8 a a b c b 
d b b a a 8 a a c c b b b b b c c b d d d d d d d d d d d d b c c b b b b b c c a a 8 a a b b d 
d b b a a c c b b b b c c c b d d d d d d d d d d d d d d d d d d b c c c b b b b c c a a b b d 
d c c c b b b b c c c b d d d b c c b b b b b b b b b b b b c c b d d d b c c c b b b b c c c d 
c c c c c c c c b b b b b b b c b d d d d d d d d d d d d d d b c b b b b b b b c c c c c c c c 
b d d d d d d d d d d d d b c d d d d d d d d d d d d d d d d d d c b d d d d d d d d d d d d b 
b b c b d d d d d d d d d c b d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d b c d d d d d d d d d b c b b 
b b b c c c c c c c c c c c d 1 b b b b b b b b b b b b b b b b 1 d c c c c c c c c c c c b b b 
b b b b d d d d d d d d d c 1 1 b e e e e e e e e e e e e e e b 1 1 c d d d d d d d d d b b b b 
b b b 8 a a a a a a a 8 d c 1 b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b 1 c d 8 a a a a a a a 8 b b b 
b b b 8 8 8 8 8 8 8 8 8 d c 1 b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b 1 c d 8 8 8 8 8 8 8 8 8 b b b 
b b b 8 3 3 3 3 3 3 3 8 d c b b f 3 b 3 e f f f f f f e 3 3 b e b b c d 8 3 3 3 3 3 3 3 8 b b b 
b b b 8 3 f f 3 f f 3 8 d c b b f 3 b f f f f f f f f f f 3 b e b b c d 8 3 f f 3 f f 3 8 b b b 
b b b 8 3 c c 3 c c 3 8 d c b b f 3 e f f f f f f f f f f e b e b b c d 8 3 c c 3 c c 3 8 b b b 
b b b 8 3 3 3 3 3 3 3 8 d c b b f 3 e e e e e e e e e e e e b e b b c d 8 3 3 3 3 3 3 3 8 b b b 
c b b 8 3 f f 3 f f 3 8 d c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d 8 3 f f 3 f f 3 8 b b c 
c b b 8 3 c c 3 c c 3 8 d c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d 8 3 c c 3 c c 3 8 b b c 
c c b b b b b b b b b b d c b b e 3 b 3 3 b 3 3 b 3 3 f e e e e b b c d b b b b b b b b b b c c 
. c b b d d d d d d d d d c b b e 3 b 3 3 b 3 3 b 3 3 f f f f e b b c d d d d d d d d d b b c . 
. . c b d b b b d b b b d c b b f 3 b 3 3 b 3 3 b 3 3 f 3 3 f e b b c d b b b d b b b d b c . . 
. . . c d b b b d b b b d c b b f 3 b 3 3 b 3 3 b 3 3 b f f e e b b c d b b b d b b b d c . . . 
. . . . b d d d d d d d d c b b f 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d d d d d d d d b . . . . 
. . . . . b d b b b d d d c b b f 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d d d b b b d b . . . . . 
. . . . . . b c c c b b b c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c b b b c c c b . . . . . . 
`, SpriteKind.home)
    mySprite7.setPosition(152, 22)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    mySprite2.destroy(effects.spray, 500)
    music.playMelody("E B E A E G A F ", 500)
    game.showLongText("level complete", DialogLayout.Bottom)
    scene.cameraShake(4, 500)
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100003030303030303030303030303030303030909090903090909090909090303030309090909030903090909090903090303090909090909030303030303030903030909090903090309030909090909030303030303030903090309090909090303030909030309030903030303030903030309090303090309030909090909030303030903030909090309090903090303090309090909090903030303030903030903030303090309030909090909030309090909090903090303030303090303090909090909030909090909030903030303030309090303030303030309030309090909090909090909090909090303030303030303030303030303030303`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . . . . . . 2 2 2 
2 . . . . 2 . 2 . . . . . 2 . 2 
2 . . . . . . 2 2 2 2 2 2 2 . 2 
2 . . . . 2 . 2 . 2 . . . 2 . 2 
2 2 2 2 2 2 . 2 . 2 . . . . . 2 
2 2 . . 2 2 . 2 . 2 2 2 2 2 . 2 
2 2 . . 2 2 . 2 . 2 . . . . . 2 
2 2 2 . 2 2 . . . 2 . . . 2 . 2 
2 . 2 . . . . . . 2 2 2 2 2 . 2 
2 . 2 2 2 2 . 2 . 2 . . . . . 2 
2 . . . . . . 2 . 2 2 2 2 2 . 2 
2 . . . . . . 2 . . . . . 2 . 2 
2 2 2 2 2 . . 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,sprites.castle.tilePath7,sprites.dungeon.hazardLava0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.hazardLava1,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.chestOpen,myTiles.tile2],
            TileScale.Sixteen
        ))
    mySprite.setPosition(21, 231)
    mySprite3 = sprites.create(img`
. . . . . . . e e e e . . . . . 
. . . . . e e 4 5 5 5 e e . . . 
. . . . e 4 5 6 2 2 7 6 6 e . . 
. . . e 5 6 6 7 2 2 6 4 4 4 e . 
. . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
. e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
. e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
e 5 e c 5 4 5 4 5 5 5 e e . . . 
e 5 e e 5 5 5 5 5 4 e . . . . . 
4 5 4 e 5 5 5 5 e e . . . . . . 
. 4 5 4 5 5 4 e . . . . . . . . 
. . 4 4 e e e . . . . . . . . . 
`, SpriteKind.Enemy)
    mySprite3.setPosition(152, 22)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cat, function (sprite, otherSprite) {
    music.playMelody("C5 B A G F E D C ", 900)
    game.showLongText("level complete", DialogLayout.Bottom)
    mySprite4.destroy(effects.confetti, 200)
    scene.cameraShake(4, 500)
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100003030303030303030303030303030303030404040407040707060404040404030307070704070407070407070707040303070707040704070704070707070403030707070407040707040707070704030307070704070407070407070707040303070707040704070704070707070403030707070407040707040707070704030304040704040407070407070404040303040707070707070707070707070403030404040404040404040404070704030307070707070707070707070707040303040404040404040404040407070403030707070707070707070707070707030307070707070707070707070707070303030303030303030303030303030303`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . 2 . . . 2 2 2 2 2 2 
2 . . . 2 . 2 . . 2 . . . . 2 2 
2 . . . 2 . 2 . . 2 . . . . 2 2 
2 . . . 2 . 2 . . 2 . . . . 2 2 
2 . . . 2 . 2 . . 2 . . . . 2 2 
2 . . . 2 . 2 . . 2 . . . . 2 2 
2 . . . 2 . 2 . . 2 . . . . 2 2 
2 2 2 . 2 2 2 . . 2 . . 2 2 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 
2 . . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.castle.tileGrass3,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.collectibleInsignia,sprites.castle.tilePath5],
            TileScale.Sixteen
        ))
    mySprite.setPosition(21, 231)
    mySprite5 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 2 2 2 1 1 5 5 . . 
. . 5 5 5 5 5 2 2 2 1 1 5 5 . . 
. 5 5 2 2 2 2 2 2 2 2 5 5 2 5 . 
. 5 5 2 2 2 2 2 2 2 2 2 5 2 5 . 
. 5 5 2 2 2 2 2 2 2 2 2 2 2 5 . 
. 5 5 2 2 2 2 2 2 2 2 2 2 5 5 . 
. . 5 2 2 2 2 2 2 2 2 2 2 5 . . 
. . 5 5 2 2 2 2 2 2 2 2 5 5 . . 
. . 5 5 2 2 2 2 2 2 2 2 5 . . . 
. . . 5 5 5 5 2 2 2 5 5 5 . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.LISA)
    mySprite5.setPosition(152, 22)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    game.splash("X=" + Math.trunc(mySprite.x), "Y=" + Math.trunc(mySprite.y))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.playMelody("C5 B A G F E D C ", 500)
    game.showLongText("level complete", DialogLayout.Bottom)
    mySprite3.destroy(effects.smiles, 200)
    scene.cameraShake(4, 500)
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100004040404040404040404040404040404040303030303050303070303030505040403030303030503030303030305030404030303030305030505050505050304040305050505050303030303030303040403030303030303030303030303030404030303030303050505050505050304040303030303050303030303030503040403030303050303030303030305030404050505050503030303030303050304040303030305030303030303030303040405050503050305050505050505030404030305030503030303030303050304040505050305050505050505050503040403030303030303030303030303030404040404040404040404040404040404`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . 2 2 2 
2 . . . . . 2 . . . . . . 2 . 2 
2 . . . . . 2 . 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . 2 2 2 2 2 2 2 . 2 
2 . . . . . 2 . . . . . . 2 . 2 
2 . . . . 2 . . . . . . . 2 . 2 
2 2 2 2 2 2 . . . . . . . 2 . 2 
2 . . . . 2 . . . . . . . . . 2 
2 2 2 2 . 2 . 2 2 2 2 2 2 2 . 2 
2 . . 2 . 2 . . . . . . . 2 . 2 
2 2 2 2 . 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.castle.tileDarkGrass1,sprites.castle.saplingPine,sprites.castle.saplingOak,sprites.builtin.forestTiles0,sprites.castle.shrub],
            TileScale.Sixteen
        ))
    mySprite.setPosition(21, 231)
    mySprite4 = sprites.create(img`
. . b b b b b b b b b b b b . . 
. b e 4 4 4 4 4 4 4 4 4 4 e b . 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
b e e 4 4 4 4 4 4 4 4 4 4 e e b 
b e e e e e e e e e e e e e e b 
b e e e e e e e e e e e e e e b 
b b b b b b b 3 3 b b b b b b b 
c b b b b b b c c b b b b b b c 
c c c c c c b c c b c c c c c c 
b e e e e e c b b c e e e e e b 
b e e e e e e e e e e e e e e b 
b c e e e e e e e e e e e e c b 
b b b b b b b b b b b b b b b b 
. b b . . . . . . . . . . b b . 
`, SpriteKind.cat)
    mySprite4.setPosition(152, 22)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.LISA, function (sprite, otherSprite) {
    music.playMelody("C5 B A G F E D C ", 500)
    game.showLongText("level complete", DialogLayout.Bottom)
    mySprite5.destroy(effects.halo, 200)
    scene.cameraShake(4, 500)
    tiles.setTilemap(tiles.createTilemap(
            hex`1e001e00040404040404040404040404040404040404040404040404040b04040404040c05050705050505050505050505050505050909090909090909090904040505050705050505050505050505050505050909090909090909090904040909090909090909090909090909090905050909090909090909090904040909090909090909090909090909090905050909090909090909090904040909090909090909090909090909090905050909090909090909090904040505050505050505050505050505050905050909090909090909090904040d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0905050909090909090909090904040d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0905050905050505050705050504040909090909090909090909090909090905050905050505050505050504040505050705050505050505050705050905050905050909090909050504040505050705050505050505050705050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505090909090905050905050905050905050905050909090909050504040505050705070707070707050507070707070707070707050707070504040b0b0404040404040404040b0404040404040404040404040404040404`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . . 2 . . 2 . . 2 . . 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.builtin.forestTiles5,sprites.builtin.forestTiles1,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass3,sprites.castle.saplingOak,sprites.castle.saplingPine,sprites.builtin.forestTiles16,sprites.builtin.forestTiles4,sprites.castle.shrub,sprites.dungeon.hazardWater],
            TileScale.Sixteen
        ))
    mySprite.setPosition(24, 455)
    mySprite6 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . c c c c . . . 
. . . . . . . c c d d d d c . . 
. . . . . c c c c c c d d c . . 
. . . c c c 4 4 1 4 d c c c c c 
. . c 4 4 1 4 4 1 4 4 1 c c 1 f 
. c 1 4 4 4 1 4 1 1 4 d 1 f 4 f 
f 1 1 4 4 4 1 4 4 1 4 4 1 f 1 f 
f 1 1 f 4 4 1 4 c f 4 4 1 1 4 f 
f 1 1 4 4 4 1 c 4 f 4 4 1 f f f 
. f 1 4 4 4 1 4 4 f 4 4 d f . . 
. . f 4 4 1 4 c c 1 4 d f . . . 
. . . f d 4 4 4 4 1 4 c f . . . 
. . . . f f 4 4 4 1 c d b c . . 
. . . . . . f f f f d d d c . . 
. . . . . . . . . . c c c . . . 
`, SpriteKind.fish)
    mySprite6.setPosition(23, 23)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.player1.moveSprite(mySprite, 100, 100)
})
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite8: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.showLongText("glazunov's game представляет: cat and mouse", DialogLayout.Bottom)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . 
d d d . . . . d d d . . . . 
d 3 3 d . . d 3 3 d . . . . 
d 3 3 3 d d 3 3 3 d . . . . 
d 3 3 3 d d 3 3 3 d . . . . 
d 3 3 d d d d 3 3 d . . . . 
d d d d d d d d d d . . . . 
d d f 1 d d f 1 d d . . . . 
d d f f d d f f d d . d . . 
d d d d 3 3 d d d d . d . . 
. 9 5 9 5 9 5 9 5 9 d d . . 
. d d d d d d d d d d d . . 
. d d d d d d d d d . . . . 
. . d d . . . . d d . . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000030c0c0c0c0c0c0c0c0c0c0c0c0c0c0609150e0e101010100e0215101002100a0915101315151515151515151510100a09150e130e1002100e0e0e020210020a09151015151515100e0e0e101010100a0913101313131510101515151510100a091610101002100e0e130e101502100a091616161613131313130e101410100a091010101013101010020e021010100a0913131313131313131313131302100a091002100e0e13100e1010100202100a0910100e0e0e1310131313131313100a0910100e020e1010101010101010100a0913131313131313131313131313100a09021010101010020e1010101010100a080b0b0b0b0b0b0b0b0b0b0b0b0b0b07`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . 2 . . . . 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 . . 2 
2 2 . 2 . . . . . . . . . . . 2 
2 2 . 2 2 2 2 . . . . . . . . 2 
2 2 . 2 2 2 2 . . 2 2 2 2 . . 2 
2 2 . . . . . . . 2 . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . . . . 2 . 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.rock0,sprites.castle.tileGrass2,sprites.castle.tilePath1,myTiles.tile1,sprites.dungeon.darkGroundWest,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.builtin.coral1,sprites.builtin.coral3,sprites.builtin.coral2,sprites.builtin.coral5,myTiles.tile2],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(21, 231)
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. f f f f . . . . f f f . . . . 
. f 3 3 3 f f f f 3 3 3 f . . . 
f f 3 3 3 d d d d 3 3 3 3 f . . 
f 3 3 3 3 d d d d 3 3 3 3 f . . 
f 3 3 3 d d d d d d 3 3 3 f . . 
f f f d d d d d d d d f f . . . 
. . f d f d d d d f d f . . . . 
. . f d d d 3 3 d d d f . f f . 
. . . f d d d d d d d f f d f . 
. . . f d d d d d d d d d d f . 
. . . f d d d d d d d d d f . . 
. . . . f f d d f d d f f . . . 
. . . . . f d d f d d f . . . . 
`, SpriteKind.Food)
mySprite2.setPosition(152, 22)
