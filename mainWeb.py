from flask import Flask
from flask import render_template
from flask import request
import json
import random
import time

app = Flask(__name__)
data = {"name": []}
numData = {"num": ""}
mainList = ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

# flask利用裝飾器@app.route來定義路由
@app.route('/')
def index():
    return render_template('mainPage.html')

@app.route('/getRequest', methods=['GET', 'POST'])
def getData():
    prizeNum = int(numData['num'])
    print("input element: ", len(mainList))

    while prizeNum > 0:
        tmp = random.choice(mainList)
        time.sleep(0.1)
        mainList.remove(tmp)

        if len(mainList) == 0:
            print("No data")
            break

        data["name"].append(tmp)
        print("remain element: ", len(mainList))
        prizeNum -= 1
    return json.dumps(data)

@app.route('/setRequest', methods=['GET', 'POST'])
def setData():
    numData['num'] = request.form.get('num')
    return json.dumps({"msg": "set sucess"})


if __name__ == '__main__':
    app.debug = True
    app.run()