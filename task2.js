 (function(){
        "use strict";
       
        function buildMap(map, el) {
            
            let path = el.path.split('/');
            if (path.length) {
                let currentNode = path[0];
                if (path.length === 1) {
                    map.subs = map.subs || {};
                    map.subs[currentNode] = {rel: el.rel, title: el.title}
                } else {
                    if (map.subs[currentNode]) {
                        
                        el.path = path.slice(1).join('/');
                        
                        buildMap(map.subs[currentNode],el);
                    } else {
                        throw `Invalid path ${el.path}`
                    }
                }
            } else {
                throw 'No path in element.';
            }
           
        }

       
        function buildFinal(map, obj) {
            
            if (map.subs) {
                for (const [path, el] of Object.entries(map.subs)) {
                    obj[el.title] = buildFinal(el, {});
                }
            }
            return obj;
        }

        function sortByPath($arr) {
            return $arr.sort((el1, el2)=>{
                if (el1.path > el2.path) return 1;
                return (el1.path === el2.path?0:-1);
            })
        }

        const base = [
    { id: 1, "title": 'Пользователи', "path": "AAA" },
    { id: 4, "title": 'Супервайзеры', "path": "AAA/BBB" },
    { id: 5, "title": 'Продавцы', "path": "AAA/PPP" },
    { id: 9, "title": 'Категории точек', "path": "AAA/PPP/EEE" },
    { id: 2, "title": 'Торговые точки',"path": "FFF" },
    { id: 6, "title": 'ТТ категория A', "path": "FFF/CCC" },
    { id: 7, "title": 'ТТ категория B', "path": "FFF/OOO" },
    { id: 3, "title": 'Настройки', "path": "WWW" },
    { id: 8, "title": 'Смена пароля', "path": "WWW/DDD" },
    { id: 10, "title": 'Смена языка', "path": "WWW/LLL" }]

       
        sortByPath(base);
        
        let pathMap = {};
        base.forEach(function(el) {
            buildMap(pathMap, el);
        });

        let finalObject = buildFinal(pathMap, {});
        console.log(finalObject);
    })();
