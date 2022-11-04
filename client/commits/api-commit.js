//Github API 
//GET commits of repo JairMoralesNovoa/FulltimeforceTask
//commit date betwen 2019-03-1 to 2022-03-31 to catch all commits
//Headers needed to see detail info
//resolve as json



const getCommits = async (signal) => {
    const commits = [];
    try {
        
        const url = "https://api.github.com/search/commits?q=repo:cisfcuellarGIT/FullTimeForzeJuanCuellar author-date:2019-03-01..2022-11-04";
        const headers = {
            "Accept": "application/vnd.github.cloak-preview"
        };
        const response = await fetch(url, {
            "method": "GET",
            "headers": headers,
            "signal": signal
        });

        const result = await response.json();
        
        result.items.forEach(i => {
            const messages = i.commit.message.split('\n- ');
            const tittle = messages[0];
            messages.shift();
            //const simpleDate= i.commit.author.date.split('.')[0].replace('T',' ');
            const simpleDate= i.commit.author.date.split('.')[0];
            const commit = {
                tittle: tittle,
                name: i.author.login,
                message: messages,
                url: i.html_url,
                date: simpleDate
            }
            commits.push(commit);
        });

        commits.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        return [commits.reverse(),result];

    } catch(err) {
        console.log(err);
    }
}

export default getCommits;


