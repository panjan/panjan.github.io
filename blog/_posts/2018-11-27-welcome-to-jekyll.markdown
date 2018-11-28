---
layout: post
title:  "Making a Glowing Alien Mask"
date:   2018-11-27 21:46:18 +0100
categories: wearables
---

![green alien](/assets/alien_green3.gif)

The awesome [Glowing Mirror Mask tutorial](https://learn.adafruit.com/glowing-mirror-mask/introduction) by Adafruit inspired me to make this Halloween mask. The main differences are that I used a cool alien design and cheaper parts. Also the image is printed (not cut into vinyl) which allows us to use any shapes and even colours.

## Required Skills

- you should be able to blink a LED on Wemos (make sure you have drivers from Espressif installed)
- using a breadboard
- soldering

## Parts and Materials

All of the parts can be ordered from eBay or AliExpress.

- [alien vector image](https://www.istockphoto.com/vector/sign-of-space-aliens-gm906014358-249808396) (€9)
- led strip
- wemos d1 mini
- wemos battery shield
- battery
- battery holder
- battery connector
- wire, jumpers
- bread board
- shrink tubes
- electric tape?
- holographic foil or paper
- one-way mirror foil
- silicone glue
- craft felt
- gumicka

## Tools

- hot air gun, hair drier or lighter (for shrink tubes)
- hot glue gun
- needle and thread
- soldering iron
- utility knife
- wire cutter

TODO: safety first disclaimer

## Light Up the LEDs

- flash Wemos (TODO: link to tutorial)
- [adafruit neopixel library](https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-installation)
- TODO: fritzing scheme
- test it! have some fun!

![first test](/assets/alien_first_test.png)
*First test of the infinity mirror effect. Wow!*

## Choosing Design

I've chosen [this vector image](https://www.istockphoto.com/vector/sign-of-space-aliens-gm906014358-249808396) because it has wide edges that perfectly hide the LEDs so they don't shine directly in your eyes. The €9 price seems reasonable for the time it saved me. If you're adventurous, make or buy a different design. I used the free SVG editor Inkscape to erase the background.

TIP: If you're buying an image, use Google image search to see if there's a better deal on another site.

## Making the Front Layer

Print the mask on an A4 transparent self-adhesive foil. You can do this at home if you have a suitable printer and transparency foil. I had it done at a local copy centre. Make sure you crop the image as much as possible so that there are no margins when you print it. For an adult-sized mask the A4 format is just wide enough. First try printing the image on an ordinary paper if you don't want to risk wasting a transparency foil.

![alien printed on transparency foil](/assets/alien_foil.jpeg)
*This is how the image looks printed on a transparency foil.*

Stick the transparency foil to the one-way mirror foil. First peel the thin strip on the edge of the transparency foil. Align it with the edge of your one-way mirror foil. Carefully peel the rest of the sticker while TODO: vyhlazovani bublinek.

Use a utility knife to cut out the mask.

![transparency foil on one-way mirror foil](/assets/alien_foil_cut.jpeg)
*Transparency foil on a one-way mirror foil.*

## Making the Back Layer

Use the front layer as a template to cut out the felt and holographic foil layers. Keep the felt left-overs. You'll use them to cover the Wemos board later.

- make the front layer slightly wider so that it bends better

![holographic foil and felt](/assets/alien_holographic_felt.jpeg)

Use your hot glue gun to glue the two layers together.

## Cut Out the Eyes

I cut out the eyes above the "eyebrows" of the alien. I was afraid that the holes would look bad so I made them quite small. It doesn't look bad at all and I should have made them bigger as  it's quite hard to see with the mask on.

## Attaching the LED Strip

Sew the LED strip to the edge of the back layer. Leave a small margin between the LED strip and the edge so that the LED strip doesn't slide off of the back layer.

When you're about to close the loop, cut off the excess of the LED strip using scissors (TODO: link to LED strip cuttin tutorial). Cut a hole for the connector and pull it through.

![led strip attached to back layer](/assets/alien_led_strip.jpeg)
*LED strip attached to the back layer*

Isolate the end of the LED strip using a shrink tube. Squeeze the end with pliers as in the picture below.

![led strip isolation](/assets/alien_led_strip_ending.jpeg)

Use jumper cables to connect your Wemos and check that everything is still working.

![led strip test](/assets/alien_led_strip_test.jpeg)

## Attaching the Front Layer

Glue the front layer to the LED strip using silicone glue. Use tape to hold everything together. Wait until the next day to let the glue dry completely.

![glueing front layer](/assets/alien_silicone_glue.jpeg)
*You can see tape holding the mask together while the silicon glue dries.*

## Connecting the Board

Solder connections according to the Fritzing scheme. Strengthen the connections using a hot glue gun. Sew Wemos to the inside of the mask. Isolate the unused power cables.

![wemos connected](/assets/alien_wemos.jpeg)

## Battery Holder and Charging

- TODO

## Final Touches

Cover the Wemos with some felt (use hot glue gun). Allow for access to the micro USB port.

![wemos covered with felt](/assets/alien_wemos_covered.jpeg)

Sew a flexible strip to the mask and enjoy!

![alien drinking stout](/assets/alien_beer.jpeg)

## Things I Could Have Done Better

- take better care of it (it got stolen)

![green alien](/assets/alien_green.gif)

----------
- prototyping and coding
- glowing mirror effect
- keep the mask bent
- why wemos - can be powered by 3.7V lipo, supplies 5V to the strip, wifi
- why arduino ide
