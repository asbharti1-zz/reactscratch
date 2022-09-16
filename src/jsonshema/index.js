import { instanceOf } from "prop-types";
import React from "react";

function dummyTable(){

    const table =[
        ["Tpk1","ZEBRA","Array"],
        ["Tpk2","MARS","Object"],
        ["Tpk3","MARS.SUN","Object"],
        ["Tpk4","MARS.MOON","Object"],
        ["Tpk5","MARS.EARTH","Object"],
        ["Tpk6","MARS.EARTH.PLANET","Array"],
        ["Tpk7","MARS.EARTH.SATALITE","Array"],
        ["Tpk8","MARS.SOLAR","Object"],
        ["Tpk9","MARS.SOLAR.BLAKHOLE","Object"],
        ["Tpk10","MARS.UNIVERSE","Array"],
        ["Tpk12","MARS.UNIVERSE.GALAXY","object"],
        ["Tpk13","MARS.UNIVERSE.CENTERPT","Object"],
        ["Tpk14","MARS.UNIVERSE.CENTERPT.HOLE","Object"],
        ["Tpk15","MARS.UNIVERSE.AS","Array"],
        ["Tpk11","MARS.DAP","Object"],
    ]
    return table;
}

function alignTable(){
    let table = dummyTable();
    for (let i = 0; i < table.length; i++) {
        let row = table[i];
        table[i][1] = table[i][1].split(".");        
    }
    return table;
}

function createNameObject(label,value){
    if(!label) return;
    let o ={}
    const key = label+"Name";
    o[key] =value ? value : 1;
    return o;
}

function createNestedObject(keys, object){
    if(!keys && keys.length <=0 ) return;

    let fkey = keys[0];
    let rtnObj ={};
    if(keys.length == 1){
        object[fkey] = createNameObject(fkey, fkey+"___");
    }else{
        let tmpk = [...keys].slice(1, keys.length);       
        object[fkey] ={}
        rtnObj = createNestedObject(tmpk, object[fkey]);
    }
    return rtnObj
}
function CreateChObj(keys,inner){
    createNestedObject(keys,inner);
    return inner;
}

function createRowObject(row, previous) {
    let o ={}
    if(row){
        let type = "object";
       
        console.log(typeof(o));       
        
        let inner ={} 
        inner = CreateChObj(row[1],inner)  ;      
        /*
        if(row[2].toLowerCase() === "object"){
            o[row[0]] = inner;
        }else  if(row[2].toLowerCase() === "array"){
            o[row[0]] = [];
            o[row[0]].push(inner);
        } */
        o = inner;
    }
    return o;
}

const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce((obj, key) =>
        (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
}


function processRows(rows, json){
    if(json == undefined){
        json ={};
    }
    let keys = undefined;
    let row =undefined;
    if(rows && rows.length>0){
        keys =[];
        row = rows[0];
        keys = [row[0]].concat(row[1]);
    }

    if(rows.length ==1){        
        var nObj = getNestedObject(json,keys);
        console.log('Found -',nObj);
        
        if(nObj == undefined){            

            if(row[2].toLowerCase() === "object"){
                json[row[0]] = createRowObject(row,null);
            }else  if(row[2].toLowerCase() === "array"){
                json[row[0]] = [];
                json[row[0]].push(createRowObject(row,null));
            }
        }else{
            if(row[2].toLowerCase() === "object"){
                nObj[row[0]] = createRowObject(row,null);
            }else  if(row[2].toLowerCase() === "array"){
                nObj[row[0]] = [];
                nObj[row[0]].push(createRowObject(row,null));
            }
        }
    }else{
       
        var nObj = getNestedObject(json,keys);

        var nexts = rows.slice(1,rows.length);
        if(nexts && nexts.length >0){
            json[rows[0]]=processRows(nexts,nObj);
        }
    }
    return nObj;
}

function processTable(row) {
    var o =[]
    const table = alignTable();
    var json ={};

    for (let i = 0; i < table.length; i++) {
        const row = table[i];
        //var ob = createRowObject(row,null);
        //o.push(ob);
    }
    processRows(table,json);
    console.log(json);
    return  o;
}
export {alignTable,processTable}
