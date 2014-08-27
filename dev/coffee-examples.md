## Functions

    square (x) -> x * x

    // Same as
    square = function(x) {
        return x * x;
    }


    fill = (container, liquid = "coffee") ->
        "Filling the #{container} with #(liquid)"


## Objects and Arrays

    song = ["a", "b", "c"]
    singers = {James: "Rap", Mark: "Classical"} // No ending semicolin needed

    bitList = [
        1, 1, 1
        0, 0, 0 // Notice no trailing comma nee
        1, 1, 1
    ]

    kids = // Alternative way to create an aboject without the {} or comma's
        brother:
            name: "Joe"
            age: 30
        sister:
            name: "Jenny"
            age: 28

## jQuery Example

    $('.something').attr class: 'active' // Handles the reserved words automatically
    log  object.class // Instead of log(object['class'])

## Lexical Scope / Var Safety (Need to read more on)

    out = 1
    changeNumber = ->
        inner = -1
        outer = 10
    inner = changeNumers()

## Conditionals

    mood = great if singing

    if happy and knowit
        clapsHands()
    else
        showIt()

    date = if friday then sue else jill

## Splats (More arguments!)

    gold = silver = rest = "unknown"
    awards = (first, second, others...) ->
        gold = first
        silver = second
        rest = others

    contenders = [
        "Jimmy"
        "Jenny"
        "Peg"
        "Sue"
        "Ben"
    ]

    award contenders...

    alert "Gold: " + gold
    alert "Silver: " + silver
    alert "The Rest: " + rest

## Loops / Comprehension

    eat food for food in ['toast', 'cheeze', 'wine']

    courses = ['greens', 'caviar', 'truffles', 'roast', 'cake']
    menu i + 1, dish for dish, i in courses

    foods = ['broccoli', 'spinach', 'chocolate']
    eat food for food in foods when food isnt 'chocolate'

    countdown = (num for num in [10..1])

    yearsOld = max: 10, peg: 9, tim: 11
    ages = for child, age of yearsOld
        "#{child} is {#age}"



    if this.studyingEconomics
        buy() while supply > demand
        sell() until supply > demand

    num = 6
    lyrics = while num -= 1
        `#{num} little monkeys on the bed`


    for filename in bitList
        do (filename) ->
            fs.readFile filename (err, contents) ->
                compile filename, contents.toString()


## Array Slice, Splice, Range
    num = [1,2,3,4,5,6,7,8,9]
    start = numbers[0..2]
    middle = numbers[3...-2]
    end = numbers[-2..]
    copy = numbers[..]

    // Replace a segment
    num[3..6] = [1,2,3,4,5]


## Operations

    is              ===
    isnt            !==
    not             !
    and             &&
    or              ||
    true, yes, no   true
    false, no, off  false
    @, this         this
    of              in
    in
    a ** b          Math.pow(a, b)
    a // b          Math.floor(a / b)
    a %% b          (a % b + b) % b


    launch() if ignition is on

    volume = 10 if band isnt EltonJohn

    coldday unless summer is yes

    if car.speed < limit then accelerat()

    winner = yes if pick in [1, 3, 66]

    print inspect "My name is #{@name}"



## Existential Operator

    person = true if mind? and not world?

    speed = 0
    speed ?= 15

    footprints = yeti ? "bear"

## Classes

    class Animal
        constructor: (@name) ->

        move: (meters) ->
            alert @name + "moved {#meters}m";

    class Snake extends Animal
        move: ->
            alert "Slithering"
            super 5

    class Horse extends Animal
        move: ->
            alert "Galloping"
            super 45

    sam = new Snake "Sammy the Python"
    tom = new Horse "Tommy the Horse"

    sam.move()
    tom.move()

    class Person
        constructor: (options) ->
            {@name, @age, @height} = options

    tim = new Person age: 4

## Switch

    switch day
        when "mon" then go work
        When "tue" then go party
        when "fri", "sat"
            if day is bingo
                go bingo
                go dancing
        when "sun" then go church
        else go work

    score = 55
    grade = switch
        when score < 60 then 'F'
        when score < 70 then 'D'
        when score < 80 then 'C'
        when score < 90 then 'B'
        else 'A'


## Try Catch

    try
        someFunction()
    catch error
        print error
    finally
        cleanupAndLog()


## HTML

    html = """
        <strong>
        Some text here
        </strong>
    """

    ###
    Block comment passed to JS
    ###

