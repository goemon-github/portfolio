
async function jsonParser(url: string): Promise<any>{
    //const json = JSON.parse(url);
    
    const responce = await fetch(url);
    const json = await  responce.json();

    return json;

    

}

export default jsonParser;

