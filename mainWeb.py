import pandas as pd
from flask import Flask
from flask import render_template
from flask import request
import json
import random
from datetime import datetime

#Define global data
chooseData = {'code': '', 'name': '', 'state': ''}
allData = {'codeName': []}
app = Flask(__name__)

def getAll():
    global df
    global allData
    # clean data
    allData = {'codeName': []}

    # check status and update allData for showing
    for i in range(df.shape[0]):
        if df.loc[i, 'state'] == 0:
            codeName = df.loc[i, 'code'] + df.loc[i, 'name']
            allData['codeName'].append(codeName)

@app.route('/')
def index():
    getAll()
    return render_template('mainPage.html')

@app.route('/getAll', methods=['GET'])
def getData():
    getAll()
    return json.dumps(allData)

@app.route('/getOne', methods=['GET'])
def getOneData():
    global df
    global chooseData
    # clean data
    chooseData = {'code': '', 'name': '', 'state': ''}

    while True:
        tmp = df.sample()
        if tmp['state'].values == 0:
            chooseData['code'] = tmp['code'].values[0]
            chooseData['name'] = tmp['name'].values[0]
            chooseData['state'] = str(tmp['state'].values[0])
            break
    return json.dumps(chooseData)

@app.route('/putOne', methods=['Put'])
def putData():
    global df
    global chooseData
    
    chooseData['state'] = request.form.get('state')

    # update df
    for i in range(df.shape[0]):
        if df.loc[i, 'name'] == chooseData['name']:
            df.loc[i, 'state'] = chooseData['state']
            print("update df: ", df.loc[i, 'name'], df.loc[i, 'state'])
            return json.dumps({"msg": "set sucess"})
    return json.dumps({"msg": "set error, no correspond name"})

@app.route('/out', methods=['GET'])
def outData():
    global df
    timeStr = datetime.now().strftime("%Y%m%d_%H%M%S")
    fileName = 'results_' + timeStr + '.xlsx'
    print('Create: ', fileName)

    df.to_excel(fileName, encoding="utf_8_sig")

    return json.dumps({"msg": fileName})

if __name__ == '__main__':
    # Read excell
    df = pd.read_excel("test.xlsx", header=0)

    #run web
    app.debug = True
    app.run()