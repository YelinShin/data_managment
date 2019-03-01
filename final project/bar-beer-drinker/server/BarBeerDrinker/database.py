from sqlalchemy import create_engine
from sqlalchemy import sql

from BarBeerDrinker import config

engine = create_engine(config.database_uri)

def get_bars():
    with engine.connect() as con:
        rs = con.execute("SELECT name, license, state, phone, address FROM bars ORDER BY name;")
        return [dict(row) for row in rs]

def find_bar(name):
    with engine.connect() as con:
        query = sql.text(
            "SELECT name, license, state, phone, address FROM bars WHERE name = :name;")

        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def find_beer(name):
    with engine.connect() as con:
        query = sql.text(
            "Select i.name, i.manf, i.type From items i  WHERE i.type = 'Beer' AND name = :name;"
        )

        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)
def find_item(name):
        with engine.connect() as con:
                query = sql.text(
                        "SELECT * FROM items WHERE name = :name;"
                )
                rs = con.execute(query, name= name)
                result = rs.first()
                if result is None:
                        return None
                return dict(result)

def filter_beers(max_price):
    with engine.connect() as con:
        query = sql.text(
            "SELECT * FROM sells WHERE price < :max_price;"
        )

        rs = con.execute(query, max_price=max_price)
        results = [dict(row) for row in rs]
        for r in results:
            r['price'] = float(r['price'])
        return results

def get_bar_menu(bar_name):
    with engine.connect() as con:
        query = sql.text(
            'SELECT a.bar, a.item, b.manf, a.price \
                FROM sells as a \
                JOIN items AS b \
                ON a.item = b.name \
                WHERE a.bar = :bar; \
            ')
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results


def get_bars_selling(beer):
    with engine.connect() as con:
        query = sql.text('SELECT a.bar, a.price, b.customers \
                FROM sells AS a \
                JOIN (SELECT bar, count(*) AS customers FROM frequents GROUP BY bar) as b \
                ON a.bar = b.bar \
                WHERE a.item = :beer \
                ORDER BY a.price; \
            ')
        rs = con.execute(query, beer=beer)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results


def get_bar_frequent_counts():
    with engine.connect() as con:
        query = sql.text('SELECT bar, count(*) as frequentCount \
                FROM frequents \
                GROUP BY bar; \
            ')
        rs = con.execute(query)
        results = [dict(row) for row in rs]
        return results


def get_bar_states():
    with engine.connect() as con:
        rs = con.execute('SELECT DISTINCT state FROM bars;')
        return [row['state'] for row in rs]


def get_beers():
    """Gets a list of beer names from the beers table."""

    with engine.connect() as con:
        rs = con.execute('SELECT name, manf FROM items WHERE items.type = "Beer";')
        return [dict(row) for row in rs]
def get_items():
        with engine.connect() as con:
                rs = con.execute('SELECT name, manf, type FROM items;')
                return [dict(row) for row in rs]

def get_beer_manufacturers(beer):
    with engine.connect() as con:
        if beer is None:
            rs = con.execute('SELECT DISTINCT manf FROM items WHERE items.type = "Beer";')
            return [row['manf'] for row in rs]

        query = sql.text('SELECT manf FROM beers WHERE name = :beer;')
        rs = con.execute(query, beer=beer)
        result = rs.first()
        if result is None:
            return None
        return result['manf']
def get_drinkers():
    with engine.connect() as con:
        rs = con.execute('SELECT name, address, state, phone FROM drinkers;')
        return [dict(row) for row in rs]

def get_drinkers_from_likes():
        with engine.connect() as con:
                rs = con.execute('SELECT DISTINCT name from likes;')
                return [dict(row) for row in rs]

def get_drinkers_from_frequents():
        with engine.connect() as con:
                rs = con.execute('SELECT DISTINCT name from frequents;')
                return [dict(row) for row in rs]

def get_biggest_consumer(beer):
    with engine.connect() as con:
        query = sql.text('SELECT p.name, COUNT(*) as count\
                            FROM has h, items i, pays p\
                            WHERE i.type = "Beer" AND i.name = :beer AND i.name = h.item AND p.tid = h.tid\
                            GROUP by p.name\
                            order by count desc, p.name\
                            limit 3')
        rs = con.execute(query, beer=beer)
        results = [dict(row) for row in rs]
        return results

def get_bar_sell_most(beer):
    with engine.connect() as con:
        query = sql.text('SELECT  o.bar, COUNT(*) as count\
                        FROM items i, has h, occurs o\
                        WHERE h.item = i.name AND h.tid = o.tid AND i.type ="Beer" AND i.name = :beer\
                        GROUP BY o.bar\
                        ORDER BY  count desc, o.bar\
                        LIMIT  3;')
        rs = con.execute(query, beer=beer)
        results = [dict(row) for row in rs]
        return results

def get_time_dis_beer(beer):
    with engine.connect() as con:
        query = sql.text('SELECT TIME_FORMAT (t.time, "%H: 00:00") hr,  COUNT(*) as count\
                        FROM transactions t, has h, items i\
                        WHERE i.name = :beer AND h.tid = t.id AND h.item = i.name\
                        GROUP by hr\
                        ORDER BY count desc\
                        limit 3;')
        rs= con.execute(query, beer=beer)
        results = [dict(row) for row in rs]
        return results


def get_drinker_transactions(drinker_name):
    with engine.connect() as con:
        query = sql.text('SELECT p.name, p.tid , DATE_FORMAT(t.date, "%W, %M %e, %Y") date, TIME_FORMAT (t.time, "%H:%i:%S") time, t.tip, t.totalSum \
                        FROM pays p, transactions t, occurs o \
                        WHERE t.id = p.tid AND o.tid = t.id AND p.name = :drinker \
                        GROUP BY t.id, o.bar \
                        ORDER by date, time, o.bar;')
        rs = con.execute(query, drinker = drinker_name)
        results = [dict (row) for row in rs] 
        return results  

def get_most_ordered_beer(drinker_name):
    with engine.connect() as con:
        query = sql.text('SELECT h.item, COUNT(*) count \
                        FROM pays p, items i, has h \
                        WHERE p.tid = h.tid AND h.item = i.name AND i.type = "Beer" AND p.name = :drinker \
                        GROUP BY h.item \
                        ORDER BY count DESC, h.item \
                        LIMIT 3;')
        rs = con.execute(query, drinker = drinker_name)
        results = [dict (row) for row in rs] 
        return results  

def find_drinker(name):
    with engine.connect() as con:
        query = sql.text(
            "SELECT * FROM drinkers WHERE name = :name;"
        )
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def get_likes(drinker_name):
    """Gets a list of beers liked by the drinker provided."""

    with engine.connect() as con:
        query = sql.text('SELECT beer FROM likes WHERE drinker = :name;')
        rs = con.execute(query, name=drinker_name)
        return [row['beer'] for row in rs]


def get_drinker_info(drinker_name):
    with engine.connect() as con:
        query = sql.text('SELECT * FROM drinkers WHERE name = :name;')
        rs = con.execute(query, name=drinker_name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def get_bar_largest_spender(name):
    with engine.connect() as con:
        query = sql.text('select p.name, SUM( t.totalSum) as totalSpending\
                        FROM occurs o, pays p, transactions t\
                        WHERE o.tid = p.tid AND t.id = o.tid AND o.bar = :bar\
                        GROUP BY p.name\
                        ORDER by totalSpending desc\
                        limit 3;')
        rs= con.execute(query, bar=name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['totalSpending'] = round(results[i]['totalSpending'],2)
        return results

def get_beer_mostPopular(name):
    with engine.connect() as con:
        query = sql.text('SELECT B.item, B.count\
                        FROM (SELECT o.bar,s.item , COUNT(*) as count\
                        FROM occurs o, sells s, has h, items i\
                        WHERE o.bar = s.bar  and o.bar = :bar AND o.tid = h.tid AND s.item = h.item and i.type = "Beer" and i.name = h.item\
                        GROUP by s.item\
                        order by count desc, s.item) as B, (SELECT A.count \
                                                        FROM (SELECT o.bar,s.item , COUNT(*) as count\
                                                                FROM occurs o, sells s, has h, items i\
                                                                WHERE o.bar = s.bar  and o.bar = :bar AND o.tid = h.tid AND s.item = h.item and i.type = "Beer" and i.name = h.item\
                                                                GROUP by s.item\
                                                                order by count desc, s.item) A\
                                                        GROUP BY count\
                                                        limit 1) as A\
                        WHERE B.count = A.count\
                        ORDER BY B.count DESC, B.item ASC;')
        rs= con.execute(query, bar=name)
        results = [dict(row) for row in rs]
        return results

def get_manf_most_beer(name):
    with engine.connect() as con:
        query = sql.text('select B.manf, B.count\
                        from (select i.manf, COUNT(*) as count\
		                from sells s, occurs o, items i, has h\
                                where o.bar= :bar AND s.bar = o.bar AND s.item = i.name\
                                AND i.type = "Beer" AND h.tid = o.tid AND h.item = s.item\
                                group by i.manf\
                                order by count desc) as B, \
                                (SELECT A.count\
                                FROM (select i.manf, COUNT(*) as count\
                                                from sells s, occurs o, items i, has h\
                                                where o.bar= :bar AND s.bar = o.bar AND s.item = i.name\
                                                AND i.type = "Beer" AND h.tid = o.tid AND h.item = s.item\
                                                group by i.manf\
                                                order by count desc) A\
                                GROUP BY count\
                                limit 1) as A\
                        where B.count = A.count\
                        ORDER BY B.count DESC, B.manf ASC;')
        rs= con.execute(query, bar=name)
        results = [dict(row) for row in rs]
        return results

def get_busiest_period_day(name):
    with engine.connect() as con:
        query = sql.text('select *\
                        from\
                        (select *\
                        from\
                        (select *\
                        from\
                        (select *\
                        from \
                        (select *\
                        from \
                        (select *\
                        from \
                        (SELECT CONCAT (TIME_FORMAT (t.time, "%H: 00:00"), " ~ ", time_format(addtime(t.time,"01:00:00"), "%H:00:00"))hr,  COUNT(*) as count, d.day, o.bar\
                        FROM transactions t, occurs o, days d\
                        WHERE o.bar = :bar AND o.tid = t.id AND d.name = o.bar AND t.day = d.day AND t.day = "mon"\
                        GROUP by hr\
                        ORDER BY count desc\
                        limit 1) mon\
                        UNION\
                        (SELECT CONCAT (TIME_FORMAT (t.time, "%H: 00:00"), " ~ ", time_format(addtime(t.time,"01:00:00"), "%H:00:00"))hr,  COUNT(*) as count, d.day, o.bar\
                        FROM transactions t, occurs o, days d\
                        WHERE o.bar = :bar AND o.tid = t.id AND d.name = o.bar AND t.day = d.day AND t.day = "tue"\
                        GROUP by hr\
                        ORDER BY count desc\
                        limit 1)) c\
                        UNION\
                        (SELECT CONCAT (TIME_FORMAT (t.time, "%H: 00:00"), " ~ ", time_format(addtime(t.time,"01:00:00"), "%H:00:00"))hr,  COUNT(*) as count, d.day, o.bar\
                        FROM transactions t, occurs o, days d\
                        WHERE o.bar = :bar AND o.tid = t.id AND d.name = o.bar AND t.day = d.day AND t.day = "wed"\
                        GROUP by hr\
                        ORDER BY count desc\
                        limit 1)) d\
                        UNION \
                        (SELECT CONCAT (TIME_FORMAT (t.time, "%H: 00:00"), " ~ ", time_format(addtime(t.time,"01:00:00"), "%H:00:00"))hr,  COUNT(*) as count, d.day, o.bar\
                        FROM transactions t, occurs o, days d\
                        WHERE o.bar = :bar AND o.tid = t.id AND d.name = o.bar AND t.day = d.day AND t.day = "thur"\
                        GROUP by hr\
                        ORDER BY count desc\
                        limit 1)) e\
                        UNION\
                        (SELECT CONCAT (TIME_FORMAT (t.time, "%H: 00:00"), " ~ ", time_format(addtime(t.time,"01:00:00"), "%H:00:00"))hr,  COUNT(*) as count, d.day, o.bar\
                        FROM transactions t, occurs o, days d\
                        WHERE o.bar = :bar AND o.tid = t.id AND d.name = o.bar AND t.day = d.day AND t.day = "fri"\
                        GROUP by hr\
                        ORDER BY count desc\
                        limit 1)) f\
                        UNION\
                        (SELECT CONCAT (TIME_FORMAT (t.time, "%H: 00:00"), " ~ ", time_format(addtime(t.time,"01:00:00"), "%H:00:00"))hr,  COUNT(*) as count, d.day, o.bar\
                        FROM transactions t, occurs o, days d\
                        WHERE o.bar = :bar AND o.tid = t.id AND d.name = o.bar AND t.day = d.day AND t.day = "sat"\
                        GROUP by hr\
                        ORDER BY count desc\
                        limit 1)) h\
                        UNION\
                        (SELECT CONCAT (TIME_FORMAT (t.time, "%H: 00:00"), " ~ ", time_format(addtime(t.time,"01:00:00"), "%H:00:00"))hr,  COUNT(*) as count, d.day, o.bar\
                        FROM transactions t, occurs o, days d\
                        WHERE o.bar = :bar AND o.tid = t.id AND d.name = o.bar AND t.day = d.day AND t.day = "sun"\
                        GROUP by hr\
                        ORDER BY count desc\
                        limit 1);')
        rs= con.execute(query, bar=name)
        results = [dict(row) for row in rs]
        return results

def get_busiest_period_week(name):
    with engine.connect() as con:
        query = sql.text('SELECT COUNT(*) as count, d.day, o.bar\
                        FROM transactions t, occurs o, days d\
                        WHERE o.bar = :bar AND o.tid = t.id AND d.name = o.bar AND t.day = d.day\
                        GROUP BY d.day\
                        ORDER BY count desc\
                        limit 3;')
        rs= con.execute(query, bar=name)
        results = [dict(row) for row in rs]
        return results

def get_drinker_spendings_bydate(name, bar, date):
        with engine.connect() as con:
                query = sql.text('SELECT o.bar as bar, Sum(t.totalSum) as spending\
                                FROM transactions t, pays p, occurs o\
                                WHERE p.tid = t.id AND o.tid = t.id\
                                AND o.bar = :bar AND p.name = :name \
                                AND t.date = :date \
                                GROUP BY t.date\
                                ORDER BY spending DESC\
                                LIMIT 3;')
                rs = con.execute (query, bar =bar, date = date, name = name)
                results = [dict(row) for row in rs]
                for i, _ in enumerate(results):
                 results[i]['spending'] = round(results[i]['spending'],2)
                return results
def get_drinker_spendings_byweek(name, bar, week):
        with engine.connect() as con:
                query = sql.text('SELECT DATE_FORMAT(t.date, "%Y-%m-%d") date, Sum(t.totalSum) as spending\
                                FROM transactions t, pays p, occurs o\
                                WHERE p.tid = t.id AND o.tid = t.id\
                                AND o.bar = :bar AND p.name = :name \
                                AND t.date between :date AND DATE_ADD(:date, INTERVAL 7 DAY)\
                                GROUP BY t.date\
                                ORDER BY t.date\
                                LIMIT 7;')
                rs = con.execute (query, bar =bar, date = week, name = name)
                results = [dict(row) for row in rs]
                for i, _ in enumerate(results):
                 results[i]['spending'] = round(results[i]['spending'],2)
                return results
def get_drinker_spendings_bymonth(name, bar, month):
        with engine.connect() as con:
                query = sql.text('SELECT DATE_FORMAT(t.date, "%Y-%m-%d") date , SUM(t.totalSum) spending \
                                FROM transactions t, pays p, occurs o \
                                WHERE p.tid = t.id AND o.tid = t.id AND p.name = :name \
                                AND o.bar = :bar \
                                AND date(t.date) like (:month"-%") \
                                GROUP BY t.date\
                                ORDER BY t.date ;') 
                rs = con.execute(query, bar = bar, month = month, name = name)
                results = [dict(row) for row in rs]
                for i, _ in enumerate(results):
                 results[i]['spending'] = round(results[i]['spending'],2)
                return results

def update_has(tid, olditem, newitem):
        with engine.connect() as con:
                query =sql.text ('UPDATE has SET item = :newitem WHERE tid = :tid AND item = :olditem;')
                con.execute(query, tid = tid, olditem = olditem, newitem= newitem)
                query2 = sql.text ('SELECT * FROM has\
                                WHERE tid= :tid AND item = :newitem;')
                rs = con.execute(query2, tid = tid, newitem = newitem)
                results = [dict(row) for row in rs]
                return results  


def update_drinker (name, column, value):
        with engine.connect() as con:
                db_dict={'column': column, 'value' : value , 'name' : name}
                query ="UPDATE drinkers SET {column} = %(value)s WHERE name = %(name)s;"
                query = query.format(**db_dict)
                con.execute(query, db_dict)
                if column == "state" :
                       query3 = sql.text('DELETE FROM frequents WHERE name = :name;')
                       con.execute(query3, name = name)
                query2 = sql.text ('SELECT * FROM drinkers\
                                WHERE name= :name AND :column = :value;')
                rs = con.execute(query2, name = name, column = column, value = value)
                results = [dict(row) for row in rs]
                return results
def update_bar(name, column, value):
        with engine.connect() as con:
                db_dict={'column': column, 'value' : value , 'name' : name}
                query ="UPDATE bars SET {column} = %(value)s WHERE name = %(name)s;"
                query = query.format(**db_dict)
                con.execute(query, db_dict)
                query2 = sql.text ('SELECT * FROM bars\
                                WHERE name= :name AND :column = :value;')
                rs = con.execute(query2, name = name, column = column, value = value)
                results = [dict(row) for row in rs]
                return results        
def update_item(name, column, value):
        with engine.connect() as con:
                db_dict={'column': column, 'value' : value , 'name' : name}
                query ="UPDATE items SET {column} = %(value)s WHERE name = %(name)s;"
                query = query.format(**db_dict)
                con.execute(query, db_dict)
                query2 = sql.text ('SELECT * FROM items\
                                WHERE name= :name AND :column = :value;')
                rs = con.execute(query2, name = name, column = column, value = value)
                results = [dict(row) for row in rs]
                return results    
def update_like(name, oldval, newval):
        with engine.connect() as con:
                query =sql.text ('UPDATE likes SET beer = :newval WHERE name = :name AND beer = :oldval;')
                con.execute(query, name = name, oldval = oldval, newval= newval)
                query2 = sql.text ('SELECT * FROM likes\
                                WHERE name= :name AND beer = :newval;')
                rs = con.execute(query2, name = name, newval = newval)
                results = [dict(row) for row in rs]
                return results   
def update_frequents(name, oldbar, newbar):
        with engine.connect() as con:
                query =sql.text ('UPDATE frequents SET bar = :newbar WHERE name = :name AND bar = :oldbar;')
                con.execute(query, name = name, oldbar = oldbar, newbar= newbar)
                query2 = sql.text ('SELECT * FROM frequents\
                                WHERE name= :name AND bar = :newbar;')
                rs = con.execute(query2, name = name, newbar = newbar)
                results = [dict(row) for row in rs]
                return results   

def insert_transaction1(time,date,day,tip):
    with engine.connect() as con:
        con.execute("INSERT INTO transactions(id) SELECT max(id)+1 as mid FROM transactions t;")
        query = sql.text('UPDATE IGNORE transactions\
                        SET transactions.time = :time, transactions.date = :date, transactions.day=:day, transactions.tip=:tip\
                        WHERE transactions.id = (select mid from (SELECT max(transactions.id) as mid FROM transactions) as t)')
        con.execute(query, time = time, date = date, day = day, tip = tip)
        query2 = sql.text('select transactions.id from transactions where transactions.id = (select mid from (SELECT max(transactions.id) as mid FROM transactions) as t)')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def insert_transaction2(item):
    with engine.connect() as con:
        query = sql.text('INSERT INTO has(tid,item)\
	                SELECT max(transactions.id) as mid, :item FROM transactions')
        con.execute(query, item = item)
        query2 = sql.text('select transactions.id from transactions where transactions.id = (select mid from (SELECT max(transactions.id) as mid FROM transactions) as t)')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results


def insert_transaction3(drinker):
    with engine.connect() as con:
        query = sql.text('INSERT INTO pays(tid,name)\
	                SELECT max(transactions.id) as mid, :drinker FROM transactions')
        con.execute(query, drinker = drinker)
        query2 = sql.text('select transactions.id from transactions where transactions.id = (select mid from (SELECT max(transactions.id) as mid FROM transactions) as t)')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results



def insert_transaction4(bar):
    with engine.connect() as con:
        query = sql.text('INSERT INTO occurs(tid,bar)\
	                SELECT max(transactions.id) as mid, :bar FROM transactions')
        con.execute(query, bar=bar)
        query2 = sql.text('select transactions.id from transactions where transactions.id = (select mid from (SELECT max(transactions.id) as mid FROM transactions) as t)')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def check_vaild_transaction_insert(bar, day, time):
    with engine.connect() as con:
        query = sql.text('select d.name \
                        from days d\
                        where d.name = :bar and d.day = :day and d.open<=:time and d.close >=:time')
        rs=con.execute(query, bar=bar, day=day, time=time)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def insert_transaction5(tid):
    with engine.connect() as con:
        con.execute("Update transactions t\
                inner join (\
                select o.tid, sum(s.price) as pretotalSum\
                                                        from has h , sells s, occurs o\
                                                        where o.tid = h.tid AND o.bar = s.bar AND s.item = h.item AND o.tid = (SELECT max(id) as mid FROM transactions t)\
                                                        group by o.tid\
                ) as A on t.id = A.tid\
                set t.pretotalSum = A.pretotalSum;")
        query = sql.text("UPDATE transactions \
                SET totalSum = (SELECT ((pretotalSum * 1.07) + tip) as totalSum FROM (select * from transactions) t WHERE t.id = :tid)\
                WHERE id = :tid;"
        )
        con.execute(query, tid=tid)
        query2 = sql.text('select transactions.id from transactions where transactions.id = (select mid from (SELECT max(transactions.id) as mid FROM transactions) as t)')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def check_dup_like_update(name, newval):
        with engine.connect() as con:
                query = sql.text ('SELECT * FROM likes \
                                WHERE name = :name AND beer = :newval;')
                rs = con.execute(query, name = name, newval = newval)
                result = rs.first()
                if result is None:
                        return None
                return dict(result)

def anyquery_run(anyquery):
    with engine.connect() as con:
        rs=con.execute(sql.text(anyquery))
        results = [dict(row) for row in rs]
        return results

def insert_drinker(name, address, state, phone):
    with engine.connect() as con:
        query = sql.text('insert into drinkers(name, address, state, phone) values (:name, :address, :state,:phone);')
        con.execute(query, name = name, address = address, state = state, phone=phone)
        query2 = sql.text('select * from drinkers')
        rs = con.execute(query2, name = name)
        results = [dict(row) for row in rs]
        return results

def insert_bar(name, license, state, phone, address):
    with engine.connect() as con:
        query = sql.text('insert into bars(name, license, state, phone, address) values (:name, :license, :state,:phone,:address);')
        con.execute(query, name = name, license = license, state = state, phone=phone, address = address)
        
        query3 = sql.text("UPDATE bars SET bars.license = (select concat(bars.state,bars.license)\
              from (select * from bars) t where t.name = :name)\
              WHERE bars.name = :name;"
        )
        con.execute(query3, name = name)
        
        query2 = sql.text('select * from bars')
        rs = con.execute(query2, name = name)
        results = [dict(row) for row in rs]
        return results

def find_duplicate_bar(name):
    with engine.connect() as con:
        query = sql.text(
            "select * from bars where bars.name =:name;"
        )

        rs = con.execute(query, name = name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def insert_frequent(name, bar):
    with engine.connect() as con:
        query = sql.text('insert into frequents (name, bar) values (:name, :bar);')
        con.execute(query, name = name, bar = bar)
        query2 = sql.text('select * from frequents')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def check_vaild_freq_insert(name, bar):
    with engine.connect() as con:
        query = sql.text('select * \
                        from drinkers d1, bars b1\
                        where d1.name = :name and b1.name = :bar and d1.state = b1.state')
        rs=con.execute(query, name=name, bar=bar)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def find_duplicate_frequent(name, bar):
    with engine.connect() as con:
        query = sql.text(
            "select * from frequents where frequents.name =:name and frequents.bar =:bar;"
        )

        rs = con.execute(query, name = name, bar= bar)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def insert_likes(name, beer):
    with engine.connect() as con:
        query = sql.text('insert into likes (name, beer) values (:name, :beer);')
        con.execute(query, name = name, beer = beer)
        query2 = sql.text('select * from likes')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def is_it_beer(beer):
    with engine.connect() as con:
        query = sql.text('select * from items where items.name = :beer and items.type = "Beer"')
        rs=con.execute(query, beer=beer)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def insert_occurs(tid, bar):
    with engine.connect() as con:
        query = sql.text('insert into occurs (tid, bar) values (:tid, :bar);')
        con.execute(query, tid = tid, bar = bar)
        query2 = sql.text('select * from occurs')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results
def find_duplicate_occur(tid):
    with engine.connect() as con:
        query = sql.text(
            "select * from occurs where occurs.tid =:tid ;"
        )
        rs = con.execute(query, tid = tid)
        result = rs.first()
        if result is None:
            return None
        return dict(result)


def verify_likes(name, value):
        with engine.connect() as con:
                query= sql.text('SELECT name, beer FROM likes \
                                WHERE name = :name AND beer = :value;')
                rs = con.execute (query, name = name, value = value)
                result = rs.first()
                if result is None:
                        return None
                return dict(result)
def insert_item(name, manf, type):
    with engine.connect() as con:
        query = sql.text('insert into items(name,manf,type) values (:item, :manf, :type);')
        con.execute(query, item=name, manf=manf, type=type)
        query2 = sql.text('select * from items where items.name = :item')
        rs = con.execute(query2, item=name, manf=manf)
        results = [dict(row) for row in rs]
        return results

def find_exact_item(name,manf,type):
    with engine.connect() as con:
        query = sql.text(
            "Select * From items i  WHERE i.name = :name AND i.manf = :manf AND i.type = :type"
        )
        rs = con.execute(query, name=name, manf=manf, type = type)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def delete_drinker(name):
    with engine.connect() as con:
        query = sql.text('delete from drinkers\
                        where drinkers.name = :name')
        con.execute(query, name=name)
        query1 = sql.text('DELETE \
                        FROM transactions\
                        WHERE transactions.id IN (select x.id\
						from ( select t.id\
						from transactions t, pays p\
						where t.id =p.tid and p.name = :name ) x);')
        con.execute(query1, name = name)
        query2 = sql.text('select drinkers.name from drinkers')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def delete_bar(name):
    with engine.connect() as con:
        query = sql.text('DELETE FROM bars WHERE bars.name=:name;')
        con.execute(query, name = name)
        con.execute("DELETE\
                        FROM transactions\
                        WHERE transactions.id IN (select x.id\
						from (select t1.id\
								from transactions t1\
								where t1.id not in (\
										select t.id\
										from transactions t\
										right join occurs o on t.id = o.tid)) x);")
        query2 = sql.text('select * from bars rs')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def delete_frequent(bar,name):
    with engine.connect() as con:
        query = sql.text('delete from frequents\
                        where frequents.name = :name and frequents.bar = :bar')
        con.execute(query, name=name, bar=bar)
        query2 = sql.text('select frequents.name from frequents')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def has_freq_drinker_bar(bar,name):
    with engine.connect() as con:
        query = sql.text(
            "select * from frequents f where f.name = :name and f.bar =:bar;"
        )
        rs = con.execute(query, bar=bar, name = name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def insert_sells(bar, item, price): 
    with engine.connect() as con:
        query = sql.text('insert into sells (bar, item, price) values (:bar, :item, :price);')
        con.execute(query, bar=bar, item=item, price=price)
        query2 = sql.text('select * from sells')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results


def vaild_pattern3_1(bar, beer):
    with engine.connect() as con:
        query = sql.text(
            "select distinct s3.bar\
                FROM  items i2, items i3, items i4,  sells s2, sells s3, sells s4\
                where\
                s2.bar = :bar and i2.type ='Beer' and s2.item = i2.name\
                AND i3.type ='Beer' and s3.item = i3.name\
                AND i4.type ='Beer' and s4.item = i4.name\
                and s3.bar <> s2.bar and s4.bar = s3.bar\
                and s2.item <> :beer and s3.item = :beer\
                and s2.item = s4.item;"
        )

        rs = con.execute(query, bar= bar, beer = beer)
        results = [dict(row) for row in rs]
        return results

def vaild_pattern3_2(bar, beer, price):
    with engine.connect() as con:
        query = sql.text(
            "select distinct s3.bar\
                FROM  items i2, items i3, items i4,  sells s2, sells s3, sells s4\
                where\
                s2.bar = :bar and i2.type ='Beer' and s2.item = i2.name\
                AND i3.type ='Beer' and s3.item = i3.name\
                AND i4.type ='Beer' and s4.item = i4.name\
                and s3.bar <> s2.bar and s4.bar = s3.bar\
                and s2.item <> :beer and s3.item = :beer\
                and s2.item = s4.item\
                and ((:price <s2.price and s3.price <s4.price) or (:price >s2.price and s3.price>s4.price));"
        )

        rs = con.execute(query, bar= bar, beer = beer, price = price)
        results = [dict(row) for row in rs]
        return results

def find_dup_sells(bar,item):
    with engine.connect() as con:
        query = sql.text(
            "select * from sells where sells.bar =:bar and sells.item =:item;"
        )

        rs = con.execute(query, bar= bar, item = item)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def insert_has(tid, item): 
    with engine.connect() as con:
        query = sql.text('insert into has (tid, item) values (:tid, :item);')
        con.execute(query, tid=tid, item=item)
        
        query2 = sql.text('select * from has')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results
def check_has_tuple_exists(tid, item):
        with engine.connect() as con:
                query = sql.text('SELECT * FROM has WHERE tid =:tid AND item= :item;')
                rs = con.execute(query, tid = tid, item = item)
                result = rs.first()
                if result is None:
                        return None
                return dict(result)

def vaild_has_item(tid, item):
    with engine.connect() as con:
        query = sql.text(
            "select s.item\
                from occurs o, sells s\
                where o.tid =:tid and o.bar = s.bar and s.item = :item;"
        )

        rs = con.execute(query, tid = tid, item = item)
        result = rs.first()
        if result is None:
            return None
        return dict(result)
        
def find_tid(tid):
    with engine.connect() as con:
        query = sql.text(
            "select * from transactions where transactions.id =:tid;"
        )
        rs = con.execute(query, tid = tid)
        result = rs.first()
        if result is None:
            return None
        return dict(result)


def delete_item(name):
    with engine.connect() as con:
        query = sql.text('delete from items\
                        where items.name = :name')
        con.execute(query, name=name)
        con.execute("Update transactions t\
		inner join (\
                select o.tid, sum(s.price) as pretotalSum\
				from has h , sells s, occurs o\
                where o.tid = h.tid AND o.bar = s.bar AND s.item = h.item\
                group by o.tid\
                ) as A on t.id = A.tid\
                set t.pretotalSum = A.pretotalSum;")
        con.execute("Update transactions as T\
                        inner join (\
                        select t.id, ((t.pretotalSum * 1.07) + t.tip) as totalSum\
                        from transactions as t\
                        ) as A on T.id = A.id\
                        set T.totalSum = A.totalSum")
        con.execute("delete from transactions where transactions.id not in (select distinct h.tid from has h)")
        query2 = sql.text('select * from items')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results



def delete_sell(bar, item):
    with engine.connect() as con:
        query = sql.text('delete from sells\
                        where sells.bar = :bar and sells.item = :item')
        con.execute(query, bar = bar, item = item)

        query1 = sql.text("DELETE e.*\
                FROM has e\
                WHERE e.tid IN (SELECT x.tid\
                        FROM (SELECT h.tid\
                                FROM sells s, has h, occurs o\
                                where h.item = s.item and h.tid = o.tid and o.bar =:bar and s.item = :item) x);")
        con.execute(query1, bar = bar, item = item)

        con.execute("Update transactions t\
		inner join (\
                select o.tid, sum(s.price) as pretotalSum\
				from has h , sells s, occurs o\
                where o.tid = h.tid AND o.bar = s.bar AND s.item = h.item\
                group by o.tid\
                ) as A on t.id = A.tid\
                set t.pretotalSum = A.pretotalSum;")
        con.execute("Update transactions as T\
                        inner join (\
                        select t.id, ((t.pretotalSum * 1.07) + t.tip) as totalSum\
                        from transactions as t\
                        ) as A on T.id = A.id\
                        set T.totalSum = A.totalSum")
        con.execute("delete from transactions where transactions.id not in (select distinct h.tid from has h)")
        
        query2 = sql.text('select * from sells')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def has_sell_bar_item(bar,item):
    with engine.connect() as con:
        query = sql.text(
            "select * from sells s where s.bar = :bar and s.item = :item;"
        )
        rs = con.execute(query, bar = bar, item = item)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def delete_likes(name,beer):
    with engine.connect() as con:
        query = sql.text('delete from likes\
                        where likes.name = :name and likes.beer = :beer')
        con.execute(query, name=name, beer=beer)
        query2 = sql.text('select * from likes')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def has_likes_drinker_beer(name,beer):
    with engine.connect() as con:
        query = sql.text(
            "select * from likes l where l.name = :name and l.beer =:beer;"
        )
        rs = con.execute(query, name=name, beer=beer)
        result = rs.first()
        if result is None:
            return None
        return dict(result)
def delete_occur(tid,bar):
    with engine.connect() as con:
        query = sql.text('delete from occurs\
                        where occurs.tid = :tid and occurs.bar = :bar')
        con.execute(query, tid = tid, bar= bar)
        query3 = sql.text("delete from transactions where transactions.id = :tid")
        con.execute(query3, tid = tid)
        query2 = sql.text('select * from occurs')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def has_occur_tid_bar(tid,bar): 
    with engine.connect() as con:
        query = sql.text(
            "select * from occurs o where o.tid = :tid and o.bar =:bar;"
        )
        rs = con.execute(query, tid = tid, bar= bar)
        result = rs.first()
        if result is None:
            return None
        return dict(result)


def delete_has(tid, item):
    with engine.connect() as con:
        query = sql.text('delete from has\
                        where has.tid = :tid and has.item = :item')
        con.execute(query, tid=tid, item=item)
        query2 = sql.text('select has.tid from has')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def is_last_item(tid):
    with engine.connect() as con:
        query = sql.text(
            "select * from has where has.tid = :tid;"
        )
        rs = con.execute(query, tid=tid, )
        results = [dict(row) for row in rs]
        return results

def has_tid_item_check(tid, item):
    with engine.connect() as con:
        query = sql.text(
            "select * from has where has.tid = :tid and has.item = :item;"
        )
        rs = con.execute(query, tid=tid, item=item)
        result = rs.first()
        if result is None:
            return None
        return dict(result)
def delete_pay(tid,name):
    with engine.connect() as con:
        query = sql.text('delete from pays\
                        where pays.tid = :tid and pays.name = :name')
        con.execute(query, tid = tid, name = name)
        query3 = sql.text("delete from transactions where transactions.id = :tid")
        con.execute(query3, tid = tid)
        query2 = sql.text('select * from pays')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def has_pay_tid_drinker(tid,name):
    with engine.connect() as con:
        query = sql.text(
            "select * from pays p where p.tid = :tid and p.name = :name;"
        )
        rs = con.execute(query, tid = tid, name = name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def delete_day(bar,day):
    with engine.connect() as con:
        query = sql.text('delete from days\
                        where days.name = :bar and days.day = :day')
        con.execute(query, bar=bar, day=day)
        query1 = sql.text('DELETE \
                        FROM transactions\
                        WHERE transactions.id IN (select x.id\
						from (select t.id\
						from transactions t, occurs o\
						where t.day = :day and t.id = o.tid and o.bar = :bar) x);')
        con.execute(query1, bar=bar, day=day)
        query2 = sql.text('select days.name from days')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def has_operation_time(bar,day):
    with engine.connect() as con:
        query = sql.text(
            "select days.name, days.day \
                from days\
                where days.name = :bar and days.day =:day;"
        )

        rs = con.execute(query, bar=bar, day=day)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def insert_pays(tid, name):
    with engine.connect() as con:
        query = sql.text('insert into pays(tid, name) values (:tid, :name);')
        con.execute(query, tid = tid, name = name)
        query2 = sql.text('select * from pays')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def update_pays (tid, oldpayer, newpayer):
        with engine.connect() as con:
                query = sql.text('UPDATE pays SET name= :newpayer WHERE tid= :tid AND name= :oldpayer;')
                con.execute(query, tid = tid, oldpayer= oldpayer, newpayer = newpayer)
                query2 = sql.text('SELECT * FROM pays WHERE name= :newpayer AND tid= :tid;')
                rs = con.execute(query2, newpayer = newpayer, tid = tid)
                results = [dict(row) for row in rs]  
                return results


def find_duplicate_pay(tid):
    with engine.connect() as con:
        query = sql.text(
            "select * from pays where pays.tid =:tid;"
        )

        rs = con.execute(query, tid = tid)
        result = rs.first()
        if result is None:
            return None
        return dict(result)
def find_duplicate_pay_tuple(tid, drinker):
        with engine.connect() as con:
                query = sql.text(
                "select * from pays where pays.tid =:tid AND pays.name= :drinker;"
                )
                rs = con.execute(query, tid = tid, drinker =drinker)
                result = rs.first()
                if result is None:
                        return None
                return dict(result)

def insert_days(name, open, close, day):
    with engine.connect() as con:
        query = sql.text('insert into days(name, open, close, day) values (:name, :open, :close,:day);')
        con.execute(query, name = name, open = open, close = close, day = day)
        query2 = sql.text('select days.name from days')
        rs = con.execute(query2, name = name)
        results = [dict(row) for row in rs]
        return results

def find_duplicate_day(name, day):
    with engine.connect() as con:
        query = sql.text(
            "select days.name from days where days.name =:name and days.day =:day;"
        )

        rs = con.execute(query, name=name, day=day)
        result = rs.first()
        if result is None:
            return None
        return dict(result)


def delete_transaction(tid):
    with engine.connect() as con:
        querycheck= sql.text('SELECT * FROM transactions \
                                WHERE id = :tid;')
        existsTID = con.execute(querycheck, tid = tid)
        result = existsTID.first()
        if result is None:
                return None
        query = sql.text('delete from transactions\
                        where transactions.id = :tid')
        con.execute(query, tid = tid)
        query2 = sql.text('select id from transactions')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results        


def update_days_pattern1validation_open(bar,day,openTime):
    with engine.connect() as con:
        query = sql.text(
            "select t.id\
                from transactions t, days d, occurs o\
                where t.id = o.tid and o.bar = d.name and\
                t.day = d.day and d.day=:bar and d.name = :day and t.time < :openTime;")
        rs = con.execute(query, bar = bar, day = day, openTime=openTime)
        result = rs.first()
        if result is None:
                query = sql.text(
                "Update days\
                        Set days.open = :openTime\
                        where days.name = :bar and days.day = :day")
                con.execute(query, bar = bar, day=day, openTime=openTime)
                query2 = sql.text('select id from transactions')
                rs = con.execute(query2)
                results = [dict(row) for row in rs]
                return results
        return None
def update_days_bar(bar,day,newVal):
    with engine.connect() as con:
        query = sql.text(
                "select *\
                from transactions t, days d, occurs o\
                where t.id = o.tid and o.bar = d.name and t.day = d.day and d.day=:day and d.name = :newVal;")
        rs = con.execute(query, day = day,newVal = newVal)
        result = rs.first()
        if result is None:
                query = sql.text(
                "Update days\
                        Set days.bar = :newVal\
                        where days.name = :bar and days.day = :day")
                con.execute(query, bar = bar, newVal = newVal, day=day)

                query0 = sql.text(
                        "DELETE e.*\
                        FROM transactions e\
                        WHERE e.id IN (SELECT x.id\
                                FROM (SELECT t.id\
                                        from transactions t, days d, occurs o\
                                        where t.id = o.tid and o.bar = d.name and t.day = d.day and d.day=:day and d.name = :bar ) x);"

                )
                con.execute(query0, bar=bar, day=day)
                query2 = sql.text('select id from transactions')
                rs = con.execute(query2)
                results = [dict(row) for row in rs]
                return results
        return None


def update_days_pattern1validation_close(bar,day,closeTime):
    with engine.connect() as con:
        query = sql.text(
            "select t.id\
                from transactions t, days d, occurs o\
                where t.id = o.tid and o.bar = d.name and\
                t.day = d.day and d.day=:bar and d.name = :day and t.time > :closeTime;")
        rs = con.execute(query, bar = bar, day = day, closeTime=closeTime)
        result = rs.first()
        if result is None:
                query = sql.text(
                "Update days\
                        Set days.close = :closeTime\
                        where days.name = :bar and days.day = :day")
                con.execute(query, bar = bar, day=day, closeTime=closeTime)
                query2 = sql.text('select id from transactions')
                rs = con.execute(query2)
                results = [dict(row) for row in rs]
                return results
        return None

def update_days_daycolumn(bar,day,newVal):
    with engine.connect() as con:
        query = sql.text(
                "select *\
                from transactions t, days d, occurs o\
                where t.id = o.tid and o.bar = d.name and t.day = d.day and d.day=:newVal and d.name = :bar;")
        rs = con.execute(query, bar = bar, newVal = newVal)
        result = rs.first()
        if result is None:
                query = sql.text(
                "Update days\
                        Set days.day = :newVal\
                        where days.name = :bar and days.day = :day")
                con.execute(query, bar = bar, newVal = newVal, day=day)

                query0 = sql.text(
                        "DELETE e.*\
                        FROM transactions e\
                        WHERE e.id IN (SELECT x.id\
                                FROM (SELECT t.id\
                                        from transactions t, days d, occurs o\
                                        where t.id = o.tid and o.bar = d.name and t.day = d.day and d.day=:day and d.name = :bar ) x);"

                )
                con.execute(query0, bar=bar, day=day)
                query2 = sql.text('select id from transactions')
                rs = con.execute(query2)
                results = [dict(row) for row in rs]
                return results
        return None
def dup_day_bar(day,newVal):
    with engine.connect() as con:
        query = sql.text(
            "select days.name from days where days.bar =:newVal and days.day = :day;"
        )

        rs = con.execute(query, newVal=newVal, day = day)
        result = rs.first()
        if result is None:
            return None
        return dict(result)
def find_duplicate_tid(tid):
    with engine.connect() as con:
        query = sql.text(
            "select * from transactions where transactions.id =:tid;"
        )

        rs = con.execute(query, tid=tid)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def update_transaction_id(tid, newVal):
    with engine.connect() as con:
        query = sql.text('Update transactions\
                        Set transactions.id = :newVal\
                        where transactions.id = :tid')
        con.execute(query, tid = tid,newVal = newVal)
        query2 = sql.text('select * from occurs')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results


def update_transaction_tip(tid, newtip):
    with engine.connect() as con:
        query = sql.text('Update transactions\
                        Set transactions.tip = :newTip\
                        where transactions.id = :tid')
        con.execute(query, tid = tid,newtip = newtip)
        query0 = sql.text("UPDATE transactions \
                SET totalSum = (SELECT ((pretotalSum * 1.07) + tip) as totalSum FROM (select * from transactions) t WHERE t.id = :tid)\
                WHERE id = :tid;"
        )
        con.execute(query0, tid=tid)
        query2 = sql.text('select * from occurs')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def update_transaction_time(tid, newVal):
    with engine.connect() as con:
        query = sql.text('Update transactions\
                        Set transactions.time = :newVal\
                        where transactions.id = :tid')
        con.execute(query, tid = tid, newVal=newVal)
        query2 = sql.text('select * from occurs')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def check_vaild_transaction_time(tid, time):
    with engine.connect() as con:
        query = sql.text('select t.id\
                        from transactions t, occurs o, days d\
                        where t.id = o.tid and d.name = o.bar and d.day = t.day and d.open<=:time and d.close >=:time and t.id = :tid')
        rs=con.execute(query, tid = tid, time=time)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def update_transaction_date(tid, newVal):
    with engine.connect() as con:
        query = sql.text('Update transactions\
                        Set transactions.date = :newVal\
                        where transactions.id = :tid')
        con.execute(query, tid = tid, newVal=newVal)
        query2 = sql.text('select * from occurs')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results

def check_vaild_transaction_day(tid, day):
    with engine.connect() as con:
        query = sql.text('select t.id\
                        from transactions t, occurs o, days d\
                        where t.id = o.tid and t.id =:tid and d.name = o.bar and d.day = t.day and d.open<=t.time and d.close >=t.time and t.day = :day')
        rs=con.execute(query, tid = tid, day=day)
        result = rs.first()
        if result is None:
            return None
        return dict(result)
def update_sells_changeItem(bar, item, newVal):
    with engine.connect() as con:
        query = sql.text('Update sells\
                        Set sells.item = :newVal\
                        where sells.bar = :bar and sells.item = :item')
        con.execute(query, item =item, bar = bar, newVal = newVal)
        query2 = sql.text('select * from occurs')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results   

def update_sells_changeBar(bar, item, newVal):
    with engine.connect() as con:
        query = sql.text('Update sells\
                        Set sells.bar = :newVal\
                        where sells.bar = :bar and sells.item = :item')
        con.execute(query, item =item, bar = bar, newVal = newVal)
        query2 = sql.text('select * from occurs')
        rs = con.execute(query2)
        results = [dict(row) for row in rs]
        return results   

