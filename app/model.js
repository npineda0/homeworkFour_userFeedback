//this is my model and it handles on the service calls
var homeContent = ` <div class="hero">
            <div class="heroTxt">
            <p class="heroHeader">lorem ipsum</p>
            <p class="heroDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non sit iusto ut cupiditate placeat soluta, modi ex ipsam cum odio, fugiat tenetur illo, quod fugit in odit iste magni laboriosam?</p>
            <button class="heroBtn">lorem ipsum</button>
        </div>
    </div>
    
    <p class="homeMenuHeader">Lorem ipsum, dolor sit</p>
    
    <div class="homeMenuOptions">
        <div class="menuOptImg">
            <p class="menuName">ipsum dolor sit</p>
            <button class="menuBtn">dlor ispy its</button>
        </div>
    
        <div class="menuOptImg2">
            <p class="menuName">ipsum dolor sit</p>
            <button class="menuBtn">dlor ispy its</button>
        </div>
    
        <div class="menuOptImg">
            <p class="menuName">ipsum dolor sit</p>
            <button class="menuBtn">dlor ispy its</button>
        </div>
    </div>

    <p class="homeMenuHeader">Lorem ipsum, dolor sit</p>
    <div class="homeInfoRow">
        <div class="infoSection">
            <div class="circleImg"></div>
            <div class="infoHeader"><p>Lorem opsum dolor sit</p></div>
            <div class="infoTxt"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a, blanditiis nisi laborum cum praesentium optio repellendus officiis nam, labore aliquam hic molestias. Asperiores consequuntur natus assumenda, voluptate nam quis!
            </p></div>
        </div>

        <div class="infoSection">
            <div class="circleImg2"></div>
            <div class="infoHeader"><p>Lorem opsum dolor sit</p></div>
            <div class="infoTxt"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a, blanditiis nisi laborum cum praesentium optio repellendus officiis nam, labore aliquam hic molestias. Asperiores consequuntur natus assumenda, voluptate nam quis!
            </p></div>
        </div>
    </div>
    <div class="homeInfoRow">
        <div class="infoSection">
            <div class="circleImg3"></div>
            <div class="infoHeader"><p>Lorem opsum dolor sit</p></div>
            <div class="infoTxt"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a, blanditiis nisi laborum cum praesentium optio repellendus officiis nam, labore aliquam hic molestias. Asperiores consequuntur natus assumenda, voluptate nam quis!
            </p></div>
        </div>
    </div>`;
var aboutContent = `<div class="about">
<div class="aboutIntro">
    <div class="introHeader">Lorem ipsum dolor sit amet</div>
    <div class="introTxt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus laudantium qui voluptates iste tenetur minus est nostrum. Officiis maiores dolorem voluptatum nihil velit veritatis nostrum ipsam, quia aliquam, tempore adipisci.
    Dolore nisi molestiae voluptatem commodi magni perferendis iste consequatur sint quia ut quam quo voluptatum molestias quae exercitationem mollitia, eius est cumque quis soluta reiciendis illo a non. Ipsam, similique?</div>
</div>

<div class="aboutInfo">
    <div class="aboutCircleImg"></div>

    <div class="aboutInfoTxt">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium inventore et quis alias iure voluptatem numquam quo itaque, fugit omnis, eligendi ea molestiae dignissimos dolores. Qui libero dolore tempora illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam nihil sit beatae dignissimos repudiandae eaque aliquam ipsum, optio illo tempore mollitia corrupti exercitationem rerum, laudantium officia deserunt, placeat animi!
    </div>
    <div class="aboutInfoTxt">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium inventore et quis alias iure voluptatem numquam quo itaque, fugit omnis, eligendi ea molestiae dignissimos dolores. Qui libero dolore tempora illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dignissimos molestiae culpa tempore repellendus corrupti aliquid dolorem aspernatur porro, iusto dolores, ex esse? Magni inventore repellendus voluptatibus sed, enim fugit.
    </div>
</div>

<p class="aboutMoreHeader">Lorem ipsum dolor sit amet consectetur</p>

<div class="aboutRow">
    <div class="aboutOption">
        <div class="aboutOptImg"></div>
        <div class="aboutOptHeader">Lorem Ipsum</div>
        <i class="fas fa-arrow-circle-right"></i>
    </div>
    <div class="aboutOption">
        <div class="aboutOptImg2"></div>
        <div class="aboutOptHeader">Lorem Ipsum</div>
        <i class="fas fa-arrow-circle-right"></i>
    </div>
</div>

<div class="aboutRow">
    <div class="aboutOption">
        <div class="aboutOptImg3"></div>
        <div class="aboutOptHeader">Lorem Ipsum</div>
        <i class="fas fa-arrow-circle-right"></i>
    </div>
    <div class="aboutOption">
        <div class="aboutOptImg4"></div>
        <div class="aboutOptHeader">Lorem Ipsum</div>
        <i class="fas fa-arrow-circle-right"></i>
    </div>
</div>

</div>`;

export function setCurrentPageContent(pageID) {
    //pass through ID and put into app div
    let contentName = pageID + "Content";
    //eval turns string to variable name
    $("#app").html(eval(contentName));
}
