from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from BarBeerDrinker import database

app = Flask(__name__)

@app.route('/api/bar', methods=["GET"])
def get_bars():
    return jsonify(database.get_bars())


@app.route("/api/bar/<name>", methods=["GET"])
def find_bar(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.")
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/beers_cheaper_than", methods=["POST"])
def find_beers_cheaper_than():
    body = json.loads(request.data)
    max_price = body['maxPrice']
    return jsonify(database.filter_beers(max_price))


@app.route('/api/menu/<name>', methods=['GET'])
def get_menu(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified.')
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.")
        return jsonify(database.get_bar_menu(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/transactions/<name>',methods=['GET'])
def get_drinker_transactions(name):
    try:
        if name is None:
            raise ValueError('Drinker is not specified.')
        drinker = database.find_drinker(name)
        if drinker is None:
            return make_response("No drinker found with the given name.")
        return jsonify(database.get_drinker_transactions(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
        
@app.route('/api/most_ordered_beer/<name>', methods = ['GET'])
def get_most_ordered_beer(name):
    try:
        if name is None:
            raise ValueError('Drinker is not specified.')
        drinker = database.find_drinker(name)
        if drinker is None:
            return make_response("No drinker found with the given name.")
        return jsonify(database.get_most_ordered_beer(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 

@app.route("/api/bar-states", methods=["GET"])
def get_bar_states():
    try:
        return jsonify(database.get_bar_states())
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/item", methods = ["GET"])
def get_items():
    try:
        return jsonify(database.get_items()) 
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/beer", methods=["GET"])
def get_beers():
    try:
        return jsonify(database.get_beers())
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/beer-manufacturer", methods=["GET"])
def get_beer_manufacturers():
    try:
        return jsonify(database.get_beer_manufacturers(None))
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/beer-manufacturer/<beer>", methods=["GET"])
def get_manufacturers_making(beer):
    try:
        return jsonify(database.get_beer_manufacturers(beer))
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/likes", methods=["GET"])
def get_likes():
    try:
        drinker = request.args.get("drinker")
        if drinker is None:
            raise ValueError("Drinker is not specified.")
        return jsonify(database.get_likes(drinker))
    except Exception as e:
        return make_response(str(e), 500)


@app.route("/api/drinker", methods=["GET"])
def get_drinkers():
    try:
        return jsonify(database.get_drinkers())
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/drinker/likes", methods=["GET"])
def get_drinkers_from_likes():
    try:
        return jsonify(database.get_drinkers_from_likes())
    except Exception as e:
        return make_response(str(e), 500)

@app.route("/api/drinker/frequents", methods=["GET"])
def get_drinkers_from_frequents():
    try:
        return jsonify(database.get_drinkers_from_frequents()) 
    except Exception as e: 
        return make_response(str(e), 500) 

@app.route("/api/drinker/<name>", methods=["GET"])
def get_drinker(name): 
    try:
        if name is None:
            raise ValueError("Drinker is not specified.")
        return jsonify(database.get_drinker_info(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/bars-selling/<beer>', methods=['GET'])
def find_bars_selling(beer):
    try:
        if beer is None:
            raise ValueError('Beer not specified')
        return jsonify(database.get_bars_selling(beer))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/frequents-data', methods=['GET'])
def get_bar_frequent_counts():
    try:
        return jsonify(database.get_bar_frequent_counts())
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/consumer/<name>', methods =['GET'])
def get_biggest_consumer(name):
    try:
        if name is None:
            raise ValueError("Beer is not specified.")
        beer = database.find_beer(name)
        if beer is None:
            return make_response("No beer found with the given name.")
        return jsonify(database.get_biggest_consumer(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bar_most/<name>', methods =['GET'])
def get_bar_sell_most(name):
        try:
            if name is None:
                raise ValueError("Beer is not specified.")
            beer = database.find_beer(name)
            if beer is None:
                return make_response("No beer found with the given name.")
            return jsonify(database.get_bar_sell_most(name))
        except ValueError as e:
            return make_response(str(e), 400)
        except Exception as e:
            return make_response(str(e), 500)

@app.route('/api/beer_timedist/<name>', methods =['GET'])
def get_time_dis_beer(name):
        try:
            if name is None:
                raise ValueError("Beer is not specified.")
            beer = database.find_beer(name)
            if beer is None:
                return make_response("No beer found with the given name.")
            return jsonify(database.get_time_dis_beer(name))
        except ValueError as e:
            return make_response(str(e), 400)
        except Exception as e:
            return make_response(str(e), 500)

@app.route("/api/beerfind/<name>", methods=["GET"])
def find_beer(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        beer = database.find_beer(name)
        if beer is None:
            return make_response("No beer found with the given name.")
        return jsonify(beer)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bar_largestSpender/<name>', methods =['GET'])
def get_bar_largest_spender(name):
        try:
            if name is None:
                raise ValueError("Bar is not specified.")
            bar = database.find_bar(name)
            if bar is None:
                return make_response("No bar found with the given name.")
            return jsonify(database.get_bar_largest_spender(name))
        except ValueError as e:
            return make_response(str(e), 400)
        except Exception as e:
            return make_response(str(e), 500)

@app.route('/api/bar_popBeer/<name>', methods =['GET'])
def  get_beer_mostPopluar(name):
        try:
            if name is None:
                raise ValueError("Bar is not specified.")
            bar = database.find_bar(name)
            if bar is None:
                return make_response("No bar found with the given name.")
            return jsonify(database.get_beer_mostPopular(name))
        except ValueError as e:
            return make_response(str(e), 400)
        except Exception as e:
            return make_response(str(e), 500)

@app.route('/api/bar_popManf/<name>', methods =['GET'])
def  get_manf_most_beer(name):
        try:
            if name is None:
                raise ValueError("Bar is not specified.")
            bar = database.find_bar(name)
            if bar is None:
                return make_response("No bar found with the given name.")
            return jsonify(database.get_manf_most_beer(name))
        except ValueError as e:
            return make_response(str(e), 400)
        except Exception as e:
            return make_response(str(e), 500)

@app.route('/api/busy_period_day/<name>', methods =['GET'])
def  get_busiest_period_day(name):
    try:
        return jsonify(database.get_busiest_period_day(name))
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/busy_period_week/<name>', methods =['GET'])
def  get_busiest_period_week(name):
    try:
        return jsonify(database.get_busiest_period_week(name))
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/drinker_spendings_date/<name>/<bar>/<date>', methods=['GET'])
def get_drinker_spendings_bydate(name, bar, date):
        try:
            if bar is None:
                raise ValueError("Bar is not specified")
            bar1 = find_bar (bar)
            if bar1 is None: 
                return make_response("No Bar found with the given bar name")
            if date is None:
                raise ValueError("Date is not specified")
            if name is None: 
                raise ValueError("Drinker is not specified or DNE")
            drinker = database.find_drinker(name)
            if drinker is None:
                return make_response ("No drinker found with the given name")
            return jsonify(database.get_drinker_spendings_bydate(name,bar,date))
        except ValueError as e:
            return make_response(str(e), 400)
        except Exception as e:
            return make_response(str(e), 500) 
@app.route('/api/drinker_spendings_week/<name>/<bar>/<week>', methods=['GET'])
def get_drinker_spendings_byweek(name, bar, week):
        try:
            if bar is None:
                raise ValueError("Bar is not specified")
            bar1 = find_bar (bar)
            if bar1 is None: 
                return make_response("No Bar found with the given bar name" )
            if week is None:
                raise ValueError("Week is not specified")
            if name is None: 
                raise ValueError("Drinker is not specified or DNE")
            drinker = database.find_drinker(name)
            if drinker is None:
                return make_response ("No drinker found with the given name")
            return jsonify(database.get_drinker_spendings_byweek(name,bar,week))
        except ValueError as e:
            return make_response(str(e), 400)
        except Exception as e:
            return make_response(str(e), 500) 

@app.route('/api/drinker_spendings_month/<name>/<bar>/<month>', methods=['GET'])
def get_drinker_spendings_bymonth(name, bar, month):
        try:
            if bar is None:
                raise ValueError("Bar is not specified")
            bar1 = find_bar (bar)
            if bar1 is None: 
                return make_response("No Bar found with the given bar name" )
            if month is None:
                raise ValueError("Month is not specified")
            if name is None: 
                raise ValueError("Drinker is not specified or DNE")
            drinker = database.find_drinker(name)
            if drinker is None:
                return make_response ("No drinker found with the given name")
            return jsonify(database.get_drinker_spendings_bymonth(name,bar,month))
        except ValueError as e:
            return make_response(str(e), 400)
        except Exception as e:
            return make_response(str(e), 500) 
@app.route('/api/modifications/update_drinker/<name>/<column>/<value>', methods = ['GET'])
def update_drinker(name, column, value):
    try:
        drinker = database.get_drinker_info(name)
        if drinker is None:
            return make_response("No drinker found")
        return jsonify(database.update_drinker(name, column, value))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 


@app.route('/api/modifications/update_bar/<name>/<column>/<value>', methods = ['GET'])
def update_bar(name, column, value):
    try:
        bar= database.find_bar(name)
        if bar is None:
            return make_response("No bar found")
        return jsonify(database.update_bar(name, column, value))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 

@app.route('/api/modifications/update_item/<name>/<column>/<value>', methods = ['GET'])
def update_item(name, column, value):
    try:
        item = database.find_item(name)
        if item is None:
            return make_response("No item found")
        return jsonify(database.update_item(name, column, value))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 

@app.route('/api/modifications/update_like/<name>/<oldval>/<newval>', methods = ['GET'])
def update_like(name, oldval, newval):
    try:
        oldlikes = database.verify_likes(name, oldval)
        if oldlikes is None:
            return make_response("Drinker does not currently like the beer indicated by Old Value")
        newbeer = database.find_beer(newval)
        if newbeer is None:
            return make_response("The New Value indicated in not a beer that exists!")
        dup = database.check_dup_like_update(name, newval) 
        if dup is None:
            return jsonify(database.update_like(name,oldval, newval))
        return make_response("Update will cause duplicate entry")
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 

@app.route('/api/bar/insert_trans1/<time>/<date>/<day>/<tip>', methods =['GET'])
def  insert_transaction1(time,date,day,tip):
    try:
        return jsonify(database.insert_transaction1(time,date,day,tip))
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/bar/insert_trans2/<item>', methods =['GET'])
def  insert_transaction2(item):
    try:
        return jsonify(database.insert_transaction2(item))
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/bar/insert_trans3/<drinker>', methods =['GET'])
def  insert_transaction3(drinker):
    try:
        name = database.find_drinker(drinker)
        if name is None:
            return make_response("drinker name does not exist.", 400)
        return jsonify(database.insert_transaction3(drinker))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 
@app.route('/api/bar/insert_trans4/<bar>', methods =['GET'])
def  insert_transaction4(bar):
    try:
        return jsonify(database.insert_transaction4(bar))
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/bar/check_vaild_transaction_insert/<bar>/<day>/<time>', methods =['GET'])
def  check_vaild_transaction_insert(bar, day, time):
    try:
        valid = database.check_vaild_transaction_insert(bar, day, time)
        if valid is None:
            return make_response("invalid transaction time.",400)
        return jsonify(database.check_vaild_transaction_insert(bar, day, time))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 

@app.route('/api/bar/insert_trans5/<tid>', methods =['GET'])
def  insert_transaction5(tid):
    try:
        return jsonify(database.insert_transaction5(tid))
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/any_query/<query>', methods =['GET'])
def  anyquery_run(query):
    try:
        return jsonify(database.anyquery_run(query))
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/modifications/insert_drinker/<name>/<address>/<state>/<phone>', methods =['GET'])
def  insert_drinker(name, address, state, phone):
    try:
        return jsonify(database.insert_drinker(name, address, state, phone))
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/insert_bar/<name>/<license>/<state>/<phone>/<address>', methods =['GET'])
def  insert_bar(name, license, state, phone, address):
    try:
        dup = database.find_duplicate_bar(name)
        if dup is None:
            return jsonify(database.insert_bar(name, license, state, phone, address))
        return make_response("Duplicate bar! bar is already exist")
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 
@app.route('/api/insert_occurs/<tid>/<bar>', methods =['GET'])
def  insert_occurs(tid, bar):
    try:
        dup = database.find_duplicate_occur(tid)
        if dup is None:
            return jsonify(database.insert_occurs(tid, bar))
        return make_response("Transaction ID is already assigned to a bar")
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 
@app.route ('/api/update_frequent/<name>/<oldbar>/<newbar>', methods=['GET'])
def update_frequent (name, oldbar, newbar):
    try:
        exist = database.find_duplicate_frequent(name, oldbar)
        if exist is None:
            return make_response("Drinker-OldBar tuple does not exist in frequents, no update.")
        valid = database.check_vaild_freq_insert(name, newbar)
        if valid is None:
            return make_response("Unsatisfy pattern2! Invalid frequent state.")
        return jsonify(database.update_frequents(name, oldbar, newbar))
    except ValueError as e:
        return make_response(str(e), 400) 
    except Exception as e:
        return make_response(str(e), 500)     

@app.route('/api/insert_frequent/<name>/<bar>', methods =['GET'])
def  insert_frequent(name, bar): 
    try:
        dup = database.find_duplicate_frequent(name, bar)
        if dup is None:
            valid = database.check_vaild_freq_insert(name, bar)
            if valid is None:
                return make_response("Unsatisfy pattern2! Invalid frequent state.")
            return jsonify(database.insert_frequent(name, bar))
        return make_response("Duplicate name-bar is already exist")
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 

@app.route('/api/insert_likes/<name>/<beer>', methods =['GET'])
def  insert_likes(name, beer):
    try:
        valid = database.is_it_beer(beer) 
        if valid is None:
            return make_response("invalid item type")
        return jsonify(database.insert_likes(name, beer))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 
@app.route('/api/delete_bar/<name>', methods =['GET'])
def  delete_bar(name):
    try:
        return jsonify(database.delete_bar(name))
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/bar/insert_item/<name>/<manf>/<type>', methods =['GET'])
def  insert_item(name,manf,type):
    try:
        item = database.find_exact_item(name,manf,type)
        if item is None:
            return jsonify(database.insert_item(name,manf,type))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 
@app.route('/api/delete_drinker/<name>', methods =['GET'])
def  delete_drinker(name):
    try:
        return jsonify(database.delete_drinker(name))
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/delete_frequent/<bar>/<name>', methods =['GET'])
def  delete_frequent(bar,name):
    try:
        valid = database.has_freq_drinker_bar(bar,name)
        if valid is None:
            return make_response("There is no existing frequent tuple with given bar and name.")
        return jsonify(database.delete_frequent(bar,name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 

@app.route('/api/insert_sells/<bar>/<item>/<price>', methods =['GET'])
def  insert_sells(bar, item, price): 
    try:
        dup = database.find_dup_sells(bar,item)
        if dup is None:
            return jsonify(database.insert_sells(bar, item, price))
        return make_response("Duplicate bar-item is already exist!")
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 


@app.route('/api/verify_pattern3_1/<bar>/<beer>', methods =['GET'])
def  vaild_pattern3_1(bar, beer):
    try:
        return jsonify(database.vaild_pattern3_1(bar, beer))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 
@app.route('/api/verify_pattern3_2/<bar>/<beer>/<price>', methods =['GET'])
def  vaild_pattern3_2(bar, beer, price):
    try:
        return jsonify(database.vaild_pattern3_2(bar, beer, price))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 
@app.route('/api/verify_pattern3_0/<item>', methods =['GET'])
def  vaild_pattern3_0(item):
    try: 
        return jsonify(database.is_it_beer(item))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 
@app.route('/api/insert_has/<tid>/<item>', methods =['GET'])
def  insert_has(tid, item): 
    try:
        tid_exist = database.find_tid(tid)  
        if tid_exist is None:
            return make_response("Transaction ID not exists")
        valid_item = database.vaild_has_item(tid,item)
        if valid_item is None:
            return make_response("Bar is not selling given item.")
        jsonify(database.insert_has(tid, item))
        return jsonify(database.insert_transaction5(tid))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 

@app.route('/api/update_has/<tid>/<olditem>/<newitem>', methods = ['GET'])
def update_has(tid, olditem, newitem):
    try:
        exist = database.check_has_tuple_exists(tid, olditem)
        if exist is None:
            return make_response("TRANSACTION ID-ITEM tuple does not exist in Has, no update.")
        valid_item = database.vaild_has_item(tid, newitem) 
        if valid_item is None:
            return make_response("Bar is not selling the New Item.")
        jsonify(database.update_has(tid, olditem, newitem)) 
        return jsonify(database.insert_transaction5(tid))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)    
@app.route('/api/delete_item/<name>', methods =['GET'])
def  delete_item(name):
    try:
        return jsonify(database.delete_item(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 

@app.route('/api/delete_sells/<bar>/<item>', methods =['GET'])
def  delete_sell(bar, item):
    try:
        valid = database.has_sell_bar_item(bar,item)
        if valid is None:
            return make_response("There is no existing data in sells with given bar and item.")
        return jsonify(database.delete_sell(bar, item))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 


@app.route('/api/delete_like/<name>/<beer>', methods =['GET'])
def  delete_likes(name,beer):
    try:
        valid = database.has_likes_drinker_beer(name,beer)
        if valid is None:
            return make_response("There is no existing data in likes with given name and beer.")
        return jsonify(database.delete_likes(name,beer))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 
    

@app.route('/api/delete_occur/<tid>/<bar>', methods =['GET'])
def  delete_occur(tid,bar):
    try:
        valid = database.has_occur_tid_bar(tid,bar)
        if valid is None:
            return make_response("There is no existing data in occurs with given tid and bar.")
        return jsonify(database.delete_occur(tid,bar))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 


@app.route('/api/delete_has_valid/<tid>/<item>', methods =['GET'])
def  has_tid_item_check(tid, item):
    try:
        valid = database.has_tid_item_check(tid, item)
        if valid is None:
            return make_response("There is no existing tuple with given Transaction ID and item.")
        return jsonify(database.has_tid_item_check(tid, item))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 

@app.route('/api/delete_has_lastItem/<tid>', methods =['GET'])
def  is_last_item(tid):
    try:
        return jsonify(database.is_last_item(tid))
    except Exception as e:
        make_response(str(e), 500)

@app.route('/api/delete_has/<tid>/<item>', methods =['GET'])
def  delete_has(tid, item):
    try:
        return jsonify(database.delete_has(tid, item))
    except Exception as e:
        make_response(str(e), 500)
@app.route('/api/delete_pays/<tid>/<name>', methods =['GET'])
def  delete_pay(tid,name):
    try:
        valid = database.has_pay_tid_drinker(tid,name) 
        if valid is None:
            return make_response("There is no existing data in pays with given tid and payer.")
        return jsonify(database.delete_pay(tid,name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 
@app.route('/api/delete_day/<bar>/<day>', methods =['GET'])
def  delete_day(bar,day):
    try: 
        op_time = database.has_operation_time(bar,day)
        if op_time is None:
            return make_response("There is no existing operation day with given bar and day")
        return jsonify(database.delete_day(bar,day))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500) 

@app.route('/api/insert_pay/<tid>/<name>', methods =['GET'])
def  insert_pays(tid, name):
    try:
        tid_exist = database.find_tid(tid)
        if tid_exist is None:
            return make_response("Transaction ID not exists")
        dup = database.find_duplicate_pay(tid)
        if dup is None:
            return jsonify(database.insert_pays(tid, name))
        return make_response("Transaction ID is already assigned to a drinker!")
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/update_pays/<tid>/<oldpayer>/<newpayer>', methods = ['GET'])
def update_pays(tid, oldpayer, newpayer):
    try: 
        exists = database.find_duplicate_pay_tuple(tid, oldpayer)
        if exists is None:
            return make_response("Transaction ID - Old Value tuple is not existing in Pays, no update.")
        dup = database.find_duplicate_pay_tuple(tid, newpayer)
        if dup is None: 
            return jsonify(database.update_pays(tid, oldpayer, newpayer)) 
        return make_response("Transaction ID-NewValue indicated will create duplicate entry, no update")
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)    



@app.route('/api/insert_day/<name>/<open>/<close>/<day>', methods =['GET'])
def  insert_days(name, open, close, day):
    try:
        bar = database.find_bar(name)
        if bar is None:
            return make_response("Given bar does not exist.")
        dup = database.find_duplicate_day(name, day)
        if dup is not None:
            return make_response("Duplicate bar-day is already exist")
        return jsonify(database.insert_days(name, open, close, day))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
        
@app.route('/api/delete_trans/<tid>', methods =['GET'])
def  delete_transaction(tid):
    try:
        delete = database.delete_transaction(tid)
        if delete is None:
            return make_response("Transaction ID does not exist, nothing to delete")
        return jsonify(delete)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/update_day_closingTime/<bar>/<day>/<closeTime>', methods =['GET'])
def  update_days_pattern1validation_close(bar,day,closeTime):
    try:
        valid = database.update_days_pattern1validation_close(bar,day,closeTime) 
        if valid is None:
            return make_response("Validate pattern 1! not allow to update")
        return jsonify(valid)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
        
@app.route('/api/update_days_daycolumn/<bar>/<day>/<newVal>', methods =['GET'])
def  update_days_daycolumn(bar,day,newVal):
    try:
        valid = database.update_days_daycolumn(bar,day,newVal)
        if valid is None:
            return make_response("There is already existing bar-day")
        return jsonify(valid)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/update_day_openingTime/<bar>/<day>/<openTime>', methods =['GET'])
def  update_days_pattern1validation_open(bar,day,openTime):
    try:
        valid = database.update_days_pattern1validation_open(bar,day,openTime)
        if valid is None:
            return make_response("inValid pattern 1! not allow to update")
        return jsonify(valid)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/update_day_bar/<bar>/<day>/<newVal>', methods =['GET'])
def  update_days_bar(bar,day,newVal):
    try:
        valid = database.dup_day_bar(day,newVal)
        if valid is None:
            return jsonify(database.update_days_bar(bar,day,newVal))
        return make_response("There is already existing new bar-day")
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/update_trans_tid/<tid>/<newVal>', methods =['GET'])
def  update_transaction_id(tid, newVal):
    dup = database.find_duplicate_tid(newVal)
    if dup is None:
        return jsonify(database.update_transaction_id(tid, newVal))
    return make_response("Transaction ID is already exist!", 400)

@app.route('/api/update_trans_tid/<tid>/<newVal>', methods =['GET'])
def  update_transaction_tip(tid, newVal):
    return jsonify(database.update_transaction_tip(tid, newVal))

@app.route('/api/update_trans_time/<tid>/<newVal>', methods =['GET'])
def  update_transaction_time(tid, newVal):
    valid = database.check_vaild_transaction_time(tid, newVal)
    if valid is None:
        return make_response("Unsatisfy pattern1! invalid transaction time.",400)
    return jsonify(database.update_transaction_time(tid, newVal))

@app.route('/api/update_trans_date/<tid>/<newVal>', methods =['GET'])
def  update_transaction_date(tid, newVal):
    return jsonify(database.update_transaction_date(tid, newVal))

@app.route('/api/update_trans_day/<tid>/<newVal>', methods =['GET'])
def  update_transaction_day(tid, newVal):
    valid = database.check_vaild_transaction_day(tid, newVal)
    if valid is None:
        return make_response("Unsatisfy pattern1! invalid transaction day.",400)
    return jsonify(database.update_transaction_time(tid, newVal))

@app.route('/api/update_sells_item/<bar>/<item>/<newVal>', methods =['GET'])
def  update_sells_changeItem(bar, item, newVal):
    dup = database.find_dup_sells(bar,newVal)
    if dup is None:
        return jsonify(database.update_sells_changeItem(bar, item, newVal))
    return make_response("Duplicate bar-new item is already exist!", 400)
@app.route('/api/update_sells_bar/<bar>/<item>/<newVal>', methods =['GET'])
def  update_sells_changeBar(bar, item, newVal):
    dup = database.find_dup_sells(newVal,item)
    if dup is None:
        return jsonify(database.update_sells_changeBar(bar, item, newVal))
    return make_response("Duplicate new bar-item is already exist!", 400)