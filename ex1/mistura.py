import json

f = open("mapa.json")
data = json.load(f)
fixed = open("mapas.json","w")
count=0
#print(data["ligações"])
for i in data["ligações"]:
    id = i['origem']
    for j in data['cidades']:
        if id==j['id']:
            if 'ligações' not in j.keys():
                j['ligações']=[i]
            else: (j['ligações']).append(i)
            #print(j['ligações'])


json.dump(data['cidades'],fixed,indent=2,ensure_ascii=False)