function getTasks(projectArray) {
    let allTasks = []
    for (let i = 0; i < projectArray.length; i++) {   
        projectArray[i].tasks.map(task => allTasks.push(task))
    }
    return allTasks
}

export default getTasks