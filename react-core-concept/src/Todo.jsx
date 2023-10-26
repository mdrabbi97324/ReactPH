// export default function Todo(props){
//     return <h3>Task : {props.task} : {props.isTrue ? 'True' : 'False'}</h3>
// }

export default function Todo({task, isTrue}){
        let listItem;
        if(isTrue){
            listItem = <h3>{task} : Done</h3>
        } else {
            listItem = <h3>{task} : Do it</h3>
        }
        return listItem;
}
// export default function Todo({task, isTrue}){
//     return <h3>{task} {isTrue || 'False'}</h3>
// }