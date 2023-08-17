const connection = require('../db/connection');

// Add New Department

module.exports.addsubdepartment = async (req, res)=> {
    const data = req.body;
    console.log("data", data);
    connection.query ('INSERT INTO sub_department SET?', data,( err, results, fields)=>{
        if(err){res.status(404).send('Error In API', err.message)}
        else{res.status(201).send(results)}

    }) 

}

module.exports.getsubdepartment = async (req, res) => {
    const data = req.body;
    connection.query('SELECT * FROM sub_department', data, (err, results)=>{
        if(err){res.status(404).send('Error In API', rer.message)}
        else{res.status(201).send(results)}
    })
}

module.exports.updatesubdepartment = async (req, res) =>{
    const data= [req.body.name, req.body.department_code, req.body.description, req.params.id];
    //req.params.id;
    console.log(data);
    //const formData = [data, dataId]
    //console.log(formData);
    connection.query("UPDATE sub_department SET name = ?, department_id = ?, description = ?  WHERE id=?", data, (err, results, fields) => {
            if(err) throw err;
            res.send(results)
    })
}

module.exports.deletesubdepartment = async (req, res) =>{
    const data = [ req.params.id]
    connection.query("DELETE FROM sub_department WHERE id ="+ data, (err, results, fields)=>{
            if(err) throw err;
            res.send(results);
    } );

  
}