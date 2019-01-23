/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The window gets the default value of this
* 2. Whenever a function is called by a preceding dot, the object before the dot is the this.
* 3. When a constructor is used. The this refers to the spepcific instance of the object
* 4. When the call or bind method is used the this is explicit
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    function speak(words){
        console.log(this)
        return words
    }
   console.log( speak('Hello, I like water!'))
// Principle 2

// code example for Implicit Binding
    const maceWindu = {
        name: 'Mace Windu',
        saber: 'Purple',
        speak: function (name) {
            return `My name is ${this.name} and I have a ${this.saber} saber`
        }
    }
    console.log(maceWindu.speak())
// Principle 3

// code example for New Binding
    function Paladin(name){
        this.name = name;
        this.spells = ['Holy Light','Ward of Dawn', 'Crusader\'s Strike'];
        this.class = 'Paladin'
        this.speak = function(){
            return `I am a ${this.class}, and my name is ${this.name}. My spells are ${this.spells}`
        }
    }
    const anduin = new Paladin('Anduin')
    const wayne = new Paladin('Wayne')
    console.log(anduin.speak())

// Principle 4

// code example for Explicit Binding
    console.log(anduin.speak.call(wayne))