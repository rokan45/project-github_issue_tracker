console.log("Im connected");
// fetching issue data
const loadIssueData = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    console.log(url);
    fetch(url)
        .then((res) => res.json())//promise
        .then(json => displayIssueData(json.data))
}
//display the data
const displayIssueData = (issues) => {
    //get parentElement
    const issueContainer = document.getElementById("issue-container");
    issueContainer.innerHTML = "";

    //create element for each element
    issues.forEach(issue => {

        //create element
        const issueCard = document.createElement("div");
        issueCard.innerHTML = ` <div class="p-4 rounded-sm shadow-sm w-full max-w-sm">
            <div class="flex justify-between items-center mb-3">
                <img src="./images/Open-Status.png" alt="" class="w-6 h-6 object-contain">
                <button class="btn rounded-4xl">${issue.priority}</button>
            </div>
            <h2 class="text-sm font-semibold mb-2">${issue.title}</h2>
            <p class="text-sm text-[#64748B] text-wrap">${issue.description}</p>

            <div class="felx flex-wrap items-center mt-3 space-x-4">
                <button class="btn btn-soft">Bug</button>
                <button class="btn btn-soft">Bug</button>
            </div>
            <hr class="border-[#E4E4E7] mt-2">
            <div class="p-4 space-y-2">
                <h2 class="text-sm text-[#64748B]">${issue.author}</h2>
                <h2 class="text-sm text-[#64748B] mb-2">${issue.createdAt}</h2>
            </div>

        </div>`

        //append with parent container
        issueContainer.appendChild(issueCard);

    });
}
loadIssueData();