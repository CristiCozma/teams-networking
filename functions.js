console.log('test script')

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

fetch('persons.json')
    .then(res => res.json())
    .then(data => {
        insertPersons(data);
    });
