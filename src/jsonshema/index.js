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
       
        if(row[2].toLowerCase() === "object"){
            o[row[0]] = inner;
        }else  if(row[2].toLowerCase() === "array"){
            o[row[0]] = [];
            o[row[0]].push(inner);
        } 
    }
    return o;
}

function mergeRows(){
    
}

function processTable(row) {
    var o =[]
    const table = alignTable();
        for (let i = 0; i < table.length; i++) {
            const row = table[i];
            var ob = createRowObject(row,null);
            o.push(ob);
        }
    return  o;
}
export {alignTable,processTable}


/**
 * 
 * 
    object = object ? object :{};
    if(keys.length >1){
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            object[key]={};
            if(i === keys.length-1){
                object[key]=createNameObject(key, i+"_");
            }else{
                object[key]=createNameObject([...keys].slice(1,keys.length),object)
            }            
        }
    }else{
        object[keys[0]]=createNameObject(keys[0], "_ii");
    }


    a: for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if(i>0)break;
        if(i === keys.length-1){
            object[key] = createNameObject(key, i+"_");
        }else{
            
            object[key] = createNestedObject(keys.pop(), object);
            break a;
        }
        
    }
 */