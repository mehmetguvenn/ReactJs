import { useEffect, useState } from "react";


function Form({ setTodosState, todos }) {

    const [form, setForm] = useState({ summary: "", desc: ""});

    const onChangeSummary = (e) => setForm({...form, summary: e.target.value });
    const onChangeDesc = (e) => setForm({...form, desc: e.target.value });
    const onClickFakeSummary = () => setForm({...form, summary:"Lorem ipsum dolor sit amet."});
    const onClickFakeDesc = () => setForm({...form, desc:"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."});
    
    const onClickAddNew = () => {
        setTodosState([...todos, form]);
        setForm({ summary: "", desc: ""});
    };

    //useEffect(() => {
    //    console.log("form", form);  
    //},[form])

    return(
        <div className="row mb-3">
            <div className="col-6 offset-3">
                
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="React uygulaması geliştirilmesi öğrenilmeli." 
                    value={form.summary} onChange={onChangeSummary}/>
                </div>

                <div className="mb-3">
                    <textarea rows="3" cols="30" className="form-control" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Rerum quas id quo?" value={form.desc} onChange={onChangeDesc}></textarea>
                </div>

                <div className="mb-3 d-flex justify-content-between">
                    <div>
                        <button className="btn btn-warning me-2" onClick={onClickFakeSummary}><i className="fa fa-paste small me-2"></i>Sahte Özet Ekle</button>
                        <button className="btn btn-warning me-2" onClick={onClickFakeDesc}><i className="fa fa-paste small me-2"></i>Sahte Açıklama Ekle</button>
                    </div>
                    <div>
                        <button className="btn btn-primary me-2" onClick={onClickAddNew}><i className="fa fa-plus small me-2"></i>Ekle</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;