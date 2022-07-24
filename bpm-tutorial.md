# Hello, Start Here



## Step One:
We are going to need the ``||variable.set variable BPM||`` block.
  Make ``||variable.variable||`` BPM by clicking ``||variable.make a variable||``.
  Drag ``||variable.set variable BPM||`` block into ``||basic.on start||``.

```blocks
let BPM = 0
```



## Step Two:
Insert ``||variable.set variable BPM||`` block to run when ``||input.button A||`` is pressed.

```blocks
input.onButtonPressed(Button.A, function () {
    BPM = 0
})
let BPM = 0
BPM = 0
```



## Step Three:
Insert  ``||basic.show number||`` block inside ``||input.button B||``.
Drag math function ``||math.multiplication operation||`` block to show number.
Set ``||math.multiplication operation||`` to 6 x ``||variable.BPM||``.


```blocks
input.onButtonPressed(Button.A, function () {
    BPM = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(6 * BPM)
})
let BPM = 0
BPM = 0
```




## Step Four:
Add event for when ``||input.logo||`` is pressed.
Drag ``||variable.change BPM||`` into logo pressed event.

```blocks
input.onButtonPressed(Button.A, function () {
    BPM = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(6 * BPM)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    BPM += 1
})
let BPM = 0
BPM = 0
```

## Congrats!

You have finished.  You may code your Micro:bit