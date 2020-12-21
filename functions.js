function insertPersons(persons) {
    const tbody = document.querySelector('#list tbody');
    tbody.innerHTML = getPersonsHtml(persons);
}

function getPersonsHtml(persons) {
    return persons.map(getPersonHtml).join("");
}

function getPersonHtml(person) {
    const firstName = person.firstName;
    const lastName = person.lastName;
    const gitHub = person.gitHub;
    return `<tr>
                <td>${person.firstName}</td >
                <td>${person.lastName}</td>
                <td><a target="_blank" href="${person.gitHub}">Github</a></td>
            </tr>`;
}

let allPersons = [];

fetch('persons.json')
    .then(res => res.json())
    .then(data => {
        allPersons = data;
        insertPersons(data);
    });

function searchPersons(text) {
    text = text.toLowerCase();
    console.warn("search", text, allPersons);
    return allPersons.filter(person => {
        console.info(person.firstName);
        return person.firstName.toLowerCase().indexOf(text) > -1;
    });
}

const search = document.getElementById('search');
search.addEventListener("input", e => {
    const text = e.target.value;

    const filtrate = searchPersons(text);

    insertPersons(filtrate);
})
