const stringify = list => list ? `${list.data} -> ${stringify(list.next)}` : 'null'