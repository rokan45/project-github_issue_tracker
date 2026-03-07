console.log("Im connected");
// fetching issue data
const loadIssueData = () => {
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    console.log(url);
    fetch(url)
        .then((res) => res.json())//promise
        .then(json => {
            displayIssueData(json.data);

        })
}

//fetch data for issue details
const loadIssueDetails = async (id) => {
    const issueUrl = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
    const res = await fetch(issueUrl);
    const details = await res.json();
    // console.log(details);
    displayIssueDetails(details.data);

};

//to show status label
const createElements = (arr) => {
    const htmlElements = arr.map((el) =>
        `<button class="btn btn-soft">${el}</button>`)

    return htmlElements.join(" ");
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
        issueCard.innerHTML = ` <div onclick="loadIssueDetails(${issue.id})" class="p-4 rounded-sm shadow-sm w-full max-w-sm">
            <div class="flex justify-between items-center mb-3">
                <div>${issue.status === "open" ? `<img src="./images/Open-Status.png" alt="" class="w-6 h-6 object-contain"></img>` : `<img src="./images/Closed-Status.png" alt="" class="w-6 h-6 object-contain"></img>`}
                </div>
                <button class="btn rounded-4xl">${issue.priority}</button>
            </div>
            <h2 class="text-sm font-semibold mb-2">${issue.title}</h2>
            <p class="text-sm text-[#64748B] text-wrap">${issue.description}</p>

            <div class="felx flex-wrap items-center mt-3 space-x-2">  ${createElements(issue.labels)}
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

const displayIssueDetails = (cards) => {
    //get the element
    const detailsCard = document.getElementById("issue-details-card");
    detailsCard.innerHTML = `
                <h2 class="text-3xl font-semibold">${cards.title}</h2>
                <ul class="flex items-center gap-3 mt-2">
                    <li><button class="btn border-none rounded-2xl bg-[#00A96E] text-white p-1">${cards.status}</button></li>
                    <li>
                        <p class="text-[#64748B] text-sm">${cards.author}</p>
                    </li>
                    <li>
                        <p class="text-[#64748B] text-sm">${cards.createdAt}</p>
                    </li>
                </ul>
                <!-- labels -->
                <div class="felx flex-wrap items-center mt-3 space-x-2">
                    ${createElements(cards.labels)}
                </div>

                <p class="text-[#64748B] text-sm mt-3">${cards.description}</p>
                <div class="flex mx-auto items-center p-5 bg-gray-200 mt-5 rounded-sm">
                    <div class="flex-1">
                        <p class="text-[#64748B] text-sm mb-1">Assignee:</p>
                        <h2 class="text-sm font-semibold text-black">${cards.assignee}</h2>
                    </div>
                    <div class="flex-1">
                        <p class="text-[#64748B] text-sm mb-1">Priority</p>
                        <button class="btn rounded-lg bg-[#EF4444] text-white p-1">${cards.priority}</button>
                    </div>
                </div>

                <div class="modal-action">
                    <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn btn-primary">Close</button>
                    </form>
                </div>`;
    document.getElementById("my_modal_5").showModal();
};

loadIssueData();