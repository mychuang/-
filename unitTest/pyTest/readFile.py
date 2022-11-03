import pandas as pd
import time

# Read excell
df = pd.read_excel("test.xlsx", header=0)

# get info
print(df.shape)
print("num of row: ", df.shape[0])
print(df.columns)

#show
print(df['code'][0:5])
print(type(df['code']))

# 獲取儲存格內容
print("0列0行: ", df.iat[0, 0])
print("48列2行: ", df.iat[48, 2])

# Select one row randomly using sample()
# without give any parameters
print(df.sample())

# check sample() state
# without give any parameters
"""
tmp = df.sample()
if tmp['state'].values == 0:
    print("none")
"""

print("-------------------------")

# 測試迴圈 + 判斷
prizeNum = 3  # this should be key in by user

while prizeNum > 0:
    tmp = df.sample()
    time.sleep(0.1)

    if tmp['state'].values == 0:
        ind = tmp.index.values[0]
        print(ind)
        print(tmp['code'].values, tmp['name'].values, tmp['state'].values, ' change state')
        df.loc[ind, 'state'] = 1
        print(df.loc[ind, 'state'])

    prizeNum -= 1

## export
df.to_excel('results.xlsx',encoding="utf_8_sig")
