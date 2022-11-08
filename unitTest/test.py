import pandas as pd
from datetime import datetime
from sklearn.utils import shuffle

df = pd.read_excel("list_1107.xlsx", header=0)

checkNum = 0

while checkNum <= 1000000:
    df = shuffle(df)

    tmp = df.sample(n=1, random_state=None)
    tmp['state'].values[0] += 1

    for i in range(df.shape[0]):
        if df.loc[i, 'name'] == tmp['name'].values[0]:
            #print(tmp['name'].values[0])
            df.loc[i, 'state'] = tmp['state'].values[0]

    checkNum += 1

timeStr = datetime.now().strftime("%Y%m%d_%H%M%S")
fileName = 'results_' + timeStr + '.xlsx'
print('Create: ', fileName)

df.to_excel(fileName, encoding="utf_8_sig")
