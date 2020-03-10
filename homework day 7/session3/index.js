const timeSheetData = [
    {
        Project:'Learn front-end',
        Task: 'Learn HTML',
        TimeSpent: 6
    },
    {
        Project:'Learn front-end',
        Task: 'Learn CSS',
        TimeSpent: 8
    },
    {
        Project:'Learn front-end',
        Task: 'Learn JS Variables and Data Types',
        TimeSpent: 6
    },
    {
        Project:'Learn Git',
        Task: 'Learn Git Basics',
        TimeSpent: 2
    }
]
const tableBody = document.getElementById("ts-body")
const Project   = document.getElementById('Project')
const Task      = document.getElementById('Task')
const Timespent = document.getElementById('Timespent')
const addBtn    = document.getElementById('addButton')
const header    = document.getElementById('header')
const clearBnt  = document.getElementById('clearButton')

function addData()
{
    for(let x in timeSheetData)
    {
        tableBody.innerHTML += `<tr>
        <td>${timeSheetData[x].Project}</td>
        <td>${timeSheetData[x].Task}</td>
        <td>${timeSheetData[x].TimeSpent}</td>
        <td><button onclick ="removeLine(${x})"> X </button>
        <button onclick ="update(${x})"> U </button></td>
        </tr>`
    }
}
var ind = 0;
function addbutton()
{
    if(addBtn.innerText === 'ADD')
    {
        if(Project.value != ""||Task.value != ""||Timespent.value !="")
        {
            timeSheetData.push({
                Project: Project.value,
                Task: Task.value,
                TimeSpent: Timespent.value
            })
        tableBody.innerHTML += `<tr>
        <td>${timeSheetData[timeSheetData.length-1].Project}</td>
        <td>${timeSheetData[timeSheetData.length-1].Task}</td>
        <td>${timeSheetData[timeSheetData.length-1].TimeSpent}</td>
        <td><button onclick ="removeLine(${timeSheetData.length-1})"> X </button>
        <button onclick ="update(${timeSheetData.length-1})"> U </button></td>
        </tr>`
        }
        clickClearBnt()
    }
    else {
        timeSheetData[ind] = {
            Project: Project.value,
            Task: Task.value,
            TimeSpent: Timespent.value,
        }
        const rowTable  = document.querySelectorAll("#ts-body tr")
        rowTable[ind].innerHTML = `<tr>
        <td>${timeSheetData[ind].Project}</td>
        <td>${timeSheetData[ind].Task}</td>
        <td>${timeSheetData[ind].TimeSpent}</td>
        <td><button onclick ="removeLine(${ind})"> X </button>
        <button onclick ="update(${ind})"> U </button></td>
        </tr>`
        clickClearBnt()
    }
}

function creatColumnDelete()
{
    a = document.createElement('th')
    a.innerHTML = 'Action'
    header.appendChild(a)
}

function removeLine(index)
{
    const rowTable  = document.querySelectorAll("#ts-body tr")
    rowTable[index].innerHTML = ""
}

function update(index)
{
    Project.value = timeSheetData[index].Project
    Task.value = timeSheetData[index].Task
    Timespent.value = timeSheetData[index].TimeSpent
    addBtn.innerText = 'Update'
    return ind = index
}

function clickClearBnt()
{
    Project.value = ""
    Task.value = ""
    Timespent.value ="" 
    addBtn.innerText = 'ADD'
}

function main()
{
    addData()
    addBtn.addEventListener('click',addbutton)
    creatColumnDelete()
    clearBnt.addEventListener('click',clickClearBnt)
}
main()