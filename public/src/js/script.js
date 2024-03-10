import follower from "./follower.js";
import jsonParser from "./jsonParser.js";
import urls from './urls.js';
import createPortfolioTemplate from './createPortfolioTemplate.js';
async function createPortfolioSection() {
    const jsonUrl = await jsonParser(urls.jsonUrl);
    let divList = [];
    for (let key of Object.keys(jsonUrl)) {
        const json = jsonUrl[key];
        const portfolioDiv = createPortfolioTemplate();
        portfolioDiv.querySelector('#source')?.setAttribute('href', json.source);
        portfolioDiv.querySelector('#thumbnail')?.setAttribute('src', json.thumbnail);
        portfolioDiv.querySelector('#title').innerHTML = json.title;
        portfolioDiv.querySelector('#teckstack').innerHTML = json.teckStack.language;
        portfolioDiv.querySelector('#content').innerHTML = json.content;
        divList.push(portfolioDiv);
    }
    const portfolioSectionTag = document.getElementById('portfolio');
    //console.log(portfolioSectionTag);
    for (let div of divList) {
        portfolioSectionTag?.append(div);
    }
}
async function main() {
    await createPortfolioSection();
    const followerEl = document.getElementById('follower');
    follower(followerEl);
}
main();
