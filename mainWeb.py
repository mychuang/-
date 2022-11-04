import pandas as pd
from flask import Flask
from flask import render_template
from flask import request
import json
import random
import time

def getAll():
    global df
    global allData
    # clean data
    allData = {
        'codeName': []
    }

    # check status and update
    for i in range(df.shape[0]):
        if df.loc[i, 'state'] == 0:
            codeName = df.loc[i, 'code'] + df.loc[i, 'name']
            allData['codeName'].append(codeName)

app = Flask(__name__)
# flask利用裝飾器@app.route來定義路由
@app.route('/')
def index():
    getAll()
    return render_template('mainPage.html')

@app.route('/getAll', methods=['GET'])
def getData():
    getAll()
    #for i in range(df.shape[0]):
    #    print(allData['codeName'][i])
    return json.dumps(allData)

@app.route('/setRequest', methods=['GET', 'POST'])
def setData():
    pass

if __name__ == '__main__':
    """
    Define global data
    """
    chooseData = {
        'code': '',
        'name': '',
        'state': ''
    }
    allData = {
        'codeName': []
    }

    # Read excell
    df = pd.read_excel("test.xlsx", header=0)

    #run web
    app.debug = True
    app.run()