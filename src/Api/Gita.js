const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': '3fd43c4ea4mshe64f1cd59f838abp19c8ffjsn061d51044c89',
		'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com'
	}
};

export default async function main(addition){
    const url = `https://bhagavad-gita3.p.rapidapi.com/v2/${addition}/?limit=18`;
    const response =await fetch(url,options);
    let result=await response.json();
    // console.log(result)
    return result

}