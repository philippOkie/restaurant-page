import './styles/main.scss'

const homeBtn = document.getElementById('homeBtn')
const menuBtn = document.getElementById('menuBtn')
const contactBtn = document.getElementById('contactBtn')
const pages = document.getElementById('pages')

homeBtn.addEventListener("click", () => {
    pages.innerHTML = 
    `
    <div id="homePage" class="homePage">
                <div class="containerHomePage">
                    <div class="abus headings">
                        <div>WE MAKE LOLLIPOPS!!!</div>
                    </div>
                    <div class="hours headingsTwo">
                        <div>We are open every day 8am - 8pm!</div>
                    </div>
                    <div class="locations headingsTwo">
                        Locations...
                    </div>
                </div>
            </div>
    `
})

menuBtn.addEventListener("click", () => {
    pages.innerHTML =
    `
    <div id="menuPage" class="menuPage">
    <div class="card">
        <div class="menuHead">8th Place: Banana</div>
        <div>
            When used correctly in desserts, bananas can be an incredibly beneficial and enjoyable flavor. However, hard candy's texture and banana flavor are not a match made in heaven. The combination of these two ingredients is ultimately confusing.
            The crystallized and sugary sweetness of hard candies mixed with the muted taste of banana ultimately falls flat. The most confusing element of this dessert is texture. Bakers typically use bananas to add thickness to desserts, so this banana concoction is bizarre when boiled down into a hardened sugar.
            While it may not be a fan favorite, this candy still ranks eighth on our list. 
        </div>
    </div>
    <div class="card">
        <div class="menuHead">7th Place: Caramel</div>
        <div>
            Next on our list, we have a flavor shift away from tart fruit to creamy caramel. The leap from banana flavor enthusiasts to caramel is quite significant. Not only is caramel hard candy one of the first hard candy creations to gain popularity in the early 1900s, but this flavor also continues to impress to this day.
            The perfect combination of creamy, muted, and delectable flavors, hard caramel candy has one of the best taste profiles that will cement this dessert as one of the most popular hard candy flavors of all time. 
        </div>
    </div>
    <div class="card">
        <div class="menuHead">6th Place: Orange</div>
        <div>
            Ranking at number six on our list, orange-flavored hard candy is also one of the most popular hard candies of all time. Delightfully refreshing and zesty, this flavor packs a punch of delicious fruitiness in its candy. However, while it's more popular than banana and caramel candy, hard orange candy still does not rank within the top five flavors on this list.
            Similar to bananas, texture plays a significant role in orange's entire mouthfeel, which is why it may be ranked lower than anticipated.
        </div>
    </div>
    <div class="card">
        <div class="menuHead">5th Place: Butterscotch</div>
        <div>
            Similar to caramel, hard butterscotch candy is a classically favorite flavor. The perfect combination of light honey, salt, and rum extract, this candy combination melts consistent flavor into your mouth. The buttery and classic taste of this candy is also an ode to the past.
            Both caramel and butterscotch candy were some of the first largely manufactured and sold candy flavors. So, if you have a craving for a classically sweet dessert, hard butterscotch candy will never disappoint.
        </div>
    </div>
    <div class="card">
        <div class="menuHead">4th Place: Lemon</div>
        <div>
            Lemon hard candy is the ultimate combination of sweet and sour flavors. No other candy flavor will produce quite the same delectably mouth-watering sensation as hard lemon candy. This flavor will never disappoint and will forever be a classic favorite, whether enjoyed as lemon drops, lemon suckers, or shattered glass hard candy.
        </div>
        <div class="card">
            <div class="menuHead">3rd Place: Watermelon</div>
            <div>
                We've made it to our top three most popular hard candy flavor rankings, which means each of these three flavors are iconic in their own right. 
                Ranking in third place with a concentration of sweet and sugary goodness is watermelon. This candy flavor will burst refreshing and revitalizing sweetness from the front of your mouth to the back of your tongue. Perfect for the summertime, this flavor is a classically delicious and undeniably beloved hard candy flavor.                        
            </div>
        </div>
        <div class="card">
            <div class="menuHead">2nd Place: Strawberry</div>
            <div>
                Coming in at second place for most, the famous candy flavor of all time is strawberry. Strawberry hard candy carries the same delectably sweet sugariness of watermelon with a tart twist. The acidic tart in this candy flavoring brings out this dessert's sweet and refreshing taste even more strongly. There is simply no way to go wrong when baking delicious strawberry hard candy.                      
            </div>
        </div>
        <div class="card">
            <div class="menuHead">1st Place: Cherry</div>
            <div>
                Finally, the most popular hard candy flavor of all time is none other than the classic, iconic, and unforgettable taste of cherry candy. Not only is this candy flavor one of the most recognizable flavors for lollipops, shattered hard candy, and candy canes, but this flavor is also one of the most beloved.
                Similar to both watermelon and strawberry, cherry candy blends the perfect combination of sweetness and tartness. Suck on this candy for hours or break open its explosive flavor with your teeth. Either way, there's plenty of ways to enjoy this sweet treat.                        
            </div>
        </div>
    </div>
</div>
    `
})

contactBtn.addEventListener("click", () => {
    pages.innerHTML =
    `
    <div id="homePage" class="homePage">
    <div class="containerHomePage">
        <div class="abus headings">
            <div>WE ARE WAITING FOR YOU!</div>
        </div>
        <div class="hours headingsTwo">
            <div>+8-00-434-2342</div>
        </div>
        <div class="locations headingsTwo">
            lolllipops@gmail.com
        </div>
    </div>
</div>
    `
})