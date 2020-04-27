namespace SpriteKind {
    export const cat = SpriteKind.create()
    export const LISA = SpriteKind.create()
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
            hex`1000100006090909090909090909090909090907040e0d0f0d0d0d0d0d0d0d0d0d0d0d0a040d0d0f0d0d0d0d0d0d0d0d0d0d0d0a040d0e0e0e0e0e0e0e0e0e0e0e0d0d0a040d0e0e0e0e0d0d0d0d0d0d0e0d0d0a040d0e0d0d0d0d0d0d0d0d0d0e0d0d0a040d0e0d0d0e0e0e0e0e0e0e0e0d0d0a040d0e0d0d0d0d0d0d0d0d0d0d0d0d0a040d0e0d0d0e0e0e0e0e0e0e0e0d0d0a040d0e0d0d0e0d0d0d0d0d0d0e0d0d0a040d0e0d0d0d0d0d0d0d0d0d0e0d0d0a040d0e0d0d0e0d0d0d0d0d0d0e0d0d0a040d0e0d0d0e0e0e0e0e0e0e0e0d0d0a040d0e0d0d0d0d0d0d0d0d0d0d0d0d0a040d0d0d0d0d0d0d0d0d0d0d0d0d0d0a050c0c0c0c0c0c0c0c0c0c0c0c0c0c08`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . 2 2 2 2 . . . . . . 2 . . 2 
2 . 2 . . . . . . . . . 2 . . 2 
2 . 2 . . 2 2 2 2 2 2 2 2 . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . 2 . . 2 2 2 2 2 2 2 2 . . 2 
2 . 2 . . 2 . . . . . . 2 . . 2 
2 . 2 . . . . . . . . . 2 . . 2 
2 . 2 . . 2 . . . . . . 2 . . 2 
2 . 2 . . 2 2 2 2 2 2 2 2 . . 2 
2 . 2 . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles15,sprites.builtin.forestTiles6,sprites.builtin.forestTiles11,sprites.builtin.forestTiles18,sprites.builtin.forestTiles14,sprites.castle.tileDarkGrass1,sprites.builtin.forestTiles4,sprites.builtin.forestTiles0],
            TileScale.Sixteen
        ))
    mySprite.setPosition(0, 0)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.player1.moveSprite(mySprite, 100, 100)
})
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e . b f b 
f d d f d d f d d f . f d f 
f b d d b b d d 2 f . f d f 
. f 2 2 2 2 2 2 b b f f d f 
. f b d d d d d d b b d b f 
. f d d d d d b d d f f f . 
. f d f f f d f f d f . . . 
. f f . . f f . . f f . . . 
`, SpriteKind.Player)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000030c0c0c0c0c0c0c0c0c0c0c0c0c0c0609150e0e101010100e0215101002100a0915101315151515151515151510100a09150e130e1002100e0e0e020210020a09151015151515100e0e0e101010100a0913101313131510101515151510100a091610101002100e0e130e101502100a091616161613131313130e101410100a091010101013101010020e021010100a0913131313131313131313131302100a091002100e0e13100e1010100202100a0910100e0e0e1310131313131313100a0910100e020e1010101010101010100a0913131313131313131313131313100a09021010101010020e1010101010100a080d0b0b0b0b0b0b0b0b0b0b0b0b0b0a`,
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
