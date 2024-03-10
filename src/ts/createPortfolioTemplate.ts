
function createPortfolioTemplate(): HTMLDivElement{

    const containerDiv = document.createElement('div');
    containerDiv.className = ' h-15 p-2 z-0 ' ;

    const aTag = document.createElement('a');
    aTag.setAttribute('id', 'source');
    aTag.setAttribute('href', '');

    const contentContainerDiv = document.createElement('div');
    contentContainerDiv.className = 'flex flex-col gap-y-5';



    const imgDiv = document.createElement('div');
    imgDiv.className = 'w-auto h-auto relative -z-10';

    const  imgTag = document.createElement('img');
    imgTag.setAttribute('id', 'thumbnail');
    imgTag.setAttribute('src', 'testImg');

    imgDiv.append(imgTag);

    const titleDiv = document.createElement('div');
    titleDiv.className = 'flex  gap-5 items-center';

    const titleH2 = document.createElement('h2');
   titleH2.className = 'text-2xl';
   titleH2.setAttribute('id', 'title');

    const iconI = document.createElement('i');
    iconI.className = 'las la-arrow-right la-lg pl-2 pt-2  z-20 scaleFollower hover:scale-200 transition-transform dration-300 ease-in';

    titleDiv.append(titleH2, iconI);

    const teckStackDiv = document.createElement('div');
    teckStackDiv.className = 'flex flex-col gap-y-2';

    const techStackTitle = document.createElement('h3');
    techStackTitle.className = 'text-xl';
    techStackTitle.textContent = '言語・技術';

    const teckStackP = document.createElement('p');
    teckStackP.className = 'text-lg';
    teckStackP.setAttribute('id', 'teckstack');

    teckStackDiv.append(techStackTitle, teckStackP);
    

    const contentDiv = document.createElement('div');
    contentDiv.className = 'flex flex-col gap-y-2';

    const contentTitle = document.createElement('h3');
    contentTitle.className = 'text-xl pb-3 border-b';
    contentTitle.textContent = '説明';

    const contentP = document.createElement('p');
    contentP.className = 'text-lg';
    contentP.setAttribute('id', 'content');

    contentDiv.append(contentTitle, contentP);

    contentContainerDiv.append(imgDiv, titleDiv, teckStackDiv, contentDiv);
    aTag.append(contentContainerDiv);
    containerDiv.append(aTag);

    return containerDiv;
}

export default createPortfolioTemplate;