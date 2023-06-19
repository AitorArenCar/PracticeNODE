const controllerRoutesEmployee = {};

controllerRoutesEmployee.getALL = (req, res)=>{
    res.json({"Status":"GETALL OK"});
};

controllerRoutesEmployee.getWithID = (req, res)=>{
    res.json({"Status":"GETID ok"});
};

controllerRoutesEmployee.create = (req, res)=>{
    res.json({"Status":"POST OK"});
};

controllerRoutesEmployee.delete = (req, res)=>{
    res.json({"Status":"DELETE OK"});
};

controllerRoutesEmployee.update = (req, res)=>{
    res.json({"Status":"PUT OK"});
};


module.exports=controllerRoutesEmployee;