namespace SpriteKind {
    export const Terrain = SpriteKind.create()
    export const FireBall = SpriteKind.create()
}
// clear all settings:
// 
// Reset high score
function spawnOneEnemy () {
    yPos = randint(1, 3)
    xPos = randint(2, 4)
    sendEnemy(xPos, yPos)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (FireBall_Counter == 0) {
        Fireball = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 0)
        FireShield = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 10, 0)
        animation.runImageAnimation(
        FireShield,
        [img`
            ....................
            ..............22....
            .............2242...
            ............222222..
            ............545422..
            ..............4442..
            ..............44252.
            ..............52222.
            ..............54422.
            ..............55242.
            ..............5422..
            .............22222..
            .............2252...
            .............422....
            ..............2.....
            ....................
            `,img`
            ...........52.......
            ...........22522....
            ...........4422f2...
            ...........5544422..
            ............545422..
            ..............4442..
            ..............44252.
            ..............55222.
            ..............54422.
            ..............55242.
            ..............5422..
            .............44222..
            .............5f25...
            ............4422....
            ...........4522.....
            ...........222......
            `,img`
            ....................
            ..............22....
            .............2242...
            ............222222..
            ............545422..
            ..............4442..
            ..............44252.
            ..............52222.
            ..............54422.
            ..............55242.
            ..............5422..
            .............22222..
            .............2252...
            .............422....
            ..............2.....
            ....................
            `,img`
            ....................
            ....................
            ....................
            ....................
            ..............542...
            ..............244...
            ..............4225..
            ...............522..
            ..............224...
            ..............25....
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `,img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `],
        50,
        false
        )
        animation.runImageAnimation(
        mySprite,
        assets.animation`Fireball`,
        200,
        false
        )
        animation.runImageAnimation(
        Fireball,
        assets.animation`myAnim2`,
        250,
        false
        )
        Fireball.setKind(SpriteKind.FireBall)
        Fireball.setFlag(SpriteFlag.AutoDestroy, true)
        FireShield.setKind(SpriteKind.FireBall)
        FireShield.setFlag(SpriteFlag.AutoDestroy, true)
        FireBall_Counter += 1
        info.startCountdown(5)
        music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    } else {
        music.play(music.createSoundEffect(WaveShape.Noise, 1648, 1400, 255, 0, 150, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
        animation.runImageAnimation(
        mySprite,
        assets.animation`Jump`,
        100,
        false
        )
    } else {
        mySprite.vy = 200
        animation.runImageAnimation(
        mySprite,
        assets.animation`DashDown`,
        30,
        false
        )
    }
    music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`WalkLeft`,
        200,
        true
        )
        music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
    }
})
sprites.onOverlap(SpriteKind.FireBall, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.ashes, 100)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(1)
})
info.onScore(30, function () {
    makeLifeHarder = 10
})
info.onCountdownEnd(function () {
    FireBall_Counter = 0
})
info.onScore(100, function () {
    DOOOMSDAY = 1
    ScreenshakeStrenght += 1
})
function transformIntToPosX (xPos: number) {
    if (xPos == 1) {
        actualPosX = 160
    }
    if (xPos == 2) {
        actualPosX = 170
    }
    if (xPos == 3) {
        actualPosX = 180
    }
    if (xPos == 4) {
        actualPosX = 190
    }
    if (xPos == 5) {
        actualPosX = 200
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        animation.runImageAnimation(
        mySprite,
        assets.animation`Walk`,
        200,
        true
        )
        music.play(music.melodyPlayable(music.footstep), music.PlaybackMode.InBackground)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (otherSprite != Fireball) {
        if (info.highScore() <= info.score()) {
            game.gameOver(true)
        } else {
            game.gameOver(false)
        }
    }
})
function makeTwoEnemies () {
    randLowProj = randint(1, 2)
    yPos2 = randint(1, 3)
    yPos = randint(1, 3)
    if (randLowProj == 1) {
        if (randint(0, 1) == 0) {
            yPos = randint(1, 1)
        } else {
            yPos2 = randint(1, 1)
        }
    }
    xPos = randint(1, 5)
    xPos2 = randint(1, 5)
    while (yPos == yPos2) {
        yPos2 = randint(1, 3)
    }
    while (xPos == xPos2) {
        xPos2 = randint(1, 5)
    }
    sendEnemy(xPos, yPos)
    sendEnemy(xPos2, yPos2)
}
info.onScore(175, function () {
    ScreenshakeStrenght += 1
})
info.onScore(150, function () {
    ScreenshakeStrenght += 1
})
function sendEnemy (xShift: number, yPos: number) {
    transformIntToPosX(xShift)
    if (yPos == 1) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 4 5 5 4 4 4 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, (-50 + makeLifeEvenHarder) * Speedmultiplier, 0)
        animation.runImageAnimation(
        projectile,
        assets.animation`myAnim0`,
        150,
        true
        )
        projectile.setPosition(actualPosX, 88)
        projectile.setFlag(SpriteFlag.AutoDestroy, false)
        projectile.setFlag(SpriteFlag.DestroyOnWall, true)
    } else {
        if (yPos == 2) {
            projectile = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . 5 5 5 5 5 5 5 5 4 5 5 4 4 4 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, (-50 + makeLifeHarder) * Speedmultiplier, 0)
            animation.runImageAnimation(
            projectile,
            assets.animation`myAnim`,
            300,
            true
            )
            projectile.startEffect(effects.trail)
            projectile.setPosition(actualPosX, 75)
            projectile.setFlag(SpriteFlag.AutoDestroy, false)
            projectile.setFlag(SpriteFlag.DestroyOnWall, true)
        } else {
            projectile = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
                . 5 5 5 5 5 5 5 5 4 5 5 4 4 4 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, -50 * Speedmultiplier, 0)
            animation.runImageAnimation(
            projectile,
            assets.animation`myAnim`,
            300,
            true
            )
            projectile.startEffect(effects.trail)
            projectile.setPosition(actualPosX, 70)
            projectile.setFlag(SpriteFlag.AutoDestroy, false)
            projectile.setFlag(SpriteFlag.DestroyOnWall, true)
        }
    }
}
info.onScore(50, function () {
    Doomsday = 1
    ScreenshakeStrenght += 1
})
info.onScore(75, function () {
    ScreenshakeStrenght += 1
    while (false) {
        makeLifeHarder = randint(-30, 20)
        makeLifeEvenHarder = randint(-30, 10)
        pause(2000)
    }
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    scene.cameraShake(ScreenshakeStrenght, 2500)
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
})
info.onScore(120, function () {
    ScreenshakeStrenght += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (info.highScore() <= info.score()) {
        game.gameOver(true)
    } else {
        game.gameOver(false)
    }
})
let CometCount = 0
let DoomsdayLevel = 0
let RandomEvent = 0
let noEnemySendCounter = 0
let Comet: Sprite = null
let CometCount2 = 0
let DoomsdayLVL2 = 0
let projectile: Sprite = null
let xPos2 = 0
let yPos2 = 0
let randLowProj = 0
let actualPosX = 0
let FireShield: Sprite = null
let Fireball: Sprite = null
let xPos = 0
let yPos = 0
let ScreenshakeStrenght = 0
let DOOOMSDAY = 0
let Doomsday = 0
let makeLifeEvenHarder = 0
let makeLifeHarder = 0
let FireBall_Counter = 0
let mySprite: Sprite = null
let Speedmultiplier = 0
info.setScore(0)
Speedmultiplier = 1
let GameUpdate = 2000
scene.setBackgroundImage(assets.image`myImage1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . b b 2 2 2 d b b . . . . 
    . . . . b 2 2 2 3 3 d b . . . . 
    . . . b 2 2 2 2 3 3 3 2 b . . . 
    . . . b 2 2 3 2 2 3 3 2 b . . . 
    . . b 2 2 2 2 2 2 2 2 2 2 b . . 
    . . b 2 3 3 2 2 2 2 2 2 2 b . . 
    . . b b 3 3 2 2 2 2 3 3 2 b . . 
    . . c b b 2 2 2 2 3 3 b 2 c . . 
    . . c 2 2 2 2 2 2 b b b 2 c . . 
    . . c b 2 2 b b 2 b b 2 b c . . 
    . . . c f 2 b b 2 2 2 2 c . . . 
    . . . . c b 2 2 2 f b c . . . . 
    . . . . . c c c c c c . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setPosition(15, 75)
mySprite.ay = 400
mySprite.setStayInScreen(true)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . . . b b 2 2 2 d b b . . . . 
    . . . . b 2 2 2 3 3 d b . . . . 
    . . . b 2 2 2 2 3 3 3 2 b . . . 
    . . . b 2 2 3 2 2 3 3 2 b . . . 
    . . b 2 2 2 2 2 2 2 2 2 2 b . . 
    . . b 2 3 3 2 2 2 2 2 2 2 b . . 
    . . b b 3 3 2 2 2 2 3 3 2 b . . 
    . . c b b 2 2 2 2 3 3 b 2 c . . 
    . . c 2 2 2 2 2 2 b b b 2 c . . 
    . . c b 2 2 b b 2 b b 2 b c . . 
    . . . c f 2 b b 2 2 2 2 c . . . 
    . . . . c b 2 2 2 f b c . . . . 
    . . . . . c c c c c c . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b f b b . . . . . . 
    . . . . b b 2 2 f d b b . . . . 
    . . . . b 2 2 f 3 3 d b . . . . 
    . . . b 2 2 2 f f 3 3 2 b . . . 
    . . . b 2 2 3 2 f f 3 2 b . . . 
    . . b 2 2 2 2 2 2 f f 2 2 b . . 
    . . b 2 3 3 2 2 2 f f 2 2 b . . 
    . . b b 3 3 2 2 2 2 3 f 2 b . . 
    . . c b b 2 2 2 2 3 3 b 2 c . . 
    . . c 2 2 2 2 2 2 b b b 2 c . . 
    . . c b 2 2 b b 2 b b 2 b c . . 
    . . . c f 2 b b 2 2 2 2 c . . . 
    . . . . c b 2 2 2 f b c . . . . 
    . . . . . c c c c c c . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b f b b . . . . . . 
    . . . . b b 2 2 f d b b . . . . 
    . . . . b 2 2 f 3 3 d b . . . . 
    . . . b 2 2 2 f f 3 3 2 b . . . 
    . . . b 2 2 3 2 f f 3 2 b . . . 
    . . b 2 2 2 2 f f f f 2 2 b . . 
    . . b 2 3 3 f 2 2 f f 2 2 b . . 
    . . b b 3 3 f 2 2 2 3 f 2 b . . 
    . . c b b f 2 2 2 3 3 b 2 c . . 
    . . c 2 2 2 2 2 2 b b b 2 c . . 
    . . c b 2 2 b b 2 b b 2 b c . . 
    . . . c f 2 b b 2 2 2 2 c . . . 
    . . . . c b 2 2 2 f b c . . . . 
    . . . . . c c c c c c . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b f b b . . . . . . 
    . . . . b b 2 2 f d b b . . . . 
    . . . . b 2 2 f 3 3 d b . . . . 
    . . . b 2 2 2 f f 3 3 2 b . . . 
    . . . b 2 2 3 2 f f 3 2 b . . . 
    . . b 2 2 2 2 f f f f 2 2 b . . 
    . . b 2 3 3 f 2 2 f f 2 2 b . . 
    . . b b 3 3 f 2 2 2 3 f 2 b . . 
    . . c b b f 2 2 2 3 f b 2 c . . 
    . . c 2 2 2 2 2 2 b f b 2 c . . 
    . . c b 2 2 b b 2 b f f b c . . 
    . . . c f 2 b b 2 2 2 f c . . . 
    . . . . c b 2 2 2 f b c . . . . 
    . . . . . c c c c c c . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . b f b b . . . . . . 
    . . . . b b 2 2 f d b b . . . . 
    . . . . b 2 f f 3 3 d b . . . . 
    . . . b 2 2 2 f f 3 3 2 b . . . 
    . . . b 2 2 3 2 f f 3 2 b . . . 
    . . b 2 2 2 2 f f f f 2 2 b . . 
    . . b 2 3 3 f 2 f f f 2 2 b . . 
    . . b b 3 3 f 2 2 f 3 f 2 b . . 
    . . c b b f 2 2 2 f f b 2 c . . 
    . . c 2 2 2 2 2 f f f b 2 c . . 
    . . c b 2 2 b b f b f f b c . . 
    . . . c f 2 b f f 2 2 f c . . . 
    . . . . c b 2 f f f b c . . . . 
    . . . . . c c f c c c . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 4 4 . . 2 b . . . 
    . . . b 2 . 4 2 4 4 . 2 b . . . 
    . . b 2 f . 2 2 2 2 f 2 2 b . . 
    . . b 2 3 f 2 2 2 f f 2 2 b . . 
    . . b b 3 3 f f 2 f 3 f 2 b . . 
    . . c b b f 2 2 f f f b 2 c . . 
    . . c 2 2 2 2 2 f f f b 2 c . . 
    . . c b 2 2 b b f b f f b c . . 
    . . . c f 2 b f f 2 2 f c . . . 
    . . . . c b 2 f f f b c . . . . 
    . . . . . c c f c c c . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 . 4 4 . . . . . . . 
    . . . . . 4 4 2 2 4 . . . . . . 
    . . . . . . 2 2 2 2 . 2 b . . . 
    . . . b f 2 2 f 2 2 2 e b . . . 
    . . b 2 f 2 2 2 2 2 2 2 2 b . . 
    . . b 2 3 2 2 2 2 f 3 2 2 b . . 
    . . b b 3 f 4 4 f f 2 2 2 b . . 
    . . c b b f 2 f 2 f f b 2 c . . 
    . . c 2 2 2 2 2 f f f b 2 c . . 
    . . c b 2 2 b b f b f f b c . . 
    . . . c f 2 b f f 2 2 f c . . . 
    . . . . c b 2 f f f b c . . . . 
    . . . . . c c f c c c . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 . 4 4 . . . . . . 
    . . . . . 4 4 4 2 2 4 . . . . . 
    . . . . . . . 2 2 2 2 . . . . . 
    . . . . . e 2 2 f 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . e e e e 2 2 2 2 2 3 2 e e e 
    . e . e e e 2 4 4 2 2 2 2 e e . 
    . . . . e 2 2 2 2 4 2 e e e . . 
    f . 2 . . 2 2 2 2 4 2 2 2 . . . 
    c c 2 2 2 2 4 4 4 4 2 2 2 . . . 
    . c c 2 2 2 4 4 4 4 2 . . . b c 
    . . b b b 2 2 4 c c c . f b c . 
    b . . c b b b f c b b b b c . . 
    f . . c c f c c c c c c f . b . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 . 4 4 . . . . . . 
    . . . . . 4 4 4 2 2 4 . . . . . 
    . . . . . . . 2 2 2 2 . . . . . 
    . . . . . e 2 2 f 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . e e e e 2 2 2 2 2 3 2 e e e 
    . e . e e e 2 4 4 2 2 2 2 e e . 
    . . . . e 2 2 2 2 4 2 e e e . . 
    f . 2 . . 2 2 2 2 4 2 2 2 . . . 
    c c 2 2 2 2 4 4 4 4 2 2 2 . . . 
    . c c 2 2 2 4 4 4 4 2 . . . b c 
    . . b b b 2 2 4 c c c . f b c . 
    b . . c b b b f c b b b b c . . 
    f . . c c f c c c c c c f . b . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 4 . 4 4 . . . . . . 
    . . . . . 4 4 4 2 2 4 . . . . . 
    . . . . . . . 2 2 2 2 . . . . . 
    . . . . . e 2 2 f 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . e e e e 2 2 2 2 2 3 2 e e e 
    . e . e e e 2 4 4 2 2 2 2 e e . 
    . . . . e 2 2 2 2 4 2 e e e . . 
    f . 2 . . 2 2 2 2 4 2 2 2 . . . 
    c c 2 2 2 2 4 4 4 4 2 2 2 . . . 
    . c c 2 2 2 4 4 4 4 2 . . . b c 
    . . b b b 2 2 4 c c c . f b c . 
    b . . c b b b f c b b b b c . . 
    f . . c c f c c c c c c f . b . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 . 4 4 . . . . . . . 
    . . . . 4 4 4 2 2 4 . . . . . . 
    . . e . . . 2 2 2 2 . . e . . . 
    . . e e . 2 2 f 2 2 2 e e e . . 
    . . e e e 2 2 2 2 2 2 2 e e e . 
    . e e e e 2 2 2 2 2 3 2 e e e . 
    e . e e e 2 4 4 2 2 2 2 e . e . 
    . . . e 2 2 4 4 4 2 e e e . . e 
    . 2 . . 2 2 2 2 4 2 2 2 . . . . 
    . 2 2 2 2 2 2 2 4 2 2 2 . . . . 
    . 4 2 2 2 2 2 4 4 2 . . . . . . 
    . . 4 2 2 2 2 4 2 2 . . . . . . 
    . . . . 2 2 . . 2 2 . . . . . . 
    . . . . 2 2 2 . 2 2 2 . . . . . 
    `],
200,
false
)
tiles.setCurrentTilemap(tilemap`level`)
pause(2000)
FireBall_Counter = 0
makeLifeHarder = 0
makeLifeEvenHarder = 0
Doomsday = 0
DOOOMSDAY = 0
ScreenshakeStrenght = 2
let AbsoluteDOOOMSDAY = 0
game.setGameOverScoringType(game.ScoringType.HighScore)
music.play(music.stringPlayable("C G E - C - D A ", 160), music.PlaybackMode.LoopingInBackground)
music.play(music.stringPlayable("C5 B C5 - G - F - ", 160), music.PlaybackMode.LoopingInBackground)
game.onUpdateInterval(5000, function () {
    GameUpdate += GameUpdate * -1 / 5
    Speedmultiplier += 0.1
})
game.onUpdateInterval(5000 - DoomsdayLVL2, function () {
    if (DOOOMSDAY == 1) {
        CometCount2 += 1
        Comet = sprites.create(img`
            . . . . . . . . . . . . . . 2 2 
            . . . . . . . . . . . . . 2 2 2 
            . . . . . . . . . . 2 2 2 5 4 . 
            . . . . . . . . 5 5 5 2 2 2 . . 
            . . . . . . . . 5 2 2 2 2 4 . . 
            . . . . . 2 2 2 2 2 2 2 2 4 . . 
            . . . 2 2 2 2 2 2 2 2 4 4 . . . 
            . . . 2 2 5 2 2 2 2 2 4 4 . . . 
            . . 2 2 2 2 e 2 2 2 2 2 . . . . 
            . 2 2 2 f f f e e 2 2 2 . . . . 
            . 4 2 2 2 f e e f 2 2 2 . . . . 
            . 2 2 f 2 f 2 2 2 2 2 2 . . . . 
            . 4 2 2 5 2 f 2 f 2 4 2 . . . . 
            . . 2 5 4 4 2 2 2 2 2 . . . . . 
            . . . 2 4 4 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        Comet,
        assets.animation`myAnim1`,
        200,
        true
        )
        Comet.startEffect(effects.fire, 2000)
        Comet.setPosition(randint(65, 160), 0)
        Comet.setVelocity(-50, 50)
        Comet.setFlag(SpriteFlag.GhostThroughTiles, true)
        Comet.setFlag(SpriteFlag.GhostThroughWalls, true)
        Comet.setFlag(SpriteFlag.AutoDestroy, true)
        Comet.z = -100
        if (CometCount2 >= 5) {
            CometCount2 = 0
            if (DoomsdayLVL2 > 1000) {
                DoomsdayLVL2 += -1000
            }
        } else {
            CometCount2 += 1
        }
    }
})
game.onUpdateInterval(GameUpdate, function () {
    if (noEnemySendCounter == 1) {
        RandomEvent = randint(1, 8)
        noEnemySendCounter = 0
    } else {
        RandomEvent = randint(1, 9)
    }
    if (RandomEvent == 1) {
        spawnOneEnemy()
    }
    if (RandomEvent == 2) {
        spawnOneEnemy()
    }
    if (RandomEvent == 3) {
        spawnOneEnemy()
    }
    if (RandomEvent == 4) {
        spawnOneEnemy()
    }
    if (RandomEvent == 5) {
        spawnOneEnemy()
    }
    if (RandomEvent == 6) {
        makeTwoEnemies()
    }
    if (RandomEvent == 7) {
        makeTwoEnemies()
    }
    if (RandomEvent == 8) {
        makeTwoEnemies()
    }
    if (RandomEvent == 9) {
        noEnemySendCounter += 1
    }
})
game.onUpdateInterval(5000 - DoomsdayLevel, function () {
    if (Doomsday == 1) {
        CometCount += 1
        Comet = sprites.create(img`
            . . . . . . . . . . . . . . 2 2 
            . . . . . . . . . . . . . 2 2 2 
            . . . . . . . . . . 2 2 2 5 4 . 
            . . . . . . . . 5 5 5 2 2 2 . . 
            . . . . . . . . 5 2 2 2 2 4 . . 
            . . . . . 2 2 2 2 2 2 2 2 4 . . 
            . . . 2 2 2 2 2 2 2 2 4 4 . . . 
            . . . 2 2 5 2 2 2 2 2 4 4 . . . 
            . . 2 2 2 2 e 2 2 2 2 2 . . . . 
            . 2 2 2 f f f e e 2 2 2 . . . . 
            . 4 2 2 2 f e e f 2 2 2 . . . . 
            . 2 2 f 2 f 2 2 2 2 2 2 . . . . 
            . 4 2 2 5 2 f 2 f 2 4 2 . . . . 
            . . 2 5 4 4 2 2 2 2 2 . . . . . 
            . . . 2 4 4 2 2 2 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        Comet,
        assets.animation`myAnim1`,
        200,
        true
        )
        Comet.startEffect(effects.fire, 2000)
        Comet.setPosition(randint(65, 160), 1)
        Comet.setVelocity(-50, 50)
        Comet.setFlag(SpriteFlag.GhostThroughTiles, true)
        Comet.setFlag(SpriteFlag.GhostThroughWalls, true)
        Comet.setFlag(SpriteFlag.AutoDestroy, true)
        Comet.z = -100
        if (CometCount >= 5) {
            CometCount = 0
            if (DoomsdayLevel > 1000) {
                DoomsdayLevel += -1000
            }
        } else {
            CometCount += 1
        }
    }
})
