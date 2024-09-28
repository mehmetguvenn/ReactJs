import { useEffect, useState } from "react";

function List({ todos, setTodosState }) {
    
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) =>setSearch(e.target.value)
    const onclickRemove =(e) => {
        //console.log("index", e.target.getAttribute("index"));        
        todos.splice(e.target.getAttribute("index"), 1);
        //console.log("new todos", todos);
        setTodosState(todos);
        setSearch("//");
    };

    useEffect(() => {
        //console.log("search", search); 
        if (search === "//") {
            setSearch("");
        }
    },[search]);

    const filtered = todos.filter((item) => {
        return(
            item.summary.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
            || item.desc.toLocaleLowerCase().includes(search.toLocaleLowerCase()) 
        )
    });

    return(
        <div className="row">
            <div className="col-6 offset-3 mb-3">
                <input className="form-control" placeholder="aradığınızı bulamadınız mı?" value={search} onChange={onChangeSearch}/>
            </div>
            <div className="col-6 offset-3 mb-3">

                {
                    filtered.length === 0 &&
                        <div className="alert alert-info">Herhangi bir görev kaydı bulunamadı.</div>
                }

                {
                    filtered.length > 0 &&
                    <div>
                        <ul className="list-group">
                            {/* li.list-group-item*3>b>lorem5^p>lorem15 */}
                            {
                                filtered.map((todo, i) => {
                                        return(
                                            <li key={i} className="list-group-item">
                                                {search === "" && <i index={i} className="fa fa-trash text-danger small me-2" onClick={onclickRemove}></i>}
                                                <b>{todo.summary}</b>
                                                <p className="small">{todo.desc}</p>
                                            </li>
                                    ) 
                                })
                            }
                        </ul>
                        <div className="text-end">
                            {
                                search === "" 
                                ? <div className="badge bg-secondary">Görev Sayısı : {filtered.length}</div>
                                : <div className="badge bg-secondary">Bulanan Görev Sayısı : {filtered.length}</div>
                            }
                            
                        </div>
                    </div> 
                }

                
            </div>
        </div>
    );
}

export default List;